/**
 * @hidden
 */
// tslint:disable-next-line:max-func-body-length
export function engineSDKWorkerFunction() {
    var imageBufferPointer;
    var licenseKey;
    var settings;
    var imageSettings;
    var wasmLoaded = false;
    var scannerSettingsReady = false;
    var scannerImageSettingsReady = false;
    var scanQueue = [];
    var parseQueue = [];
    var contextAvailable = false;
    var scanWorkSubmitted = false;
    var parseWorkSubmitted = false;
    var blurryDecodingEnabled = false;
    // Adapted from: https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js
    function instantiateWasmWithCache(wasmURI, wasmVersion, importObject, successCallback) {
        var dbName = "scandit_wasm_cache";
        var storeName = "scandit_wasm_cache";
        var key = "wasm";
        var db;
        function loadDatabase(resolve, reject) {
            var openDBRequest;
            try {
                openDBRequest = indexedDB.open(dbName, wasmVersion);
            }
            catch (error) {
                return reject("Failed to open scandit-sdk WebAssembly cache database: " + error);
            }
            openDBRequest.onerror = function () {
                return reject("Failed to open scandit-sdk WebAssembly cache database");
            };
            openDBRequest.onsuccess = function () {
                db = openDBRequest.result;
                var store = db.transaction([storeName]).objectStore(storeName);
                var request = store.get(key);
                request.onerror = function () {
                    return reject("Failed to open scandit-sdk WebAssembly cache database");
                };
                request.onsuccess = function () {
                    if (request.result != null) {
                        return resolve(request.result);
                    }
                    else {
                        return reject("No cached version of the scandit-sdk WebAssembly code has been found");
                    }
                };
            };
            openDBRequest.onupgradeneeded = function () {
                db = openDBRequest.result;
                if (db.objectStoreNames.contains(storeName)) {
                    db.deleteObjectStore(storeName);
                }
                db.createObjectStore(storeName);
            };
        }
        function storeInDatabase(moduleObject) {
            try {
                var store = db.transaction([storeName], "readwrite").objectStore(storeName);
                var request = store.put(moduleObject, key);
                request.onerror = function (error) {
                    console.debug("Failed to cache scandit-sdk WebAssembly code: " + error);
                };
                request.onsuccess = function () {
                    console.debug("Successfully cached scandit-sdk WebAssembly code");
                };
            }
            catch (error) {
                if (error.name === "DataCloneError") {
                    console.debug("Failed to cache scandit-sdk WebAssembly code: This browser doesn't support this feature yet");
                }
                else {
                    console.debug("Failed to cache scandit-sdk WebAssembly code: " + error);
                }
            }
        }
        loadDatabase(function (moduleObject) {
            console.debug("Found cached scandit-sdk WebAssembly code");
            self.WebAssembly.instantiate(moduleObject, importObject).then(function (instance) {
                successCallback(instance);
            });
        }, function (errMsg) {
            console.debug(errMsg);
            function instantiate() {
                fetch(wasmURI)
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (bytes) {
                    self.WebAssembly.instantiate(bytes, importObject).then(function (results) {
                        if (db != null) {
                            storeInDatabase(results.module);
                        }
                        successCallback(results.instance);
                    });
                });
            }
            function instantiateStreaming() {
                self.WebAssembly.instantiateStreaming(fetch(wasmURI), importObject)
                    .then(function (results) {
                    if (db != null) {
                        storeInDatabase(results.module);
                    }
                    successCallback(results.instance);
                })
                    .catch(function (error) {
                    console.warn("wasm streaming compile failed: " + error + ", falling back to ArrayBuffer instantiation");
                    instantiate();
                });
            }
            if (typeof self.WebAssembly.instantiateStreaming === "function") {
                instantiateStreaming();
            }
            else {
                instantiate();
            }
        });
    }
    function loadLibrary(deviceId, libraryLocation) {
        var customModule = {
            arguments: [deviceId],
            instantiateWasm: function (importObject, successCallback) {
                var wasmURI = libraryLocation + "scandit-engine-sdk.wasm?v=3.2.0";
                var wasmVersion = "3.2.0"
                    .split(".")
                    .map(function (n, i) { return parseInt(n, 10) * Math.pow(10, 6 - i * 3); })
                    .reduce(function (a, b) { return a + b; });
                instantiateWasmWithCache(wasmURI, wasmVersion, importObject, successCallback);
                return {};
            },
            noInitialRun: true,
            preRun: function () {
                try {
                    FS.mkdir("/scandit_sync_folder");
                }
                catch (error) {
                    if (error.code !== "EEXIST") {
                        throw error;
                    }
                }
                FS.mount(IDBFS, {}, "/scandit_sync_folder");
                FS.syncfs(true, function () {
                    Module.callMain();
                    wasmLoaded = true;
                    postMessage(["status", "ready"]);
                    workOnScanQueue();
                    workOnParseQueue();
                });
            }
        };
        self.Module = customModule;
        if (typeof importScripts === "function") {
            try {
                importScripts(libraryLocation + "scandit-engine-sdk.min.js?v=3.2.0");
            }
            catch (error) {
                console.warn(error);
                console.error("Couldn't retrieve Scandit SDK Engine library at " + libraryLocation + "scandit-engine-sdk.min.js, " +
                    "did you configure the path for it correctly?");
            }
        }
    }
    function createContext() {
        if (contextAvailable || licenseKey == null || !wasmLoaded) {
            return;
        }
        var licenseKeyLength = Module.lengthBytesUTF8(licenseKey) + 1;
        var licenseKeyPointer = Module._malloc(licenseKeyLength);
        Module.stringToUTF8(licenseKey, licenseKeyPointer, licenseKeyLength);
        Module.asm._create_context(licenseKeyPointer, false);
        Module._free(licenseKeyPointer);
        contextAvailable = true;
    }
    function setupSettings(highQualitySingleFrameMode) {
        if (highQualitySingleFrameMode === void 0) { highQualitySingleFrameMode = false; }
        if (settings == null || !contextAvailable || !wasmLoaded) {
            return;
        }
        scannerSettingsReady = false;
        if (licenseKey == null) {
            console.error("No license key found, the library must be set up before the scanning engine can be used");
            return;
        }
        var parsedSettings = JSON.parse(settings);
        var settingsLength = Module.lengthBytesUTF8(settings) + 1;
        var settingsPointer = Module._malloc(settingsLength);
        Module.stringToUTF8(settings, settingsPointer, settingsLength);
        var resultPointer = Module.asm._scanner_settings_new_from_json(settingsPointer, blurryDecodingEnabled ? 1 : 0, parsedSettings.matrixScanEnabled ? 1 : 0, highQualitySingleFrameMode);
        Module._free(settingsPointer);
        var result = Module.UTF8ToString(resultPointer);
        if (result !== "") {
            scannerSettingsReady = true;
            postMessage(["status", "scan-settings-updated"]);
            console.debug(JSON.parse(result));
        }
    }
    function setupImageSettings() {
        if (imageSettings == null || !wasmLoaded) {
            return;
        }
        scannerImageSettingsReady = false;
        // We allocate for a grayscale image only as we will do a conversion here in the worker before passing it
        Module.asm._scanner_image_settings_new(imageSettings.width, imageSettings.height, 1);
        if (imageBufferPointer != null) {
            Module._free(imageBufferPointer);
            imageBufferPointer = undefined;
        }
        imageBufferPointer = Module._malloc(imageSettings.width * imageSettings.height);
        scannerImageSettingsReady = true;
    }
    function scanImage(imageData) {
        Module.HEAPU8.set(imageData, imageBufferPointer);
        return Module.UTF8ToString(Module.asm._scanner_scan(imageBufferPointer));
    }
    function parseString(dataFormat, dataString, options) {
        var dataStringLength = Module.lengthBytesUTF8(dataString) + 1;
        var dataStringPointer = Module._malloc(dataStringLength);
        Module.stringToUTF8(dataString, dataStringPointer, dataStringLength);
        var optionsLength = Module.lengthBytesUTF8(options) + 1;
        var optionsPointer = Module._malloc(optionsLength);
        Module.stringToUTF8(options, optionsPointer, optionsLength);
        var resultPointer = Module.asm._parser_parse_string(dataFormat.valueOf(), dataStringPointer, dataStringLength - 1, optionsPointer);
        Module._free(dataStringPointer);
        Module._free(optionsPointer);
        return Module.UTF8ToString(resultPointer);
    }
    function workOnScanQueue() {
        if ((!scannerSettingsReady || !scannerImageSettingsReady) && scanQueue.length !== 0) {
            createContext();
            setupSettings();
            setupImageSettings();
        }
        if (!scannerSettingsReady || !scannerImageSettingsReady) {
            return;
        }
        var currentScanWorkUnit;
        var resultData;
        while (scanQueue.length !== 0) {
            currentScanWorkUnit = scanQueue.shift();
            if (currentScanWorkUnit.highQualitySingleFrameMode) {
                setupSettings(true);
            }
            // TODO: For now it's not possible to use imported variables as the worker doesn't have access at runtime
            if (imageSettings.format.valueOf() === 1) {
                // RGB_8U
                resultData = scanImage(convertImageDataToGrayscale(currentScanWorkUnit.data, 3));
            }
            else if (imageSettings.format.valueOf() === 2) {
                // RGBA_8U
                resultData = scanImage(convertImageDataToGrayscale(currentScanWorkUnit.data, 4));
            }
            else {
                resultData = scanImage(currentScanWorkUnit.data);
            }
            if (currentScanWorkUnit.highQualitySingleFrameMode) {
                setupSettings(false);
            }
            var result = JSON.parse(resultData);
            if (result.error != null) {
                postMessage([
                    "work-error",
                    {
                        requestId: currentScanWorkUnit.requestId,
                        error: result.error
                    }
                ]);
            }
            else if (result.scanResult != null) {
                postMessage([
                    "work-result",
                    {
                        requestId: currentScanWorkUnit.requestId,
                        result: result
                    }
                ]);
            }
            else {
                console.error("Unrecognized Scandit Engine result:", result);
                postMessage([""], [currentScanWorkUnit.data.buffer]);
            }
        }
    }
    function workOnParseQueue() {
        if (!contextAvailable && parseQueue.length !== 0) {
            createContext();
        }
        if (!contextAvailable || !wasmLoaded) {
            return;
        }
        var currentParseWorkUnit;
        var resultData;
        while (parseQueue.length !== 0) {
            currentParseWorkUnit = parseQueue.shift();
            resultData = parseString(currentParseWorkUnit.dataFormat, currentParseWorkUnit.dataString, currentParseWorkUnit.options);
            var result = JSON.parse(resultData);
            if (result.error != null) {
                postMessage([
                    "parse-string-error",
                    {
                        requestId: currentParseWorkUnit.requestId,
                        error: result.error
                    }
                ]);
            }
            else if (result.result != null) {
                postMessage([
                    "parse-string-result",
                    {
                        requestId: currentParseWorkUnit.requestId,
                        result: result.result
                    }
                ]);
            }
            else {
                console.error("Unrecognized Scandit Parser result:", result);
                postMessage([
                    "parse-string-error",
                    {
                        requestId: currentParseWorkUnit.requestId,
                        error: {
                            errorCode: -1,
                            errorMessage: "Unknown Scandit Parser error"
                        }
                    }
                ]);
            }
        }
    }
    function convertImageDataToGrayscale(imageData, channels) {
        var grayscaleImageData = new Uint8ClampedArray(imageData.length / channels);
        var grayscaleImageDataIndex = imageData.length / channels - 1;
        var imageDataIndex = imageData.length - channels;
        while (imageDataIndex >= 0) {
            grayscaleImageData[grayscaleImageDataIndex--] =
                imageData[imageDataIndex] * 0.299 +
                    imageData[imageDataIndex + 1] * 0.587 +
                    imageData[imageDataIndex + 2] * 0.114;
            imageDataIndex -= channels;
        }
        return grayscaleImageData;
    }
    onmessage = function (e) {
        // Setting settings triggers license verification and activation: delay until first frame processed
        var data = e.data;
        switch (data.type) {
            case "enable-blurry-decoding":
                blurryDecodingEnabled = true;
                if (scanWorkSubmitted) {
                    setupSettings();
                    workOnScanQueue();
                }
                break;
            case "load-library":
                loadLibrary(data.deviceId, data.libraryLocation);
                self.path = data.path; // Used by the Internal Scandit Engine
                break;
            case "license-key":
                licenseKey = data.licenseKey;
                createContext();
                if (parseWorkSubmitted) {
                    workOnParseQueue();
                }
                break;
            case "settings":
                settings = data.settings;
                if (scanWorkSubmitted) {
                    setupSettings();
                    workOnScanQueue();
                }
                break;
            case "image-settings":
                imageSettings = data.imageSettings;
                if (scanWorkSubmitted) {
                    setupImageSettings();
                    workOnScanQueue();
                }
                break;
            case "work":
                scanWorkSubmitted = true;
                scanQueue.push({
                    requestId: data.requestId,
                    data: data.data,
                    highQualitySingleFrameMode: data.highQualitySingleFrameMode
                });
                workOnScanQueue();
                break;
            case "parse-string":
                parseWorkSubmitted = true;
                parseQueue.push({
                    requestId: data.requestId,
                    dataFormat: data.dataFormat,
                    dataString: data.dataString,
                    options: data.options
                });
                workOnParseQueue();
                break;
            default:
                break;
        }
    };
}
/**
 * @hidden
 */
export var engineSDKWorker = new Blob(["(" + engineSDKWorkerFunction.toString() + ")()"], {
    type: "text/javascript"
});
//# sourceMappingURL=engineSDKWorker.js.map
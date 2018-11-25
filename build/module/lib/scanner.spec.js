/* tslint:disable:no-implicit-dependencies */
/* tslint:disable:insecure-random */
/**
 * Scanner tests
 */
var _this = this;
import * as tslib_1 from "tslib";
import { test } from "ava";
import { Barcode, BrowserHelper, configure, ImageSettings, Parser, Scanner, ScanSettings } from "scandit-sdk";
import * as sinon from "sinon";
var postMessageStub = sinon.stub();
var terminateStub = sinon.stub();
var stubs = [postMessageStub, terminateStub];
global.Worker = sinon.stub().returns({
    postMessage: postMessageStub,
    terminate: terminateStub
});
URL.createObjectURL = sinon.stub();
function resetStubs() {
    stubs.forEach(function (mock) {
        mock.resetHistory();
    });
}
function prepareBrowserAndLibrary() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    BrowserHelper.checkBrowserCompatibility = function () {
                        return {
                            fullSupport: true,
                            scannerSupport: true,
                            missingFeatures: []
                        };
                    };
                    return [4 /*yield*/, configure("license_key")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
test.serial("constructor", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var s, error, ss, is;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                error = t.throws(function () {
                    s = new Scanner();
                });
                t.is(error.name, "UnsupportedBrowserError");
                BrowserHelper.checkBrowserCompatibility = function () {
                    return {
                        fullSupport: true,
                        scannerSupport: true,
                        missingFeatures: []
                    };
                };
                error = t.throws(function () {
                    s = new Scanner();
                });
                t.is(error.name, "LibraryNotConfiguredError");
                return [4 /*yield*/, configure("license_key")];
            case 1:
                _a.sent();
                resetStubs();
                s = new Scanner();
                t.false(s.isReady());
                t.false(s.isBusyProcessing());
                t.is(postMessageStub.callCount, 3);
                t.deepEqual(postMessageStub.getCall(0).args, [
                    {
                        deviceId: BrowserHelper.getDeviceId(),
                        libraryLocation: "https://example.com/",
                        path: "/",
                        type: "load-library"
                    }
                ]);
                t.deepEqual(postMessageStub.getCall(1).args, [
                    {
                        licenseKey: "license_key",
                        type: "license-key"
                    }
                ]);
                t.deepEqual(postMessageStub.getCall(2).args, [
                    {
                        settings: new ScanSettings().toJSONString(),
                        type: "settings"
                    }
                ]);
                resetStubs();
                ss = new ScanSettings({
                    enabledSymbologies: Barcode.Symbology.QR,
                    codeDuplicateFilter: 10,
                    maxNumberOfCodesPerFrame: 10,
                    searchArea: { x: 0.5, y: 0.5, width: 0.5, height: 0.1 }
                });
                s = new Scanner({
                    scanSettings: ss
                });
                t.is(postMessageStub.callCount, 3);
                t.deepEqual(postMessageStub.getCall(2).args, [
                    {
                        settings: ss.toJSONString(),
                        type: "settings"
                    }
                ]);
                resetStubs();
                is = {
                    width: 640,
                    height: 480,
                    format: ImageSettings.Format.RGBA_8U
                };
                s = new Scanner({
                    imageSettings: is
                });
                t.is(postMessageStub.callCount, 4);
                t.deepEqual(postMessageStub.getCall(3).args, [
                    {
                        imageSettings: is,
                        type: "image-settings"
                    }
                ]);
                return [2 /*return*/];
        }
    });
}); });
test.serial("destroy", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var s;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                resetStubs();
                s = new Scanner();
                s.destroy();
                t.true(terminateStub.called);
                resetStubs();
                s = new Scanner();
                s.engineSDKWorker = null;
                s.destroy();
                t.false(terminateStub.called);
                return [2 /*return*/];
        }
    });
}); });
test.serial("applyScanSettings", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var ss, s;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                resetStubs();
                ss = new ScanSettings({
                    enabledSymbologies: Barcode.Symbology.QR,
                    codeDuplicateFilter: 10,
                    maxNumberOfCodesPerFrame: 10,
                    searchArea: { x: 0.5, y: 0.5, width: 0.5, height: 0.1 }
                });
                s = new Scanner();
                t.is(postMessageStub.callCount, 3);
                t.deepEqual(postMessageStub.getCall(2).args, [
                    {
                        settings: new ScanSettings().toJSONString(),
                        type: "settings"
                    }
                ]);
                s.applyScanSettings(ss);
                t.is(postMessageStub.callCount, 4);
                t.deepEqual(postMessageStub.getCall(3).args, [
                    {
                        settings: ss.toJSONString(),
                        type: "settings"
                    }
                ]);
                return [2 /*return*/];
        }
    });
}); });
test.serial("applyImageSettings", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var is, s;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                resetStubs();
                is = {
                    width: 640,
                    height: 480,
                    format: ImageSettings.Format.RGBA_8U
                };
                s = new Scanner();
                t.is(postMessageStub.callCount, 3);
                t.deepEqual(postMessageStub.getCall(2).args, [
                    {
                        settings: new ScanSettings().toJSONString(),
                        type: "settings"
                    }
                ]);
                s.applyImageSettings(is);
                t.is(postMessageStub.callCount, 4);
                t.deepEqual(postMessageStub.getCall(3).args, [
                    {
                        imageSettings: is,
                        type: "image-settings"
                    }
                ]);
                return [2 /*return*/];
        }
    });
}); });
test.serial("isReady & onReady", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var s, callbackSpy1, callbackSpy2, callbackSpy3;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                resetStubs();
                s = new Scanner();
                callbackSpy1 = sinon.spy();
                callbackSpy2 = sinon.spy();
                t.false(s.isReady());
                s.onReady(callbackSpy1);
                s.onReady(callbackSpy2);
                t.false(callbackSpy1.called);
                t.false(callbackSpy2.called);
                s.engineWorkerOnMessage({
                    data: ["status", "example-not-ready"]
                });
                t.false(s.isReady());
                t.false(callbackSpy1.called);
                t.false(callbackSpy2.called);
                s.engineWorkerOnMessage({
                    data: ["status", "ready"]
                });
                t.true(s.isReady());
                t.true(callbackSpy1.called);
                t.true(callbackSpy2.called);
                t.true(callbackSpy2.calledAfter(callbackSpy1));
                resetStubs();
                s = new Scanner();
                s.engineWorkerOnMessage({
                    data: ["status", "ready"]
                });
                callbackSpy3 = sinon.spy();
                t.true(s.isReady());
                s.onReady(callbackSpy3);
                t.true(callbackSpy3.called);
                return [2 /*return*/];
        }
    });
}); });
test.serial("processImage calls", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var s, error, imageData;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                s = new Scanner();
                resetStubs();
                return [4 /*yield*/, t.throws(s.processImage(new Uint8ClampedArray(0)))];
            case 2:
                error = _a.sent();
                t.is(error.name, "NoImageSettings");
                t.is(s.workerScanRequestId, 0);
                t.is(s.workerScanQueueLength, 0);
                t.false(s.isBusyProcessing());
                t.false(postMessageStub.called);
                s.applyImageSettings({
                    width: 3,
                    height: 2,
                    format: ImageSettings.Format.RGBA_8U
                });
                resetStubs();
                return [4 /*yield*/, t.throws(s.processImage(new Uint8ClampedArray(0)))];
            case 3:
                error = _a.sent();
                t.is(error.name, "ImageSettingsDataMismatch");
                t.is(s.workerScanRequestId, 0);
                t.is(s.workerScanQueueLength, 0);
                t.false(s.isBusyProcessing());
                t.false(postMessageStub.called);
                resetStubs();
                imageData = Uint8ClampedArray.from({ length: 24 }, function () {
                    return Math.floor(Math.random() * 255);
                });
                s.processImage(imageData); // 3 * 2 * 4
                t.true(s.isBusyProcessing());
                t.is(postMessageStub.callCount, 1);
                t.deepEqual(postMessageStub.getCall(0).args, [
                    {
                        type: "work",
                        requestId: 1,
                        data: imageData,
                        highQualitySingleFrameMode: false
                    }
                ]);
                s.applyImageSettings({
                    width: 3,
                    height: 2,
                    format: ImageSettings.Format.RGB_8U
                });
                resetStubs();
                imageData = Uint8ClampedArray.from({ length: 18 }, function () {
                    return Math.floor(Math.random() * 255);
                });
                s.processImage(imageData); // 3 * 2 * 3
                t.is(postMessageStub.callCount, 1);
                t.deepEqual(postMessageStub.getCall(0).args, [
                    {
                        type: "work",
                        requestId: 2,
                        data: imageData,
                        highQualitySingleFrameMode: false
                    }
                ]);
                s.applyImageSettings({
                    width: 3,
                    height: 2,
                    format: ImageSettings.Format.GRAY_8U
                });
                resetStubs();
                imageData = Uint8ClampedArray.from({ length: 6 }, function () {
                    return Math.floor(Math.random() * 255);
                });
                s.processImage(imageData); // 3 * 2 * 1
                t.is(postMessageStub.callCount, 1);
                t.deepEqual(postMessageStub.getCall(0).args, [
                    {
                        type: "work",
                        requestId: 3,
                        data: imageData,
                        highQualitySingleFrameMode: false
                    }
                ]);
                s.applyImageSettings({
                    width: 3,
                    height: 2,
                    format: 999 // Fake format
                });
                resetStubs();
                imageData = Uint8ClampedArray.from({ length: 6 }, function () {
                    return Math.floor(Math.random() * 255);
                });
                s.processImage(imageData); // 3 * 2 * 1
                t.is(s.workerScanRequestId, 4);
                t.is(s.workerScanQueueLength, 4);
                t.is(postMessageStub.callCount, 1);
                t.deepEqual(postMessageStub.getCall(0).args, [
                    {
                        type: "work",
                        requestId: 4,
                        data: imageData,
                        highQualitySingleFrameMode: false
                    }
                ]);
                return [2 /*return*/];
        }
    });
}); });
// tslint:disable-next-line:max-func-body-length
test.serial("processImage scan results", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var s, imageSettings, imageData1, processImage1, imageData2, processImage2, imageData3, processImage3, error, scanResult;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                resetStubs();
                s = new Scanner();
                imageSettings = {
                    width: 3,
                    height: 2,
                    format: ImageSettings.Format.RGBA_8U
                };
                s.applyImageSettings(imageSettings);
                imageData1 = Uint8ClampedArray.from({ length: 24 }, function () {
                    return Math.floor(Math.random() * 255);
                });
                processImage1 = s.processImage(imageData1);
                t.true(s.isBusyProcessing());
                imageData2 = Uint8ClampedArray.from({ length: 24 }, function () {
                    return Math.floor(Math.random() * 255);
                });
                processImage2 = s.processImage(imageData2);
                imageData3 = Uint8ClampedArray.from({ length: 24 }, function () {
                    return Math.floor(Math.random() * 255);
                });
                processImage3 = s.processImage(imageData3);
                t.is(s.workerScanRequestId, 3);
                t.is(s.workerScanQueueLength, 3);
                s.engineWorkerOnMessage({
                    data: [
                        "work-error",
                        {
                            requestId: 2,
                            error: {
                                errorCode: 123,
                                errorMessage: "example_error"
                            }
                        }
                    ]
                });
                return [4 /*yield*/, t.throws(processImage2)];
            case 2:
                error = _a.sent();
                t.deepEqual(error.message, "example_error (123)");
                t.is(s.workerScanQueueLength, 2);
                s.engineWorkerOnMessage({
                    data: [
                        "work-result",
                        {
                            requestId: 1,
                            result: {
                                scanResult: [],
                                matrixScanResult: {
                                    barcodesAppeared: [],
                                    barcodesUpdated: [],
                                    barcodesLost: [],
                                    barcodesPredicted: []
                                }
                            }
                        }
                    ]
                });
                return [4 /*yield*/, processImage1];
            case 3:
                scanResult = _a.sent();
                t.deepEqual(scanResult, {
                    barcodes: [],
                    imageData: imageData1,
                    imageSettings: imageSettings
                });
                t.is(s.workerScanQueueLength, 1);
                s.engineWorkerOnMessage({
                    data: [
                        "work-result",
                        {
                            requestId: 3,
                            result: {
                                scanResult: [
                                    {
                                        symbology: Barcode.Symbology.QR,
                                        rawData: [97, 98, 99, 100],
                                        location: [[1, 2], [3, 4], [5, 6], [7, 8]],
                                        compositeFlag: Barcode.CompositeFlag.NONE,
                                        isGs1DataCarrier: false,
                                        encodingArray: [],
                                        isRecognized: true
                                    }
                                ],
                                matrixScanResult: {
                                    barcodesAppeared: [],
                                    barcodesUpdated: [],
                                    barcodesLost: [],
                                    barcodesPredicted: []
                                }
                            }
                        }
                    ]
                });
                return [4 /*yield*/, processImage3];
            case 4:
                scanResult = _a.sent();
                t.deepEqual(scanResult, {
                    barcodes: [
                        {
                            compositeFlag: Barcode.CompositeFlag.NONE,
                            data: "abcd",
                            encodingArray: [],
                            isGs1DataCarrier: false,
                            location: {
                                bottomLeft: {
                                    x: 7,
                                    y: 8
                                },
                                bottomRight: {
                                    x: 5,
                                    y: 6
                                },
                                topLeft: {
                                    x: 1,
                                    y: 2
                                },
                                topRight: {
                                    x: 3,
                                    y: 4
                                }
                            },
                            rawData: new Uint8Array([97, 98, 99, 100]),
                            symbology: Barcode.Symbology.QR
                        }
                    ],
                    imageData: imageData3,
                    imageSettings: imageSettings
                });
                t.is(s.workerScanQueueLength, 0);
                s.engineWorkerOnMessage({
                    data: []
                });
                return [2 /*return*/];
        }
    });
}); });
test.serial("getImageSettings", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var ss, s;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                resetStubs();
                ss = {
                    width: 640,
                    height: 480,
                    format: ImageSettings.Format.RGBA_8U
                };
                s = new Scanner();
                t.is(s.getImageSettings(), undefined);
                s.applyImageSettings(ss);
                t.deepEqual(s.getImageSettings(), ss);
                return [2 /*return*/];
        }
    });
}); });
test.serial("getScanSettings", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var ss, s;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                resetStubs();
                ss = new ScanSettings({
                    enabledSymbologies: Barcode.Symbology.QR,
                    codeDuplicateFilter: 10,
                    maxNumberOfCodesPerFrame: 10,
                    searchArea: { x: 0.5, y: 0.5, width: 0.5, height: 0.1 }
                });
                s = new Scanner();
                t.deepEqual(s.getScanSettings(), new ScanSettings());
                s.applyScanSettings(ss);
                t.deepEqual(s.getScanSettings(), ss);
                return [2 /*return*/];
        }
    });
}); });
// tslint:disable-next-line:max-func-body-length
test.serial("createParserForFormat & parseString", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var s, parser, parseString1, parseString2, parseString3, error, resultData, parserResult, fieldsByName;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                s = new Scanner();
                resetStubs();
                parser = s.createParserForFormat(Parser.DataFormat.DLID);
                t.not(parser, null);
                t.is(s.workerParseRequestId, 0);
                t.false(s.isBusyProcessing());
                t.false(postMessageStub.called);
                parseString1 = s.parseString(Parser.DataFormat.DLID, "abcd");
                t.is(s.workerParseRequestId, 1);
                t.false(s.isBusyProcessing());
                t.is(postMessageStub.callCount, 1);
                t.deepEqual(postMessageStub.getCall(0).args, [
                    {
                        type: "parse-string",
                        requestId: 1,
                        dataFormat: Parser.DataFormat.DLID,
                        dataString: "abcd",
                        options: "{}"
                    }
                ]);
                resetStubs();
                parseString2 = s.parseString(Parser.DataFormat.GS1_AI, "efgh");
                t.is(s.workerParseRequestId, 2);
                t.false(s.isBusyProcessing());
                t.is(postMessageStub.callCount, 1);
                t.deepEqual(postMessageStub.getCall(0).args, [
                    {
                        type: "parse-string",
                        requestId: 2,
                        dataFormat: Parser.DataFormat.GS1_AI,
                        dataString: "efgh",
                        options: "{}"
                    }
                ]);
                resetStubs();
                parseString3 = s.parseString(Parser.DataFormat.HIBC, "ijkl", {
                    exampleOption: true
                });
                t.is(s.workerParseRequestId, 3);
                t.false(s.isBusyProcessing());
                t.is(postMessageStub.callCount, 1);
                t.deepEqual(postMessageStub.getCall(0).args, [
                    {
                        type: "parse-string",
                        requestId: 3,
                        dataFormat: Parser.DataFormat.HIBC,
                        dataString: "ijkl",
                        options: '{"exampleOption":true}'
                    }
                ]);
                resetStubs();
                s.engineWorkerOnMessage({
                    data: [
                        "parse-string-error",
                        {
                            requestId: 2,
                            error: {
                                errorCode: 123,
                                errorMessage: "example_error"
                            }
                        }
                    ]
                });
                return [4 /*yield*/, t.throws(parseString2)];
            case 2:
                error = _a.sent();
                t.deepEqual(error.message, "example_error (123)");
                resultData = [
                    {
                        name: "field1",
                        parsed: 1,
                        rawString: "123"
                    },
                    {
                        name: "field2",
                        parsed: "abcd",
                        rawString: "efgh"
                    },
                    {
                        name: "field3",
                        parsed: {
                            subField1: 1,
                            subField2: 2
                        },
                        rawString: "sf1sf2"
                    }
                ];
                s.engineWorkerOnMessage({
                    data: [
                        "parse-string-result",
                        {
                            requestId: 1,
                            result: JSON.stringify(resultData)
                        }
                    ]
                });
                return [4 /*yield*/, parseString1];
            case 3:
                parserResult = _a.sent();
                fieldsByName = {};
                resultData.forEach(function (parserField) {
                    fieldsByName[parserField.name] = parserField;
                });
                t.deepEqual(parserResult, {
                    fields: resultData,
                    fieldsByName: fieldsByName,
                    jsonString: JSON.stringify(resultData)
                });
                s.engineWorkerOnMessage({
                    data: [
                        "parse-string-result",
                        {
                            requestId: 3,
                            result: JSON.stringify([])
                        }
                    ]
                });
                return [4 /*yield*/, parseString3];
            case 4:
                parserResult = _a.sent();
                t.deepEqual(parserResult, {
                    fields: [],
                    fieldsByName: {},
                    jsonString: JSON.stringify([])
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=scanner.spec.js.map
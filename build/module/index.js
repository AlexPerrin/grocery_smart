import "objectFitPolyfill";
import "webrtc-adapter";
import { BrowserHelper } from "./lib/browserHelper";
import { CameraAccess } from "./lib/cameraAccess";
import { CustomError } from "./lib/customError";
import { ImageSettings } from "./lib/imageSettings";
import { Scanner } from "./lib/scanner";
import "./styles/styles.scss";
export * from "./lib/barcode";
export * from "./lib/barcodePicker";
export * from "./lib/browserCompatibility";
export * from "./lib/browserHelper";
export * from "./lib/camera";
export * from "./lib/cameraAccess";
export * from "./lib/cameraSettings";
export * from "./lib/customError";
export * from "./lib/imageSettings";
export * from "./lib/parser";
export * from "./lib/scanner";
export * from "./lib/scanSettings";
export * from "./lib/symbologySettings";
export * from "./lib/workers/engineSDKWorker";
/**
 * @hidden
 */
export var deviceId = BrowserHelper.getDeviceId();
/**
 * @hidden
 */
export var userLicenseKey;
/**
 * @hidden
 */
export var scanditEngineLocation;
/**
 * Initialize and configure the Scandit Barcode Scanner SDK library. This function must be called as first thing
 * before using any other function of the library.
 *
 * Depending on parameters, device features and user permissions for camera access, any of the following errors
 * could be the rejected result of the returned promise:
 * - `NoLicenseKeyError`
 * - `UnsupportedBrowserError`
 * - `PermissionDeniedError`
 * - `NotAllowedError`
 * - `NotFoundError`
 * - `AbortError`
 * - `NotReadableError`
 * - `InternalError`
 *
 * If the external Scandit Engine library is not loaded now, it can later be loaded via [[loadEngineLibrary]],
 * or it will be downloaded and prepared automatically when needed by other objects/functions.
 *
 * If the cameras are not accessed now, they can later be loaded via [[CameraAccess.getCameras]],
 * or they will be accessed automatically when needed by other objects/functions.
 *
 * Please note that preloading the Scandit Engine library only downloads the library and puts it in a local cache
 * if available (then loads it and verifies the license key). When the library is then required and used by a
 * [[BarcodePicker]] instance the external Scandit Engine library needs to be parsed and executed again and thus still
 * requires some time to be ready. To make the process faster it's recommended, if possible, to instead prepare
 * in advance library and cameras via a hidden [[BarcodePicker]] instead.
 *
 * @param licenseKey The Scandit license key to be used by the library.
 * @param engineLocation <div class="tsd-signature-symbol">Default =&nbsp;"/"</div>
 * The location of the folder containing the external scandit-engine-sdk.min.js and
 * scandit-engine-sdk.wasm files (external Scandit Engine library).
 * By default they are retrieved from the root of the web application.
 * Can be a full URL to folder or an absolute folder path.
 * @param preloadEngineLibrary <div class="tsd-signature-symbol">Default =&nbsp;false</div>
 * Whether to eagerly download and prepare the external Scandit Engine library with this call (see documentation note).
 * @param preloadCameras <div class="tsd-signature-symbol">Default =&nbsp;false</div>
 * Whether to eagerly request access (if needed) and access available cameras with this call.
 * @returns A promise resolving when the library has loaded and the available cameras are loaded (if selected).
 */
export function configure(licenseKey, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.engineLocation, engineLocation = _c === void 0 ? "/" : _c, _d = _b.preloadEngineLibrary, preloadEngineLibrary = _d === void 0 ? false : _d, _e = _b.preloadCameras, preloadCameras = _e === void 0 ? false : _e;
    var browserCompatibility = BrowserHelper.checkBrowserCompatibility();
    if (!browserCompatibility.fullSupport && !browserCompatibility.scannerSupport) {
        return Promise.reject(new CustomError({
            name: "UnsupportedBrowserError",
            message: "This OS / Browser has one or more missing features preventing it from working correctly",
            data: browserCompatibility
        }));
    }
    if (licenseKey == null || licenseKey.trim() === "") {
        return Promise.reject(new CustomError({ name: "NoLicenseKeyError", message: "No license key provided" }));
    }
    userLicenseKey = licenseKey;
    engineLocation += engineLocation.slice(-1) === "/" ? "" : "/";
    if (/^https?:\/\//.test(engineLocation)) {
        scanditEngineLocation = "" + engineLocation;
    }
    else {
        engineLocation = engineLocation
            .split("/")
            .filter(function (s) {
            return s.length > 0;
        })
            .join("/");
        if (engineLocation === "") {
            engineLocation = "/";
        }
        else {
            engineLocation = "/" + engineLocation + "/";
        }
        scanditEngineLocation = "" + location.origin + engineLocation;
    }
    var promises = [];
    if (preloadEngineLibrary) {
        promises.push(loadEngineLibrary());
    }
    if (preloadCameras) {
        promises.push(CameraAccess.getCameras());
    }
    return Promise.all(promises)
        .then(function () {
        return;
    })
        .catch(function (error) {
        return Promise.reject(error);
    });
}
/**
 * Download and prepare in memory the external Scandit Engine library.
 * If this method isn't called manually the library will be automatically loaded the first
 * time it's required by another of this library's components.
 *
 * Please note that preloading the Scandit Engine library only downloads the library and puts it in a local cache
 * if available (then loads it and verifies the license key). When the library is then required and used by a
 * [[BarcodePicker]] instance the external Scandit Engine library needs to be parsed and executed again and thus still
 * requires some time to be ready. To make the process faster it's recommended, if possible, to instead prepare
 * in advance library and cameras via a hidden [[BarcodePicker]] instead.
 *
 * Usually this method should not be called and a [[BarcodePicker]] object should be created instead.
 *
 * @returns A promise resolving when the external Scandit Engine library has been loaded and is ready.
 */
export function loadEngineLibrary() {
    try {
        var scanner = new Scanner();
        scanner.applyImageSettings({ width: 2, height: 2, format: ImageSettings.Format.GRAY_8U });
        return scanner.processImage(new Uint8ClampedArray(4)).then(function () {
            return;
        });
    }
    catch (error) {
        return Promise.reject(error);
    }
}
//# sourceMappingURL=index.js.map
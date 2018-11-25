/* tslint:disable:no-implicit-dependencies */
/**
 * Index tests
 */
var _this = this;
import * as tslib_1 from "tslib";
import { test } from "ava";
import * as ScanditSDK from "scandit-sdk";
import * as sinon from "sinon";
global.Worker = sinon.stub().returns({
    postMessage: sinon.stub(),
    terminate: sinon.stub()
});
URL.createObjectURL = sinon.stub();
// Set inside setupBrowserEnv.js
var baseUrl = "https://example.com/";
var processImageStub = sinon.stub(ScanditSDK.Scanner.prototype, "processImage");
var getCamerasStub = sinon.stub(ScanditSDK.CameraAccess, "getCameras");
test.serial("configure", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var error;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                processImageStub.resetHistory();
                getCamerasStub.resetHistory();
                return [4 /*yield*/, t.throws(ScanditSDK.configure(""))];
            case 1:
                error = _a.sent();
                t.is(error.name, "UnsupportedBrowserError");
                ScanditSDK.BrowserHelper.checkBrowserCompatibility = function () {
                    return {
                        fullSupport: true,
                        scannerSupport: true,
                        missingFeatures: []
                    };
                };
                return [4 /*yield*/, t.throws(ScanditSDK.configure(null))];
            case 2:
                error = _a.sent();
                t.is(error.name, "NoLicenseKeyError");
                return [4 /*yield*/, t.throws(ScanditSDK.configure(""))];
            case 3:
                error = _a.sent();
                t.is(error.name, "NoLicenseKeyError");
                return [4 /*yield*/, t.throws(ScanditSDK.configure(" "))];
            case 4:
                error = _a.sent();
                t.is(error.name, "NoLicenseKeyError");
                t.false(processImageStub.called);
                t.false(getCamerasStub.called);
                processImageStub.callsFake(function () {
                    return Promise.resolve({
                        barcodes: []
                    });
                });
                getCamerasStub.callsFake(function () {
                    return Promise.resolve([]);
                });
                return [4 /*yield*/, t.notThrows(ScanditSDK.configure("license_key"))];
            case 5:
                _a.sent();
                t.is(ScanditSDK.userLicenseKey, "license_key");
                t.is(ScanditSDK.scanditEngineLocation, baseUrl);
                return [4 /*yield*/, t.notThrows(ScanditSDK.configure("license_key", { engineLocation: "" }))];
            case 6:
                _a.sent();
                t.is(ScanditSDK.scanditEngineLocation, baseUrl);
                return [4 /*yield*/, t.notThrows(ScanditSDK.configure("license_key", { engineLocation: "/" }))];
            case 7:
                _a.sent();
                t.is(ScanditSDK.scanditEngineLocation, baseUrl);
                return [4 /*yield*/, t.notThrows(ScanditSDK.configure("license_key", { engineLocation: "test" }))];
            case 8:
                _a.sent();
                t.is(ScanditSDK.scanditEngineLocation, baseUrl + "test/");
                return [4 /*yield*/, t.notThrows(ScanditSDK.configure("license_key", { engineLocation: "https://another_example.com" }))];
            case 9:
                _a.sent();
                t.is(ScanditSDK.scanditEngineLocation, "https://another_example.com/");
                return [4 /*yield*/, t.notThrows(ScanditSDK.configure("license_key", { engineLocation: "https://another_example.com/" }))];
            case 10:
                _a.sent();
                t.is(ScanditSDK.scanditEngineLocation, "https://another_example.com/");
                return [4 /*yield*/, t.notThrows(ScanditSDK.configure("license_key", { preloadEngineLibrary: true }))];
            case 11:
                _a.sent();
                t.true(processImageStub.called);
                t.false(getCamerasStub.called);
                processImageStub.resetHistory();
                getCamerasStub.resetHistory();
                return [4 /*yield*/, t.notThrows(ScanditSDK.configure("license_key", { preloadCameras: true }))];
            case 12:
                _a.sent();
                t.false(processImageStub.called);
                t.true(getCamerasStub.called);
                processImageStub.resetHistory();
                getCamerasStub.resetHistory();
                return [4 /*yield*/, t.notThrows(ScanditSDK.configure("license_key", { preloadCameras: true, preloadEngineLibrary: true }))];
            case 13:
                _a.sent();
                t.true(processImageStub.called);
                t.true(getCamerasStub.called);
                processImageStub.callsFake(function () {
                    return Promise.reject(new Error("Test error"));
                });
                return [4 /*yield*/, t.throws(ScanditSDK.configure("license_key", { preloadEngineLibrary: true }))];
            case 14:
                error = _a.sent();
                t.is(error.message, "Test error");
                processImageStub.resetBehavior();
                getCamerasStub.callsFake(function () {
                    return Promise.reject(new Error("Test error 2"));
                });
                return [4 /*yield*/, t.throws(ScanditSDK.configure("license_key", { preloadCameras: true }))];
            case 15:
                error = _a.sent();
                t.is(error.message, "Test error 2");
                getCamerasStub.resetBehavior();
                return [2 /*return*/];
        }
    });
}); });
test.serial("loadEngineLibrary", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var error;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                processImageStub.resetHistory();
                processImageStub.callsFake(function () {
                    return Promise.resolve({
                        barcodes: []
                    });
                });
                return [4 /*yield*/, t.notThrows(ScanditSDK.loadEngineLibrary())];
            case 1:
                _a.sent();
                t.true(processImageStub.called);
                processImageStub.callsFake(function () {
                    return Promise.reject(new Error("Test error"));
                });
                return [4 /*yield*/, t.throws(ScanditSDK.loadEngineLibrary())];
            case 2:
                error = _a.sent();
                t.is(error.message, "Test error");
                ScanditSDK.BrowserHelper.checkBrowserCompatibility = function () {
                    return {
                        fullSupport: false,
                        scannerSupport: false,
                        missingFeatures: [ScanditSDK.BrowserCompatibility.Feature.MEDIA_DEVICES]
                    };
                };
                return [4 /*yield*/, t.throws(ScanditSDK.loadEngineLibrary())];
            case 3:
                error = _a.sent();
                t.is(error.name, "UnsupportedBrowserError");
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=index.spec.js.map
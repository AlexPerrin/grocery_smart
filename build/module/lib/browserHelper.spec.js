/* tslint:disable:no-implicit-dependencies */
/**
 * BrowserHelper tests
 */
Object.defineProperty(navigator, "platform", {
    value: "iPhone",
    writable: true
});
import { test } from "ava";
import { BrowserHelper } from "scandit-sdk";
test("checkBrowserCompatibility", function (t) {
    window.Blob = null;
    t.deepEqual(BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["mediaDevices", "webWorkers", "webAssembly", "blob", "urlObject"],
        scannerSupport: false
    });
    navigator.mediaDevices = {
        getUserMedia: function () {
            return;
        }
    };
    t.deepEqual(BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["webWorkers", "webAssembly", "blob", "urlObject"],
        scannerSupport: false
    });
    window.Worker = function () {
        return;
    };
    t.deepEqual(BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["webAssembly", "blob", "urlObject"],
        scannerSupport: false
    });
    window.WebAssembly = {};
    t.deepEqual(BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["blob", "urlObject"],
        scannerSupport: false
    });
    window.Blob = function () {
        return;
    };
    t.deepEqual(BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["urlObject"],
        scannerSupport: false
    });
    window.URL = {
        createObjectURL: function () {
            return;
        }
    };
    t.deepEqual(BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: true,
        missingFeatures: [],
        scannerSupport: true
    });
    BrowserHelper.userAgentInfo.setUA("Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_5 like Mac OS X) " +
        "AppleWebKit/604.5.6 (KHTML, like Gecko) Version/11.0 Mobile/15D60 Safari/604.1");
    t.deepEqual(BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["webAssemblyErrorFree"],
        scannerSupport: false
    });
    BrowserHelper.userAgentInfo.setUA("Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) " +
        "AppleWebKit/605.1.15 (KHTML, like Gecko) Version / 11.0 Mobile / 15E148 Safari / 604.1");
    t.deepEqual(BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: true,
        missingFeatures: [],
        scannerSupport: true
    });
    navigator.mediaDevices = undefined;
    t.deepEqual(BrowserHelper.checkBrowserCompatibility(), {
        fullSupport: false,
        missingFeatures: ["mediaDevices"],
        scannerSupport: true
    });
});
test("getDeviceId", function (t) {
    var currentDeviceId = BrowserHelper.getDeviceId();
    t.regex(currentDeviceId, /[0-9a-f]{40}/);
    t.deepEqual(BrowserHelper.getDeviceId(), currentDeviceId);
});
//# sourceMappingURL=browserHelper.spec.js.map
import { UAParser } from "ua-parser-js";
export { UAParser };
import { BrowserCompatibility } from "./browserCompatibility";
/**
 * @hidden
 */
export var BrowserHelper;
(function (BrowserHelper) {
    BrowserHelper.userAgentInfo = new UAParser(navigator.userAgent);
    /**
     * @returns The first matching error indicating a missing browser feature, or undefined.
     */
    function checkBrowserCompatibility() {
        var fullSupport = true;
        var scannerSupport = true;
        var missingFeatures = [];
        if (navigator.mediaDevices == null || typeof navigator.mediaDevices.getUserMedia !== "function") {
            missingFeatures.push(BrowserCompatibility.Feature.MEDIA_DEVICES);
            fullSupport = false;
        }
        if (!window.hasOwnProperty("Worker") || typeof window.Worker !== "function") {
            missingFeatures.push(BrowserCompatibility.Feature.WEB_WORKERS);
            fullSupport = scannerSupport = false;
        }
        if (!window.hasOwnProperty("WebAssembly") || typeof window.WebAssembly !== "object") {
            missingFeatures.push(BrowserCompatibility.Feature.WEB_ASSEMBLY);
            fullSupport = scannerSupport = false;
        }
        if (!window.hasOwnProperty("Blob") || typeof window.Blob !== "function") {
            missingFeatures.push(BrowserCompatibility.Feature.BLOB);
            fullSupport = scannerSupport = false;
        }
        if (!window.hasOwnProperty("URL") ||
            (typeof window.URL !== "function" && typeof window.URL !== "object") ||
            typeof window.URL.createObjectURL !== "function") {
            missingFeatures.push(BrowserCompatibility.Feature.URL_OBJECT);
            fullSupport = scannerSupport = false;
        }
        var os = BrowserHelper.userAgentInfo.getOS();
        if (os.name === "iOS" && os.version != null) {
            if (["11.2.2", "11.2.5", "11.2.6"].indexOf(os.version) !== -1) {
                missingFeatures.push(BrowserCompatibility.Feature.WEB_ASSEMBLY_ERROR_FREE);
                fullSupport = scannerSupport = false;
            }
        }
        return {
            fullSupport: fullSupport,
            scannerSupport: scannerSupport,
            missingFeatures: missingFeatures
        };
    }
    BrowserHelper.checkBrowserCompatibility = checkBrowserCompatibility;
    /**
     * Get a value from a cookie.
     *
     * @param key The key for the cookie for which to get the value.
     * @returns The cookie value for the given key, empty string if not found.
     */
    function getCookieValue(key) {
        var cookieMatch = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
        if (cookieMatch == null) {
            return "";
        }
        else {
            var cookieValue = cookieMatch.pop();
            // istanbul ignore next
            return cookieValue == null ? "" : cookieValue;
        }
    }
    /**
     * Store a value in a cookie.
     *
     * @param key The key for the cookie.
     * @param value The value of the cookie.
     * @param expirationDays The amount of days after which the cookie will expire.
     */
    function setCookieValue(key, value, expirationDays) {
        var date = new Date();
        date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
        document.cookie = key + "=" + value + ";expires=" + date.toUTCString();
    }
    /**
     * Get a device id for the current browser, when available it's retrieved from a cookie,
     * when not it's randomly generated and stored in a cookie to be retrieved by later calls.
     *
     * @returns The device id for the current browser.
     */
    function getDeviceId() {
        var cookieKey = "scandit-device-id";
        var storedDeviceId = getCookieValue(cookieKey);
        if (storedDeviceId !== "") {
            return storedDeviceId;
        }
        var hexCharacters = "0123456789abcdef";
        var randomDeviceId = "";
        for (var i = 0; i < 40; ++i) {
            // tslint:disable-next-line:insecure-random
            randomDeviceId += hexCharacters.charAt(Math.floor(Math.random() * 16));
        }
        setCookieValue(cookieKey, randomDeviceId, 3650);
        return randomDeviceId;
    }
    BrowserHelper.getDeviceId = getDeviceId;
})(BrowserHelper || (BrowserHelper = {}));
//# sourceMappingURL=browserHelper.js.map
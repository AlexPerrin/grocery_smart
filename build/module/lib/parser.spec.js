/* tslint:disable:no-implicit-dependencies */
/**
 * Parser tests
 */
var _this = this;
import * as tslib_1 from "tslib";
import { test } from "ava";
import { BrowserHelper, configure, Parser, Scanner } from "scandit-sdk";
import * as sinon from "sinon";
global.Worker = sinon.stub().returns({
    postMessage: sinon.stub(),
    terminate: sinon.stub()
});
URL.createObjectURL = sinon.stub();
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
test("constructor", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var s, p;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                s = new Scanner();
                p = new Parser(s, Parser.DataFormat.DLID);
                t.is(p.scanner, s);
                t.is(p.dataFormat, Parser.DataFormat.DLID);
                t.is(p.options, undefined);
                return [2 /*return*/];
        }
    });
}); });
test("setOptions", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var s, p;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                s = new Scanner();
                p = new Parser(s, Parser.DataFormat.DLID);
                t.is(p.options, undefined);
                p.setOptions({});
                t.deepEqual(p.options, {});
                p.setOptions({
                    option1: true
                });
                t.deepEqual(p.options, {
                    option1: true
                });
                return [2 /*return*/];
        }
    });
}); });
test("parseString", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var s, p, parseStringSpy;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                s = new Scanner();
                p = new Parser(s, Parser.DataFormat.DLID);
                parseStringSpy = sinon.spy(s, "parseString");
                p.parseString("");
                t.is(parseStringSpy.callCount, 1);
                t.deepEqual(parseStringSpy.getCall(0).args, [Parser.DataFormat.DLID, "", undefined]);
                p.parseString("abcd");
                t.is(parseStringSpy.callCount, 2);
                t.deepEqual(parseStringSpy.getCall(1).args, [Parser.DataFormat.DLID, "abcd", undefined]);
                p.setOptions({
                    option1: true
                });
                p.parseString("abcd");
                t.is(parseStringSpy.callCount, 3);
                t.deepEqual(parseStringSpy.getCall(2).args, [
                    Parser.DataFormat.DLID,
                    "abcd",
                    {
                        option1: true
                    }
                ]);
                return [2 /*return*/];
        }
    });
}); });
test("parseRawData", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var s, p, parseStringSpy;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prepareBrowserAndLibrary()];
            case 1:
                _a.sent();
                s = new Scanner();
                p = new Parser(s, Parser.DataFormat.DLID);
                parseStringSpy = sinon.spy(s, "parseString");
                p.parseRawData(new Uint8Array([]));
                t.is(parseStringSpy.callCount, 1);
                t.deepEqual(parseStringSpy.getCall(0).args, [Parser.DataFormat.DLID, "", undefined]);
                p.parseRawData(new Uint8Array([97, 98, 99, 100]));
                t.is(parseStringSpy.callCount, 2);
                t.deepEqual(parseStringSpy.getCall(1).args, [Parser.DataFormat.DLID, "abcd", undefined]);
                p.setOptions({
                    option1: true
                });
                p.parseRawData(new Uint8Array([97, 98, 99, 100]));
                t.is(parseStringSpy.callCount, 3);
                t.deepEqual(parseStringSpy.getCall(2).args, [
                    Parser.DataFormat.DLID,
                    "abcd",
                    {
                        option1: true
                    }
                ]);
                p.parseRawData(new Uint8Array([255]));
                t.is(parseStringSpy.callCount, 4);
                t.deepEqual(parseStringSpy.getCall(0).args, [Parser.DataFormat.DLID, "", undefined]);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=parser.spec.js.map
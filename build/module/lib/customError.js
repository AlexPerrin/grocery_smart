import * as tslib_1 from "tslib";
/**
 * @hidden
 */
var CustomError = /** @class */ (function (_super) {
    tslib_1.__extends(CustomError, _super);
    function CustomError(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.name, name = _c === void 0 ? "" : _c, _d = _b.message, message = _d === void 0 ? "" : _d, data = _b.data;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, CustomError.prototype);
        _this.name = name;
        _this.data = data;
        return _this;
    }
    return CustomError;
}(Error));
export { CustomError };
//# sourceMappingURL=customError.js.map
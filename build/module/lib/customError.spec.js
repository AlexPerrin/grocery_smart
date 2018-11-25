/* tslint:disable:no-implicit-dependencies */
/**
 * CustomError tests
 */
import { test } from "ava";
import { CustomError } from "scandit-sdk";
test("constructor", function (t) {
    var ce = new CustomError();
    t.deepEqual(ce.name, "");
    t.deepEqual(ce.message, "");
    ce = new CustomError({ name: "test" });
    t.deepEqual(ce.name, "test");
    t.deepEqual(ce.message, "");
    ce = new CustomError({ message: "test" });
    t.deepEqual(ce.name, "");
    t.deepEqual(ce.message, "test");
    ce = new CustomError({ name: "test", message: "test" });
    t.deepEqual(ce.name, "test");
    t.deepEqual(ce.message, "test");
});
//# sourceMappingURL=customError.spec.js.map
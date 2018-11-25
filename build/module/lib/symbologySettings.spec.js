/* tslint:disable:no-implicit-dependencies */
/**
 * SymbologySettings tests
 */
import * as tslib_1 from "tslib";
import { test } from "ava";
import { SymbologySettings } from "scandit-sdk";
function setsEqual(t, firstSet, secondSet) {
    var e_1, _a;
    if (firstSet.size !== secondSet.size) {
        return t.fail("Different set sizes");
    }
    try {
        for (var firstSet_1 = tslib_1.__values(firstSet), firstSet_1_1 = firstSet_1.next(); !firstSet_1_1.done; firstSet_1_1 = firstSet_1.next()) {
            var x = firstSet_1_1.value;
            if (!secondSet.has(x)) {
                return t.fail("Different set contents");
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (firstSet_1_1 && !firstSet_1_1.done && (_a = firstSet_1.return)) _a.call(firstSet_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return t.pass();
}
test("constructor", function (t) {
    var ss = new SymbologySettings();
    t.false(ss.enabled);
    t.false(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts.length, 0);
    t.deepEqual(ss.extensions.size, 0);
    t.deepEqual(ss.checksums.size, 0);
    ss = new SymbologySettings({});
    t.false(ss.enabled);
    t.false(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts.length, 0);
    t.deepEqual(ss.extensions.size, 0);
    t.deepEqual(ss.checksums.size, 0);
    ss = new SymbologySettings({ enabled: true });
    t.true(ss.enabled);
    t.false(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts.length, 0);
    t.deepEqual(ss.extensions.size, 0);
    t.deepEqual(ss.checksums.size, 0);
    ss = new SymbologySettings({ colorInvertedEnabled: true });
    t.false(ss.enabled);
    t.true(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts.length, 0);
    t.deepEqual(ss.extensions.size, 0);
    t.deepEqual(ss.checksums.size, 0);
    ss = new SymbologySettings({ enabled: true, colorInvertedEnabled: true });
    t.true(ss.enabled);
    t.true(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts.length, 0);
    t.deepEqual(ss.extensions.size, 0);
    t.deepEqual(ss.checksums.size, 0);
    ss = new SymbologySettings({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10]
    });
    t.true(ss.enabled);
    t.true(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts, [8, 9, 10]);
    t.deepEqual(ss.extensions.size, 0);
    t.deepEqual(ss.checksums.size, 0);
    ss = new SymbologySettings({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10],
        extensions: new Set([SymbologySettings.Extension.FULL_ASCII])
    });
    t.true(ss.enabled);
    t.true(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts, [8, 9, 10]);
    setsEqual(t, ss.extensions, new Set([SymbologySettings.Extension.FULL_ASCII]));
    t.deepEqual(ss.checksums.size, 0);
    ss = new SymbologySettings({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10],
        extensions: [SymbologySettings.Extension.FULL_ASCII]
    });
    t.true(ss.enabled);
    t.true(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts, [8, 9, 10]);
    setsEqual(t, ss.extensions, new Set([SymbologySettings.Extension.FULL_ASCII]));
    t.deepEqual(ss.checksums.size, 0);
    ss = new SymbologySettings({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10],
        extensions: new Set([SymbologySettings.Extension.FULL_ASCII]),
        checksums: new Set([SymbologySettings.Checksum.MOD_10])
    });
    t.true(ss.enabled);
    t.true(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts, [8, 9, 10]);
    setsEqual(t, ss.extensions, new Set([SymbologySettings.Extension.FULL_ASCII]));
    setsEqual(t, ss.checksums, new Set([SymbologySettings.Checksum.MOD_10]));
    ss = new SymbologySettings({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10],
        extensions: new Set([SymbologySettings.Extension.FULL_ASCII]),
        checksums: [SymbologySettings.Checksum.MOD_10]
    });
    t.true(ss.enabled);
    t.true(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts, [8, 9, 10]);
    setsEqual(t, ss.extensions, new Set([SymbologySettings.Extension.FULL_ASCII]));
    setsEqual(t, ss.checksums, new Set([SymbologySettings.Checksum.MOD_10]));
});
test("constructor (strings)", function (t) {
    var ss = new SymbologySettings({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10],
        extensions: new Set(["full_ascii"])
    });
    t.true(ss.enabled);
    t.true(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts, [8, 9, 10]);
    setsEqual(t, ss.extensions, new Set([SymbologySettings.Extension.FULL_ASCII]));
    t.deepEqual(ss.checksums.size, 0);
    ss = new SymbologySettings({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10],
        extensions: ["full_ascii"]
    });
    t.true(ss.enabled);
    t.true(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts, [8, 9, 10]);
    setsEqual(t, ss.extensions, new Set([SymbologySettings.Extension.FULL_ASCII]));
    t.deepEqual(ss.checksums.size, 0);
    ss = new SymbologySettings({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10],
        extensions: new Set([SymbologySettings.Extension.FULL_ASCII]),
        checksums: new Set(["mod10"])
    });
    t.true(ss.enabled);
    t.true(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts, [8, 9, 10]);
    setsEqual(t, ss.extensions, new Set([SymbologySettings.Extension.FULL_ASCII]));
    setsEqual(t, ss.checksums, new Set([SymbologySettings.Checksum.MOD_10]));
    ss = new SymbologySettings({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10],
        extensions: new Set([SymbologySettings.Extension.FULL_ASCII]),
        checksums: ["mod10"]
    });
    t.true(ss.enabled);
    t.true(ss.colorInvertedEnabled);
    t.deepEqual(ss.activeSymbolCounts, [8, 9, 10]);
    setsEqual(t, ss.extensions, new Set([SymbologySettings.Extension.FULL_ASCII]));
    setsEqual(t, ss.checksums, new Set([SymbologySettings.Checksum.MOD_10]));
    ss = new SymbologySettings({
        extensions: new Set(["i_dont_exist"]),
        checksums: new Set(["i_dont_exist"])
    });
    t.deepEqual(ss.extensions.size, 0);
    t.deepEqual(ss.checksums.size, 0);
    ss = new SymbologySettings({
        extensions: Array.from(["i_dont_exist"]),
        checksums: Array.from(["i_dont_exist"])
    });
    t.deepEqual(ss.extensions.size, 0);
    t.deepEqual(ss.checksums.size, 0);
});
test("isEnabled & setEnabled", function (t) {
    var ss = new SymbologySettings();
    t.false(ss.isEnabled());
    ss.setEnabled(false);
    t.false(ss.isEnabled());
    ss.setEnabled(true);
    t.true(ss.isEnabled());
    ss.setEnabled(true);
    t.true(ss.isEnabled());
    ss.setEnabled(false);
    t.false(ss.isEnabled());
});
test("isColorInvertedEnabled & setColorInvertedEnabled", function (t) {
    var ss = new SymbologySettings();
    t.false(ss.isColorInvertedEnabled());
    ss.setColorInvertedEnabled(false);
    t.false(ss.isColorInvertedEnabled());
    ss.setColorInvertedEnabled(true);
    t.true(ss.isColorInvertedEnabled());
    ss.setColorInvertedEnabled(true);
    t.true(ss.isColorInvertedEnabled());
    ss.setColorInvertedEnabled(false);
    t.false(ss.isColorInvertedEnabled());
});
test("getActiveSymbolCounts & setActiveSymbolCounts", function (t) {
    var ss = new SymbologySettings();
    t.deepEqual(ss.getActiveSymbolCounts(), []);
    ss.setActiveSymbolCounts([]);
    t.deepEqual(ss.getActiveSymbolCounts(), []);
    ss.setActiveSymbolCounts([1]);
    t.deepEqual(ss.getActiveSymbolCounts(), [1]);
    ss.setActiveSymbolCounts([1, 2, 3]);
    t.deepEqual(ss.getActiveSymbolCounts(), [1, 2, 3]);
});
test("setActiveSymbolCountsRange", function (t) {
    var ss = new SymbologySettings();
    ss.setActiveSymbolCountsRange(1, 2);
    t.deepEqual(ss.getActiveSymbolCounts(), [1, 2]);
    ss.setActiveSymbolCountsRange(1, 3);
    t.deepEqual(ss.getActiveSymbolCounts(), [1, 2, 3]);
    ss.setActiveSymbolCountsRange(10, 16);
    t.deepEqual(ss.getActiveSymbolCounts(), [10, 11, 12, 13, 14, 15, 16]);
    ss.setActiveSymbolCountsRange(1, 1);
    t.deepEqual(ss.getActiveSymbolCounts(), [1]);
    ss.setActiveSymbolCountsRange(1, 0);
    t.deepEqual(ss.getActiveSymbolCounts(), []);
});
test("getEnabledExtensions & enableExtensions & disableExtensions", function (t) {
    var ss = new SymbologySettings();
    ss.disableExtensions(SymbologySettings.Extension.FULL_ASCII);
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    ss.disableExtensions([SymbologySettings.Extension.FULL_ASCII]);
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    ss.disableExtensions(new Set([SymbologySettings.Extension.FULL_ASCII]));
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    // Set
    ss.enableExtensions(new Set([SymbologySettings.Extension.FULL_ASCII]));
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII]));
    ss.enableExtensions(new Set([SymbologySettings.Extension.FULL_ASCII]));
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII]));
    ss.enableExtensions(new Set([SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]));
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII, SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]));
    ss.disableExtensions(new Set([SymbologySettings.Extension.RELAXED_SHARP_QUIET_ZONE_CHECK]));
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII, SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]));
    ss.disableExtensions(new Set([SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]));
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII]));
    ss.disableExtensions(new Set([SymbologySettings.Extension.FULL_ASCII]));
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    ss.enableExtensions(new Set([SymbologySettings.Extension.FULL_ASCII, SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]));
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII, SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]));
    ss.disableExtensions(new Set([SymbologySettings.Extension.FULL_ASCII, SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]));
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    // Array
    ss.enableExtensions([SymbologySettings.Extension.FULL_ASCII]);
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII]));
    ss.enableExtensions([SymbologySettings.Extension.FULL_ASCII]);
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII]));
    ss.enableExtensions([SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]);
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII, SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]));
    ss.disableExtensions([SymbologySettings.Extension.RELAXED_SHARP_QUIET_ZONE_CHECK]);
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII, SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]));
    ss.disableExtensions([SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]);
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII]));
    ss.disableExtensions([SymbologySettings.Extension.FULL_ASCII]);
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    ss.enableExtensions([SymbologySettings.Extension.FULL_ASCII, SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]);
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII, SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]));
    ss.disableExtensions([SymbologySettings.Extension.FULL_ASCII, SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]);
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    // Single
    ss.enableExtensions(SymbologySettings.Extension.FULL_ASCII);
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII]));
    ss.enableExtensions(SymbologySettings.Extension.FULL_ASCII);
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII]));
    ss.enableExtensions(SymbologySettings.Extension.DIRECT_PART_MARKING_MODE);
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII, SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]));
    ss.disableExtensions(SymbologySettings.Extension.RELAXED_SHARP_QUIET_ZONE_CHECK);
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII, SymbologySettings.Extension.DIRECT_PART_MARKING_MODE]));
    ss.disableExtensions(SymbologySettings.Extension.DIRECT_PART_MARKING_MODE);
    setsEqual(t, ss.getEnabledExtensions(), new Set([SymbologySettings.Extension.FULL_ASCII]));
    ss.disableExtensions(SymbologySettings.Extension.FULL_ASCII);
    setsEqual(t, ss.getEnabledExtensions(), new Set());
});
test("getEnabledExtensions & enableExtensions & disableExtensions (strings)", function (t) {
    var ss = new SymbologySettings();
    ss.disableExtensions("full_ascii");
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    ss.disableExtensions(["full_ascii"]);
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    ss.disableExtensions(new Set(["full_ascii"]));
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    ss.enableExtensions("i_dont_exist");
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    ss.enableExtensions(Array.from(["i_dont_exist"]));
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    ss.enableExtensions(new Set(["i_dont_exist"]));
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    // Set
    ss.enableExtensions(new Set(["full_ascii"]));
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii"]));
    ss.enableExtensions(new Set(["full_ascii"]));
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii"]));
    ss.enableExtensions(new Set(["direct_part_marking_mode"]));
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii", "direct_part_marking_mode"]));
    ss.disableExtensions(new Set(["relaxed_sharp_quiet_zone_check"]));
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii", "direct_part_marking_mode"]));
    ss.disableExtensions(new Set(["direct_part_marking_mode"]));
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii"]));
    ss.disableExtensions(new Set(["full_ascii"]));
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    ss.enableExtensions(new Set(["full_ascii", "direct_part_marking_mode"]));
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii", "direct_part_marking_mode"]));
    ss.disableExtensions(new Set(["full_ascii", "direct_part_marking_mode"]));
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    // Array
    ss.enableExtensions(["full_ascii"]);
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii"]));
    ss.enableExtensions(["full_ascii"]);
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii"]));
    ss.enableExtensions(["direct_part_marking_mode"]);
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii", "direct_part_marking_mode"]));
    ss.disableExtensions(["relaxed_sharp_quiet_zone_check"]);
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii", "direct_part_marking_mode"]));
    ss.disableExtensions(["direct_part_marking_mode"]);
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii"]));
    ss.disableExtensions(["full_ascii"]);
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    ss.enableExtensions(["full_ascii", "direct_part_marking_mode"]);
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii", "direct_part_marking_mode"]));
    ss.disableExtensions(["full_ascii", "direct_part_marking_mode"]);
    setsEqual(t, ss.getEnabledExtensions(), new Set());
    // Single
    ss.enableExtensions("full_ascii");
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii"]));
    ss.enableExtensions("full_ascii");
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii"]));
    ss.enableExtensions("direct_part_marking_mode");
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii", "direct_part_marking_mode"]));
    ss.disableExtensions("relaxed_sharp_quiet_zone_check");
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii", "direct_part_marking_mode"]));
    ss.disableExtensions("direct_part_marking_mode");
    setsEqual(t, ss.getEnabledExtensions(), new Set(["full_ascii"]));
    ss.disableExtensions("full_ascii");
    setsEqual(t, ss.getEnabledExtensions(), new Set());
});
test("getEnabledChecksums & enableChecksums & disableChecksums", function (t) {
    var ss = new SymbologySettings();
    ss.disableChecksums(SymbologySettings.Checksum.MOD_10);
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    ss.disableChecksums([SymbologySettings.Checksum.MOD_10]);
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    ss.disableChecksums(new Set([SymbologySettings.Checksum.MOD_10]));
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    // Set
    ss.enableChecksums(new Set([SymbologySettings.Checksum.MOD_10]));
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10]));
    ss.enableChecksums(new Set([SymbologySettings.Checksum.MOD_10]));
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10]));
    ss.enableChecksums(new Set([SymbologySettings.Checksum.MOD_43]));
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10, SymbologySettings.Checksum.MOD_43]));
    ss.disableChecksums(new Set([SymbologySettings.Checksum.MOD_16]));
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10, SymbologySettings.Checksum.MOD_43]));
    ss.disableChecksums(new Set([SymbologySettings.Checksum.MOD_43]));
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10]));
    ss.disableChecksums(new Set([SymbologySettings.Checksum.MOD_10]));
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    ss.enableChecksums(new Set([SymbologySettings.Checksum.MOD_10, SymbologySettings.Checksum.MOD_43]));
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10, SymbologySettings.Checksum.MOD_43]));
    ss.disableChecksums(new Set([SymbologySettings.Checksum.MOD_10, SymbologySettings.Checksum.MOD_43]));
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    // Array
    ss.enableChecksums([SymbologySettings.Checksum.MOD_10]);
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10]));
    ss.enableChecksums([SymbologySettings.Checksum.MOD_10]);
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10]));
    ss.enableChecksums([SymbologySettings.Checksum.MOD_43]);
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10, SymbologySettings.Checksum.MOD_43]));
    ss.disableChecksums([SymbologySettings.Checksum.MOD_16]);
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10, SymbologySettings.Checksum.MOD_43]));
    ss.disableChecksums([SymbologySettings.Checksum.MOD_43]);
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10]));
    ss.disableChecksums([SymbologySettings.Checksum.MOD_10]);
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    ss.enableChecksums([SymbologySettings.Checksum.MOD_10, SymbologySettings.Checksum.MOD_43]);
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10, SymbologySettings.Checksum.MOD_43]));
    ss.disableChecksums([SymbologySettings.Checksum.MOD_10, SymbologySettings.Checksum.MOD_43]);
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    // Single
    ss.enableChecksums(SymbologySettings.Checksum.MOD_10);
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10]));
    ss.enableChecksums(SymbologySettings.Checksum.MOD_10);
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10]));
    ss.enableChecksums(SymbologySettings.Checksum.MOD_43);
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10, SymbologySettings.Checksum.MOD_43]));
    ss.disableChecksums(SymbologySettings.Checksum.MOD_16);
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10, SymbologySettings.Checksum.MOD_43]));
    ss.disableChecksums(SymbologySettings.Checksum.MOD_43);
    setsEqual(t, ss.getEnabledChecksums(), new Set([SymbologySettings.Checksum.MOD_10]));
    ss.disableChecksums(SymbologySettings.Checksum.MOD_10);
    setsEqual(t, ss.getEnabledChecksums(), new Set());
});
test("getEnabledChecksums & enableChecksums & disableChecksums (strings)", function (t) {
    var ss = new SymbologySettings();
    ss.disableChecksums("mod10");
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    ss.disableChecksums(["mod10"]);
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    ss.disableChecksums(new Set(["mod10"]));
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    ss.enableChecksums("i_dont_exist");
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    ss.enableChecksums(Array.from(["i_dont_exist"]));
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    ss.enableChecksums(new Set(["i_dont_exist"]));
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    // Set
    ss.enableChecksums(new Set(["mod10"]));
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10"]));
    ss.enableChecksums(new Set(["mod10"]));
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10"]));
    ss.enableChecksums(new Set(["mod43"]));
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10", "mod43"]));
    ss.disableChecksums(new Set(["mod16"]));
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10", "mod43"]));
    ss.disableChecksums(new Set(["mod43"]));
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10"]));
    ss.disableChecksums(new Set(["mod10"]));
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    ss.enableChecksums(new Set(["mod10", "mod43"]));
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10", "mod43"]));
    ss.disableChecksums(new Set(["mod10", "mod43"]));
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    // Array
    ss.enableChecksums(["mod10"]);
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10"]));
    ss.enableChecksums(["mod10"]);
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10"]));
    ss.enableChecksums(["mod43"]);
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10", "mod43"]));
    ss.disableChecksums(["mod16"]);
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10", "mod43"]));
    ss.disableChecksums(["mod43"]);
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10"]));
    ss.disableChecksums(["mod10"]);
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    ss.enableChecksums(["mod10", "mod43"]);
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10", "mod43"]));
    ss.disableChecksums(["mod10", "mod43"]);
    setsEqual(t, ss.getEnabledChecksums(), new Set());
    // Single
    ss.enableChecksums("mod10");
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10"]));
    ss.enableChecksums("mod10");
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10"]));
    ss.enableChecksums("mod43");
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10", "mod43"]));
    ss.disableChecksums("mod16");
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10", "mod43"]));
    ss.disableChecksums("mod43");
    setsEqual(t, ss.getEnabledChecksums(), new Set(["mod10"]));
    ss.disableChecksums("mod10");
    setsEqual(t, ss.getEnabledChecksums(), new Set());
});
test("toJSON", function (t) {
    var ss = new SymbologySettings();
    t.deepEqual(JSON.stringify(ss), JSON.stringify({
        enabled: false,
        colorInvertedEnabled: false
    }));
    ss = new SymbologySettings({});
    t.deepEqual(JSON.stringify(ss), JSON.stringify({
        enabled: false,
        colorInvertedEnabled: false
    }));
    ss = new SymbologySettings({ enabled: true });
    t.deepEqual(JSON.stringify(ss), JSON.stringify({
        enabled: true,
        colorInvertedEnabled: false
    }));
    ss = new SymbologySettings({ colorInvertedEnabled: true });
    t.deepEqual(JSON.stringify(ss), JSON.stringify({
        enabled: false,
        colorInvertedEnabled: true
    }));
    ss = new SymbologySettings({ enabled: true, colorInvertedEnabled: true });
    t.deepEqual(JSON.stringify(ss), JSON.stringify({
        enabled: true,
        colorInvertedEnabled: true
    }));
    ss = new SymbologySettings({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10]
    });
    t.deepEqual(JSON.stringify(ss), JSON.stringify({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10]
    }));
    ss = new SymbologySettings({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10],
        extensions: new Set([SymbologySettings.Extension.FULL_ASCII])
    });
    t.deepEqual(JSON.stringify(ss), JSON.stringify({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10],
        extensions: [SymbologySettings.Extension.FULL_ASCII]
    }));
    ss = new SymbologySettings({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10],
        extensions: new Set([SymbologySettings.Extension.FULL_ASCII]),
        checksums: new Set([SymbologySettings.Checksum.MOD_10])
    });
    t.deepEqual(JSON.stringify(ss), JSON.stringify({
        enabled: true,
        colorInvertedEnabled: true,
        activeSymbolCounts: [8, 9, 10],
        extensions: [SymbologySettings.Extension.FULL_ASCII],
        checksums: [SymbologySettings.Checksum.MOD_10]
    }));
    ss = new SymbologySettings();
    ss.enableExtensions([SymbologySettings.Extension.FULL_ASCII]);
    ss.enableChecksums([SymbologySettings.Checksum.MOD_10]);
    t.deepEqual(JSON.stringify(ss), JSON.stringify({
        enabled: false,
        colorInvertedEnabled: false,
        extensions: [SymbologySettings.Extension.FULL_ASCII],
        checksums: [SymbologySettings.Checksum.MOD_10]
    }));
});
//# sourceMappingURL=symbologySettings.spec.js.map
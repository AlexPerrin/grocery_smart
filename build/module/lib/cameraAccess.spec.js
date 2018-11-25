/* tslint:disable:no-implicit-dependencies */
/**
 * CameraAccess tests
 */
var _this = this;
import * as tslib_1 from "tslib";
import { test } from "ava";
import { Camera, CameraAccess } from "scandit-sdk";
import * as sinon from "sinon";
var getUserMediaStub = sinon.stub();
var getVideoTracksStub = sinon.stub();
var applyConstraintsStub = sinon.stub();
var getCapabilitiesStub = sinon.stub();
var getConstraintsStub = sinon.stub();
var getSettingsStub = sinon.stub();
var stopStub = sinon.stub();
var getSourcesStub = sinon.stub();
var enumerateDevicesStub = sinon.stub();
var stubs = [
    getUserMediaStub,
    getVideoTracksStub,
    applyConstraintsStub,
    getCapabilitiesStub,
    getConstraintsStub,
    getSettingsStub,
    stopStub,
    getSourcesStub,
    enumerateDevicesStub
];
var fakeCamera1 = {
    deviceId: "1",
    groupId: "1",
    kind: "videoinput",
    label: "Fake Camera Device (back)"
};
var fakeCamera2 = {
    deviceId: "2",
    groupId: "1",
    kind: "videoinput",
    label: "Fake Camera Device (front)"
};
var fakeCamera3 = {
    deviceId: "3",
    groupId: "1",
    kind: "videoinput",
    label: "Fake Camera Device (posteriore)"
};
var fakeCamera4 = {
    deviceId: "4",
    groupId: "1",
    kind: "videoinput",
    label: "Fake Camera Device (unknown)"
};
var fakeCamera5 = {
    deviceId: "5",
    groupId: "1",
    kind: "videoinput",
    label: "Fake Camera Device (unknown)"
};
var illegalFakeCamera1 = {
    deviceId: "10",
    groupId: "1",
    kind: "videoinput"
};
var legacyFakeCamera1 = {
    groupId: "1",
    kind: "videoinput",
    label: "Fake Camera Device (back)"
};
var legacyFakeCamera2 = {
    deviceId: "100",
    groupId: "1",
    kind: "video",
    label: "Fake Camera Device (front)"
};
var fakeMicrophone = {
    deviceId: "1000",
    groupId: "1",
    kind: "audioinput",
    label: "Fake Microhpone Device #2"
};
function fakeCompatibleBrowser() {
    navigator.mediaDevices = {
        getUserMedia: getUserMediaStub.resolves({
            getTracks: getVideoTracksStub,
            getVideoTracks: getVideoTracksStub
        })
    };
    getVideoTracksStub.returns([
        {
            applyConstraints: applyConstraintsStub.resolves(),
            getCapabilities: getCapabilitiesStub.returns(123),
            getConstraints: getConstraintsStub.returns(456),
            getSettings: getSettingsStub.returns(789),
            stop: stopStub
        }
    ]);
    window.Worker = function () {
        return;
    };
    window.WebAssembly = {};
    window.Blob = function () {
        return;
    };
    window.URL = {
        createObjectURL: function () {
            return;
        }
    };
}
function resetStubs() {
    stubs.forEach(function (mock) {
        mock.resetHistory();
    });
}
test.beforeEach(function () {
    CameraAccess.mediaStream = undefined;
    window.MediaStreamTrack = undefined;
    navigator.enumerateDevices = undefined;
});
test.serial("getCameras (errors)", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var error;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                resetStubs();
                return [4 /*yield*/, t.throws(CameraAccess.getCameras())];
            case 1:
                error = _a.sent();
                t.is(error.name, "UnsupportedBrowserError");
                t.false(getUserMediaStub.called);
                t.false(getSourcesStub.called);
                fakeCompatibleBrowser();
                navigator.mediaDevices.getUserMedia = getUserMediaStub.rejects(new Error("Test error"));
                resetStubs();
                return [4 /*yield*/, t.throws(CameraAccess.getCameras())];
            case 2:
                error = _a.sent();
                t.is(error.message, "Test error");
                t.true(getUserMediaStub.called);
                t.false(getSourcesStub.called);
                return [2 /*return*/];
        }
    });
}); });
test.serial("getCameras (MediaStreamTrack.getSources)", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var error, cameras, newCameras;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fakeCompatibleBrowser();
                // Intentionally wrong legacy method
                window.MediaStreamTrack = {
                    getSources: getSourcesStub.callsArgWith(0, null)
                };
                resetStubs();
                return [4 /*yield*/, t.throws(CameraAccess.getCameras())];
            case 1:
                error = _a.sent();
                t.is(error.name, "UnsupportedBrowserError");
                t.true(getUserMediaStub.called);
                t.true(getSourcesStub.called);
                window.MediaStreamTrack = {
                    getSources: getSourcesStub.callsArgWith(0, [
                        fakeCamera1,
                        fakeCamera2,
                        legacyFakeCamera1,
                        legacyFakeCamera2,
                        fakeMicrophone
                    ])
                };
                resetStubs();
                return [4 /*yield*/, CameraAccess.getCameras()];
            case 2:
                cameras = _a.sent();
                t.false(getUserMediaStub.called);
                t.true(getSourcesStub.called);
                t.not(cameras, null);
                t.is(cameras.length, 4);
                resetStubs();
                return [4 /*yield*/, CameraAccess.getCameras()];
            case 3:
                newCameras = _a.sent();
                t.false(getUserMediaStub.called);
                t.true(getSourcesStub.called);
                t.deepEqual(cameras, newCameras);
                t.is(cameras[0].deviceId, fakeCamera1.deviceId);
                t.is(cameras[0].label, fakeCamera1.label);
                t.is(cameras[0].cameraType, Camera.Type.BACK);
                t.is(cameras[0].currentResolution, undefined);
                t.is(cameras[1].deviceId, fakeCamera2.deviceId);
                t.is(cameras[1].label, fakeCamera2.label);
                t.is(cameras[1].cameraType, Camera.Type.FRONT);
                t.is(cameras[1].currentResolution, undefined);
                t.is(cameras[2].deviceId, "");
                t.is(cameras[2].label, legacyFakeCamera1.label);
                t.is(cameras[2].cameraType, Camera.Type.BACK);
                t.is(cameras[2].currentResolution, undefined);
                t.is(cameras[3].deviceId, legacyFakeCamera2.deviceId);
                t.is(cameras[3].label, legacyFakeCamera2.label);
                t.is(cameras[3].cameraType, Camera.Type.FRONT);
                t.is(cameras[3].currentResolution, undefined);
                return [2 /*return*/];
        }
    });
}); });
test.serial("getCameras (navigator.mediaDevices.enumerateDevices)", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var cameras, newCameras;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fakeCompatibleBrowser();
                navigator.mediaDevices.enumerateDevices = enumerateDevicesStub.resolves([
                    fakeCamera1,
                    fakeCamera2,
                    illegalFakeCamera1,
                    fakeMicrophone
                ]);
                window.MediaStreamTrack = {
                    getSources: getSourcesStub
                };
                resetStubs();
                return [4 /*yield*/, CameraAccess.getCameras()];
            case 1:
                cameras = _a.sent();
                t.true(getUserMediaStub.called);
                t.true(enumerateDevicesStub.called);
                t.false(getSourcesStub.called);
                t.not(cameras, null);
                t.is(cameras.length, 3);
                resetStubs();
                return [4 /*yield*/, CameraAccess.getCameras()];
            case 2:
                newCameras = _a.sent();
                t.false(getUserMediaStub.called);
                t.true(enumerateDevicesStub.called);
                t.false(getSourcesStub.called);
                t.deepEqual(cameras, newCameras);
                t.is(cameras[0].deviceId, fakeCamera1.deviceId);
                t.is(cameras[0].label, fakeCamera1.label);
                t.is(cameras[0].cameraType, Camera.Type.BACK);
                t.is(cameras[0].currentResolution, undefined);
                t.is(cameras[1].deviceId, fakeCamera2.deviceId);
                t.is(cameras[1].label, fakeCamera2.label);
                t.is(cameras[1].cameraType, Camera.Type.FRONT);
                t.is(cameras[1].currentResolution, undefined);
                t.is(cameras[2].deviceId, illegalFakeCamera1.deviceId);
                t.is(cameras[2].label, "");
                t.is(cameras[2].cameraType, Camera.Type.FRONT);
                t.is(cameras[2].currentResolution, undefined);
                return [2 /*return*/];
        }
    });
}); });
test.serial("getCameras (navigator.enumerateDevices)", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var cameras, newCameras;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fakeCompatibleBrowser();
                navigator.enumerateDevices = enumerateDevicesStub.resolves([
                    fakeCamera1,
                    fakeCamera2,
                    illegalFakeCamera1,
                    fakeMicrophone
                ]);
                navigator.mediaDevices.enumerateDevices = enumerateDevicesStub.resolves([
                    fakeCamera1,
                    fakeCamera2,
                    illegalFakeCamera1,
                    fakeMicrophone
                ]);
                window.MediaStreamTrack = {
                    getSources: getSourcesStub
                };
                resetStubs();
                return [4 /*yield*/, CameraAccess.getCameras()];
            case 1:
                cameras = _a.sent();
                t.true(getUserMediaStub.called);
                t.true(enumerateDevicesStub.called);
                t.false(getSourcesStub.called);
                t.not(cameras, null);
                t.is(cameras.length, 3);
                resetStubs();
                return [4 /*yield*/, CameraAccess.getCameras()];
            case 2:
                newCameras = _a.sent();
                t.false(getUserMediaStub.called);
                t.true(enumerateDevicesStub.called);
                t.false(getSourcesStub.called);
                t.deepEqual(cameras, newCameras);
                t.is(cameras[0].deviceId, fakeCamera1.deviceId);
                t.is(cameras[0].label, fakeCamera1.label);
                t.is(cameras[0].cameraType, Camera.Type.BACK);
                t.is(cameras[0].currentResolution, undefined);
                t.is(cameras[1].deviceId, fakeCamera2.deviceId);
                t.is(cameras[1].label, fakeCamera2.label);
                t.is(cameras[1].cameraType, Camera.Type.FRONT);
                t.is(cameras[1].currentResolution, undefined);
                t.is(cameras[2].deviceId, illegalFakeCamera1.deviceId);
                t.is(cameras[2].label, "");
                t.is(cameras[2].cameraType, Camera.Type.FRONT);
                t.is(cameras[2].currentResolution, undefined);
                return [2 /*return*/];
        }
    });
}); });
test.serial("getCameras (internationalized label)", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var cameras;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fakeCompatibleBrowser();
                navigator.mediaDevices.enumerateDevices = enumerateDevicesStub.resolves([fakeCamera3]);
                resetStubs();
                return [4 /*yield*/, CameraAccess.getCameras()];
            case 1:
                cameras = _a.sent();
                t.not(cameras, null);
                t.is(cameras.length, 1);
                t.is(cameras[0].deviceId, fakeCamera3.deviceId);
                t.is(cameras[0].label, fakeCamera3.label);
                t.is(cameras[0].cameraType, Camera.Type.BACK);
                t.is(cameras[0].currentResolution, undefined);
                return [2 /*return*/];
        }
    });
}); });
test.serial("getCameras (no front/back label information)", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var cameras;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fakeCompatibleBrowser();
                navigator.mediaDevices.enumerateDevices = enumerateDevicesStub.resolves([fakeCamera4, fakeCamera5]);
                resetStubs();
                return [4 /*yield*/, CameraAccess.getCameras()];
            case 1:
                cameras = _a.sent();
                t.not(cameras, null);
                t.is(cameras.length, 2);
                t.is(cameras[0].deviceId, fakeCamera4.deviceId);
                t.is(cameras[0].label, fakeCamera4.label);
                t.is(cameras[0].cameraType, Camera.Type.FRONT);
                t.is(cameras[0].currentResolution, undefined);
                t.is(cameras[1].deviceId, fakeCamera5.deviceId);
                t.is(cameras[1].label, fakeCamera5.label);
                t.is(cameras[1].cameraType, Camera.Type.BACK);
                t.is(cameras[1].currentResolution, undefined);
                return [2 /*return*/];
        }
    });
}); });
test.serial("getCameras (quickly consecutively)", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var cameras;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fakeCompatibleBrowser();
                navigator.mediaDevices.enumerateDevices = enumerateDevicesStub.resolves([fakeCamera4, fakeCamera5]);
                resetStubs();
                CameraAccess.getCameras();
                return [4 /*yield*/, CameraAccess.getCameras()];
            case 1:
                cameras = _a.sent();
                t.is(enumerateDevicesStub.callCount, 1);
                t.not(cameras, null);
                t.is(cameras.length, 2);
                t.is(cameras[0].deviceId, fakeCamera4.deviceId);
                t.is(cameras[0].label, fakeCamera4.label);
                t.is(cameras[0].cameraType, Camera.Type.FRONT);
                t.is(cameras[0].currentResolution, undefined);
                t.is(cameras[1].deviceId, fakeCamera5.deviceId);
                t.is(cameras[1].label, fakeCamera5.label);
                t.is(cameras[1].cameraType, Camera.Type.BACK);
                t.is(cameras[1].currentResolution, undefined);
                return [2 /*return*/];
        }
    });
}); });
// tslint:disable-next-line:max-func-body-length
test.serial("accessCameraStream", function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var mediaStream, fakeCamera;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fakeCompatibleBrowser();
                resetStubs();
                return [4 /*yield*/, CameraAccess.accessCameraStream(0)];
            case 1:
                mediaStream = _a.sent();
                t.true(getUserMediaStub.called);
                t.deepEqual(getUserMediaStub.args[0][0], {
                    audio: false,
                    video: true
                });
                t.not(mediaStream, null);
                fakeCamera = {
                    deviceId: fakeCamera1.deviceId,
                    label: fakeCamera1.label,
                    cameraType: Camera.Type.BACK
                };
                resetStubs();
                return [4 /*yield*/, CameraAccess.accessCameraStream(0, fakeCamera)];
            case 2:
                mediaStream = _a.sent();
                t.true(getUserMediaStub.called);
                t.deepEqual(getUserMediaStub.args[0][0], {
                    audio: false,
                    video: {
                        deviceId: {
                            exact: fakeCamera.deviceId
                        },
                        width: {
                            min: 1400,
                            ideal: 1920,
                            max: 1920
                        },
                        height: {
                            min: 900,
                            ideal: 1440,
                            max: 1440
                        }
                    }
                });
                t.not(mediaStream, null);
                resetStubs();
                return [4 /*yield*/, CameraAccess.accessCameraStream(1, fakeCamera)];
            case 3:
                mediaStream = _a.sent();
                t.true(getUserMediaStub.called);
                t.deepEqual(getUserMediaStub.args[0][0], {
                    audio: false,
                    video: {
                        deviceId: {
                            exact: fakeCamera.deviceId
                        },
                        width: {
                            min: 1200,
                            ideal: 1920,
                            max: 1920
                        },
                        height: {
                            min: 900,
                            ideal: 1200,
                            max: 1200
                        }
                    }
                });
                t.not(mediaStream, null);
                resetStubs();
                return [4 /*yield*/, CameraAccess.accessCameraStream(2, fakeCamera)];
            case 4:
                mediaStream = _a.sent();
                t.true(getUserMediaStub.called);
                t.deepEqual(getUserMediaStub.args[0][0], {
                    audio: false,
                    video: {
                        deviceId: {
                            exact: fakeCamera.deviceId
                        },
                        width: {
                            min: 1080,
                            ideal: 1920,
                            max: 1920
                        },
                        height: {
                            min: 900,
                            ideal: 1080,
                            max: 1080
                        }
                    }
                });
                t.not(mediaStream, null);
                resetStubs();
                return [4 /*yield*/, CameraAccess.accessCameraStream(3, fakeCamera)];
            case 5:
                mediaStream = _a.sent();
                t.true(getUserMediaStub.called);
                t.deepEqual(getUserMediaStub.args[0][0], {
                    audio: false,
                    video: {
                        deviceId: {
                            exact: fakeCamera.deviceId
                        },
                        width: {
                            min: 960,
                            ideal: 1280,
                            max: 1440
                        },
                        height: {
                            min: 480,
                            ideal: 960,
                            max: 960
                        }
                    }
                });
                t.not(mediaStream, null);
                resetStubs();
                return [4 /*yield*/, CameraAccess.accessCameraStream(4, fakeCamera)];
            case 6:
                mediaStream = _a.sent();
                t.true(getUserMediaStub.called);
                t.deepEqual(getUserMediaStub.args[0][0], {
                    audio: false,
                    video: {
                        deviceId: {
                            exact: fakeCamera.deviceId
                        },
                        width: {
                            min: 720,
                            ideal: 1280,
                            max: 1440
                        },
                        height: {
                            min: 480,
                            ideal: 720,
                            max: 768
                        }
                    }
                });
                t.not(mediaStream, null);
                resetStubs();
                return [4 /*yield*/, CameraAccess.accessCameraStream(5, fakeCamera)];
            case 7:
                mediaStream = _a.sent();
                t.true(getUserMediaStub.called);
                t.deepEqual(getUserMediaStub.args[0][0], {
                    audio: false,
                    video: {
                        deviceId: {
                            exact: fakeCamera.deviceId
                        },
                        width: {
                            min: 640,
                            ideal: 960,
                            max: 1440
                        },
                        height: {
                            min: 480,
                            ideal: 720,
                            max: 720
                        }
                    }
                });
                t.not(mediaStream, null);
                resetStubs();
                return [4 /*yield*/, CameraAccess.accessCameraStream(6, fakeCamera)];
            case 8:
                mediaStream = _a.sent();
                t.true(getUserMediaStub.called);
                t.deepEqual(getUserMediaStub.args[0][0], {
                    audio: false,
                    video: {
                        deviceId: {
                            exact: fakeCamera.deviceId
                        }
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=cameraAccess.spec.js.map
import * as tslib_1 from "tslib";
import { BrowserHelper } from "./browserHelper";
import { Camera } from "./camera";
import { CameraAccess } from "./cameraAccess";
import { CameraManager } from "./cameraManager";
import { CameraSettings } from "./cameraSettings";
import { CustomError } from "./customError";
/**
 * @hidden
 *
 * A barcode picker utility class used to handle camera interaction.
 */
var BarcodePickerCameraManager = /** @class */ (function (_super) {
    tslib_1.__extends(BarcodePickerCameraManager, _super);
    function BarcodePickerCameraManager(triggerFatalError, barcodePickerGui) {
        var _this = _super.call(this) || this;
        _this.postStreamInitializationListener = _this.postStreamInitialization.bind(_this);
        _this.videoTrackUnmuteListener = _this.videoTrackUnmuteRecovery.bind(_this);
        _this.triggerManualFocusListener = _this.triggerManualFocus.bind(_this);
        _this.triggerZoomStartListener = _this.triggerZoomStart.bind(_this);
        _this.triggerZoomMoveListener = _this.triggerZoomMove.bind(_this);
        _this.triggerFatalError = triggerFatalError;
        _this.barcodePickerGui = barcodePickerGui;
        return _this;
    }
    BarcodePickerCameraManager.prototype.setInteractionOptions = function (cameraSwitcherEnabled, torchToggleEnabled, tapToFocusEnabled, pinchToZoomEnabled) {
        this.cameraSwitcherEnabled = cameraSwitcherEnabled;
        this.torchToggleEnabled = torchToggleEnabled;
        this.tapToFocusEnabled = tapToFocusEnabled;
        this.pinchToZoomEnabled = pinchToZoomEnabled;
    };
    BarcodePickerCameraManager.prototype.isCameraSwitcherEnabled = function () {
        return this.cameraSwitcherEnabled;
    };
    BarcodePickerCameraManager.prototype.setCameraSwitcherEnabled = function (enabled) {
        var _this = this;
        this.cameraSwitcherEnabled = enabled;
        if (this.cameraSwitcherEnabled) {
            CameraAccess.getCameras().then(function (cameras) {
                if (cameras.length > 1) {
                    _this.barcodePickerGui.setCameraSwitcherVisible(true);
                }
            });
        }
        else {
            this.barcodePickerGui.setCameraSwitcherVisible(false);
        }
    };
    BarcodePickerCameraManager.prototype.isTorchToggleEnabled = function () {
        return this.torchToggleEnabled;
    };
    BarcodePickerCameraManager.prototype.setTorchToggleEnabled = function (enabled) {
        this.torchToggleEnabled = enabled;
        if (this.torchToggleEnabled) {
            if (this.mediaStream != null && this.mediaTrackCapabilities != null && this.mediaTrackCapabilities.torch) {
                this.barcodePickerGui.setTorchTogglerVisible(true);
            }
        }
        else {
            this.barcodePickerGui.setTorchTogglerVisible(false);
        }
    };
    BarcodePickerCameraManager.prototype.isTapToFocusEnabled = function () {
        return this.tapToFocusEnabled;
    };
    BarcodePickerCameraManager.prototype.setTapToFocusEnabled = function (enabled) {
        this.tapToFocusEnabled = enabled;
        if (this.mediaStream != null) {
            if (this.tapToFocusEnabled) {
                this.enableTapToFocusListeners();
            }
            else {
                this.disableTapToFocusListeners();
            }
        }
    };
    BarcodePickerCameraManager.prototype.isPinchToZoomEnabled = function () {
        return this.pinchToZoomEnabled;
    };
    BarcodePickerCameraManager.prototype.setPinchToZoomEnabled = function (enabled) {
        this.pinchToZoomEnabled = enabled;
        if (this.mediaStream != null) {
            if (this.pinchToZoomEnabled) {
                this.enablePinchToZoomListeners();
            }
            else {
                this.disablePinchToZoomListeners();
            }
        }
    };
    BarcodePickerCameraManager.prototype.setSelectedCamera = function (camera) {
        this.selectedCamera = camera;
    };
    BarcodePickerCameraManager.prototype.setSelectedCameraSettings = function (cameraSettings) {
        this.selectedCameraSettings = cameraSettings;
    };
    BarcodePickerCameraManager.prototype.setupCameras = function () {
        var _this = this;
        if (this.cameraInitializationPromise != null) {
            return this.cameraInitializationPromise;
        }
        return CameraAccess.getCameras().then(function (cameras) {
            if (_this.cameraSwitcherEnabled && cameras.length > 1) {
                _this.barcodePickerGui.setCameraSwitcherVisible(true);
            }
            if (_this.selectedCamera == null) {
                var autoselectedCamera = cameras.find(function (currentCamera) {
                    return currentCamera.cameraType === Camera.Type.BACK;
                });
                if (autoselectedCamera === undefined) {
                    autoselectedCamera = cameras[0];
                }
                if (autoselectedCamera === undefined) {
                    return Promise.reject(new CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
                }
                return _this.initializeCameraWithSettings(autoselectedCamera, _this.selectedCameraSettings);
            }
            else {
                return _this.initializeCameraWithSettings(_this.selectedCamera, _this.selectedCameraSettings);
            }
        });
    };
    BarcodePickerCameraManager.prototype.stopStream = function () {
        if (this.activeCamera != null) {
            this.activeCamera.currentResolution = undefined;
        }
        this.activeCamera = undefined;
        if (this.mediaStream != null) {
            window.clearTimeout(this.cameraAccessTimeout);
            window.clearInterval(this.cameraMetadataCheckInterval);
            window.clearTimeout(this.getCapabilitiesTimeout);
            window.clearTimeout(this.manualFocusWaitTimeout);
            window.clearTimeout(this.manualToAutofocusResumeTimeout);
            window.clearInterval(this.autofocusInterval);
            this.mediaStream.getVideoTracks().forEach(function (track) {
                track.stop();
            });
            this.mediaStream = undefined;
            this.mediaTrackCapabilities = undefined;
        }
    };
    BarcodePickerCameraManager.prototype.applyCameraSettings = function (cameraSettings) {
        this.selectedCameraSettings = cameraSettings;
        if (this.activeCamera == null) {
            return Promise.reject(new CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
        }
        return this.initializeCameraWithSettings(this.activeCamera, cameraSettings);
    };
    BarcodePickerCameraManager.prototype.reinitializeCamera = function (camera) {
        if (this.activeCamera == null && camera == null) {
            return Promise.reject(new CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
        }
        return this.initializeCameraWithSettings(camera == null ? this.activeCamera : camera, this.activeCameraSettings).catch(this.triggerFatalError);
    };
    BarcodePickerCameraManager.prototype.initializeCameraWithSettings = function (camera, cameraSettings) {
        var _this = this;
        var existingCameraInitializationPromise = Promise.resolve();
        if (this.cameraInitializationPromise != null) {
            existingCameraInitializationPromise = this.cameraInitializationPromise;
        }
        return existingCameraInitializationPromise.then(function () {
            _this.selectedCamera = camera;
            _this.selectedCameraSettings = _this.activeCameraSettings = cameraSettings;
            if (cameraSettings != null &&
                cameraSettings.resolutionPreference === CameraSettings.ResolutionPreference.FULL_HD) {
                _this.cameraInitializationPromise = _this.initializeCameraAndCheckUpdatedSettings(camera);
            }
            else {
                _this.cameraInitializationPromise = _this.initializeCameraAndCheckUpdatedSettings(camera, 3);
            }
            return _this.cameraInitializationPromise;
        });
    };
    BarcodePickerCameraManager.prototype.setTorchEnabled = function (enabled) {
        if (this.mediaStream != null && this.mediaTrackCapabilities != null && this.mediaTrackCapabilities.torch) {
            this.torchEnabled = enabled;
            var videoTracks = this.mediaStream.getVideoTracks();
            if (videoTracks.length !== 0 && typeof videoTracks[0].applyConstraints === "function") {
                videoTracks[0].applyConstraints({ advanced: [{ torch: enabled }] });
            }
        }
    };
    BarcodePickerCameraManager.prototype.toggleTorch = function () {
        this.torchEnabled = !this.torchEnabled;
        this.setTorchEnabled(this.torchEnabled);
    };
    BarcodePickerCameraManager.prototype.setZoom = function (zoomPercentage, currentZoom) {
        if (this.mediaStream != null && this.mediaTrackCapabilities != null && this.mediaTrackCapabilities.zoom) {
            var videoTracks = this.mediaStream.getVideoTracks();
            if (videoTracks.length !== 0 && typeof videoTracks[0].applyConstraints === "function") {
                var zoomRange = this.mediaTrackCapabilities.zoom.max - this.mediaTrackCapabilities.zoom.min;
                if (currentZoom == null) {
                    currentZoom = this.mediaTrackCapabilities.zoom.min;
                }
                var targetZoom = Math.max(this.mediaTrackCapabilities.zoom.min, Math.min(currentZoom + zoomRange * zoomPercentage, this.mediaTrackCapabilities.zoom.max));
                videoTracks[0].applyConstraints({ advanced: [{ zoom: targetZoom }] });
            }
        }
    };
    BarcodePickerCameraManager.prototype.postStreamInitialization = function () {
        var _this = this;
        window.clearTimeout(this.getCapabilitiesTimeout);
        this.getCapabilitiesTimeout = window.setTimeout(function () {
            _this.storeStreamCapabilities();
            _this.setupAutofocus();
            if (_this.torchToggleEnabled &&
                _this.mediaStream != null &&
                _this.mediaTrackCapabilities != null &&
                _this.mediaTrackCapabilities.torch) {
                _this.barcodePickerGui.setTorchTogglerVisible(true);
            }
        }, BarcodePickerCameraManager.getCapabilitiesTimeoutMs);
    };
    BarcodePickerCameraManager.prototype.videoTrackUnmuteRecovery = function () {
        this.reinitializeCamera();
    };
    BarcodePickerCameraManager.prototype.triggerManualFocus = function (event) {
        var _this = this;
        if (event != null) {
            event.preventDefault();
            if (event.type === "touchend" && event.touches.length !== 0) {
                return;
            }
            // Check if we were using pinch-to-zoom
            if (this.pinchToZoomDistance != null) {
                this.pinchToZoomDistance = undefined;
                return;
            }
        }
        window.clearTimeout(this.manualFocusWaitTimeout);
        window.clearTimeout(this.manualToAutofocusResumeTimeout);
        if (this.mediaStream != null && this.mediaTrackCapabilities != null) {
            var focusModeCapability = this.mediaTrackCapabilities.focusMode;
            if (focusModeCapability instanceof Array && focusModeCapability.indexOf("single-shot") !== -1) {
                if (focusModeCapability.indexOf("continuous") !== -1 && focusModeCapability.indexOf("manual") !== -1) {
                    this.triggerFocusMode("continuous")
                        .then(function () {
                        _this.manualFocusWaitTimeout = window.setTimeout(function () {
                            _this.triggerFocusMode("manual");
                        }, BarcodePickerCameraManager.manualFocusWaitTimeoutMs);
                    })
                        .catch(function () {
                        // Ignored
                    });
                    this.manualToAutofocusResumeTimeout = window.setTimeout(function () {
                        _this.triggerFocusMode("continuous");
                    }, BarcodePickerCameraManager.manualToAutofocusResumeTimeoutMs);
                }
                else if (focusModeCapability.indexOf("continuous") === -1) {
                    window.clearInterval(this.autofocusInterval);
                    this.triggerFocusMode("single-shot").catch(function () {
                        // Ignored
                    });
                    this.manualToAutofocusResumeTimeout = window.setTimeout(function () {
                        _this.autofocusInterval = window.setInterval(_this.triggerAutoFocus.bind(_this), BarcodePickerCameraManager.autofocusIntervalMs);
                    }, BarcodePickerCameraManager.manualToAutofocusResumeTimeoutMs);
                }
            }
        }
    };
    BarcodePickerCameraManager.prototype.triggerZoomStart = function (event) {
        if (event == null || event.touches.length !== 2) {
            return;
        }
        event.preventDefault();
        this.pinchToZoomDistance = Math.hypot((event.touches[1].screenX - event.touches[0].screenX) / screen.width, (event.touches[1].screenY - event.touches[0].screenY) / screen.height);
        if (this.mediaStream != null && this.mediaTrackCapabilities != null && this.mediaTrackCapabilities.zoom) {
            var videoTracks = this.mediaStream.getVideoTracks();
            if (videoTracks.length !== 0 && typeof videoTracks[0].getConstraints === "function") {
                this.pinchToZoomInitialZoom = this.mediaTrackCapabilities.zoom.min;
                var currentConstraints = videoTracks[0].getConstraints();
                if (currentConstraints.advanced != null) {
                    var currentZoomConstraint = currentConstraints.advanced.find(function (constraint) {
                        return "zoom" in constraint;
                    });
                    if (currentZoomConstraint != null) {
                        this.pinchToZoomInitialZoom = currentZoomConstraint.zoom;
                    }
                }
            }
        }
    };
    BarcodePickerCameraManager.prototype.triggerZoomMove = function (event) {
        if (this.pinchToZoomDistance == null || event == null || event.touches.length !== 2) {
            return;
        }
        event.preventDefault();
        this.setZoom((Math.hypot((event.touches[1].screenX - event.touches[0].screenX) / screen.width, (event.touches[1].screenY - event.touches[0].screenY) / screen.height) -
            this.pinchToZoomDistance) *
            2, this.pinchToZoomInitialZoom);
    };
    BarcodePickerCameraManager.prototype.storeStreamCapabilities = function () {
        if (this.mediaStream != null) {
            var videoTracks = this.mediaStream.getVideoTracks();
            if (videoTracks.length !== 0 && typeof videoTracks[0].getCapabilities === "function") {
                this.mediaTrackCapabilities = videoTracks[0].getCapabilities();
            }
        }
    };
    BarcodePickerCameraManager.prototype.setupAutofocus = function () {
        window.clearTimeout(this.manualFocusWaitTimeout);
        window.clearTimeout(this.manualToAutofocusResumeTimeout);
        if (this.mediaStream != null && this.mediaTrackCapabilities != null) {
            var focusModeCapability = this.mediaTrackCapabilities.focusMode;
            if (focusModeCapability instanceof Array &&
                focusModeCapability.indexOf("continuous") === -1 &&
                focusModeCapability.indexOf("single-shot") !== -1) {
                window.clearInterval(this.autofocusInterval);
                this.autofocusInterval = window.setInterval(this.triggerAutoFocus.bind(this), BarcodePickerCameraManager.autofocusIntervalMs);
            }
        }
    };
    BarcodePickerCameraManager.prototype.triggerAutoFocus = function () {
        this.triggerFocusMode("single-shot").catch(function () {
            // Ignored
        });
    };
    BarcodePickerCameraManager.prototype.triggerFocusMode = function (focusMode) {
        if (this.mediaStream != null) {
            var videoTracks = this.mediaStream.getVideoTracks();
            if (videoTracks.length !== 0 && typeof videoTracks[0].applyConstraints === "function") {
                return videoTracks[0].applyConstraints({ advanced: [{ focusMode: focusMode }] });
            }
        }
        return Promise.reject(undefined);
    };
    BarcodePickerCameraManager.prototype.enableTapToFocusListeners = function () {
        var _this = this;
        ["touchend", "mousedown"].forEach(function (eventName) {
            _this.barcodePickerGui.videoElement.addEventListener(eventName, _this.triggerManualFocusListener);
        });
    };
    BarcodePickerCameraManager.prototype.enablePinchToZoomListeners = function () {
        this.barcodePickerGui.videoElement.addEventListener("touchstart", this.triggerZoomStartListener);
        this.barcodePickerGui.videoElement.addEventListener("touchmove", this.triggerZoomMoveListener);
    };
    BarcodePickerCameraManager.prototype.disableTapToFocusListeners = function () {
        var _this = this;
        ["touchend", "mousedown"].forEach(function (eventName) {
            _this.barcodePickerGui.videoElement.removeEventListener(eventName, _this.triggerManualFocusListener);
        });
    };
    BarcodePickerCameraManager.prototype.disablePinchToZoomListeners = function () {
        this.barcodePickerGui.videoElement.removeEventListener("touchstart", this.triggerZoomStartListener);
        this.barcodePickerGui.videoElement.removeEventListener("touchmove", this.triggerZoomMoveListener);
    };
    BarcodePickerCameraManager.prototype.initializeCameraAndCheckUpdatedSettings = function (camera, resolutionFallbackLevel) {
        var _this = this;
        return this.initializeCamera(camera, resolutionFallbackLevel)
            .then(function () {
            // Check if due to asynchronous behaviour camera settings were changed while camera was initialized
            if (_this.selectedCameraSettings !== _this.activeCameraSettings &&
                (_this.selectedCameraSettings == null ||
                    _this.activeCameraSettings == null ||
                    Object.keys(_this.selectedCameraSettings).some(function (cameraSettingsProperty) {
                        return (_this.selectedCameraSettings[cameraSettingsProperty] !==
                            _this.activeCameraSettings[cameraSettingsProperty]);
                    }))) {
                _this.activeCameraSettings = _this.selectedCameraSettings;
                return _this.initializeCameraAndCheckUpdatedSettings(camera, resolutionFallbackLevel);
            }
            _this.cameraInitializationPromise = undefined;
            return Promise.resolve();
        })
            .catch(function (error) {
            _this.cameraInitializationPromise = undefined;
            return Promise.reject(error);
        });
    };
    BarcodePickerCameraManager.prototype.retryInitializeCameraIfNeeded = function (camera, resolutionFallbackLevel, resolve, reject, error) {
        if (resolutionFallbackLevel < 6) {
            return this.initializeCamera(camera, resolutionFallbackLevel + 1)
                .then(resolve)
                .catch(reject);
        }
        else {
            return reject(error);
        }
    };
    BarcodePickerCameraManager.prototype.initializeCamera = function (camera, resolutionFallbackLevel) {
        var _this = this;
        if (resolutionFallbackLevel === void 0) { resolutionFallbackLevel = 0; }
        if (camera == null) {
            return Promise.reject(new CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
        }
        this.stopStream();
        this.torchEnabled = false;
        this.barcodePickerGui.setTorchTogglerVisible(false);
        return new Promise(function (resolve, reject) {
            CameraAccess.accessCameraStream(resolutionFallbackLevel, camera)
                .then(function (stream) {
                // Detect weird browser behaviour that on unsupported resolution returns a 2x2 video instead
                if (typeof stream.getTracks()[0].getSettings === "function") {
                    var mediaTrackSettings = stream.getTracks()[0].getSettings();
                    if (mediaTrackSettings.width != null &&
                        mediaTrackSettings.height != null &&
                        (mediaTrackSettings.width === 2 || mediaTrackSettings.height === 2)) {
                        if (resolutionFallbackLevel === 6) {
                            return reject(new CustomError({ name: "NotReadableError", message: "Could not initialize camera correctly" }));
                        }
                        else {
                            return _this.initializeCamera(camera, resolutionFallbackLevel + 1)
                                .then(resolve)
                                .catch(reject);
                        }
                    }
                }
                _this.mediaStream = stream;
                _this.mediaStream.getVideoTracks().forEach(function (track) {
                    // Reinitialize camera on weird pause/resumption coming from the OS
                    // This will add the listener only once in the case of multiple calls, identical listeners are ignored
                    track.addEventListener("unmute", _this.videoTrackUnmuteListener);
                });
                // This will add the listener only once in the case of multiple calls, identical listeners are ignored
                _this.barcodePickerGui.videoElement.addEventListener("loadedmetadata", _this.postStreamInitializationListener);
                if (_this.tapToFocusEnabled) {
                    _this.enableTapToFocusListeners();
                }
                if (_this.pinchToZoomEnabled) {
                    _this.enablePinchToZoomListeners();
                }
                _this.resolveInitializeCamera(camera, resolve, reject);
                _this.barcodePickerGui.videoElement.srcObject = stream;
                _this.barcodePickerGui.videoElement.load();
                var playPromise = _this.barcodePickerGui.videoElement.play();
                if (playPromise != null) {
                    playPromise.catch(function () {
                        // Can sometimes cause an incorrect rejection (all is good, ignore).
                    });
                }
            })
                .catch(function (error) {
                if (error.name === "SourceUnavailableError") {
                    error.name = "NotReadableError";
                }
                if (error.message === "Invalid constraint" ||
                    (error.name === "OverconstrainedError" && error.constraint === "deviceId")) {
                    // Camera might have changed deviceId: check for new cameras with same label and type but different deviceId
                    return CameraAccess.getCameras().then(function (cameras) {
                        var newCamera = cameras.find(function (currentCamera) {
                            return (currentCamera.label === camera.label &&
                                currentCamera.cameraType === camera.cameraType &&
                                currentCamera.deviceId !== camera.deviceId);
                        });
                        if (newCamera == null) {
                            return _this.retryInitializeCameraIfNeeded(camera, resolutionFallbackLevel, resolve, reject, error);
                        }
                        else {
                            return _this.initializeCamera(newCamera, resolutionFallbackLevel)
                                .then(resolve)
                                .catch(reject);
                        }
                    });
                }
                if (error.name === "PermissionDeniedError" ||
                    error.name === "PermissionDismissedError" ||
                    error.name === "NotAllowedError" ||
                    error.name === "NotFoundError" ||
                    error.name === "AbortError") {
                    // Camera is not accessible at all
                    return reject(error);
                }
                return _this.retryInitializeCameraIfNeeded(camera, resolutionFallbackLevel, resolve, reject, error);
            });
        });
    };
    BarcodePickerCameraManager.prototype.resolveInitializeCamera = function (camera, resolve, reject) {
        var _this = this;
        var cameraNotReadableError = new CustomError({
            name: "NotReadableError",
            message: "Could not initialize camera correctly"
        });
        window.clearTimeout(this.cameraAccessTimeout);
        this.cameraAccessTimeout = window.setTimeout(function () {
            _this.stopStream();
            reject(cameraNotReadableError);
        }, BarcodePickerCameraManager.cameraAccessTimeoutMs);
        if (BrowserHelper.userAgentInfo.getOS().name === "iOS") {
            // iOS camera access should always work but can fail to call "later" video callbacks, so we check loadstart
            this.barcodePickerGui.videoElement.onloadstart = function () {
                _this.barcodePickerGui.videoElement.onloadstart = null;
                window.clearTimeout(_this.cameraAccessTimeout);
                _this.activeCamera = camera;
                _this.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay"));
                resolve();
            };
        }
        else {
            this.barcodePickerGui.videoElement.onloadeddata = function () {
                _this.barcodePickerGui.videoElement.onloadeddata = null;
                window.clearTimeout(_this.cameraAccessTimeout);
                // Detect weird browser behaviour that on unsupported resolution returns a 2x2 video instead
                // Also detect failed camera access with no error but also no video stream provided
                if (_this.barcodePickerGui.videoElement.videoWidth > 2 &&
                    _this.barcodePickerGui.videoElement.videoHeight > 2 &&
                    _this.barcodePickerGui.videoElement.currentTime > 0) {
                    _this.activeCamera = camera;
                    _this.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay"));
                    return resolve();
                }
                var cameraMetadataCheckStartTime = performance.now();
                window.clearInterval(_this.cameraMetadataCheckInterval);
                _this.cameraMetadataCheckInterval = window.setInterval(function () {
                    if (_this.barcodePickerGui.videoElement.videoWidth === 2 ||
                        _this.barcodePickerGui.videoElement.videoHeight === 2 ||
                        _this.barcodePickerGui.videoElement.currentTime === 0) {
                        if (performance.now() - cameraMetadataCheckStartTime >
                            BarcodePickerCameraManager.cameraMetadataCheckTimeoutMs) {
                            window.clearInterval(_this.cameraMetadataCheckInterval);
                            _this.stopStream();
                            return reject(cameraNotReadableError);
                        }
                        return;
                    }
                    window.clearInterval(_this.cameraMetadataCheckInterval);
                    _this.activeCamera = camera;
                    _this.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay"));
                    return resolve();
                }, BarcodePickerCameraManager.cameraMetadataCheckIntervalMs);
            };
        }
    };
    BarcodePickerCameraManager.cameraAccessTimeoutMs = 4000;
    BarcodePickerCameraManager.cameraMetadataCheckTimeoutMs = 4000;
    BarcodePickerCameraManager.cameraMetadataCheckIntervalMs = 50;
    BarcodePickerCameraManager.getCapabilitiesTimeoutMs = 500;
    BarcodePickerCameraManager.autofocusIntervalMs = 1500;
    BarcodePickerCameraManager.manualToAutofocusResumeTimeoutMs = 5000;
    BarcodePickerCameraManager.manualFocusWaitTimeoutMs = 400;
    return BarcodePickerCameraManager;
}(CameraManager));
export { BarcodePickerCameraManager };
//# sourceMappingURL=barcodePickerCameraManager.js.map
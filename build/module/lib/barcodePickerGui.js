import { cameraImage, laserActiveImage, laserPausedImage, scanditLogoImage, switchCameraImage, toggleTorchImage } from "./assets/base64assets";
import { BarcodePicker } from "./barcodePicker";
import { Camera } from "./camera";
import { CameraAccess } from "./cameraAccess";
import { ImageSettings } from "./imageSettings";
/**
 * @hidden
 */
var BarcodePickerGui = /** @class */ (function () {
    function BarcodePickerGui(scanner, originElement, singleImageMode, scanningPaused, visible, guiStyle, videoFit, cameraUploadCallback) {
        var _this = this;
        this.scanner = scanner;
        this.originElement = originElement;
        this.singleImageMode = singleImageMode;
        this.scanningPaused = scanningPaused;
        this.cameraUploadCallback = cameraUploadCallback;
        this.mirrorImage = false;
        this.grandParentElement = document.createElement("div");
        this.grandParentElement.className = BarcodePickerGui.grandParentElementClassName;
        this.originElement.appendChild(this.grandParentElement);
        this.parentElement = document.createElement("div");
        this.parentElement.className = BarcodePickerGui.parentElementClassName;
        this.grandParentElement.appendChild(this.parentElement);
        this.videoImageCanvasContext = document.createElement("canvas").getContext("2d");
        this.videoElement = document.createElement("video");
        this.cameraSwitcherElement = document.createElement("img");
        this.torchTogglerElement = document.createElement("img");
        this.laserActiveImageElement = document.createElement("img");
        this.laserPausedImageElement = document.createElement("img");
        this.viewfinderElement = document.createElement("div");
        if (singleImageMode) {
            this.cameraUploadElement = document.createElement("div");
            this.cameraUploadInputElement = document.createElement("input");
            this.cameraUploadLabelElement = document.createElement("label");
            this.cameraUploadProgressElement = document.createElement("div");
            this.setupCameraUploadGuiAssets();
            this.guiStyle = BarcodePicker.GuiStyle.NONE;
        }
        else {
            this.setupVideoElement();
            this.setupCameraSwitcher();
            this.setupTorchToggler();
            this.setupFullGuiAssets();
            this.setGuiStyle(guiStyle);
            this.setVideoFit(videoFit);
            this.visibilityListener = this.checkAndRecoverPlayback.bind(this);
            document.addEventListener("visibilitychange", this.visibilityListener);
        }
        this.resizeInterval = window.setInterval(function () {
            _this.resizeIfNeeded();
        }, 250);
        this.setupSharedAssets();
        this.setVisible(visible);
    }
    BarcodePickerGui.prototype.destroy = function () {
        if (this.visibilityListener != null) {
            document.removeEventListener("visibilitychange", this.visibilityListener);
        }
        window.clearInterval(this.resizeInterval);
        this.grandParentElement.remove();
        this.originElement.classList.remove(BarcodePickerGui.hiddenClassName);
    };
    BarcodePickerGui.prototype.setCameraManager = function (cameraManager) {
        this.cameraManager = cameraManager;
    };
    BarcodePickerGui.prototype.pauseScanning = function () {
        this.scanningPaused = true;
        this.laserActiveImageElement.classList.add(BarcodePickerGui.hiddenOpacityClassName);
        this.laserPausedImageElement.classList.remove(BarcodePickerGui.hiddenOpacityClassName);
        this.viewfinderElement.classList.add(BarcodePickerGui.pausedClassName);
    };
    BarcodePickerGui.prototype.resumeScanning = function () {
        this.scanningPaused = false;
        this.laserPausedImageElement.classList.add(BarcodePickerGui.hiddenOpacityClassName);
        this.laserActiveImageElement.classList.remove(BarcodePickerGui.hiddenOpacityClassName);
        this.viewfinderElement.classList.remove(BarcodePickerGui.pausedClassName);
    };
    BarcodePickerGui.prototype.isVisible = function () {
        return this.visible;
    };
    BarcodePickerGui.prototype.setVisible = function (visible) {
        this.visible = visible;
        if (visible) {
            this.originElement.classList.remove(BarcodePickerGui.hiddenClassName);
        }
        else {
            this.originElement.classList.add(BarcodePickerGui.hiddenClassName);
        }
    };
    BarcodePickerGui.prototype.isMirrorImageEnabled = function () {
        return this.mirrorImage;
    };
    BarcodePickerGui.prototype.setMirrorImageEnabled = function (enabled) {
        this.mirrorImage = enabled;
        if (enabled) {
            this.videoElement.classList.add(BarcodePickerGui.mirroredClassName);
        }
        else {
            this.videoElement.classList.remove(BarcodePickerGui.mirroredClassName);
        }
    };
    BarcodePickerGui.prototype.setGuiStyle = function (guiStyle) {
        if (this.singleImageMode) {
            return;
        }
        this.guiStyle = guiStyle;
        switch (this.guiStyle) {
            case BarcodePicker.GuiStyle.NONE:
                this.laserActiveImageElement.classList.add(BarcodePickerGui.hiddenClassName);
                this.laserPausedImageElement.classList.add(BarcodePickerGui.hiddenClassName);
                this.viewfinderElement.classList.add(BarcodePickerGui.hiddenClassName);
                break;
            case BarcodePicker.GuiStyle.LASER:
                this.laserActiveImageElement.classList.remove(BarcodePickerGui.hiddenClassName);
                this.laserPausedImageElement.classList.remove(BarcodePickerGui.hiddenClassName);
                this.viewfinderElement.classList.add(BarcodePickerGui.hiddenClassName);
                break;
            case BarcodePicker.GuiStyle.VIEWFINDER:
                this.laserActiveImageElement.classList.add(BarcodePickerGui.hiddenClassName);
                this.laserPausedImageElement.classList.add(BarcodePickerGui.hiddenClassName);
                this.viewfinderElement.classList.remove(BarcodePickerGui.hiddenClassName);
                break;
            default:
                break;
        }
    };
    BarcodePickerGui.prototype.setVideoFit = function (objectFit) {
        if (this.singleImageMode) {
            return;
        }
        this.videoFit = objectFit;
        if (objectFit === BarcodePicker.ObjectFit.COVER) {
            this.videoElement.style.objectFit = "cover";
            this.videoElement.dataset.objectFit = "cover"; // used by "objectFitPolyfill" library
        }
        else {
            this.videoElement.style.objectFit = "contain";
            this.videoElement.dataset.objectFit = "contain"; // used by "objectFitPolyfill" library
            this.scanner.applyScanSettings(this.scanner.getScanSettings().setBaseSearchArea({ x: 0, y: 0, width: 1.0, height: 1.0 }));
        }
        // Retrigger resize
        this.lastKnownElementWidth = 0;
        this.lastKnownElementHeight = 0;
        this.resizeIfNeeded();
        window.objectFitPolyfill(this.videoElement);
    };
    BarcodePickerGui.prototype.reassignOriginElement = function (originElement) {
        if (!this.visible) {
            this.originElement.classList.remove(BarcodePickerGui.hiddenClassName);
            originElement.classList.add(BarcodePickerGui.hiddenClassName);
        }
        originElement.appendChild(this.grandParentElement);
        this.checkAndRecoverPlayback();
        this.resizeIfNeeded();
        this.originElement = originElement;
    };
    BarcodePickerGui.prototype.flashGUI = function () {
        if (this.guiStyle === BarcodePicker.GuiStyle.LASER) {
            this.flashLaser();
        }
        else if (this.guiStyle === BarcodePicker.GuiStyle.VIEWFINDER) {
            this.flashViewfinder();
        }
    };
    BarcodePickerGui.prototype.getVideoImageData = function () {
        if (!this.singleImageMode) {
            this.videoImageCanvasContext.drawImage(this.videoElement, 0, 0);
        }
        // This could happen in very weird situations and should be temporary
        if (this.videoImageCanvasContext.canvas.width <= 2 || this.videoImageCanvasContext.canvas.height <= 2) {
            return undefined;
        }
        return this.videoImageCanvasContext.getImageData(0, 0, this.videoImageCanvasContext.canvas.width, this.videoImageCanvasContext.canvas.height).data;
    };
    BarcodePickerGui.prototype.getVideoCurrentTime = function () {
        return this.videoElement.currentTime;
    };
    BarcodePickerGui.prototype.setCameraSwitcherVisible = function (visible) {
        if (visible) {
            this.cameraSwitcherElement.classList.remove(BarcodePickerGui.hiddenClassName);
        }
        else {
            this.cameraSwitcherElement.classList.add(BarcodePickerGui.hiddenClassName);
        }
    };
    BarcodePickerGui.prototype.setTorchTogglerVisible = function (visible) {
        if (visible) {
            this.torchTogglerElement.classList.remove(BarcodePickerGui.hiddenClassName);
        }
        else {
            this.torchTogglerElement.classList.add(BarcodePickerGui.hiddenClassName);
        }
    };
    BarcodePickerGui.prototype.setCameraUploadGuiAvailable = function (available) {
        if (available) {
            this.cameraUploadProgressElement.classList.add(BarcodePickerGui.flashWhiteInsetClassName);
            this.cameraUploadElement.classList.remove(BarcodePickerGui.opacityPulseClassName);
        }
        else {
            this.cameraUploadProgressElement.classList.remove(BarcodePickerGui.flashWhiteInsetClassName);
            this.cameraUploadElement.classList.add(BarcodePickerGui.opacityPulseClassName);
        }
    };
    BarcodePickerGui.prototype.setupVideoElement = function () {
        var _this = this;
        this.videoElement.setAttribute("autoplay", "autoplay");
        this.videoElement.setAttribute("playsinline", "true");
        this.videoElement.setAttribute("muted", "muted");
        this.videoElement.className = BarcodePickerGui.videoElementClassName;
        this.parentElement.appendChild(this.videoElement);
        this.videoElement.addEventListener("canplay", function () {
            if (_this.cameraManager != null && _this.cameraManager.activeCamera != null) {
                window.setTimeout(function () {
                    // Retrigger resize
                    _this.lastKnownElementWidth = 0;
                    _this.lastKnownElementHeight = 0;
                    _this.resizeIfNeeded();
                    window.objectFitPolyfill(_this.videoElement);
                }, 0);
                _this.cameraManager.activeCamera.currentResolution = {
                    width: _this.videoElement.videoWidth,
                    height: _this.videoElement.videoHeight
                };
                _this.videoImageCanvasContext.canvas.width = _this.videoElement.videoWidth;
                _this.videoImageCanvasContext.canvas.height = _this.videoElement.videoHeight;
                _this.scanner.applyImageSettings({
                    width: _this.videoElement.videoWidth,
                    height: _this.videoElement.videoHeight,
                    format: ImageSettings.Format.RGBA_8U
                });
                _this.setMirrorImageEnabled(_this.cameraManager.activeCamera.cameraType === Camera.Type.FRONT);
            }
        });
    };
    BarcodePickerGui.prototype.setupSharedAssets = function () {
        var scanditLogoImageElement = document.createElement("img");
        scanditLogoImageElement.src = scanditLogoImage;
        scanditLogoImageElement.className = BarcodePickerGui.scanditLogoImageElementClassName;
        this.parentElement.appendChild(scanditLogoImageElement);
    };
    BarcodePickerGui.prototype.setupCameraUploadGuiAssets = function () {
        var _this = this;
        this.cameraUploadElement.className = BarcodePickerGui.cameraUploadElementClassName;
        this.parentElement.appendChild(this.cameraUploadElement);
        this.cameraUploadInputElement.type = "file";
        this.cameraUploadInputElement.accept = "image/*";
        this.cameraUploadInputElement.setAttribute("capture", "environment");
        this.cameraUploadInputElement.addEventListener("change", this.cameraUploadFile.bind(this));
        this.cameraUploadInputElement.addEventListener("click", function (event) {
            if (_this.scanningPaused || _this.scanner.isBusyProcessing()) {
                event.preventDefault();
            }
        });
        this.cameraUploadLabelElement.appendChild(this.cameraUploadInputElement);
        this.cameraUploadElement.appendChild(this.cameraUploadLabelElement);
        var cameraUploadImageElement = document.createElement("img");
        cameraUploadImageElement.src = cameraImage;
        this.cameraUploadLabelElement.appendChild(cameraUploadImageElement);
        var cameraUploadTextElement = document.createElement("div");
        cameraUploadTextElement.innerText = "Scan from Camera";
        this.cameraUploadLabelElement.appendChild(cameraUploadTextElement);
        this.cameraUploadProgressElement.classList.add("radial-progress");
        this.cameraUploadElement.appendChild(this.cameraUploadProgressElement);
    };
    BarcodePickerGui.prototype.setupFullGuiAssets = function () {
        this.laserActiveImageElement.src = laserActiveImage;
        this.laserActiveImageElement.className = BarcodePickerGui.laserImageElementClassName;
        this.parentElement.appendChild(this.laserActiveImageElement);
        this.laserPausedImageElement.src = laserPausedImage;
        this.laserPausedImageElement.className = BarcodePickerGui.laserImageElementClassName;
        this.parentElement.appendChild(this.laserPausedImageElement);
        this.viewfinderElement.className = BarcodePickerGui.viewfinderElementClassName;
        this.parentElement.appendChild(this.viewfinderElement);
        // Show inactive GUI, as for now the scanner isn't ready yet
        this.laserActiveImageElement.classList.add(BarcodePickerGui.hiddenOpacityClassName);
        this.laserPausedImageElement.classList.remove(BarcodePickerGui.hiddenOpacityClassName);
        this.viewfinderElement.classList.add(BarcodePickerGui.pausedClassName);
    };
    BarcodePickerGui.prototype.flashLaser = function () {
        this.laserActiveImageElement.classList.remove(BarcodePickerGui.flashColorClassName);
        // tslint:disable-next-line:no-unused-expression
        this.laserActiveImageElement.offsetHeight; // Trigger reflow to restart animation
        this.laserActiveImageElement.classList.add(BarcodePickerGui.flashColorClassName);
    };
    BarcodePickerGui.prototype.flashViewfinder = function () {
        this.viewfinderElement.classList.remove(BarcodePickerGui.flashWhiteClassName);
        // tslint:disable-next-line:no-unused-expression
        this.viewfinderElement.offsetHeight; // Trigger reflow to restart animation
        this.viewfinderElement.classList.add(BarcodePickerGui.flashWhiteClassName);
    };
    BarcodePickerGui.prototype.resizeIfNeeded = function () {
        if (this.lastKnownElementWidth === this.originElement.clientWidth &&
            this.lastKnownElementHeight === this.originElement.clientHeight) {
            return;
        }
        if (this.singleImageMode) {
            this.resizeCameraUploadIfNeeded();
        }
        else {
            this.resizeVideoIfNeeded();
        }
    };
    BarcodePickerGui.prototype.resizeCameraUploadIfNeeded = function () {
        var width = this.cameraUploadElement.clientWidth;
        var height = this.cameraUploadElement.clientHeight;
        this.lastKnownElementWidth = width;
        this.lastKnownElementHeight = height;
        this.cameraUploadLabelElement.style.transform = "scale(" + Math.min(1, width / 500, height / 300) + ")";
        this.cameraUploadProgressElement.style.transform = "scale(" + Math.min(1, width / 500, height / 300) + ")";
    };
    BarcodePickerGui.prototype.resizeVideoIfNeeded = function () {
        if (this.videoElement.videoHeight < 1 ||
            this.originElement.clientHeight < 1 ||
            (this.lastKnownElementWidth === this.originElement.clientWidth &&
                this.lastKnownElementHeight === this.originElement.clientHeight)) {
            return;
        }
        this.parentElement.style.maxWidth = null;
        this.parentElement.style.maxHeight = null;
        var videoRatio = this.videoElement.videoWidth / this.videoElement.videoHeight;
        var width = this.originElement.clientWidth;
        var height = this.originElement.clientHeight;
        this.lastKnownElementWidth = width;
        this.lastKnownElementHeight = height;
        if (this.videoFit === BarcodePicker.ObjectFit.COVER) {
            var widthPercentage = 1;
            var heightPercentage = 1;
            if (videoRatio < width / height) {
                heightPercentage = Math.min(1, height / (width / videoRatio));
            }
            else {
                widthPercentage = Math.min(1, width / (height * videoRatio));
            }
            this.scanner.applyScanSettings(this.scanner.getScanSettings().setBaseSearchArea({
                x: (1 - widthPercentage) / 2,
                y: (1 - heightPercentage) / 2,
                width: widthPercentage,
                height: heightPercentage
            }));
            return;
        }
        if (videoRatio > width / height) {
            height = width / videoRatio;
        }
        else {
            width = height * videoRatio;
        }
        this.parentElement.style.maxWidth = Math.ceil(width) + "px";
        this.parentElement.style.maxHeight = Math.ceil(height) + "px";
    };
    BarcodePickerGui.prototype.checkAndRecoverPlayback = function () {
        if (this.cameraManager != null &&
            this.cameraManager.activeCamera != null &&
            this.videoElement != null &&
            this.videoElement.srcObject != null) {
            if (!this.videoElement.srcObject.active) {
                this.cameraManager.reinitializeCamera();
            }
            else {
                var playPromise = this.videoElement.play();
                if (playPromise != null) {
                    playPromise.catch(function () {
                        // Can sometimes cause an incorrect rejection (all is good, ignore).
                    });
                }
            }
        }
    };
    BarcodePickerGui.prototype.cameraUploadFileProcess = function (image, width, height) {
        var _this = this;
        this.videoImageCanvasContext.canvas.width = width;
        this.videoImageCanvasContext.canvas.height = height;
        this.videoImageCanvasContext.drawImage(image, 0, 0, width, height);
        this.scanner.applyImageSettings({
            width: width,
            height: height,
            format: ImageSettings.Format.RGBA_8U
        });
        this.setCameraUploadGuiAvailable(false);
        this.cameraUploadCallback().then(function () {
            _this.setCameraUploadGuiAvailable(true);
        });
    };
    BarcodePickerGui.prototype.cameraUploadFile = function () {
        var _this = this;
        var files = this.cameraUploadInputElement.files;
        if (files != null && files.length !== 0) {
            var image_1 = new Image();
            var fileReader = new FileReader();
            fileReader.onload = function (event) {
                _this.cameraUploadInputElement.value = "";
                if (event.target != null) {
                    image_1.onload = function () {
                        _this.cameraUploadProgressElement.setAttribute("data-progress", "100");
                        var resizedImageWidth;
                        var resizedImageHeight;
                        var resizedImageSizeLimit = 1440;
                        if (image_1.naturalWidth <= resizedImageSizeLimit && image_1.naturalHeight <= resizedImageSizeLimit) {
                            resizedImageWidth = image_1.naturalWidth;
                            resizedImageHeight = image_1.naturalHeight;
                        }
                        else {
                            if (image_1.naturalWidth > image_1.naturalHeight) {
                                resizedImageWidth = resizedImageSizeLimit;
                                resizedImageHeight = Math.round((image_1.naturalHeight / image_1.naturalWidth) * resizedImageSizeLimit);
                            }
                            else {
                                resizedImageWidth = Math.round((image_1.naturalWidth / image_1.naturalHeight) * resizedImageSizeLimit);
                                resizedImageHeight = resizedImageSizeLimit;
                            }
                        }
                        _this.cameraUploadFileProcess(image_1, resizedImageWidth, resizedImageHeight);
                    };
                    image_1.onprogress = function (event2) {
                        if (event2.lengthComputable) {
                            var progress = Math.round((event2.loaded / event2.total) * 20) * 5;
                            if (progress <= 100) {
                                _this.cameraUploadProgressElement.setAttribute("data-progress", progress.toString());
                            }
                        }
                    };
                    image_1.src = event.target.result;
                }
            };
            this.cameraUploadProgressElement.setAttribute("data-progress", "0");
            fileReader.readAsDataURL(files[0]);
        }
    };
    BarcodePickerGui.prototype.setupCameraSwitcher = function () {
        var _this = this;
        this.cameraSwitcherElement.src = switchCameraImage;
        this.cameraSwitcherElement.className = BarcodePickerGui.cameraSwitcherElementClassName;
        this.cameraSwitcherElement.classList.add(BarcodePickerGui.hiddenClassName);
        this.parentElement.appendChild(this.cameraSwitcherElement);
        ["touchstart", "mousedown"].forEach(function (eventName) {
            _this.cameraSwitcherElement.addEventListener(eventName, function (event) {
                if (_this.cameraManager != null) {
                    var cameraManager_1 = _this.cameraManager;
                    event.preventDefault();
                    CameraAccess.getCameras()
                        .then(function (cameras) {
                        var newCameraIndex = (cameras.findIndex(function (camera) {
                            return (camera.deviceId ===
                                (cameraManager_1.activeCamera == null ? camera.deviceId : cameraManager_1.activeCamera.deviceId));
                        }) +
                            1) %
                            cameras.length;
                        cameraManager_1
                            .initializeCameraWithSettings(cameras[newCameraIndex], cameraManager_1.activeCameraSettings)
                            .catch(console.error);
                    })
                        .catch(console.error);
                }
            });
        });
    };
    BarcodePickerGui.prototype.setupTorchToggler = function () {
        var _this = this;
        this.torchTogglerElement.src = toggleTorchImage;
        this.torchTogglerElement.className = BarcodePickerGui.torchTogglerElementClassName;
        this.torchTogglerElement.classList.add(BarcodePickerGui.hiddenClassName);
        this.parentElement.appendChild(this.torchTogglerElement);
        ["touchstart", "mousedown"].forEach(function (eventName) {
            _this.torchTogglerElement.addEventListener(eventName, function (event) {
                if (_this.cameraManager != null) {
                    event.preventDefault();
                    _this.cameraManager.toggleTorch();
                }
            });
        });
    };
    BarcodePickerGui.grandParentElementClassName = "scandit scandit-container";
    BarcodePickerGui.parentElementClassName = "scandit scandit-barcode-picker";
    BarcodePickerGui.hiddenClassName = "scandit-hidden";
    BarcodePickerGui.hiddenOpacityClassName = "scandit-hidden-opacity";
    BarcodePickerGui.videoElementClassName = "scandit-video";
    BarcodePickerGui.scanditLogoImageElementClassName = "scandit-logo";
    BarcodePickerGui.laserImageElementClassName = "scandit-laser";
    BarcodePickerGui.viewfinderElementClassName = "scandit-viewfinder";
    BarcodePickerGui.cameraSwitcherElementClassName = "scandit-camera-switcher";
    BarcodePickerGui.torchTogglerElementClassName = "scandit-torch-toggle";
    BarcodePickerGui.cameraUploadElementClassName = "scandit-camera-upload";
    BarcodePickerGui.flashColorClassName = "scandit-flash-color";
    BarcodePickerGui.flashWhiteClassName = "scandit-flash-white";
    BarcodePickerGui.flashWhiteInsetClassName = "scandit-flash-white-inset";
    BarcodePickerGui.opacityPulseClassName = "scandit-opacity-pulse";
    BarcodePickerGui.mirroredClassName = "mirrored";
    BarcodePickerGui.pausedClassName = "paused";
    return BarcodePickerGui;
}());
export { BarcodePickerGui };
//# sourceMappingURL=barcodePickerGui.js.map
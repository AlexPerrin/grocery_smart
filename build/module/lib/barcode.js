export var Barcode;
(function (Barcode) {
    /**
     * @hidden
     *
     * Create a [[Barcode]] object from a partial object returned by the external Scandit Engine library.
     * The *rawData* and *data* fields are computed and stored.
     *
     * @param result The barcode result coming from the external Scandit Engine library.
     * @returns The generated [[Barcode]] object.
     */
    function createFromWASMResult(result) {
        var decodedData;
        try {
            decodedData = decodeURIComponent(escape(String.fromCharCode.apply(null, result.rawData)));
        }
        catch (error) {
            decodedData = "";
        }
        return {
            symbology: result.symbology,
            data: decodedData,
            rawData: new Uint8Array(result.rawData),
            location: {
                topLeft: { x: result.location[0][0], y: result.location[0][1] },
                topRight: { x: result.location[1][0], y: result.location[1][1] },
                bottomRight: { x: result.location[2][0], y: result.location[2][1] },
                bottomLeft: { x: result.location[3][0], y: result.location[3][1] }
            },
            compositeFlag: result.compositeFlag,
            isGs1DataCarrier: result.isGs1DataCarrier,
            encodingArray: result.encodingArray
        };
    }
    Barcode.createFromWASMResult = createFromWASMResult;
    /**
     * Barcode symbology type.
     */
    var Symbology;
    (function (Symbology) {
        Symbology["EAN13"] = "ean13";
        Symbology["EAN8"] = "ean8";
        Symbology["UPCA"] = "upca";
        Symbology["UPCE"] = "upce";
        Symbology["CODE128"] = "code128";
        Symbology["CODE32"] = "code32";
        Symbology["CODE39"] = "code39";
        Symbology["CODE93"] = "code93";
        Symbology["INTERLEAVED_2_OF_5"] = "itf";
        Symbology["QR"] = "qr";
        Symbology["DATA_MATRIX"] = "data-matrix";
        Symbology["PDF417"] = "pdf417";
        Symbology["MSI_PLESSEY"] = "msi-plessey";
        Symbology["GS1_DATABAR"] = "databar";
        Symbology["GS1_DATABAR_EXPANDED"] = "databar-expanded";
        Symbology["CODABAR"] = "codabar";
        Symbology["AZTEC"] = "aztec";
        Symbology["TWO_DIGIT_ADD_ON"] = "two-digit-add-on";
        Symbology["FIVE_DIGIT_ADD_ON"] = "five-digit-add-on";
        Symbology["MAXICODE"] = "maxicode";
        Symbology["CODE11"] = "code11";
        Symbology["GS1_DATABAR_LIMITED"] = "databar-limited";
        Symbology["CODE25"] = "code25";
        Symbology["MICRO_PDF417"] = "micropdf417";
        Symbology["RM4SCC"] = "rm4scc";
        Symbology["KIX"] = "kix";
        Symbology["DOTCODE"] = "dotcode";
    })(Symbology = Barcode.Symbology || (Barcode.Symbology = {}));
    /**
     * Flags to hint that two codes form a composite code.
     */
    var CompositeFlag;
    (function (CompositeFlag) {
        /**
         * Code is not part of a composite code.
         */
        CompositeFlag[CompositeFlag["NONE"] = 0] = "NONE";
        /**
         * Code could be part of a composite code. This flag is set by linear (1D) symbologies that have
         * no composite flag support but can be part of a composite code like the EAN/UPC symbology family.
         */
        CompositeFlag[CompositeFlag["UNKNOWN"] = 1] = "UNKNOWN";
        /**
         * Code is the linear component of a composite code. This flag can be set by GS1 DataBar or GS1-128 (Code 128).
         */
        CompositeFlag[CompositeFlag["LINKED"] = 2] = "LINKED";
        /**
         * Code is a GS1 Composite Code Type A (CC - A).This flag can be set by MicroPDF417 codes.
         */
        CompositeFlag[CompositeFlag["GS1_A"] = 4] = "GS1_A";
        /**
         * Code is a GS1 Composite Code Type B (CC-B). This flag can be set by MicroPDF417 codes.
         */
        CompositeFlag[CompositeFlag["GS1_B"] = 8] = "GS1_B";
        /**
         * Code is a GS1 Composite Code Type C (CC-C). This flag can be set by PDF417 codes.
         */
        CompositeFlag[CompositeFlag["GS1_C"] = 16] = "GS1_C";
    })(CompositeFlag = Barcode.CompositeFlag || (Barcode.CompositeFlag = {}));
    // istanbul ignore next
    (function (Symbology) {
        // tslint:disable:no-unnecessary-qualifier
        /**
         * Get the humanized name of a symbology.
         *
         * @param symbology The symbology for which to retrieve the name.
         * @returns The humanized name of the symbology.
         */
        // tslint:disable-next-line:cyclomatic-complexity
        function toHumanizedName(symbology) {
            switch (symbology.toLowerCase()) {
                case Symbology.EAN13:
                    return "EAN-13";
                case Symbology.EAN8:
                    return "EAN-8";
                case Symbology.UPCA:
                    return "UPC-A";
                case Symbology.UPCE:
                    return "UPC-E";
                case Symbology.CODE128:
                    return "Code 128";
                case Symbology.CODE32:
                    return "Code 32";
                case Symbology.CODE39:
                    return "Code 39";
                case Symbology.CODE93:
                    return "Code 93";
                case Symbology.INTERLEAVED_2_OF_5:
                    return "Interleaved Two of Five";
                case Symbology.QR:
                    return "QR";
                case Symbology.DATA_MATRIX:
                    return "Data Matrix";
                case Symbology.PDF417:
                    return "PDF417";
                case Symbology.MSI_PLESSEY:
                    return "MSI-Plessey";
                case Symbology.GS1_DATABAR:
                    return "GS1 DataBar 14";
                case Symbology.GS1_DATABAR_EXPANDED:
                    return "GS1 DataBar Expanded";
                case Symbology.CODABAR:
                    return "Codabar";
                case Symbology.AZTEC:
                    return "Aztec";
                case Symbology.TWO_DIGIT_ADD_ON:
                    return "Two-Digit Add-On";
                case Symbology.FIVE_DIGIT_ADD_ON:
                    return "Five-Digit Add-On";
                case Symbology.MAXICODE:
                    return "MaxiCode";
                case Symbology.CODE11:
                    return "Code 11";
                case Symbology.GS1_DATABAR_LIMITED:
                    return "GS1 DataBar Limited";
                case Symbology.CODE25:
                    return "Code 25";
                case Symbology.MICRO_PDF417:
                    return "MicroPDF417";
                case Symbology.RM4SCC:
                    return "RM4SCC";
                case Symbology.KIX:
                    return "KIX";
                case Symbology.DOTCODE:
                    return "DotCode";
                default:
                    return "Unknown";
            }
        }
        Symbology.toHumanizedName = toHumanizedName;
        /**
         * Get the JSON key name of a symbology, used for JSON-formatted ScanSettings and Scandit Engine library.
         *
         * @param symbology The symbology for which to retrieve the name.
         * @returns The json key name of the symbology.
         */
        // tslint:disable-next-line:cyclomatic-complexity
        function toJSONName(symbology) {
            switch (symbology.toLowerCase()) {
                case Symbology.EAN13:
                    return "ean13";
                case Symbology.EAN8:
                    return "ean8";
                case Symbology.UPCA:
                    return "upca";
                case Symbology.UPCE:
                    return "upce";
                case Symbology.CODE128:
                    return "code128";
                case Symbology.CODE32:
                    return "code32";
                case Symbology.CODE39:
                    return "code39";
                case Symbology.CODE93:
                    return "code93";
                case Symbology.INTERLEAVED_2_OF_5:
                    return "itf";
                case Symbology.QR:
                    return "qr";
                case Symbology.DATA_MATRIX:
                    return "data-matrix";
                case Symbology.PDF417:
                    return "pdf417";
                case Symbology.MSI_PLESSEY:
                    return "msi-plessey";
                case Symbology.GS1_DATABAR:
                    return "databar";
                case Symbology.GS1_DATABAR_EXPANDED:
                    return "databar-expanded";
                case Symbology.CODABAR:
                    return "codabar";
                case Symbology.AZTEC:
                    return "aztec";
                case Symbology.TWO_DIGIT_ADD_ON:
                    return "two-digit-add-on";
                case Symbology.FIVE_DIGIT_ADD_ON:
                    return "five-digit-add-on";
                case Symbology.MAXICODE:
                    return "maxicode";
                case Symbology.CODE11:
                    return "code11";
                case Symbology.GS1_DATABAR_LIMITED:
                    return "databar-limited";
                case Symbology.CODE25:
                    return "code25";
                case Symbology.MICRO_PDF417:
                    return "micropdf417";
                case Symbology.RM4SCC:
                    return "rm4scc";
                case Symbology.KIX:
                    return "kix";
                case Symbology.DOTCODE:
                    return "dotcode";
                default:
                    return "unknown";
            }
        }
        Symbology.toJSONName = toJSONName;
        // tslint:enable:no-unnecessary-qualifier
    })(Symbology = Barcode.Symbology || (Barcode.Symbology = {}));
})(Barcode || (Barcode = {}));
//# sourceMappingURL=barcode.js.map
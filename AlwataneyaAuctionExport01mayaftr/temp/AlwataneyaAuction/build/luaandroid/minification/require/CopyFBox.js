define("CopyFBox", function() {
    return function(controller) {
        CopyFBox = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "CopyFBox",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0bd79a3429b0245",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox.setDefaultUnit(voltmx.flex.DP);
        var Image0j02d96f9817b43 = new voltmx.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "85%",
            "id": "Image0j02d96f9817b43",
            "isVisible": true,
            "left": "0",
            "skin": "CopyCopyslImage0caff1bd6606c47",
            "src": "imagedrag.png",
            "top": "0",
            "width": "85%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFBox.add(Image0j02d96f9817b43);
        return CopyFBox;
    }
})
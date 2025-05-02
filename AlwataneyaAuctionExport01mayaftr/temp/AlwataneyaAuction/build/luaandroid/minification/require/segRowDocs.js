define("segRowDocs", function() {
    return function(controller) {
        var segRowDocs = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "65dp",
            "id": "segRowDocs",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        segRowDocs.setDefaultUnit(voltmx.flex.DP);
        var imgDocs = new voltmx.ui.Image2({
            "centerY": "50%",
            "height": "50%",
            "id": "imgDocs",
            "isVisible": true,
            "left": 0,
            "skin": "slImage",
            "src": "material_symbols_light_folder_outline.png",
            "top": "0",
            "width": "50dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRowDocs = new voltmx.ui.Label({
            "centerX": "43%",
            "centerY": "50%",
            "height": "60%",
            "id": "lblRowDocs",
            "isVisible": true,
            "skin": "sknlblDubaiReg231F20Font50px",
            "text": "label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        segRowDocs.add(imgDocs, lblRowDocs);
        return segRowDocs;
    }
})
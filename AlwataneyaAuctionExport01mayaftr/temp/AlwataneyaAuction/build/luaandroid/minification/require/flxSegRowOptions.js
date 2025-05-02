define("flxSegRowOptions", function() {
    return function(controller) {
        var flxSegRowOptions = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "flxSegRowOptions",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxBGFEF6F4border1px",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxSegRowOptions.setDefaultUnit(voltmx.flex.DP);
        var lblOptions = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblOptions",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknlblCPReg000000Font54px",
            "text": "Terms & Conditions",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgRight = new voltmx.ui.Image2({
            "centerY": "50%",
            "height": "40%",
            "id": "imgRight",
            "isVisible": true,
            "right": "10dp",
            "skin": "CopyslImage0ff9c664e5ea14e",
            "src": "vector__2_1_1.png",
            "top": "0",
            "width": "15%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSegRowOptions.add(lblOptions, imgRight);
        return flxSegRowOptions;
    }
})
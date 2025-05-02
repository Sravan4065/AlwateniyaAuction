define("flxSegRowYearMake", function() {
    return function(controller) {
        var flxSegRowYearMake = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxSegRowYearMake",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox1",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxSegRowYearMake.setDefaultUnit(voltmx.flex.DP);
        var lblYearMake = new voltmx.ui.Label({
            "id": "lblYearMake",
            "isVisible": true,
            "left": "14dp",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "21dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxSegRowYearMake.add(lblYearMake);
        return flxSegRowYearMake;
    }
})
define("flxFilterSegRow", function() {
    return function(controller) {
        var flxFilterSegRow = new voltmx.ui.FlexContainer({
            "clipBounds": false,
            "height": "80dp",
            "id": "flxFilterSegRow",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0ga47d876e03046",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxFilterSegRow.setDefaultUnit(voltmx.flex.DP);
        var lblVehicleName = new voltmx.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblVehicleName",
            "isVisible": true,
            "skin": "sknlbl000000CPRegFont120P",
            "text": "Categories",
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
        var flxFocus = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxFocus",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": -5,
            "isModalContainer": false,
            "skin": "CopyslFbox0j208e4e7921d4e",
            "top": "0",
            "width": "5%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxFocus.setDefaultUnit(voltmx.flex.DP);
        flxFocus.add();
        flxFilterSegRow.add(lblVehicleName, flxFocus);
        return flxFilterSegRow;
    }
})
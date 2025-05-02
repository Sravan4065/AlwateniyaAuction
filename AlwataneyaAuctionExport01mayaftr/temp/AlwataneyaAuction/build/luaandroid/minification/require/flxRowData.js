define("flxRowData", function() {
    return function(controller) {
        var flxRowData = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxRowData",
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
        flxRowData.setDefaultUnit(voltmx.flex.DP);
        var lbldata = new voltmx.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lbldata",
            "isVisible": true,
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRowData.add(lbldata);
        return flxRowData;
    }
})
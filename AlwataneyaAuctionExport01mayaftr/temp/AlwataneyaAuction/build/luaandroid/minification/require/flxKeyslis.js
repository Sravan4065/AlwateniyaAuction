define("flxKeyslis", function() {
    return function(controller) {
        var flxKeyslis = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxKeyslis",
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
        flxKeyslis.setDefaultUnit(voltmx.flex.DP);
        var lblKeylist = new voltmx.ui.Label({
            "id": "lblKeylist",
            "isVisible": true,
            "left": "14dp",
            "skin": "sknlblCpReg4a4a4aFont56",
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
        flxKeyslis.add(lblKeylist);
        return flxKeyslis;
    }
})
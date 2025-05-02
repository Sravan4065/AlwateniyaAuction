define("segRowTypes", function() {
    return function(controller) {
        var segRowTypes = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30dp",
            "id": "segRowTypes",
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
        segRowTypes.setDefaultUnit(voltmx.flex.DP);
        var lblType = new voltmx.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "70%",
            "id": "lblType",
            "isVisible": true,
            "left": "0",
            "skin": "sknlblDubaiReg231F20Font40px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "85%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        segRowTypes.add(lblType);
        return segRowTypes;
    }
})
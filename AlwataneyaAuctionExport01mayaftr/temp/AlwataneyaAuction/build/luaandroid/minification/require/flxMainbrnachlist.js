define("flxMainbrnachlist", function() {
    return function(controller) {
        var flxMainbrnachlist = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxMainbrnachlist",
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
        flxMainbrnachlist.setDefaultUnit(voltmx.flex.DP);
        var lblBranchName = new voltmx.ui.Label({
            "id": "lblBranchName",
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
        flxMainbrnachlist.add(lblBranchName);
        return flxMainbrnachlist;
    }
})
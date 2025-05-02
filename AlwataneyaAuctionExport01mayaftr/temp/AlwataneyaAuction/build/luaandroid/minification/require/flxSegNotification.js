define("flxSegNotification", function() {
    return function(controller) {
        var flxSegNotification = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "150dp",
            "id": "flxSegNotification",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxBorder000000size1px45",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxSegNotification.setDefaultUnit(voltmx.flex.DP);
        var flxImgAndText = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "43dp",
            "id": "flxImgAndText",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2%",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxImgAndText.setDefaultUnit(voltmx.flex.DP);
        var flxUserImg = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxUserImg",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "7%",
            "isModalContainer": false,
            "skin": "sknFlxWhiteRound100pxGreyBorder",
            "top": "10%",
            "width": "10%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxUserImg.setDefaultUnit(voltmx.flex.DP);
        var imgUser = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgUser",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxUserImg.add(imgUser);
        var lblText = new voltmx.ui.Label({
            "height": "42dp",
            "id": "lblText",
            "isVisible": true,
            "left": "2%",
            "skin": "sknlbl231F20DubaiNormalSize10045",
            "text": "wetrwtetreuiuiuydddddddddddddddddddddddddddddddddddddddddddddd",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": "75%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxImgAndText.add(flxUserImg, lblText);
        var flxbuttons = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxbuttons",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxbuttons.setDefaultUnit(voltmx.flex.DP);
        var btnchat = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "100%",
            "id": "btnchat",
            "isVisible": true,
            "left": "19%",
            "skin": "sknBtnBg231F20Border231F201pxFontffffffSize100Dubai45",
            "text": "Button",
            "top": "0",
            "width": "20%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btndecline = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "100%",
            "id": "btndecline",
            "isVisible": true,
            "left": "5%",
            "skin": "sknBtnBgffffffBorder231F201pxFont231F20Dubai10045",
            "text": "Decline",
            "top": "0",
            "width": "23%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxbuttons.add(btnchat, btndecline);
        var flxDayAndTime = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "20%",
            "id": "flxDayAndTime",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxDayAndTime.setDefaultUnit(voltmx.flex.DP);
        var lblDayAndTime = new voltmx.ui.Label({
            "height": "90%",
            "id": "lblDayAndTime",
            "isVisible": true,
            "left": "20%",
            "skin": "sknlblA6A6A6Size100Dubai45",
            "text": "fsgfdgweytwftwetfdfdfdsdfs",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "75%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDayAndTime.add(lblDayAndTime);
        flxSegNotification.add(flxImgAndText, flxbuttons, flxDayAndTime);
        return flxSegNotification;
    }
})
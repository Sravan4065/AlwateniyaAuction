define("frmLandingPage", function() {
    return function(controller) {
        function addWidgetsfrmLandingPage() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMain.setDefaultUnit(voltmx.flex.DP);
            var flxBg = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxBg",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBg.setDefaultUnit(voltmx.flex.DP);
            var imgBackGround = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgBackGround",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "untitled_1_2.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBg.add(imgBackGround);
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "330dp",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0bde09a1907a74f",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var btnBuyer = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnBuyer",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknBtnCPBoldD32437Font84px",
                "text": "Sign Up as a Buyer",
                "top": "50dp",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxOr = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "20%",
                "id": "flxOr",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0af019e4d432a4a",
                "top": "143dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOr.setDefaultUnit(voltmx.flex.DP);
            var flxLeftLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "1dp",
                "id": "flxLeftLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c272d27accf04c",
                "top": "0",
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLeftLine.setDefaultUnit(voltmx.flex.DP);
            flxLeftLine.add();
            var lblOr = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "lblOr",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0c4090bc0231241",
                "text": "Or",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "10%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxRightLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "1dp",
                "id": "flxRightLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0d1d47b16d6f745",
                "top": "0",
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRightLine.setDefaultUnit(voltmx.flex.DP);
            flxRightLine.add();
            flxOr.add(flxLeftLine, lblOr, flxRightLine);
            var btnSeller = new voltmx.ui.Button({
                "centerY": "75%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnSeller",
                "isVisible": true,
                "left": "29dp",
                "skin": "sknBtnCPBoldD32437Font84px",
                "text": "Sign Up as a Seller",
                "top": "290dp",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBody.add(btnBuyer, flxOr, btnSeller);
            flxMain.add(flxBg, flxBody);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmLandingPage,
            "enabledForIdleTimeout": false,
            "id": "frmLandingPage",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "AlwataneyaAuction"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});
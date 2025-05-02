define("frmRegister1", function() {
    return function(controller) {
        function addWidgetsfrmRegister1() {
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
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMain.setDefaultUnit(voltmx.flex.DP);
            var HeaderRegister = new com.hcl.voltmx.alwataneya1.HeaderRegister1({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "10%",
                "id": "HeaderRegister",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction",
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxBarContainerFullName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxBarContainerFullName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "90dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarContainerFullName.setDefaultUnit(voltmx.flex.DP);
            var flxBarFullName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "25%",
                "id": "flxBarFullName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBarFullName.setDefaultUnit(voltmx.flex.DP);
            var flxInnerBarFullName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxInnerBarFullName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baRoundedBorder0077ba1px",
                "top": "0",
                "width": "0%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerBarFullName.setDefaultUnit(voltmx.flex.DP);
            flxInnerBarFullName.add();
            flxBarFullName.add(flxInnerBarFullName);
            flxBarContainerFullName.add(flxBarFullName);
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "300dp",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "150dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flx1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "35%",
                "id": "flx1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flx1.setDefaultUnit(voltmx.flex.DP);
            var imgJudge = new voltmx.ui.Image2({
                "height": "50%",
                "id": "imgJudge",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "judge.png",
                "top": "0",
                "width": "60dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSetUp = new voltmx.ui.Label({
                "bottom": 0,
                "height": "50%",
                "id": "lblSetUp",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlblDubaiReg231F20Font84px",
                "text": "Let's get you set up",
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
            flx1.add(imgJudge, lblSetUp);
            var flx2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "40dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "28%",
                "id": "flx2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flx2.setDefaultUnit(voltmx.flex.DP);
            var txtFirstNlastName = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntbxBGffffffDubaiReg231f20Font50px",
                "height": "60dp",
                "id": "txtFirstNlastName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "First and Last name",
                "secureTextEntry": false,
                "skin": "skntbxBGffffffDubaiReg231f20Font50px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "skntxtplhrCPReg8391a1Font80px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "3%",
                "id": "flxLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGdcdcdcplainborderdcdcdc1px1px",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLine.setDefaultUnit(voltmx.flex.DP);
            flxLine.add();
            flx2.add(txtFirstNlastName, flxLine);
            var flxNext = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "20%",
                "id": "flxNext",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxNext.setDefaultUnit(voltmx.flex.DP);
            var imgNext = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgNext",
                "isVisible": true,
                "right": 0,
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "group_13213151762.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNext.add(imgNext);
            var flxUserNameError = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "50dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "25dp",
                "id": "flxUserNameError",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "-45dp",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUserNameError.setDefaultUnit(voltmx.flex.DP);
            var lblFullNameError = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblFullNameError",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiRegff0000Font40px",
                "text": "User already Exists",
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
            flxUserNameError.add(lblFullNameError);
            flxBody.add(flx1, flx2, flxNext, flxUserNameError);
            flxMain.add(HeaderRegister, flxBarContainerFullName, flxBody);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmRegister1,
            "enabledForIdleTimeout": false,
            "id": "frmRegister1",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0d2f85bd045d44e",
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
            "titleBarSkin": "CopyslTitleBar0fde7ba532e1640",
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});
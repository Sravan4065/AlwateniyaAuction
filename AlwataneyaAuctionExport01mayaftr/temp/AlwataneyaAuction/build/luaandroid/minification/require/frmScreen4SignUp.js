define("frmScreen4SignUp", function() {
    return function(controller) {
        function addWidgetsfrmScreen4SignUp() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxContainer",
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
            flxContainer.setDefaultUnit(voltmx.flex.DP);
            var flxBackImg = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "flxBackImg",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBackImg.setDefaultUnit(voltmx.flex.DP);
            var imgBack = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgBack",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "group.png",
                "top": "0",
                "width": "10%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBackImg.add(imgBack);
            var flxHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "39.50%",
                "clipBounds": false,
                "height": "50dp",
                "id": "flxHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "60dp",
                "width": "70%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeading.setDefaultUnit(voltmx.flex.DP);
            var lblHeading = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHeading",
                "isVisible": true,
                "skin": "sknLblCPBold333333Font130",
                "text": "Hello!  Register to get Started",
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
            flxHeading.add(lblHeading);
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "560dp",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "top": "120dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var txtFullName = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": 0,
                "focusSkin": "defTextBoxFocus",
                "height": "60dp",
                "id": "txtFullName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Username",
                "right": 0,
                "secureTextEntry": false,
                "skin": "skntxtBoxCurved80CPltCapt",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "txtBoxPlaceholderCPltCapt80Curved",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var txtUserName = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": 0,
                "focusSkin": "defTextBoxFocus",
                "height": "60dp",
                "id": "txtUserName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Email",
                "right": 0,
                "secureTextEntry": false,
                "skin": "skntxtBoxCurved80CPltCapt",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "25dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "txtBoxPlaceholderCPltCapt80Curved",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxPassWord = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "90dp",
                "id": "flxPassWord",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 25,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPassWord.setDefaultUnit(voltmx.flex.DP);
            var txtPassword = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": 45,
                "focusSkin": "defTextBoxFocus",
                "height": "60dp",
                "id": "txtPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Password",
                "right": 0,
                "secureTextEntry": true,
                "skin": "skntxtBoxCurved80CPltCapt",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "txtBoxPlaceholderCPltCapt80Curved",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxErrorMsgPassword = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20%",
                "id": "flxErrorMsgPassword",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "59dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxErrorMsgPassword.setDefaultUnit(voltmx.flex.DP);
            var lblErrorMsgPassword = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblErrorMsgPassword",
                "isVisible": true,
                "left": "0",
                "text": "    *PassWord Contains(alphanumeric,special chars)",
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
            flxErrorMsgPassword.add(lblErrorMsgPassword);
            flxPassWord.add(txtPassword, flxErrorMsgPassword);
            var flxConfirmPassword = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "90dp",
                "id": "flxConfirmPassword",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxConfirmPassword.setDefaultUnit(voltmx.flex.DP);
            var txtConfirmPassword = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": 45,
                "focusSkin": "defTextBoxFocus",
                "height": "60dp",
                "id": "txtConfirmPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Confirm Password",
                "right": 0,
                "secureTextEntry": true,
                "skin": "skntxtBoxCurved80CPltCapt",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "txtBoxPlaceholderCPltCapt80Curved",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxEroorMsgConfirmPass = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20%",
                "id": "flxEroorMsgConfirmPass",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "59dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEroorMsgConfirmPass.setDefaultUnit(voltmx.flex.DP);
            var lblErrorMsgConfirmPass = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblErrorMsgConfirmPass",
                "isVisible": true,
                "left": "0",
                "text": "    *PassWord should match confirm password!!",
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
            flxEroorMsgConfirmPass.add(lblErrorMsgConfirmPass);
            flxConfirmPassword.add(txtConfirmPassword, flxEroorMsgConfirmPass);
            var flxMobile = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxMobile",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobile.setDefaultUnit(voltmx.flex.DP);
            var txtMobileNumber = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": 45,
                "focusSkin": "defTextBoxFocus",
                "height": "60dp",
                "id": "txtMobileNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Mobile Number",
                "right": 0,
                "secureTextEntry": true,
                "skin": "skntxtBoxCurved80CPltCapt",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "txtBoxPlaceholderCPltCapt80Curved",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxDone = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxDone",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "slFbox",
                "top": "0",
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDone.setDefaultUnit(voltmx.flex.DP);
            var imgDone = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "imgDone",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "oval.png",
                "top": "0",
                "width": "90%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgOkay = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "imgOkay",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "path.png",
                "top": "0",
                "width": "90%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDone.add(imgDone, imgOkay);
            flxMobile.add(txtMobileNumber, flxDone);
            var flxtermsAndConditions = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "10%",
                "id": "flxtermsAndConditions",
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
            flxtermsAndConditions.setDefaultUnit(voltmx.flex.DP);
            var chxtermsAndConditions = new voltmx.ui.CheckBoxGroup({
                "centerX": "12%",
                "centerY": "50%",
                "height": "20dp",
                "id": "chxtermsAndConditions",
                "isVisible": false,
                "left": "0",
                "masterData": [
                    ["terms and conditions", "Accept"]
                ],
                "skin": "CopyslCheckBoxGroup0aac1682346c946",
                "top": 10,
                "width": "20%"
            }, {
                "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_HORIZONTAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "tickedImage": "material_symbols_check_box_rounded.png",
                "untickedImage": "material_symbols_check_box_rounded.png"
            });
            var lbltermsAndConditions = new voltmx.ui.Label({
                "centerX": "34%",
                "centerY": "50%",
                "height": "40%",
                "id": "lbltermsAndConditions",
                "isVisible": true,
                "skin": "sknlblCPRegD32437Font83",
                "text": "terms & conditions",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxCheckBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "30%",
                "id": "flxCheckBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "top": "0",
                "width": "5%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCheckBox.setDefaultUnit(voltmx.flex.DP);
            var imgOK = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgOK",
                "isVisible": false,
                "left": "0",
                "skin": "slImage",
                "src": "done.webp",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckBox.add(imgOK);
            var lblAccept = new voltmx.ui.Label({
                "centerY": "51%",
                "id": "lblAccept",
                "isVisible": true,
                "left": 25,
                "skin": "sknlblCPBold333333Font80",
                "text": "Accept",
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
            flxtermsAndConditions.add(chxtermsAndConditions, lbltermsAndConditions, flxCheckBox, lblAccept);
            var btnSignUp = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "60dp",
                "id": "btnSignUp",
                "isVisible": true,
                "skin": "sknbtnMaroonLoginCurvedFont110CPltCapt",
                "text": "Sign Up",
                "top": 10,
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBody.add(txtFullName, txtUserName, flxPassWord, flxConfirmPassword, flxMobile, flxtermsAndConditions, btnSignUp);
            var flxFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 5,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFooter.setDefaultUnit(voltmx.flex.DP);
            var lblAlreadyRegistered = new voltmx.ui.Label({
                "centerX": "40%",
                "centerY": "50%",
                "id": "lblAlreadyRegistered",
                "isVisible": true,
                "skin": "sknlblCPReg333333Font75",
                "text": "Already Registered? ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "22%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSignIn = new voltmx.ui.Label({
                "centerX": "60%",
                "centerY": "48%",
                "id": "lblSignIn",
                "isVisible": true,
                "skin": "sknlblCPRegD32437Font83",
                "text": "SignIn Now",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "18%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFooter.add(lblAlreadyRegistered, lblSignIn);
            flxContainer.add(flxBackImg, flxHeading, flxBody, flxFooter);
            this.add(flxContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmScreen4SignUp,
            "enabledForIdleTimeout": false,
            "id": "frmScreen4SignUp",
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
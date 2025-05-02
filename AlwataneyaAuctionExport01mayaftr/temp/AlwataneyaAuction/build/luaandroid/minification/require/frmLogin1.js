define("frmLogin1", function() {
    return function(controller) {
        function addWidgetsfrmLogin1() {
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
                "skin": "CopyslFbox3",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxContainer.setDefaultUnit(voltmx.flex.DP);
            var flxHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "70dp",
                "id": "flxHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0bed74a1ee25a4a",
                "top": 50,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeading.setDefaultUnit(voltmx.flex.DP);
            var lblHeading1 = new voltmx.ui.Label({
                "height": "90%",
                "id": "lblHeading1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHeading",
                "text": "Welcome Back! Glad to see \nYou, Again!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 0,
                "width": "71%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeading.add(lblHeading1);
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "65%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0e2628e2b35444a",
                "top": 150,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var txtEmail = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus",
                "height": "63dp",
                "id": "txtEmail",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter  Your Email",
                "right": 0,
                "secureTextEntry": false,
                "skin": "skntxtBox",
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
                "placeholderSkin": "txtBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var txtPassword = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": 40,
                "focusSkin": "CopydefTextBoxFocus",
                "height": "63dp",
                "id": "txtPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter Your Password",
                "right": 0,
                "secureTextEntry": true,
                "skin": "skntxtBox",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "15dp",
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "txtBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxForgotPassword = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "8%",
                "id": "flxForgotPassword",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox3",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxForgotPassword.setDefaultUnit(voltmx.flex.DP);
            var lblForgotPassword = new voltmx.ui.Label({
                "id": "lblForgotPassword",
                "isVisible": true,
                "right": 0,
                "skin": "sknLblLink",
                "text": "forgot Password?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxForgotPassword.add(lblForgotPassword);
            var btnSubmit = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "CopydefBtnFocus2",
                "height": "50dp",
                "id": "btnSubmit",
                "isVisible": true,
                "left": "0",
                "skin": "sknbtnOrange",
                "text": "Login",
                "top": "0dp",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxOrLoginWith = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "45dp",
                "id": "flxOrLoginWith",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c41dae74291642",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOrLoginWith.setDefaultUnit(voltmx.flex.DP);
            var flxLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "1%",
                "id": "flxLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 10,
                "isModalContainer": false,
                "skin": "CopyslFSbox0fd1fbfe4c29a49",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLine.setDefaultUnit(voltmx.flex.DP);
            flxLine.add();
            var lblOrLoginWith = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOrLoginWith",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblLink",
                "text": "Or Login with",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "30%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxLine2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "1%",
                "id": "flxLine2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 10,
                "skin": "CopyslFSbox0fd1fbfe4c29a49",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLine2.setDefaultUnit(voltmx.flex.DP);
            flxLine2.add();
            flxOrLoginWith.add(flxLine, lblOrLoginWith, flxLine2);
            var flxSocialMedia = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 100,
                "clipBounds": false,
                "height": "70dp",
                "id": "flxSocialMedia",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0fa5cff828cdb49",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSocialMedia.setDefaultUnit(voltmx.flex.DP);
            var flxFaceBook = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "80%",
                "id": "flxFaceBook",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "CopyslFBoxRoundedPlane",
                "top": "0",
                "width": "31%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFaceBook.setDefaultUnit(voltmx.flex.DP);
            var ImgFaceBook = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "60%",
                "id": "ImgFaceBook",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage3",
                "src": "facebook_1.png",
                "top": "0",
                "width": "45%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFaceBook.add(ImgFaceBook);
            var flxGoogle = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "80%",
                "id": "flxGoogle",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "34dp",
                "isModalContainer": false,
                "skin": "CopyslFBoxRoundedPlane",
                "top": "0",
                "width": "31%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGoogle.setDefaultUnit(voltmx.flex.DP);
            var imgGoogle = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "imgGoogle",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage3",
                "src": "search_1.png",
                "top": "0",
                "width": "45%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxGoogle.add(imgGoogle);
            var flxApple = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "80%",
                "id": "flxApple",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0a4d221dbb6f344",
                "top": "0",
                "width": "31%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxApple.setDefaultUnit(voltmx.flex.DP);
            var imgApple = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "imgApple",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage3",
                "src": "apple_1.png",
                "top": "0",
                "width": "45%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxApple.add(imgApple);
            flxSocialMedia.add(flxFaceBook, flxGoogle, flxApple);
            flxBody.add(txtEmail, txtPassword, flxForgotPassword, btnSubmit, flxOrLoginWith, flxSocialMedia);
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
                "skin": "CopyslFbox0ce48fefe3db248",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFooter.setDefaultUnit(voltmx.flex.DP);
            var lblDontHaveAnAccount = new voltmx.ui.Label({
                "centerX": "38%",
                "centerY": "50%",
                "id": "lblDontHaveAnAccount",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblLink",
                "text": "Don't have an account?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "40%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSignUpContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "68%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxSignUpContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox3",
                "top": "0",
                "width": "25%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSignUpContainer.setDefaultUnit(voltmx.flex.DP);
            var lblSignUp = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "60%",
                "id": "lblSignUp",
                "isVisible": true,
                "right": "0",
                "skin": "sknlblLinkOrange",
                "text": "Sign Up Now",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSignUpContainer.add(lblSignUp);
            flxFooter.add(lblDontHaveAnAccount, flxSignUpContainer);
            flxContainer.add(flxHeading, flxBody, flxFooter);
            this.add(flxContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin1,
            "enabledForIdleTimeout": false,
            "id": "frmLogin1",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm4",
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
            "titleBarSkin": "CopyslTitleBar2",
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});
define("frmLoginScreen", function() {
    return function(controller) {
        function addWidgetsfrmLoginScreen() {
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
            var flxHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "180dp",
                "id": "flxHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeading.setDefaultUnit(voltmx.flex.DP);
            var lblHeading1 = new voltmx.ui.Label({
                "bottom": 0,
                "height": "30%",
                "id": "lblHeading1",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblCPBoldCapt3",
                "text": "Welcome Back! Glad to see  You, Again!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgLogo = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "100dp",
                "id": "imgLogo",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "logo_1_4.png",
                "top": "0",
                "width": "150dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHeading.add(lblHeading1, imgLogo);
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
                "top": "220dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var txtEmail = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "63dp",
                "id": "txtEmail",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Email, Username or Phone number",
                "right": 0,
                "secureTextEntry": false,
                "skin": "CopyskntxtBoxCurved",
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
                "placeholderSkin": "CopytxtBoxPlaceholderCPltCapt",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var txtPassword = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "30dp",
                "focusSkin": "CopydefTextBoxFocus2",
                "height": "63dp",
                "id": "txtPassword",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter Your Password",
                "right": 0,
                "secureTextEntry": true,
                "skin": "CopyskntxtBoxCurved",
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
                "placeholderSkin": "CopytxtBoxPlaceholderCPltCapt",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxForgotPassword = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "0dp",
                "clipBounds": false,
                "height": "8%",
                "id": "flxForgotPassword",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a9831affa2094b",
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
                "skin": "CopysknLblCPltCapt1",
                "text": "forgot Password?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "26%"
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
                "centerY": "70%",
                "height": "50dp",
                "id": "btnSubmit",
                "isVisible": true,
                "left": "0",
                "skin": "sknbtnBG61B35CRoundedBorder61B35C1pxFontDubaiRegffffffSize45px",
                "text": "Login",
                "top": "80dp",
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
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOrLoginWith.setDefaultUnit(voltmx.flex.DP);
            var lblOrLoginWith = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOrLoginWith",
                "isVisible": true,
                "left": "0",
                "skin": "CopysknLblCPltCapt1",
                "text": "OR",
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
            var flxlineLeft = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "1%",
                "id": "flxlineLeft",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopysknflxLine",
                "top": "0",
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxlineLeft.setDefaultUnit(voltmx.flex.DP);
            flxlineLeft.add();
            var flxLineRight = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "1%",
                "id": "flxLineRight",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "185dp",
                "isModalContainer": false,
                "skin": "CopysknflxLine",
                "top": "0",
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLineRight.setDefaultUnit(voltmx.flex.DP);
            flxLineRight.add();
            flxOrLoginWith.add(lblOrLoginWith, flxlineLeft, flxLineRight);
            var flxSocialMedia = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 100,
                "clipBounds": false,
                "height": "70dp",
                "id": "flxSocialMedia",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
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
                "skin": "CopyslFBoxRoundedPlane1",
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
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "facebook_2.png",
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
                "skin": "CopyslFBoxRoundedPlane1",
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
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "search_2.png",
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
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "apple_2.png",
                "top": "0",
                "width": "45%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxApple.add(imgApple);
            flxSocialMedia.add(flxFaceBook, flxGoogle, flxApple);
            var flxSigninWithUae = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "12%",
                "id": "flxSigninWithUae",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopysknflxCurvedSignin",
                "top": "12dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSigninWithUae.setDefaultUnit(voltmx.flex.DP);
            var imgSign = new voltmx.ui.Image2({
                "height": "90%",
                "id": "imgSign",
                "isVisible": true,
                "left": "10%",
                "skin": "CopyslImage0bce6b78d7c284f",
                "src": "image_65_1.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSigninWithUae = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSigninWithUae",
                "isVisible": true,
                "right": "50dp",
                "skin": "CopysknlblCPBoldCapt1",
                "text": "sign in With UAE PASS ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSigninWithUae.add(imgSign, lblSigninWithUae);
            flxBody.add(txtEmail, txtPassword, flxForgotPassword, btnSubmit, flxOrLoginWith, flxSocialMedia, flxSigninWithUae);
            var flxFooter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "70dp",
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
            var lblDontHaveAnAccount = new voltmx.ui.Label({
                "centerX": "38%",
                "centerY": "50%",
                "id": "lblDontHaveAnAccount",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknlblCPReg0e2df4b55a89b42",
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
                "skin": "CopyslFbox0a9831affa2094b",
                "top": "0",
                "width": "25%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSignUpContainer.setDefaultUnit(voltmx.flex.DP);
            var lblSignUp = new voltmx.ui.Label({
                "centerX": "20%",
                "centerY": "49%",
                "height": "60%",
                "id": "lblSignUp",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopysknlblCPRegD2",
                "text": "Sign Up Now",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSignUpContainer.add(lblSignUp);
            flxFooter.add(lblDontHaveAnAccount, flxSignUpContainer);
            flxMain.add(flxHeading, flxBody, flxFooter);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmLoginScreen,
            "enabledForIdleTimeout": false,
            "id": "frmLoginScreen",
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
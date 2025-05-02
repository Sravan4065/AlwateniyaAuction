define("frmPaymentProcess", function() {
    return function(controller) {
        function addWidgetsfrmPaymentProcess() {
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
            var flxHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "50dp",
                "id": "flxHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeading.setDefaultUnit(voltmx.flex.DP);
            var imgBack = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "50%",
                "id": "imgBack",
                "isVisible": true,
                "left": "0",
                "onTouchEnd": controller.AS_Image_d7f9d83297934997ad925fe3ce6aeb78,
                "skin": "slImage",
                "src": "group__1_.png",
                "top": "0",
                "width": "15%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgAWA = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "imgAWA",
                "isVisible": true,
                "right": "0",
                "skin": "slImage",
                "src": "logo_1_5.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHeading.add(imgBack, imgAWA);
            var flxHeading2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "80dp",
                "id": "flxHeading2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "80dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeading2.setDefaultUnit(voltmx.flex.DP);
            var flxEnterOTP = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50%",
                "id": "flxEnterOTP",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0d7678a84172b43",
                "top": 4,
                "width": "100%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEnterOTP.setDefaultUnit(voltmx.flex.DP);
            var CopylblEnterOTP0i54193af5aac4f = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "70%",
                "id": "CopylblEnterOTP0i54193af5aac4f",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg000000Font50px",
                "text": "Enter OTP",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEnterOTP.add(CopylblEnterOTP0i54193af5aac4f);
            var flxTotalPayableAmount = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "centerX": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxTotalPayableAmount",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c13b4199c6a040",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTotalPayableAmount.setDefaultUnit(voltmx.flex.DP);
            var lblTotalPayable = new voltmx.ui.Label({
                "centerX": "35%",
                "centerY": "50%",
                "height": "50%",
                "id": "lblTotalPayable",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg000000Font45px",
                "text": "Total Payable Amount",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "40%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAED = new voltmx.ui.Label({
                "centerX": "62%",
                "centerY": "50%",
                "height": "90%",
                "id": "lblAED",
                "isVisible": true,
                "left": "0",
                "right": "0",
                "skin": "sknlblCPReg000000Font50px",
                "text": "AED 5,000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "20%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTotalPayableAmount.add(lblTotalPayable, lblAED);
            flxHeading2.add(flxEnterOTP, flxTotalPayableAmount);
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "600dp",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "180dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flxBankHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "70dp",
                "id": "flxBankHeading",
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
            flxBankHeading.setDefaultUnit(voltmx.flex.DP);
            var imgADCB = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "60%",
                "id": "imgADCB",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "image_71.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAbudhabiCommercialBank = new voltmx.ui.Label({
                "bottom": "0",
                "centerX": "50%",
                "height": "30%",
                "id": "lblAbudhabiCommercialBank",
                "isVisible": true,
                "skin": "sknlblCPReg000000Font45px",
                "text": "Abu Dhabi Commmercial Bank",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBankHeading.add(imgADCB, lblAbudhabiCommercialBank);
            var flxPaymentConfirmation = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "240dp",
                "id": "flxPaymentConfirmation",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0dddb4a604c7044",
                "top": "140dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPaymentConfirmation.setDefaultUnit(voltmx.flex.DP);
            var OTPSentTo = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "10%",
                "id": "OTPSentTo",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0f3221a5ae52b4f",
                "text": "Enter OTP sent to ******1234",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxEnterAndResendOTP = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "20%",
                "id": "flxEnterAndResendOTP",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0f3f92ffd4f264c",
                "top": "20dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEnterAndResendOTP.setDefaultUnit(voltmx.flex.DP);
            var tbxEnterOTP = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "tbxEnterOTP",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "Enter OTP                             Resend OTP",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0ce404b151cab46",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0",
                "width": "95%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxEnterAndResendOTP.add(tbxEnterOTP);
            var btnPayNow = new voltmx.ui.Button({
                "bottom": "70dp",
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "20%",
                "id": "btnPayNow",
                "isVisible": true,
                "left": "0",
                "onClick": controller.AS_Button_ae49ff4afa1e42e284f4b62458880c3b,
                "skin": "sknbtnd32437CstmBorder1pxCPRegfffffffONT50PX",
                "text": "Confirm Payment",
                "top": "12dp",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexContainer0f32421a1066042 = new voltmx.ui.FlexContainer({
                "clipBounds": false,
                "height": "220dp",
                "id": "FlexContainer0f32421a1066042",
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
            FlexContainer0f32421a1066042.setDefaultUnit(voltmx.flex.DP);
            FlexContainer0f32421a1066042.add();
            flxPaymentConfirmation.add(OTPSentTo, flxEnterAndResendOTP, btnPayNow, FlexContainer0f32421a1066042);
            flxBody.add(flxBankHeading, flxPaymentConfirmation);
            flxMain.add(flxHeading, flxHeading2, flxBody);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmPaymentProcess,
            "enabledForIdleTimeout": false,
            "id": "frmPaymentProcess",
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
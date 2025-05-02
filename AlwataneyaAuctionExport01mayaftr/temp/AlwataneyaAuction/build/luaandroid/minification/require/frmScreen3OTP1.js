define("frmScreen3OTP1", function() {
    return function(controller) {
        function addWidgetsfrmScreen3OTP1() {
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
            var flxHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100dp",
                "id": "flxHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 12,
                "isModalContainer": false,
                "top": "0dp",
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
                "clipBounds": true,
                "height": "70%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "top": "100dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flxCountries1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": false,
                "id": "flxCountries1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "92%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCountries1.setDefaultUnit(voltmx.flex.DP);
            var flxDropDownContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "56dp",
                "id": "flxDropDownContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "sknDropDownContainer",
                "top": "1dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDropDownContainer.setDefaultUnit(voltmx.flex.DP);
            var lblLocation1 = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblLocation1",
                "isVisible": true,
                "left": "10%",
                "skin": "sknLblCPReg333333Font95",
                "text": "Countries",
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
            var flxDownArrowImg1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "80px",
                "id": "flxDownArrowImg1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "80%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "8%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDownArrowImg1.setDefaultUnit(voltmx.flex.DP);
            var imgDropDown1 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgDropDown1",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "drop_down_arrow.png",
                "top": "0",
                "width": "90%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDownArrowImg1.add(imgDropDown1);
            var flxUpArrowImg12 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "80px",
                "id": "flxUpArrowImg12",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "80%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "8%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUpArrowImg12.setDefaultUnit(voltmx.flex.DP);
            var imgUpArrow1 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgUpArrow1",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "arrow_up.png",
                "top": "0",
                "width": "90%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUpArrowImg12.add(imgUpArrow1);
            flxDropDownContainer.add(lblLocation1, flxDownArrowImg1, flxUpArrowImg12);
            var flxDropDownData = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "220dp",
                "horizontalScrollIndicator": true,
                "id": "flxDropDownData",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0j9fe4a3492c444",
                "top": "65dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            flxDropDownData.setDefaultUnit(voltmx.flex.DP);
            var segCountry1 = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lbldata": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segCountry1",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0hf041e44968948",
                "rowTemplate": "flxRowData",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxRowData": "flxRowData",
                    "lbldata": "lbldata"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDropDownData.add(segCountry1);
            flxCountries1.add(flxDropDownContainer, flxDropDownData);
            var flxMobileNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "90dp",
                "id": "flxMobileNumber",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 30,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobileNumber.setDefaultUnit(voltmx.flex.DP);
            var flxPhone = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "65%",
                "id": "flxPhone",
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
            flxPhone.setDefaultUnit(voltmx.flex.DP);
            var lblPhnno = new voltmx.ui.Label({
                "id": "lblPhnno",
                "isVisible": false,
                "left": "0dp",
                "text": "Phone Number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtPhoneNumber = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": 0,
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtPhoneNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter mobile Number",
                "right": 0,
                "secureTextEntry": false,
                "skin": "skntxtBoxCurved80CPltCapt",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "85%"
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
            var flxCountryCode = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "100%",
                "id": "flxCountryCode",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCountryCode.setDefaultUnit(voltmx.flex.DP);
            var lblCountryCode = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblCountryCode",
                "isVisible": true,
                "left": "0",
                "text": "+971",
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
            flxCountryCode.add(lblCountryCode);
            flxPhone.add(lblPhnno, txtPhoneNumber, flxCountryCode);
            var flxErrorMsgMbl = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20%",
                "id": "flxErrorMsgMbl",
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
            flxErrorMsgMbl.setDefaultUnit(voltmx.flex.DP);
            var lblErrorMsgMbl = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblErrorMsgMbl",
                "isVisible": true,
                "left": "0",
                "text": "    *Enter Valid Mobile Number",
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
            flxErrorMsgMbl.add(lblErrorMsgMbl);
            flxMobileNumber.add(flxPhone, flxErrorMsgMbl);
            var flxEmail = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxEmail",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmail.setDefaultUnit(voltmx.flex.DP);
            var lblEmail = new voltmx.ui.Label({
                "id": "lblEmail",
                "isVisible": false,
                "left": "0dp",
                "text": "Email Address",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtEmail = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "55%",
                "id": "txtEmail",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "Enter Email",
                "right": 0,
                "secureTextEntry": false,
                "skin": "skntxtBoxCurved80CPltCapt",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": 0,
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
            var flxErrorMsgEmail = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20%",
                "id": "flxErrorMsgEmail",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "55dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxErrorMsgEmail.setDefaultUnit(voltmx.flex.DP);
            var lblErrorMsg = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblErrorMsg",
                "isVisible": true,
                "left": "0",
                "text": "    * Enter Valid Email",
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
            flxErrorMsgEmail.add(lblErrorMsg);
            var btnSend = new voltmx.ui.Button({
                "bottom": 0,
                "focusSkin": "CopydefBtnFocus0d06ca611435b4f",
                "height": "30%",
                "id": "btnSend",
                "isVisible": true,
                "right": 0,
                "skin": "sknBtnWhite",
                "text": "send",
                "width": "80dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmail.add(lblEmail, txtEmail, flxErrorMsgEmail, btnSend);
            var flxOTP = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "135dp",
                "id": "flxOTP",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "top": "20dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOTP.setDefaultUnit(voltmx.flex.DP);
            var lblOTP = new voltmx.ui.Label({
                "id": "lblOTP",
                "isVisible": false,
                "left": "0dp",
                "text": "OTP Number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtOtp = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "43%",
                "id": "txtOtp",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "enter OTP",
                "right": 0,
                "secureTextEntry": false,
                "skin": "skntxtBoxCurved80CPltCapt",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": 0,
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
            var flxErrorMsgOtp = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20%",
                "id": "flxErrorMsgOtp",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 55,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxErrorMsgOtp.setDefaultUnit(voltmx.flex.DP);
            var lblOTPErrorMsg = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblOTPErrorMsg",
                "isVisible": true,
                "left": "0",
                "text": "   *Enter Valid OTP",
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
            flxErrorMsgOtp.add(lblOTPErrorMsg);
            var btnresend = new voltmx.ui.Button({
                "bottom": 20,
                "focusSkin": "defBtnFocus",
                "height": "30%",
                "id": "btnresend",
                "isVisible": true,
                "right": 0,
                "skin": "CopydefBtnNormal0d86ff55aaaaa4b",
                "text": "resend?",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOTP.add(lblOTP, txtOtp, flxErrorMsgOtp, btnresend);
            var btnSubmit = new voltmx.ui.Button({
                "bottom": 0,
                "centerX": "50.00%",
                "height": "55dp",
                "id": "btnSubmit",
                "isVisible": false,
                "skin": "sknbtnMaroonLoginCurvedFont110CPltCapt",
                "text": "Submit",
                "top": "25dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBody.add(flxCountries1, flxMobileNumber, flxEmail, flxOTP, btnSubmit);
            var lblid = new voltmx.ui.Label({
                "id": "lblid",
                "isVisible": false,
                "left": "82dp",
                "skin": "defLabel",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "648dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMeass = new voltmx.ui.Label({
                "id": "lblMeass",
                "isVisible": false,
                "left": "85dp",
                "skin": "defLabel",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "696dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxContainer.add(flxHeading, flxBody, lblid, lblMeass);
            this.add(flxContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmScreen3OTP1,
            "enabledForIdleTimeout": false,
            "id": "frmScreen3OTP1",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_c85cec8e5ce44a178b7b70f36a541211(eventobject);
            },
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
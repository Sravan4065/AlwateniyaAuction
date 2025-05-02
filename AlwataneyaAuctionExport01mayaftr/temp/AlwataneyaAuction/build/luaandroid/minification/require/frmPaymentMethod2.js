define("frmPaymentMethod2", function() {
    return function(controller) {
        function addWidgetsfrmPaymentMethod2() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "100%"
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
                "top": "5dp",
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
                "onTouchEnd": controller.AS_Image_hb4f97f1a8ee4423a3f471a0283b243c,
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
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "900dp",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "60dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var imgCreditCard = new voltmx.ui.Image2({
                "height": "170dp",
                "id": "imgCreditCard",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "cradit_caed.png",
                "top": "10dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyflxBodyInputs0c4c418ffeeff48 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "600dp",
                "id": "CopyflxBodyInputs0c4c418ffeeff48",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "200dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxBodyInputs0c4c418ffeeff48.setDefaultUnit(voltmx.flex.DP);
            var CopyflxSelectedPayments0iba99d8ae0684a = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "75dp",
                "id": "CopyflxSelectedPayments0iba99d8ae0684a",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxSelectedPayments0iba99d8ae0684a.setDefaultUnit(voltmx.flex.DP);
            var CopylblSelectedPayments0bb2ee1287a4f49 = new voltmx.ui.Label({
                "height": "30%",
                "id": "CopylblSelectedPayments0bb2ee1287a4f49",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0b2dac051ef124c",
                "text": "Selected Payment",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopytbxBidAmount0b80f4948c4da4f = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": 0,
                "focusSkin": "CopydefTextBoxFocus0dad8239943654a",
                "height": "60%",
                "id": "CopytbxBidAmount0b80f4948c4da4f",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "AED 300",
                "secureTextEntry": false,
                "skin": "skntbxCPRegBGffffffRoundedBorderd7d7d71pxCPReg4A4A4AFont45px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "100%"
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
            CopyflxSelectedPayments0iba99d8ae0684a.add(CopylblSelectedPayments0bb2ee1287a4f49, CopytbxBidAmount0b80f4948c4da4f);
            var CopyflxCardInfo0ade672f02e9f44 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "centerY": "10%",
                "clipBounds": false,
                "height": "75dp",
                "id": "CopyflxCardInfo0ade672f02e9f44",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxCardInfo0ade672f02e9f44.setDefaultUnit(voltmx.flex.DP);
            var CopylblCardInfo0i19184fad44143 = new voltmx.ui.Label({
                "height": "30%",
                "id": "CopylblCardInfo0i19184fad44143",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0b2dac051ef124c",
                "text": "Card Information",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopytbxNameOfTheCard0g4d9745f66da41 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": 0,
                "focusSkin": "defTextBoxFocus",
                "height": "60%",
                "id": "CopytbxNameOfTheCard0g4d9745f66da41",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "Name of the card",
                "secureTextEntry": false,
                "skin": "skntbxCPRegBGffffffRoundedBorderd7d7d71pxCPReg4A4A4AFont45px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "100%"
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
            CopyflxCardInfo0ade672f02e9f44.add(CopylblCardInfo0i19184fad44143, CopytbxNameOfTheCard0g4d9745f66da41);
            var CopyflxNumberOnTheCard0g5de642fcf7e4b = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "8%",
                "clipBounds": false,
                "height": "60dp",
                "id": "CopyflxNumberOnTheCard0g5de642fcf7e4b",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ca0f6780d4824f",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxNumberOnTheCard0g5de642fcf7e4b.setDefaultUnit(voltmx.flex.DP);
            var CopytbxNumberOnTheCard0d860b1057acc44 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": 0,
                "centerY": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "80%",
                "id": "CopytbxNumberOnTheCard0d860b1057acc44",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "Number on the card",
                "secureTextEntry": false,
                "skin": "skntbxCPRegBGffffffRoundedBorderd7d7d71pxCPReg4A4A4AFont45px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder0h1306160c58d45",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var CopyflxCards0ea41dc93fe8d47 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "CopyflxCards0ea41dc93fe8d47",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "CopyslFbox0e54eef644cb746",
                "top": "0",
                "width": "50%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxCards0ea41dc93fe8d47.setDefaultUnit(voltmx.flex.DP);
            var CopyimgCard0d80820e738c548 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "CopyimgCard0d80820e738c548",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "page_1__1_.png",
                "top": "0",
                "width": "20%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyimgCard0dc214ff8cc6c47 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "CopyimgCard0dc214ff8cc6c47",
                "isVisible": true,
                "left": 40,
                "skin": "slImage",
                "src": "master.png",
                "top": "0",
                "width": "20%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyimgCard0e7593819414348 = new voltmx.ui.Image2({
                "centerX": "60%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyimgCard0e7593819414348",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "page_1__2_.png",
                "top": "0",
                "width": "20%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyimgCard0g628bbb2fecb45 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "CopyimgCard0g628bbb2fecb45",
                "isVisible": true,
                "right": "10dp",
                "skin": "slImage",
                "src": "page_1__3_.png",
                "top": "0",
                "width": "20%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxCards0ea41dc93fe8d47.add(CopyimgCard0d80820e738c548, CopyimgCard0dc214ff8cc6c47, CopyimgCard0e7593819414348, CopyimgCard0g628bbb2fecb45);
            CopyflxNumberOnTheCard0g5de642fcf7e4b.add(CopytbxNumberOnTheCard0d860b1057acc44, CopyflxCards0ea41dc93fe8d47);
            var CopyflxMonthYear0d8521103a3d641 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "60dp",
                "id": "CopyflxMonthYear0d8521103a3d641",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0f08008fdbfb947",
                "top": 10,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxMonthYear0d8521103a3d641.setDefaultUnit(voltmx.flex.DP);
            var CopyCalendar0a469247aeda549 = new voltmx.ui.Calendar({
                "calendarIcon": "group_425.png",
                "centerY": "50%",
                "dateComponents": [null, null, null],
                "dateFormat": "MM/dd/yyyy",
                "height": "40dp",
                "hour": 0,
                "id": "CopyCalendar0a469247aeda549",
                "isVisible": true,
                "left": "10dp",
                "minutes": 0,
                "placeholder": "MM/YY",
                "seconds": 0,
                "skin": "CopyslCalendar0e9fb7d08433c42",
                "top": "0",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "40%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyflxSeparator0i64f357d973042 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "70%",
                "id": "CopyflxSeparator0i64f357d973042",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c6c01dffa6514d",
                "top": "0",
                "width": "1%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxSeparator0i64f357d973042.setDefaultUnit(voltmx.flex.DP);
            CopyflxSeparator0i64f357d973042.add();
            var CopytbxCVV0da07c147631548 = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0",
                "centerY": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CopytbxCVV0da07c147631548",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": "CVV",
                "right": "15dp",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0c110ca661d2a45",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%"
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
            CopyflxMonthYear0d8521103a3d641.add(CopyCalendar0a469247aeda549, CopyflxSeparator0i64f357d973042, CopytbxCVV0da07c147631548);
            var CopyflxTermsAndConditions0j511c8375f8540 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100dp",
                "id": "CopyflxTermsAndConditions0j511c8375f8540",
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
            CopyflxTermsAndConditions0j511c8375f8540.setDefaultUnit(voltmx.flex.DP);
            var CopychxGroupCreditCardPayment0effff2e5fd4e42 = new voltmx.ui.CheckBoxGroup({
                "height": "120dp",
                "id": "CopychxGroupCreditCardPayment0effff2e5fd4e42",
                "isVisible": true,
                "left": "0",
                "masterData": [
                    ["cbg1", "I have read the terms and conditions of credit card payment"],
                    ["cbg2", "save this card for future payments"]
                ],
                "selectedKeyValues": [
                    ["cbg1", "I have read the terms and conditions of credit card payment"],
                    ["cbg2", "save this card for future payments"]
                ],
                "selectedKeys": ["cbg1", "cbg2"],
                "skin": "CopyslCheckBoxGroup0d145cc84e6054c",
                "top": 10,
                "width": "100%"
            }, {
                "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "tickedImage": "check_box__2__1.png",
                "untickedImage": "check_box__1__1.png"
            });
            CopyflxTermsAndConditions0j511c8375f8540.add(CopychxGroupCreditCardPayment0effff2e5fd4e42);
            var CopyflxOrLoginWith0fc664ace393349 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "45dp",
                "id": "CopyflxOrLoginWith0fc664ace393349",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxOrLoginWith0fc664ace393349.setDefaultUnit(voltmx.flex.DP);
            var CopylblOrLoginWith0a40611d5414440 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblOrLoginWith0a40611d5414440",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg7F7F7FFont40px",
                "text": "Pay with card Or",
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
            var CopyflxlineLeft0i446c26d370146 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "1%",
                "id": "CopyflxlineLeft0i446c26d370146",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxLine",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxlineLeft0i446c26d370146.setDefaultUnit(voltmx.flex.DP);
            CopyflxlineLeft0i446c26d370146.add();
            var CopyflxLineRight0cce5005595974b = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "1%",
                "id": "CopyflxLineRight0cce5005595974b",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "sknflxLine",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxLineRight0cce5005595974b.setDefaultUnit(voltmx.flex.DP);
            CopyflxLineRight0cce5005595974b.add();
            CopyflxOrLoginWith0fc664ace393349.add(CopylblOrLoginWith0a40611d5414440, CopyflxlineLeft0i446c26d370146, CopyflxLineRight0cce5005595974b);
            var CopyflxPayButtons0f23809c6b71c42 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100dp",
                "id": "CopyflxPayButtons0f23809c6b71c42",
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
            CopyflxPayButtons0f23809c6b71c42.setDefaultUnit(voltmx.flex.DP);
            var CopyflxApplePay0e77313f5569d4a = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "45%",
                "id": "CopyflxApplePay0e77313f5569d4a",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGedededcstmBorderd7d7d750px",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxApplePay0e77313f5569d4a.setDefaultUnit(voltmx.flex.DP);
            var CopyflxInner0bf19f7f9e47f45 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "80%",
                "id": "CopyflxInner0bf19f7f9e47f45",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxInner0bf19f7f9e47f45.setDefaultUnit(voltmx.flex.DP);
            var CopyimgApple0f24b80816e814f = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "90%",
                "id": "CopyimgApple0f24b80816e814f",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "vector__3_1.png",
                "top": "0",
                "width": "20%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblApplePay0b64885836e734c = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "CopylblApplePay0b64885836e734c",
                "isVisible": true,
                "right": "0",
                "skin": "sknlblCPReg000000Font45px",
                "text": "Apple pay",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxInner0bf19f7f9e47f45.add(CopyimgApple0f24b80816e814f, CopylblApplePay0b64885836e734c);
            CopyflxApplePay0e77313f5569d4a.add(CopyflxInner0bf19f7f9e47f45);
            var CopyflxGooglePay0e6402eacc4ee48 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "centerX": "50%",
                "clipBounds": false,
                "height": "45%",
                "id": "CopyflxGooglePay0e6402eacc4ee48",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGedededcstmBorderd7d7d750px",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxGooglePay0e6402eacc4ee48.setDefaultUnit(voltmx.flex.DP);
            var CopyflxInner0j446fa6aa6c348 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "80%",
                "id": "CopyflxInner0j446fa6aa6c348",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxInner0j446fa6aa6c348.setDefaultUnit(voltmx.flex.DP);
            var CopyimgApple0b8b976c6e6ba49 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "90%",
                "id": "CopyimgApple0b8b976c6e6ba49",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "logos_google_pay.png",
                "top": "0",
                "width": "20%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblApplePay0j4cb461156244e = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "CopylblApplePay0j4cb461156244e",
                "isVisible": true,
                "right": "0",
                "skin": "sknlblCPReg000000Font45px",
                "text": "Google Pay",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxInner0j446fa6aa6c348.add(CopyimgApple0b8b976c6e6ba49, CopylblApplePay0j4cb461156244e);
            CopyflxGooglePay0e6402eacc4ee48.add(CopyflxInner0j446fa6aa6c348);
            CopyflxPayButtons0f23809c6b71c42.add(CopyflxApplePay0e77313f5569d4a, CopyflxGooglePay0e6402eacc4ee48);
            var btnPayNow = new voltmx.ui.Button({
                "bottom": "70dp",
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "8%",
                "id": "btnPayNow",
                "isVisible": true,
                "left": "0",
                "onClick": controller.AS_Button_cd320c2a40574715bd6778f5cb988e1a,
                "skin": "sknbtnd32437CstmBorder1pxCPRegfffffffONT50PX",
                "text": "Pay Now",
                "top": "20dp",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxBodyInputs0c4c418ffeeff48.add(CopyflxSelectedPayments0iba99d8ae0684a, CopyflxCardInfo0ade672f02e9f44, CopyflxNumberOnTheCard0g5de642fcf7e4b, CopyflxMonthYear0d8521103a3d641, CopyflxTermsAndConditions0j511c8375f8540, CopyflxOrLoginWith0fc664ace393349, CopyflxPayButtons0f23809c6b71c42, btnPayNow);
            flxBody.add(imgCreditCard, CopyflxBodyInputs0c4c418ffeeff48);
            flxMain.add(flxHeading, flxBody);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmPaymentMethod2,
            "enabledForIdleTimeout": false,
            "id": "frmPaymentMethod2",
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
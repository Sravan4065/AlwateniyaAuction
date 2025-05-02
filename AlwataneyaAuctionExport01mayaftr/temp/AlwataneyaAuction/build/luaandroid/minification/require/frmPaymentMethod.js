define("frmPaymentMethod", function() {
    return function(controller) {
        function addWidgetsfrmPaymentMethod() {
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
                "clipBounds": false,
                "height": "10%",
                "id": "flxHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "12dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeading.setDefaultUnit(voltmx.flex.DP);
            var flxBackAarrow = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "30%",
                "id": "flxBackAarrow",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBackAarrow.setDefaultUnit(voltmx.flex.DP);
            var imgBackAarrow = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgBackAarrow",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "group_1.png",
                "top": "0",
                "width": "10%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBackAarrow.add(imgBackAarrow);
            var flxHeadingText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "50%",
                "id": "flxHeadingText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeadingText.setDefaultUnit(voltmx.flex.DP);
            var lblPleaseChoose = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblPleaseChoose",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPBoldCapt000000Font45px",
                "text": "Please choose Your Buying limit from the below optionsto activate the account",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeadingText.add(lblPleaseChoose);
            flxHeading.add(flxBackAarrow, flxHeadingText);
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": false,
                "height": "85%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0f1ff1c1f8dda4d",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var imgPayment = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "30%",
                "id": "imgPayment",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "group_1000004742__1_.png",
                "top": "0",
                "width": "90%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxBidAmount = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "50%",
                "id": "flxBidAmount",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0b402c15793bb4b",
                "top": 220,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBidAmount.setDefaultUnit(voltmx.flex.DP);
            var radiobtnBidAmount = new voltmx.ui.RadioButtonGroup({
                "centerX": "50%",
                "height": "35%",
                "id": "radiobtnBidAmount",
                "isVisible": true,
                "left": "0",
                "masterData": [
                    ["rbg1", "AED 5,000 for a buying limit of AED 100,000"],
                    ["Key2520303046", "AED 7,500 for a buying limit of AED 150,000"],
                    ["Key2932335648", "AED 10,000 for a buying limit of AED 200,000"],
                    ["Key1708560043", "AED 50,000 for unlimited buying"]
                ],
                "skin": "sknradioCPReg231F20Font48px",
                "top": "20dp",
                "width": "100%"
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "tickedImage": "radio_button_2.png",
                "untickedImage": "radio_button__2__2.png"
            });
            var flxNote = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "20%",
                "id": "flxNote",
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
            flxNote.setDefaultUnit(voltmx.flex.DP);
            var lblNote = new voltmx.ui.Label({
                "height": "50%",
                "id": "lblNote",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0j4e25ffbb5ed48",
                "text": "Note:",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "12%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblNoteText = new voltmx.ui.Label({
                "id": "lblNoteText",
                "isVisible": true,
                "right": 10,
                "skin": "CopydefLabel0f186b66fcb1b4e",
                "text": "For cheque depositions & money transfer, call 0097180060066",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "83%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNote.add(lblNote, lblNoteText);
            var btnPayNow = new voltmx.ui.Button({
                "bottom": "70dp",
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "15%",
                "id": "btnPayNow",
                "isVisible": true,
                "left": "0",
                "onClick": controller.AS_Button_efd93f26dffb4ac4ad7f192d266dc93b,
                "skin": "sknbtnd32437CstmBorder1pxCPRegfffffffONT50PX",
                "text": "Pay Now",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBidAmount.add(radiobtnBidAmount, flxNote, btnPayNow);
            flxBody.add(imgPayment, flxBidAmount);
            var flxWhatsappcomponent = new com.hcl.voltmx.Whatsapp.flxWhatsappcomponent({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "50dp",
                "height": "50dp",
                "id": "flxWhatsappcomponent",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": "50dp",
                "skin": "sknFlx029051100borderadius",
                "width": "50dp",
                "zIndex": 1,
                "appName": "AlwataneyaAuction",
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMain.add(flxHeading, flxBody, flxWhatsappcomponent);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmPaymentMethod,
            "enabledForIdleTimeout": false,
            "id": "frmPaymentMethod",
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
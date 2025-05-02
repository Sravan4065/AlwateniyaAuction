define("frmAddRequest", function() {
    return function(controller) {
        function addWidgetsfrmAddRequest() {
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
            var flxBody = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "centerY": "52%",
                "clipBounds": false,
                "enableScrolling": true,
                "height": "80%",
                "horizontalScrollIndicator": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "8%",
                "verticalScrollIndicator": true,
                "width": "95%"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flxHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeading.setDefaultUnit(voltmx.flex.DP);
            var flxAddRequest = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxAddRequest",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffffRoundedCorner3d3d3d1px",
                "top": "0",
                "width": "50%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAddRequest.setDefaultUnit(voltmx.flex.DP);
            var lblAddRequest = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "lblAddRequest",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPBold000345Font74px",
                "text": "Add Request",
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
            flxAddRequest.add(lblAddRequest);
            flxHeading.add(flxAddRequest);
            var flxService = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "80dp",
                "id": "flxService",
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
            flxService.setDefaultUnit(voltmx.flex.DP);
            var lblService = new voltmx.ui.Label({
                "height": "40%",
                "id": "lblService",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg000000Font64px",
                "text": "Service Name",
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
            var lstBoxService = new voltmx.ui.ListBox({
                "bottom": "0",
                "focusSkin": "defListBoxFocus",
                "height": "60%",
                "id": "lstBoxService",
                "isVisible": true,
                "left": "0",
                "masterData": [
                    ["lb1", "Road Side Assisstance"],
                    ["lb2", "Car Inspection"],
                    ["lb3", "Buyer Change"]
                ],
                "skin": "sknlstBoxRoundedCornerBorder1px",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "applySkinsToPopup": true,
                "dropDownImage": "listboxarw.png",
                "placeholder": "Road Side Assisstance",
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
            });
            flxService.add(lblService, lstBoxService);
            var flxAuctionName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "80dp",
                "id": "flxAuctionName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 10,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionName.setDefaultUnit(voltmx.flex.DP);
            var lblAuctionName = new voltmx.ui.Label({
                "height": "40%",
                "id": "lblAuctionName",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg000000Font64px",
                "text": "Auction Name",
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
            var tbxAuctionName = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0",
                "height": "60%",
                "id": "tbxAuctionName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "Auction Name",
                "secureTextEntry": false,
                "skin": "defTextBoxNormal",
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
            flxAuctionName.add(lblAuctionName, tbxAuctionName);
            var flxGeneralNotes = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "80dp",
                "id": "flxGeneralNotes",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 10,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGeneralNotes.setDefaultUnit(voltmx.flex.DP);
            var lblGeneralNotes = new voltmx.ui.Label({
                "height": "40%",
                "id": "lblGeneralNotes",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg000000Font64px",
                "text": "General Notes",
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
            var tbxGeneralNotes = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0",
                "height": "60%",
                "id": "tbxGeneralNotes",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "General Notes",
                "secureTextEntry": false,
                "skin": "defTextBoxNormal",
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
            flxGeneralNotes.add(lblGeneralNotes, tbxGeneralNotes);
            var flxLocation = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "80dp",
                "id": "flxLocation",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 10,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLocation.setDefaultUnit(voltmx.flex.DP);
            var lblLocationName = new voltmx.ui.Label({
                "height": "40%",
                "id": "lblLocationName",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg000000Font64px",
                "text": "Location Name",
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
            var tbxLocation = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0",
                "height": "60%",
                "id": "tbxLocation",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "Location Name",
                "secureTextEntry": false,
                "skin": "defTextBoxNormal",
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
            flxLocation.add(lblLocationName, tbxLocation);
            var flxContactNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "80dp",
                "id": "flxContactNumber",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 10,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxContactNumber.setDefaultUnit(voltmx.flex.DP);
            var lblContactNumber = new voltmx.ui.Label({
                "height": "40%",
                "id": "lblContactNumber",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg000000Font64px",
                "text": "Contact Number",
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
            var tbxContactNumber = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0",
                "height": "60%",
                "id": "tbxContactNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "Contact Number",
                "secureTextEntry": false,
                "skin": "defTextBoxNormal",
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
            flxContactNumber.add(lblContactNumber, tbxContactNumber);
            var flxName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "80dp",
                "id": "flxName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 10,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxName.setDefaultUnit(voltmx.flex.DP);
            var lblName = new voltmx.ui.Label({
                "height": "40%",
                "id": "lblName",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg000000Font64px",
                "text": "Name",
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
            var tbxName = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "0",
                "height": "60%",
                "id": "tbxName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "Name",
                "secureTextEntry": false,
                "skin": "defTextBoxNormal",
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
            flxName.add(lblName, tbxName);
            var flxEmirite = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "80dp",
                "id": "flxEmirite",
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
            flxEmirite.setDefaultUnit(voltmx.flex.DP);
            var lblEmirite = new voltmx.ui.Label({
                "height": "40%",
                "id": "lblEmirite",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg000000Font64px",
                "text": "Emirite",
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
            var lstboxEmirite = new voltmx.ui.ListBox({
                "bottom": "0",
                "focusSkin": "defListBoxFocus",
                "height": "60%",
                "id": "lstboxEmirite",
                "isVisible": true,
                "left": "0",
                "masterData": [
                    ["lb1", "label"],
                    ["lb2", "Car Inspection"]
                ],
                "skin": "sknlstBoxRoundedCornerBorder1px",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "applySkinsToPopup": true,
                "dropDownImage": "listboxarw.png",
                "placeholder": "Road Side Assisstance",
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
            });
            flxEmirite.add(lblEmirite, lstboxEmirite);
            var flxButtons = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "70dp",
                "id": "flxButtons",
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
            flxButtons.setDefaultUnit(voltmx.flex.DP);
            var btnSave = new voltmx.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnSave",
                "isVisible": true,
                "left": "30dp",
                "skin": "defBtnNormal",
                "text": "Save",
                "top": 0,
                "width": "35%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancel = new voltmx.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnCancel",
                "isVisible": true,
                "right": "30dp",
                "skin": "defBtnNormal",
                "text": "Cancel",
                "top": "0",
                "width": "35%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 2],
                "paddingInPixel": false
            }, {});
            flxButtons.add(btnSave, btnCancel);
            flxBody.add(flxHeading, flxService, flxAuctionName, flxGeneralNotes, flxLocation, flxContactNumber, flxName, flxEmirite, flxButtons);
            flxMain.add(flxBody);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAddRequest,
            "enabledForIdleTimeout": false,
            "id": "frmAddRequest",
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
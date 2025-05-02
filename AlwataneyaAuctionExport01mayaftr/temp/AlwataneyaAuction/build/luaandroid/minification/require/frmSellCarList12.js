define("frmSellCarList12", function() {
    return function(controller) {
        function addWidgetsfrmSellCarList12() {
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
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMain.setDefaultUnit(voltmx.flex.DP);
            var flxHeaderNew = new com.hcl.Alwataneya2.headernewfigma.flxHeaderNew({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "8%",
                "id": "flxHeaderNew",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "AlwataneyaAuction",
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxBody = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "82%",
                "horizontalScrollIndicator": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox4",
                "top": "8%",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var lblcarquotation = new voltmx.ui.Label({
                "id": "lblcarquotation",
                "isVisible": true,
                "left": "5%",
                "skin": "Copysknlblcpbolb1",
                "text": "Your Car, Your Price, Our Trust!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDetail = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDetail",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c5122c846fc447",
                "top": "2%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDetail.setDefaultUnit(voltmx.flex.DP);
            var flxDetailCatagery = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDetailCatagery",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c5122c846fc447",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDetailCatagery.setDefaultUnit(voltmx.flex.DP);
            var flxName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20dp",
                "id": "flxName",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "13.00%",
                "isModalContainer": false,
                "skin": "CopysknflxCatagerynameontop3",
                "top": "0dp",
                "width": "15%",
                "zIndex": 5,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxName.setDefaultUnit(voltmx.flex.DP);
            var lblCatageryName = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblCatageryName",
                "isVisible": true,
                "left": "2%",
                "skin": "CopysknlblConsprobold2",
                "text": "Category",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgstar = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "imgstar",
                "isVisible": true,
                "left": "-1%",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "image___2_2.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxName.add(lblCatageryName, imgstar);
            var flxCatagery = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "focusSkin": "CopyCopysknflxD2",
                "height": "60dp",
                "id": "flxCatagery",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "10dp",
                "width": "90%",
                "zIndex": 1,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCatagery.setDefaultUnit(voltmx.flex.DP);
            var tbxCatageory = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopyCopyskntbxCpReg4",
                "height": "40dp",
                "id": "tbxCatageory",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "placeholder": "Category",
                "secureTextEntry": false,
                "skin": "CopyCopyskntbxCpReg4",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "9dp",
                "width": "70%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyCopyskntbxCpReg4",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxDownArrowCategory = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxDownArrowCategory",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "85%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "7dp",
                "width": "40dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDownArrowCategory.setDefaultUnit(voltmx.flex.DP);
            var imgCategoryDownarrow = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgCategoryDownarrow",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "listboxarw.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDownArrowCategory.add(imgCategoryDownarrow);
            var flxUpArrowCategory = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxUpArrowCategory",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "85%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "7dp",
                "width": "40dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUpArrowCategory.setDefaultUnit(voltmx.flex.DP);
            var imgCategoryUparrow = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgCategoryUparrow",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "listboxarw.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUpArrowCategory.add(imgCategoryUparrow);
            flxCatagery.add(tbxCatageory, flxDownArrowCategory, flxUpArrowCategory);
            var flxCatageryListDropdown = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "200dp",
                "id": "flxCatageryListDropdown",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "56dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCatageryListDropdown.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0h098ac10b9d34c = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20%",
                "id": "FlexContainer0h098ac10b9d34c",
                "isVisible": false,
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
            FlexContainer0h098ac10b9d34c.setDefaultUnit(voltmx.flex.DP);
            var tbxCatSearch = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "tbxCatSearch",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "placeholder": "Placeholder",
                "secureTextEntry": false,
                "skin": "defTextBoxNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0",
                "width": "300dp"
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
            FlexContainer0h098ac10b9d34c.add(tbxCatSearch);
            var SegCatageoryList = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblCatageyName": "Label"
                }, {
                    "lblCatageyName": "Label"
                }, {
                    "lblCatageyName": "Label"
                }, {
                    "lblCatageyName": "Label"
                }, {
                    "lblCatageyName": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "SegCatageoryList",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "CopyCopyseg0ffcb073624cd4d",
                "rowSkin": "CopyCopyseg0c4f6537bb2b648",
                "rowTemplate": "flxMain",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader5",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxMain": "flxMain",
                    "lblCatageyName": "lblCatageyName"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCatageryListDropdown.add(FlexContainer0h098ac10b9d34c, SegCatageoryList);
            var FlexContainer0e84bd277944e44 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "8dp",
                "id": "FlexContainer0e84bd277944e44",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "55dp",
                "width": "89%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0e84bd277944e44.setDefaultUnit(voltmx.flex.DP);
            FlexContainer0e84bd277944e44.add();
            flxDetailCatagery.add(flxName, flxCatagery, flxCatageryListDropdown, FlexContainer0e84bd277944e44);
            var flxSubcatagery = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSubcatagery",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSubcatagery.setDefaultUnit(voltmx.flex.DP);
            var flxsubcatagoryName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20dp",
                "id": "flxsubcatagoryName",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "13.00%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxCatagerynameontop2",
                "top": "0dp",
                "width": "20%",
                "zIndex": 5,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxsubcatagoryName.setDefaultUnit(voltmx.flex.DP);
            var lblSubcatageryName = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSubcatageryName",
                "isVisible": true,
                "left": "2%",
                "skin": "CopysknlblConsprobold2",
                "text": "Sub Category",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgsubcatageorystar = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "imgsubcatageorystar",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "image___2_2.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxsubcatagoryName.add(lblSubcatageryName, imgsubcatageorystar);
            var flxSubcatageoryIneerflex = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "focusSkin": "CopyCopysknflxD2",
                "height": "60dp",
                "id": "flxSubcatageoryIneerflex",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "10dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSubcatageoryIneerflex.setDefaultUnit(voltmx.flex.DP);
            var tbxSubcatageory = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopyCopyskntbxCpReg4",
                "height": "40dp",
                "id": "tbxSubcatageory",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "placeholder": "Sub Category",
                "secureTextEntry": false,
                "skin": "CopyCopyskntbxCpReg4",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "9dp",
                "width": "70%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyCopyskntbxCpReg4",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxsubcatageoryDownArrow = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxsubcatageoryDownArrow",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "85%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_g3faa83d81e34f04a45c33d0b26a16e6,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "7dp",
                "width": "40dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxsubcatageoryDownArrow.setDefaultUnit(voltmx.flex.DP);
            var imgSubcatageoryDownarrow = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgSubcatageoryDownarrow",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "listboxarw.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxsubcatageoryDownArrow.add(imgSubcatageoryDownarrow);
            var flxSubcatagryUparrow = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxSubcatagryUparrow",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "85%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_h235bdc452514bf1970e0fc17defca16,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "7dp",
                "width": "40dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSubcatagryUparrow.setDefaultUnit(voltmx.flex.DP);
            var imgsubcatageryUparrow = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgsubcatageryUparrow",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "listboxarw.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSubcatagryUparrow.add(imgsubcatageryUparrow);
            flxSubcatageoryIneerflex.add(tbxSubcatageory, flxsubcatageoryDownArrow, flxSubcatagryUparrow);
            var flxSubcatageoryDropdown = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "200dp",
                "id": "flxSubcatageoryDropdown",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "70dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSubcatageoryDropdown.setDefaultUnit(voltmx.flex.DP);
            var segSubcatageory = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblBranchname": "Label"
                }, {
                    "lblBranchname": "Label"
                }, {
                    "lblBranchname": "Label"
                }, {
                    "lblBranchname": "Label"
                }, {
                    "lblBranchname": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segSubcatageory",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "CopyCopyseg0ffcb073624cd4d",
                "rowSkin": "CopyCopyCopyseg2",
                "rowTemplate": "flxMainSubcatageory",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader5",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxMainSubcatageory": "flxMainSubcatageory",
                    "lblBranchname": "lblBranchname"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSubcatageoryDropdown.add(segSubcatageory);
            flxSubcatagery.add(flxsubcatagoryName, flxSubcatageoryIneerflex, flxSubcatageoryDropdown);
            var flxYearofMaking = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxYearofMaking",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxYearofMaking.setDefaultUnit(voltmx.flex.DP);
            var flxYearofMakingName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20dp",
                "id": "flxYearofMakingName",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "13.00%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxCatagerynameontop2",
                "top": "0dp",
                "width": "23%",
                "zIndex": 5,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxYearofMakingName.setDefaultUnit(voltmx.flex.DP);
            var lblYearofMaking = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblYearofMaking",
                "isVisible": true,
                "left": "2%",
                "skin": "CopysknlblConsprobold2",
                "text": "Year Of Making",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgYearofmaking = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "imgYearofmaking",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "image___2_2.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxYearofMakingName.add(lblYearofMaking, imgYearofmaking);
            var flxYearofmakingDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "focusSkin": "CopyCopysknflxD2",
                "height": "60dp",
                "id": "flxYearofmakingDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "10dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxYearofmakingDetails.setDefaultUnit(voltmx.flex.DP);
            var tbxYearOfMaking = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopyCopyskntbxCpReg4",
                "height": "40dp",
                "id": "tbxYearOfMaking",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "placeholder": "Year",
                "secureTextEntry": false,
                "skin": "CopyCopyskntbxCpReg4",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "9dp",
                "width": "70%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyCopyskntbxCpReg4",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxYearOfMakeDownArrow = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxYearOfMakeDownArrow",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "85%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "5dp",
                "width": "40dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxYearOfMakeDownArrow.setDefaultUnit(voltmx.flex.DP);
            var imgYearOfMakeDownArrow = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgYearOfMakeDownArrow",
                "isVisible": true,
                "left": "0",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "listboxarw.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxYearOfMakeDownArrow.add(imgYearOfMakeDownArrow);
            var flxYearOfMakeUpArrow = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxYearOfMakeUpArrow",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "85%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "7dp",
                "width": "40dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxYearOfMakeUpArrow.setDefaultUnit(voltmx.flex.DP);
            var imgYearOfMakeUpArrow = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgYearOfMakeUpArrow",
                "isVisible": true,
                "left": "0",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "listboxarw.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxYearOfMakeUpArrow.add(imgYearOfMakeUpArrow);
            flxYearofmakingDetails.add(tbxYearOfMaking, flxYearOfMakeDownArrow, flxYearOfMakeUpArrow);
            var flxYearMakeDropDownList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "200dp",
                "id": "flxYearMakeDropDownList",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "70dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxYearMakeDropDownList.setDefaultUnit(voltmx.flex.DP);
            var segYearOfMake = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblYearMake": "Label"
                }, {
                    "lblYearMake": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segYearOfMake",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "CopyCopyseg0ffcb073624cd4d",
                "rowSkin": "CopyCopyseg0c4f6537bb2b648",
                "rowTemplate": "flxSegRowYearMake",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader5",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSegRowYearMake": "flxSegRowYearMake",
                    "lblYearMake": "lblYearMake"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxYearMakeDropDownList.add(segYearOfMake);
            flxYearofMaking.add(flxYearofMakingName, flxYearofmakingDetails, flxYearMakeDropDownList);
            var flxChasisofNum = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxChasisofNum",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxChasisofNum.setDefaultUnit(voltmx.flex.DP);
            var flxChasisofNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20dp",
                "id": "flxChasisofNumber",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "13.00%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxCatagerynameontop2",
                "top": "0dp",
                "width": "25%",
                "zIndex": 5,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxChasisofNumber.setDefaultUnit(voltmx.flex.DP);
            var lblChasisofNumber = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblChasisofNumber",
                "isVisible": true,
                "left": "2%",
                "skin": "CopysknlblConsprobold2",
                "text": "Chassis Number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgyearofmakingstar = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "imgyearofmakingstar",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "image___2_2.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxChasisofNumber.add(lblChasisofNumber, imgyearofmakingstar);
            var flxChasisofnumberIneer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "focusSkin": "CopyCopysknflxD2",
                "height": "60dp",
                "id": "flxChasisofnumberIneer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "10dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxChasisofnumberIneer.setDefaultUnit(voltmx.flex.DP);
            var tbxChasisofNumber = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopyCopyskntbxCpReg4",
                "height": "40dp",
                "id": "tbxChasisofNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "placeholder": "Chassis number",
                "secureTextEntry": false,
                "skin": "CopyCopyskntbxCpReg4",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "9dp",
                "width": "70%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyCopyskntbxCpReg4",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxChasisofnumberIneer.add(tbxChasisofNumber);
            flxChasisofNum.add(flxChasisofNumber, flxChasisofnumberIneer);
            var flxBranches = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBranches",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBranches.setDefaultUnit(voltmx.flex.DP);
            var flxBranchesNmae = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20dp",
                "id": "flxBranchesNmae",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "13.00%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxCatagerynameontop2",
                "top": "0dp",
                "width": "15%",
                "zIndex": 5,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBranchesNmae.setDefaultUnit(voltmx.flex.DP);
            var lblBranchname = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblBranchname",
                "isVisible": true,
                "left": "2%",
                "skin": "CopysknlblConsprobold2",
                "text": "Branches",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgbranchstar = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "imgbranchstar",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "image___2_2.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBranchesNmae.add(lblBranchname, imgbranchstar);
            var flxBranchInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "focusSkin": "CopyCopysknflxD2",
                "height": "60dp",
                "id": "flxBranchInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "10dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBranchInner.setDefaultUnit(voltmx.flex.DP);
            var tbxBranchName = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopyCopyskntbxCpReg4",
                "height": "40dp",
                "id": "tbxBranchName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "placeholder": "Branch",
                "secureTextEntry": false,
                "skin": "CopyCopyskntbxCpReg4",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "9dp",
                "width": "70%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyCopyskntbxCpReg4",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxBranchDownArrow = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxBranchDownArrow",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "85%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_d64f3b4575ad4ec890ef79d193870449,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "7dp",
                "width": "40dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBranchDownArrow.setDefaultUnit(voltmx.flex.DP);
            var imgBranchDownarrow = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgBranchDownarrow",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "listboxarw.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBranchDownArrow.add(imgBranchDownarrow);
            var flxBranchUparrow = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxBranchUparrow",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "85%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_gb38bfd853764c6f8b3f5153b4fd18aa,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "7dp",
                "width": "40dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBranchUparrow.setDefaultUnit(voltmx.flex.DP);
            var imgBrancharrowdown = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgBrancharrowdown",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "listboxarw.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBranchUparrow.add(imgBrancharrowdown);
            flxBranchInner.add(tbxBranchName, flxBranchDownArrow, flxBranchUparrow);
            var flxBranchDropdown = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "200dp",
                "id": "flxBranchDropdown",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "70dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBranchDropdown.setDefaultUnit(voltmx.flex.DP);
            var SegBranches = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblBranchName": "1"
                }, {
                    "lblBranchName": "2"
                }, {
                    "lblBranchName": "3"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "SegBranches",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "CopyCopyseg0ffcb073624cd4d",
                "rowSkin": "CopyCopyseg0c4f6537bb2b648",
                "rowTemplate": "flxMainbrnachlist",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader5",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxMainbrnachlist": "flxMainbrnachlist",
                    "lblBranchName": "lblBranchName"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBranchDropdown.add(SegBranches);
            flxBranches.add(flxBranchesNmae, flxBranchInner, flxBranchDropdown);
            var flxKeys = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxKeys",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxKeys.setDefaultUnit(voltmx.flex.DP);
            var flxKeyName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20dp",
                "id": "flxKeyName",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "13.00%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxCatagerynameontop2",
                "top": "0dp",
                "width": "10%",
                "zIndex": 5,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxKeyName.setDefaultUnit(voltmx.flex.DP);
            var lblKeyName = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblKeyName",
                "isVisible": true,
                "left": "2%",
                "skin": "CopysknlblConsprobold2",
                "text": "Keys",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgkeystar = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "imgkeystar",
                "isVisible": true,
                "left": "-6%",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "image___2_2.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeyName.add(lblKeyName, imgkeystar);
            var flxKeyInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "focusSkin": "CopyCopysknflxD2",
                "height": "60dp",
                "id": "flxKeyInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "10dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxKeyInner.setDefaultUnit(voltmx.flex.DP);
            var tbxKeyInnername = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopyCopyskntbxCpReg4",
                "height": "40dp",
                "id": "tbxKeyInnername",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "placeholder": "Select key",
                "secureTextEntry": false,
                "skin": "CopyCopyskntbxCpReg4",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "9dp",
                "width": "70%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyCopyskntbxCpReg4",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxKeyDownArrow = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxKeyDownArrow",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "85%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_b0229c69c21c45f8b5f64854ac4f7b34,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "7dp",
                "width": "40dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxKeyDownArrow.setDefaultUnit(voltmx.flex.DP);
            var imgkeyDownarrow = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgkeyDownarrow",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "listboxarw.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeyDownArrow.add(imgkeyDownarrow);
            var flxkeyUparrow = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxkeyUparrow",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "85%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_d6bddd5746f74094ba08f2824241fefa,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "7dp",
                "width": "40dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxkeyUparrow.setDefaultUnit(voltmx.flex.DP);
            var imgkeyuparrow = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgkeyuparrow",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "listboxarw.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxkeyUparrow.add(imgkeyuparrow);
            flxKeyInner.add(tbxKeyInnername, flxKeyDownArrow, flxkeyUparrow);
            var flxKeydropdown = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "200dp",
                "id": "flxKeydropdown",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "70dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxKeydropdown.setDefaultUnit(voltmx.flex.DP);
            var segKeys = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblKeylist": "one"
                }, {
                    "lblKeylist": "two"
                }, {
                    "lblKeylist": "three"
                }, {
                    "lblKeylist": "four"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segKeys",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "CopyCopyseg0ffcb073624cd4d",
                "rowSkin": "CopyCopyseg0c4f6537bb2b648",
                "rowTemplate": "flxKeyslis",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopyCopysliPhoneSegmentHeader5",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxKeyslis": "flxKeyslis",
                    "lblKeylist": "lblKeylist"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeydropdown.add(segKeys);
            flxKeys.add(flxKeyName, flxKeyInner, flxKeydropdown);
            var flxMinimumSellingPrice = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxMinimumSellingPrice",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMinimumSellingPrice.setDefaultUnit(voltmx.flex.DP);
            var flxMinSellingPriceLegend = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20dp",
                "id": "flxMinSellingPriceLegend",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "13.00%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxCatagerynameontop2",
                "top": "0dp",
                "width": "25%",
                "zIndex": 5,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMinSellingPriceLegend.setDefaultUnit(voltmx.flex.DP);
            var lblMinSellingPriceLegend = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblMinSellingPriceLegend",
                "isVisible": true,
                "left": "2%",
                "skin": "CopysknlblConsprobold2",
                "text": "Min. Selling Price",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Copyimgyearofmakingstar0g2358973a2b34d = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "Copyimgyearofmakingstar0g2358973a2b34d",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "image___2_2.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMinSellingPriceLegend.add(lblMinSellingPriceLegend, Copyimgyearofmakingstar0g2358973a2b34d);
            var flxMinSellingPriceTextBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "focusSkin": "CopyCopysknflxD2",
                "height": "60dp",
                "id": "flxMinSellingPriceTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "10dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMinSellingPriceTextBox.setDefaultUnit(voltmx.flex.DP);
            var tbxMinimumSellingPrice = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopyCopyskntbxCpReg4",
                "height": "40dp",
                "id": "tbxMinimumSellingPrice",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "5.97%",
                "placeholder": "Min. Selling Price",
                "secureTextEntry": false,
                "skin": "CopyCopyskntbxCpReg4",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "10dp",
                "width": "70%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyCopyskntbxCpReg4",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxMinSellingPriceTextBox.add(tbxMinimumSellingPrice);
            flxMinimumSellingPrice.add(flxMinSellingPriceLegend, flxMinSellingPriceTextBox);
            var flxTargetSellingPrice = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxTargetSellingPrice",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTargetSellingPrice.setDefaultUnit(voltmx.flex.DP);
            var flxTargetSellingPriceLegend = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20dp",
                "id": "flxTargetSellingPriceLegend",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "13.00%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxCatagerynameontop2",
                "top": "0dp",
                "width": "25%",
                "zIndex": 5,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTargetSellingPriceLegend.setDefaultUnit(voltmx.flex.DP);
            var CopylblMinSellingPriceLegend0i1c3f47a0cf047 = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "CopylblMinSellingPriceLegend0i1c3f47a0cf047",
                "isVisible": true,
                "left": "2%",
                "skin": "CopysknlblConsprobold2",
                "text": "Target Selling Price",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Copyimgyearofmakingstar0d4fd85b4b7cd45 = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "Copyimgyearofmakingstar0d4fd85b4b7cd45",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "image___2_2.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTargetSellingPriceLegend.add(CopylblMinSellingPriceLegend0i1c3f47a0cf047, Copyimgyearofmakingstar0d4fd85b4b7cd45);
            var flxTargetSellingPriceTextBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "focusSkin": "CopyCopysknflxD2",
                "height": "60dp",
                "id": "flxTargetSellingPriceTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "10dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTargetSellingPriceTextBox.setDefaultUnit(voltmx.flex.DP);
            var tbxTargetSellingPrice = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopyCopyskntbxCpReg4",
                "height": "40dp",
                "id": "tbxTargetSellingPrice",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "placeholder": "Target Selling Price",
                "secureTextEntry": false,
                "skin": "CopyCopyskntbxCpReg4",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "9dp",
                "width": "70%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyCopyskntbxCpReg4",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxTargetSellingPriceTextBox.add(tbxTargetSellingPrice);
            flxTargetSellingPrice.add(flxTargetSellingPriceLegend, flxTargetSellingPriceTextBox);
            var flxNumberPlate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxNumberPlate",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a210dd2d159641",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxNumberPlate.setDefaultUnit(voltmx.flex.DP);
            var flxNumberPlateLegend = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20dp",
                "id": "flxNumberPlateLegend",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "13.00%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxCatagerynameontop2",
                "top": "0dp",
                "width": "25%",
                "zIndex": 5,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxNumberPlateLegend.setDefaultUnit(voltmx.flex.DP);
            var lblNumberPlateLegend = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblNumberPlateLegend",
                "isVisible": true,
                "left": "2%",
                "skin": "CopysknlblConsprobold2",
                "text": "Number Plate",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Copyimgyearofmakingstar0i90637345bb94b = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "Copyimgyearofmakingstar0i90637345bb94b",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopyslImage0h91926f449c343",
                "src": "image___2_2.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNumberPlateLegend.add(lblNumberPlateLegend, Copyimgyearofmakingstar0i90637345bb94b);
            var flxNumberPlateTextBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "focusSkin": "CopyCopysknflxD2",
                "height": "60dp",
                "id": "flxNumberPlateTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyCopysknflxD2",
                "top": "10dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxNumberPlateTextBox.setDefaultUnit(voltmx.flex.DP);
            var tbxNumberPlate = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopyCopyskntbxCpReg4",
                "height": "40dp",
                "id": "tbxNumberPlate",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "placeholder": "Number plate",
                "secureTextEntry": false,
                "skin": "CopyCopyskntbxCpReg4",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "9dp",
                "width": "70%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyCopyskntbxCpReg4",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxNumberPlateTextBox.add(tbxNumberPlate);
            flxNumberPlate.add(flxNumberPlateLegend, flxNumberPlateTextBox);
            var flxColors = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "90dp",
                "id": "flxColors",
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
            flxColors.setDefaultUnit(voltmx.flex.DP);
            var flxcolorsHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30%",
                "id": "flxcolorsHeading",
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
            flxcolorsHeading.setDefaultUnit(voltmx.flex.DP);
            var lblColors = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblColors",
                "isVisible": true,
                "left": 2,
                "skin": "sknlblCPBold231f20Font50px",
                "text": "Colors",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "20%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSeeAll = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblSeeAll",
                "isVisible": true,
                "right": "0",
                "skin": "sknlblCPBold231f20Font50px",
                "text": "See All",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "16%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxcolorsHeading.add(lblColors, lblSeeAll);
            var flxColorsBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "clipBounds": false,
                "height": "70dp",
                "id": "flxColorsBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxColorsBody.setDefaultUnit(voltmx.flex.DP);
            var flxWhite = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxWhite",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxWhite.setDefaultUnit(voltmx.flex.DP);
            var flxWhiteRound = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "45%",
                "id": "flxWhiteRound",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "flxBGffffffBorder1px000000",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxWhiteRound.setDefaultUnit(voltmx.flex.DP);
            flxWhiteRound.add();
            var lblWhite = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "lblWhite",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlblCPReg231F20Font40px",
                "text": "White",
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
            flxWhite.add(flxWhiteRound, lblWhite);
            var flxGray = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxGray",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "80dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGray.setDefaultUnit(voltmx.flex.DP);
            var flxGrayContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "45%",
                "id": "flxGrayContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknflxBG7E7E7EBorder1px7E7E7E",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGrayContainer.setDefaultUnit(voltmx.flex.DP);
            flxGrayContainer.add();
            var lblGray = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "lblGray",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlblCPReg231F20Font40px",
                "text": "Gray",
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
            flxGray.add(flxGrayContainer, lblGray);
            var flxBlue = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxBlue",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "170dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBlue.setDefaultUnit(voltmx.flex.DP);
            var flxBlueContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "45%",
                "id": "flxBlueContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknflx0077BACstmBorder1px0077BA",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBlueContainer.setDefaultUnit(voltmx.flex.DP);
            flxBlueContainer.add();
            var lblBlue = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "lblBlue",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlblCPReg231F20Font40px",
                "text": "Blue",
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
            flxBlue.add(flxBlueContainer, lblBlue);
            var flxBlack = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxBlack",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "slFbox",
                "top": "0",
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBlack.setDefaultUnit(voltmx.flex.DP);
            var flxBlackContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "45%",
                "id": "flxBlackContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG000000CstmBorder1pxRad100px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBlackContainer.setDefaultUnit(voltmx.flex.DP);
            flxBlackContainer.add();
            var lblBlack = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "lblBlack",
                "isVisible": true,
                "right": 0,
                "skin": "sknlblCPReg231F20Font40px",
                "text": "Black",
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
            flxBlack.add(flxBlackContainer, lblBlack);
            var flxRemainingColours = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "flxRemainingColours",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemainingColours.setDefaultUnit(voltmx.flex.DP);
            flxRemainingColours.add();
            flxColorsBody.add(flxWhite, flxGray, flxBlue, flxBlack, flxRemainingColours);
            flxColors.add(flxcolorsHeading, flxColorsBody);
            var flxFuelType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "90dp",
                "id": "flxFuelType",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFuelType.setDefaultUnit(voltmx.flex.DP);
            var flxFuelTypeHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30%",
                "id": "flxFuelTypeHeading",
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
            flxFuelTypeHeading.setDefaultUnit(voltmx.flex.DP);
            var lblFuelType = new voltmx.ui.Label({
                "id": "lblFuelType",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPBold231f20Font50px",
                "text": "Fuel Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFuelTypeHeading.add(lblFuelType);
            var flxFuelTypeBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "clipBounds": false,
                "height": "70%",
                "id": "flxFuelTypeBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFuelTypeBody.setDefaultUnit(voltmx.flex.DP);
            var flxDiesel = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "58%",
                "id": "flxDiesel",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGd3237Border1pxd32437",
                "top": "0",
                "width": "23%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDiesel.setDefaultUnit(voltmx.flex.DP);
            var lblDiesel = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "lblDiesel",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPRegffffffFont45px",
                "text": "Diesel",
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
            flxDiesel.add(lblDiesel);
            var flxElectric = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "37%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "58%",
                "id": "flxElectric",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffffCtmBorder1px000000",
                "top": "0",
                "width": "23%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxElectric.setDefaultUnit(voltmx.flex.DP);
            var lblElectric = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblElectric",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0ia148863ce2240",
                "text": "Electric",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxElectric.add(lblElectric);
            var flxPetrol = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "63%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "58%",
                "id": "flxPetrol",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffffCtmBorder1px000000",
                "top": "0",
                "width": "23%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPetrol.setDefaultUnit(voltmx.flex.DP);
            var lblPetrol = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblPetrol",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0ia148863ce2240",
                "text": "Petrol",
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
            flxPetrol.add(lblPetrol);
            var flxHybrid = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "centerY": "50%",
                "clipBounds": false,
                "height": "58%",
                "id": "flxHybrid",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "sknflxBGffffffCtmBorder1px000000",
                "width": "23%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHybrid.setDefaultUnit(voltmx.flex.DP);
            var lblHybrid = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblHybrid",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0ia148863ce2240",
                "text": "Hybrid",
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
            flxHybrid.add(lblHybrid);
            flxFuelTypeBody.add(flxDiesel, flxElectric, flxPetrol, flxHybrid);
            flxFuelType.add(flxFuelTypeHeading, flxFuelTypeBody);
            var flxInstructions = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100dp",
                "id": "flxInstructions",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInstructions.setDefaultUnit(voltmx.flex.DP);
            var chxInstructions = new voltmx.ui.CheckBoxGroup({
                "centerX": "50%",
                "height": "80dp",
                "id": "chxInstructions",
                "isVisible": true,
                "left": "0",
                "masterData": [
                    ["cbg1", "Pick up my vehicle"],
                    ["cbg2", "I will deliver it to AWA center"],
                    ["cbg3", "I have read & agreed with"]
                ],
                "selectedKeyValues": [
                    ["cbg2", "I will deliver it to AWA center"]
                ],
                "selectedKeys": ["cbg2"],
                "skin": "CopyslCheckBoxGroup0gf6361b3cb0541",
                "top": "0dp",
                "width": "90%"
            }, {
                "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 2, 0, 0],
                "paddingInPixel": false
            }, {
                "tickedImage": "check_box__2__1.png",
                "untickedImage": "group_550.png"
            });
            flxInstructions.add(chxInstructions);
            flxDetail.add(flxDetailCatagery, flxSubcatagery, flxYearofMaking, flxChasisofNum, flxBranches, flxKeys, flxMinimumSellingPrice, flxTargetSellingPrice, flxNumberPlate, flxColors, flxFuelType, flxInstructions);
            var btnSubmit = new voltmx.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "height": "50dp",
                "id": "btnSubmit",
                "isVisible": true,
                "left": "12%",
                "skin": "CopyCopysknbtndcprgd3",
                "text": "Submit",
                "top": "2%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBody.add(lblcarquotation, flxDetail, btnSubmit);
            var Footer2 = new com.hcl.voltmx.alwataneya1.Footer2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "height": "10%",
                "id": "Footer2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxFooter",
                "width": "100%",
                "zIndex": 1,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "Footer2": {
                        "height": "10%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMain.add(flxHeaderNew, flxBody, Footer2);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSellCarList12,
            "enabledForIdleTimeout": false,
            "id": "frmSellCarList12",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyCopyslForm0f41dff1256734d",
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
            "titleBarSkin": "CopyCopyslTitleBar0d9d2ded100d849",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});
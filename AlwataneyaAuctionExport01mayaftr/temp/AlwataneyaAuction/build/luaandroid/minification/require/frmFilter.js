define("frmFilter", function() {
    return function(controller) {
        function addWidgetsfrmFilter() {
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
                "skin": "CopyslFbox0c5122c846fc447",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMain.setDefaultUnit(voltmx.flex.DP);
            var flxHeader = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "10%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopysknflxF1",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeader.setDefaultUnit(voltmx.flex.DP);
            var flxLeftHeaderContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxLeftHeaderContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f5da4d52b2154e",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLeftHeaderContainer.setDefaultUnit(voltmx.flex.DP);
            var imgBack = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "40%",
                "id": "imgBack",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopyslImage0e7338b50aa2044",
                "src": "group_2.png",
                "top": 0,
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFilter = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "50%",
                "id": "lblFilter",
                "isVisible": true,
                "right": "10dp",
                "skin": "CopysknlblCPReg0h08d573431674c",
                "text": "Filter",
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
            flxLeftHeaderContainer.add(imgBack, lblFilter);
            var flxRightHeaderContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRightHeaderContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "CopyCopyslFbox0h78c06cef7bb46",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRightHeaderContainer.setDefaultUnit(voltmx.flex.DP);
            var lblClearAll = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblClearAll",
                "isVisible": true,
                "left": "0",
                "skin": "CopysknlblCPRegEA3",
                "text": "Clear All",
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
            var imgCancel = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "60%",
                "id": "imgCancel",
                "isVisible": true,
                "right": "20dp",
                "skin": "CopyslImage0e7338b50aa2044",
                "src": "bitcoin_icons_cross_filled__1__2.png",
                "top": "0",
                "width": "20%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRightHeaderContainer.add(lblClearAll, imgCancel);
            flxHeader.add(flxLeftHeaderContainer, flxRightHeaderContainer);
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "90%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c5122c846fc447",
                "top": "10%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flxAside = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxAside",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0h05af637bc7d47",
                "top": "0",
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAside.setDefaultUnit(voltmx.flex.DP);
            var segFilter = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "groupCells": false,
                "height": "100%",
                "id": "segFilter",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "Copyseg0d57f286a12bb44",
                "rowSkin": "Copyseg0cdd955da56ce4e",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopysliPhoneSegmentHeader0bdfb981bf36c40",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "65dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {},
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCategories = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "10%",
                "id": "flxCategories",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "Copysknflxea1",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCategories.setDefaultUnit(voltmx.flex.DP);
            var flxFocus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxFocus",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "-5dp",
                "isModalContainer": false,
                "skin": "CopysknflxE1",
                "top": "0",
                "width": "10%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFocus.setDefaultUnit(voltmx.flex.DP);
            flxFocus.add();
            var lblCategories = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblCategories",
                "isVisible": true,
                "skin": "CopysknlblCPRegEA3",
                "text": "Categories",
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
            flxCategories.add(flxFocus, lblCategories);
            flxAside.add(segFilter, flxCategories);
            var flxRightAside = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRightAside",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0c5122c846fc447",
                "top": "0",
                "width": "60%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRightAside.setDefaultUnit(voltmx.flex.DP);
            var flxSelectedFilters = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSelectedFilters",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c5122c846fc447",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSelectedFilters.setDefaultUnit(voltmx.flex.DP);
            var flxSelect = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20dp",
                "id": "flxSelect",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c5122c846fc447",
                "top": 10,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSelect.setDefaultUnit(voltmx.flex.DP);
            var lblSelect = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSelect",
                "isVisible": true,
                "left": 10,
                "skin": "CopyCopydefLabel0eb48a27328564e",
                "text": "SELECT",
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
            flxSelect.add(lblSelect);
            flxSelectedFilters.add(flxSelect);
            var flxFilterTypes = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "260dp",
                "id": "flxFilterTypes",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0c5122c846fc447",
                "top": "50dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFilterTypes.setDefaultUnit(voltmx.flex.DP);
            var flxVehicles = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "15%",
                "id": "flxVehicles",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopysknflxCustomRoundedCCCCCC1",
                "top": "0dp",
                "width": "45%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVehicles.setDefaultUnit(voltmx.flex.DP);
            var lblVehicles = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblVehicles",
                "isVisible": true,
                "skin": "CopysknlblCPReg0e5d57cdf34e74b",
                "text": " Vehicles",
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
            flxVehicles.add(lblVehicles);
            var flxHeavyEquipment = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "15%",
                "id": "flxHeavyEquipment",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopysknflxCustomRoundedCCCCCC1",
                "top": "10dp",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeavyEquipment.setDefaultUnit(voltmx.flex.DP);
            var lblEquipment = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblEquipment",
                "isVisible": true,
                "skin": "CopysknlblCPReg0e5d57cdf34e74b",
                "text": "Heavy Equipment & Machinery",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "95%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeavyEquipment.add(lblEquipment);
            var flxLicensePlates = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "15%",
                "id": "flxLicensePlates",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopysknflxCustomRoundedCCCCCC1",
                "top": "10dp",
                "width": "65%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLicensePlates.setDefaultUnit(voltmx.flex.DP);
            var lblLicensePlates = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblLicensePlates",
                "isVisible": true,
                "skin": "CopysknlblCPReg0e5d57cdf34e74b",
                "text": "License Plates",
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
            flxLicensePlates.add(lblLicensePlates);
            var flxProperties = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "15%",
                "id": "flxProperties",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopysknflxCustomRoundedCCCCCC1",
                "top": "10dp",
                "width": "60%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxProperties.setDefaultUnit(voltmx.flex.DP);
            var lblProperties = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblProperties",
                "isVisible": true,
                "skin": "CopysknlblCPReg0e5d57cdf34e74b",
                "text": "Properties",
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
            flxProperties.add(lblProperties);
            var flxJewelleryAndWatches = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "15%",
                "id": "flxJewelleryAndWatches",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopysknflxCustomRoundedCCCCCC1",
                "top": "10dp",
                "width": "86%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxJewelleryAndWatches.setDefaultUnit(voltmx.flex.DP);
            var lblJewelleryAndWatches = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblJewelleryAndWatches",
                "isVisible": true,
                "skin": "CopysknlblCPReg0e5d57cdf34e74b",
                "text": "Jewellery & Watches",
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
            flxJewelleryAndWatches.add(lblJewelleryAndWatches);
            var flxGeneralItems = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "15%",
                "id": "flxGeneralItems",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopysknflxCustomRoundedCCCCCC1",
                "top": "10dp",
                "width": "70%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGeneralItems.setDefaultUnit(voltmx.flex.DP);
            var lblGeneralItems = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblGeneralItems",
                "isVisible": true,
                "skin": "CopysknlblCPReg0e5d57cdf34e74b",
                "text": "General Items",
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
            flxGeneralItems.add(lblGeneralItems);
            flxFilterTypes.add(flxVehicles, flxHeavyEquipment, flxLicensePlates, flxProperties, flxJewelleryAndWatches, flxGeneralItems);
            flxRightAside.add(flxSelectedFilters, flxFilterTypes);
            flxBody.add(flxAside, flxRightAside);
            flxMain.add(flxHeader, flxBody);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmFilter,
            "enabledForIdleTimeout": false,
            "id": "frmFilter",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0a7c9a3e0485648",
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
            "titleBarSkin": "CopyslTitleBar0ef4e80de4dbe4a",
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});
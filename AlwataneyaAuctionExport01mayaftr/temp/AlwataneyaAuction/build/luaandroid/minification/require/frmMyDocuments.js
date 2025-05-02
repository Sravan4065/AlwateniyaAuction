define("frmMyDocuments", function() {
    return function(controller) {
        function addWidgetsfrmMyDocuments() {
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
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "85%",
                "id": "flxBody",
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
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flxHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxHeading",
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
            flxHeading.setDefaultUnit(voltmx.flex.DP);
            var flxBack = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "50%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "40dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBack.setDefaultUnit(voltmx.flex.DP);
            var imgLeftArrow = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgLeftArrow",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "tabler_arrow_up__1_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(imgLeftArrow);
            var lblDocuments = new voltmx.ui.Label({
                "centerX": "43%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblDocuments",
                "isVisible": true,
                "skin": "sknlblDubaiMed231F20Font60px",
                "text": "My Documents",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxPlus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "50%",
                "id": "flxPlus",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPlus.setDefaultUnit(voltmx.flex.DP);
            var imgPlus = new voltmx.ui.Image2({
                "bottom": "0",
                "centerY": "50%",
                "height": "100%",
                "id": "imgPlus",
                "isVisible": true,
                "right": 0,
                "skin": "slImage",
                "src": "ic_round_plus__1_.png",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPlus.add(imgPlus);
            flxHeading.add(flxBack, lblDocuments, flxPlus);
            var flxSegment = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "80%",
                "id": "flxSegment",
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
            flxSegment.setDefaultUnit(voltmx.flex.DP);
            var segDocs = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "imgDocs": "material_symbols_light_folder_outline.png",
                    "lblRowDocs": "Government IDs"
                }, {
                    "imgDocs": "material_symbols_light_folder_outline.png",
                    "lblRowDocs": "Trade Licenses"
                }, {
                    "imgDocs": "material_symbols_light_folder_outline.png",
                    "lblRowDocs": "VAT Certificates"
                }, {
                    "imgDocs": "material_symbols_light_folder_outline.png",
                    "lblRowDocs": "Payment Receipt"
                }, {
                    "imgDocs": "material_symbols_light_folder_outline.png",
                    "lblRowDocs": "Sale Letters"
                }, {
                    "imgDocs": "material_symbols_light_folder_outline.png",
                    "lblRowDocs": "Possession Leters"
                }, {
                    "imgDocs": "material_symbols_light_folder_outline.png",
                    "lblRowDocs": "Inspection Reports"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segDocs",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "segRowDocs",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "cfcfcf00",
                "separatorRequired": true,
                "separatorThickness": 2,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "imgDocs": "imgDocs",
                    "lblRowDocs": "lblRowDocs",
                    "segRowDocs": "segRowDocs"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegment.add(segDocs);
            flxBody.add(flxHeading, flxSegment);
            var Footer2 = new com.hcl.voltmx.alwataneya1.Footer2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "height": "12%",
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
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxUploadPopup = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": false,
                    "value": 100
                },
                "clipBounds": true,
                "height": "100%",
                "id": "flxUploadPopup",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": true,
                "skin": "sknflxBG000000Opacity50per",
                "top": "0",
                "width": "100%",
                "zIndex": 100,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadPopup.setDefaultUnit(voltmx.flex.DP);
            var flxUploadInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxUploadInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffffRoundedCorner1px",
                "top": "10%",
                "width": "85%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadInner.setDefaultUnit(voltmx.flex.DP);
            var flxUploadInnerBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": false,
                "id": "flxUploadInnerBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "50dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadInnerBody.setDefaultUnit(voltmx.flex.DP);
            var flxDocumentType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDocumentType",
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
            flxDocumentType.setDefaultUnit(voltmx.flex.DP);
            var lblDocumentType = new voltmx.ui.Label({
                "height": "30dp",
                "id": "lblDocumentType",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiMed767676Font40px",
                "text": "Document Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDropDownContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDropDownContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxRoundedCornerBordercccccc1px",
                "top": "30dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDropDownContainer.setDefaultUnit(voltmx.flex.DP);
            var flxSelect = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35dp",
                "id": "flxSelect",
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
            flxSelect.setDefaultUnit(voltmx.flex.DP);
            var lblSelect = new voltmx.ui.Label({
                "height": "30dp",
                "id": "lblSelect",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlblDubaiReg231F20Font40px",
                "text": "Select",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 3,
                "width": "40%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDropDown = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "clipBounds": false,
                "height": "25dp",
                "id": "flxDropDown",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": "3dp",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDropDown.setDefaultUnit(voltmx.flex.DP);
            var imgDropDown = new voltmx.ui.Image2({
                "height": "30dp",
                "id": "imgDropDown",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "iconamoon_arrow_down_2.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgUpArrow = new voltmx.ui.Image2({
                "height": "30dp",
                "id": "imgUpArrow",
                "isVisible": false,
                "left": "0",
                "skin": "slImage",
                "src": "uparrowfromvehicleinsp.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDropDown.add(imgDropDown, imgUpArrow);
            flxSelect.add(lblSelect, flxDropDown);
            var flxDocTypeDropDownList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxDocTypeDropDownList",
                "isVisible": false,
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
            flxDocTypeDropDownList.setDefaultUnit(voltmx.flex.DP);
            var segTypes = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "lblType": "Emirates ID"
                }, {
                    "lblType": "Driving License"
                }, {
                    "lblType": "Trade License"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segTypes",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "segRowTypes",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "lblType": "lblType",
                    "segRowTypes": "segRowTypes"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDocTypeDropDownList.add(segTypes);
            flxDropDownContainer.add(flxSelect, flxDocTypeDropDownList);
            flxDocumentType.add(lblDocumentType, flxDropDownContainer);
            var flxUploadPhotos = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "80dp",
                "clipBounds": false,
                "id": "flxUploadPhotos",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadPhotos.setDefaultUnit(voltmx.flex.DP);
            var flxUploadPhotoHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxUploadPhotoHeading",
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
            flxUploadPhotoHeading.setDefaultUnit(voltmx.flex.DP);
            var lblUploadPhotos = new voltmx.ui.Label({
                "height": "30%",
                "id": "lblUploadPhotos",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiBold231f20Font35px",
                "text": "Upload photos of your document",
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
            var lblUploadText = new voltmx.ui.Label({
                "bottom": "0dp",
                "height": "60%",
                "id": "lblUploadText",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg767676Font32px",
                "text": "securely upload your document to ensure a smooth and secure experience",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUploadPhotoHeading.add(lblUploadPhotos, lblUploadText);
            var FlexScrollUploadGroup = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "FlexScrollUploadGroup",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            FlexScrollUploadGroup.setDefaultUnit(voltmx.flex.DP);
            var flxUploadContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "170dp",
                "id": "flxUploadContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxCustomRoundedCCCCCC5px",
                "top": 10,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadContainer.setDefaultUnit(voltmx.flex.DP);
            var flxUploadPhotoClickArea = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxUploadPhotoClickArea",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "80%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadPhotoClickArea.setDefaultUnit(voltmx.flex.DP);
            var CopyimgUser0afea55149e8b4b = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "20%",
                "id": "CopyimgUser0afea55149e8b4b",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "basil_user_outline.png",
                "top": "15dp",
                "width": "15%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblUploadDocument0cd70e3ef9dcc48 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "CopylblUploadDocument0cd70e3ef9dcc48",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiMed231F20Font35px",
                "text": "Upload Document",
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
            var CopyflxUploadImageRules0bf76b676bf7b44 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "30%",
                "id": "CopyflxUploadImageRules0bf76b676bf7b44",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "80%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxUploadImageRules0bf76b676bf7b44.setDefaultUnit(voltmx.flex.DP);
            var CopylblJpgOrPng0b9e0fcc1313940 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "100%",
                "id": "CopylblJpgOrPng0b9e0fcc1313940",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiReg767676Font32px",
                "text": "JPEG or PNG only, and Maximum File size is 10MB",
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
            CopyflxUploadImageRules0bf76b676bf7b44.add(CopylblJpgOrPng0b9e0fcc1313940);
            flxUploadPhotoClickArea.add(CopyimgUser0afea55149e8b4b, CopylblUploadDocument0cd70e3ef9dcc48, CopyflxUploadImageRules0bf76b676bf7b44);
            var flxUploadedFrontview = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxUploadedFrontview",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadedFrontview.setDefaultUnit(voltmx.flex.DP);
            var lblFrontView = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "10%",
                "id": "lblFrontView",
                "isVisible": true,
                "skin": "sknlblDubaiBold231f20Font35px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgFrontView = new voltmx.ui.Image2({
                "bottom": 5,
                "centerX": "50%",
                "height": "80%",
                "id": "imgFrontView",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "imagedrag.png",
                "width": "90%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUploadedFrontview.add(lblFrontView, imgFrontView);
            flxUploadContainer.add(flxUploadPhotoClickArea, flxUploadedFrontview);
            var btnUploadBackView = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "15%",
                "id": "btnUploadBackView",
                "isVisible": false,
                "left": "0",
                "skin": "sknbtnBG61B35CDubaiRegFont45pxRoundedBorder1px",
                "top": 10,
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxUploadedBackView = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxUploadedBackView",
                "isVisible": false,
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
            flxUploadedBackView.setDefaultUnit(voltmx.flex.DP);
            var lblBackView = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "10%",
                "id": "lblBackView",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiBold231f20Font35px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgBackView = new voltmx.ui.Image2({
                "bottom": "10dp",
                "centerX": "50%",
                "height": "80%",
                "id": "imgBackView",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "imagedrag.png",
                "width": "90%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUploadedBackView.add(lblBackView, imgBackView);
            FlexScrollUploadGroup.add(flxUploadContainer, btnUploadBackView, flxUploadedBackView);
            flxUploadPhotos.add(flxUploadPhotoHeading, FlexScrollUploadGroup);
            var flxExpiryDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "60dp",
                "id": "flxExpiryDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": -70,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxExpiryDate.setDefaultUnit(voltmx.flex.DP);
            var lblExpiryDate = new voltmx.ui.Label({
                "height": "30%",
                "id": "lblExpiryDate",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblDubaiMed767676Font40px",
                "text": "Expiry Date",
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
            var Calendar0c9129c6e1d2d4e = new voltmx.ui.Calendar({
                "bottom": "0",
                "calendarIcon": "iconoir_calendar.png",
                "dateComponents": [26, 4, 2025, 0, 0, 0],
                "dateFormat": "dd/MM/yyyy",
                "day": 26,
                "formattedDate": "26/04/2025",
                "height": "60%",
                "hour": 0,
                "id": "Calendar0c9129c6e1d2d4e",
                "isVisible": true,
                "left": "0",
                "minutes": 0,
                "month": 4,
                "seconds": 0,
                "skin": "sknCalendarbRoundedBorderCCCCCCFont231F20Size45px",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "100%",
                "year": 2025
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxExpiryDate.add(lblExpiryDate, Calendar0c9129c6e1d2d4e);
            var flxSeparator = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 80,
                "clipBounds": false,
                "height": "2dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxBFGCCCCCCplainBorderFontCCCCCC1px",
                "top": 20,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSeparator.setDefaultUnit(voltmx.flex.DP);
            flxSeparator.add();
            flxUploadInnerBody.add(flxDocumentType, flxUploadPhotos, flxExpiryDate, flxSeparator);
            var flxUploadInnerHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "50dp",
                "id": "flxUploadInnerHeading",
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
            flxUploadInnerHeading.setDefaultUnit(voltmx.flex.DP);
            var lblAddDocument = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblAddDocument",
                "isVisible": true,
                "left": 0,
                "skin": "sknlblDubaiReg231F20Font50px",
                "text": "Add Document",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUploadInnerHeading.add(lblAddDocument);
            var flxFooterButtons = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "15dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "50dp",
                "id": "flxFooterButtons",
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
            flxFooterButtons.setDefaultUnit(voltmx.flex.DP);
            var btnBack = new voltmx.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "70%",
                "id": "btnBack",
                "isVisible": true,
                "left": "0",
                "skin": "sknbtnRoundedBorder7676761pxFontDubaiReg767676Size40px",
                "text": "Back",
                "top": "0",
                "width": "35%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSubmit = new voltmx.ui.Button({
                "bottom": "0",
                "centerY": "50%",
                "height": "70%",
                "id": "btnSubmit",
                "isVisible": true,
                "onClick": controller.AS_Button_ca86ac268fd949d6b42b315db7eb3645,
                "right": "0",
                "skin": "sknbtnBGccccccRoundedBordercccccc1pxFontDubaiReg767676Size40px",
                "text": "Submit",
                "width": "35%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFooterButtons.add(btnBack, btnSubmit);
            flxUploadInner.add(flxUploadInnerBody, flxUploadInnerHeading, flxFooterButtons);
            flxUploadPopup.add(flxUploadInner);
            flxMain.add(flxHeaderNew, flxBody, Footer2, flxUploadPopup);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmMyDocuments,
            "enabledForIdleTimeout": false,
            "id": "frmMyDocuments",
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
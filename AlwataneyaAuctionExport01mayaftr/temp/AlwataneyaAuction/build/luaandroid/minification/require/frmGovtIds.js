define("frmGovtIds", function() {
    return function(controller) {
        function addWidgetsfrmGovtIds() {
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
                "height": "80%",
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
            var flxBackNav = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "50%",
                "id": "flxBackNav",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "30dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBackNav.setDefaultUnit(voltmx.flex.DP);
            var imgBack = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgBack",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "tabler_arrow_up.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBackNav.add(imgBack);
            var flxGovtIdsHeadText = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "48%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxGovtIdsHeadText",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "65%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGovtIdsHeadText.setDefaultUnit(voltmx.flex.DP);
            var imgDocs = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "imgDocs",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "material_symbols_light_folder_open_outline.png",
                "top": "0",
                "width": "20%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblGovtIds = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblGovtIds",
                "isVisible": true,
                "right": "15dp",
                "skin": "sknlblDubaiMed231F20Font60px",
                "text": "Government IDs",
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
            flxGovtIdsHeadText.add(imgDocs, lblGovtIds);
            flxHeading.add(flxBackNav, flxGovtIdsHeadText);
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
            var segGovtIds = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "btnStatus": "",
                    "imgEyeOpen": "",
                    "imgUpload": "",
                    "lblIdName": ""
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segGovtIds",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "segRowGovtIds",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "cfcfcf00",
                "separatorRequired": true,
                "separatorThickness": 2,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnStatus": "btnStatus",
                    "flxEyeOpen": "flxEyeOpen",
                    "flxNameAndStatus": "flxNameAndStatus",
                    "flxUpload": "flxUpload",
                    "flxUpoadAndSeen": "flxUpoadAndSeen",
                    "imgEyeOpen": "imgEyeOpen",
                    "imgUpload": "imgUpload",
                    "lblIdName": "lblIdName",
                    "segRowGovtIds": "segRowGovtIds"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegment.add(segGovtIds);
            var flxShowUploadedImg = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "30%",
                "id": "flxShowUploadedImg",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "70dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxShowUploadedImg.setDefaultUnit(voltmx.flex.DP);
            var imgUploaded = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "imgUploaded",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0",
                "width": "90%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxShowUploadedImg.add(imgUploaded);
            flxBody.add(flxHeading, flxSegment, flxShowUploadedImg);
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
            flxMain.add(flxHeaderNew, flxBody, Footer2);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmGovtIds,
            "enabledForIdleTimeout": false,
            "id": "frmGovtIds",
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
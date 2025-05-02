define("frmOpenSettings", function() {
    return function(controller) {
        function addWidgetsfrmOpenSettings() {
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
                "skin": "sknFlxBasic",
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
                "height": "80dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeader.setDefaultUnit(voltmx.flex.DP);
            var flxBackNavigateIcon = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxBackNavigateIcon",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0",
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBackNavigateIcon.setDefaultUnit(voltmx.flex.DP);
            var imgBackNavigate = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "imgBackNavigate",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "backnavigate_chevron.png",
                "top": "0",
                "width": "80%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBackNavigateIcon.add(imgBackNavigate);
            var lblSettings = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSettings",
                "isVisible": true,
                "skin": "CopysknLblCronosProBlack24px",
                "text": "Settings",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [2, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeader.add(flxBackNavigateIcon, lblSettings);
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "80dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var segSettingItems = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgChevronRight": "",
                    "lblItemName": "Notifications"
                }, {
                    "imgChevronRight": "",
                    "lblItemName": "Terms & Conditions"
                }, {
                    "imgChevronRight": "",
                    "lblItemName": "General Settings"
                }],
                "groupCells": false,
                "id": "segSettingItems",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxMenuBarItems",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxChevronright": "flxChevronright",
                    "flxInsideItem": "flxInsideItem",
                    "flxMenuBarItems": "flxMenuBarItems",
                    "imgChevronRight": "imgChevronRight",
                    "lblItemName": "lblItemName"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBody.add(segSettingItems);
            flxMain.add(flxHeader, flxBody);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmOpenSettings,
            "enabledForIdleTimeout": false,
            "id": "frmOpenSettings",
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
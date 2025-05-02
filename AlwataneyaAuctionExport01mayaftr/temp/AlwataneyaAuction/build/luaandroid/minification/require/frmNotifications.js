define("frmNotifications", function() {
    return function(controller) {
        function addWidgetsfrmNotifications() {
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
                "clipBounds": true,
                "height": "78%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flxNotification = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "8%",
                "id": "flxNotification",
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
            flxNotification.setDefaultUnit(voltmx.flex.DP);
            var lblNotification = new voltmx.ui.Label({
                "height": "60%",
                "id": "lblNotification",
                "isVisible": true,
                "left": "6%",
                "skin": "sknlblDubaiBoldFont231f20Size48px",
                "text": "Notifications",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxNotificationFocused = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "8%",
                "id": "flxNotificationFocused",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "6%",
                "isModalContainer": false,
                "skin": "sknflxBgD32437PlainBorderD324371px",
                "top": "60%",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxNotificationFocused.setDefaultUnit(voltmx.flex.DP);
            flxNotificationFocused.add();
            var flxNotificationUnfocused = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "8%",
                "id": "flxNotificationUnfocused",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "21.50%",
                "isModalContainer": false,
                "skin": "sknflxBgD32437Opacity30PlainBorderD324371px",
                "top": "60%",
                "width": "5%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxNotificationUnfocused.setDefaultUnit(voltmx.flex.DP);
            flxNotificationUnfocused.add();
            flxNotification.add(lblNotification, flxNotificationFocused, flxNotificationUnfocused);
            var flxCategerory = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "6%",
                "id": "flxCategerory",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCategerory.setDefaultUnit(voltmx.flex.DP);
            var flxALL = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxALL",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "28%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "10%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxALL.setDefaultUnit(voltmx.flex.DP);
            var lblAll = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "80%",
                "id": "lblAll",
                "isVisible": true,
                "left": "0",
                "skin": "sknFontD32437DubaiNormal40px",
                "text": "All",
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
            var flxLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": false,
                "height": "8%",
                "id": "flxLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "skxflxBgD32437BorderD324371PX",
                "top": "88%",
                "width": "56%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLine.setDefaultUnit(voltmx.flex.DP);
            flxLine.add();
            flxALL.add(lblAll, flxLine);
            var flxUnread = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxUnread",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "44%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "18%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUnread.setDefaultUnit(voltmx.flex.DP);
            var lblUnread = new voltmx.ui.Label({
                "height": "80%",
                "id": "lblUnread",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblFont697386DubaiNormalSize40px",
                "text": "Unread",
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
            flxUnread.add(lblUnread);
            var flxRead = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRead",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "63%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRead.setDefaultUnit(voltmx.flex.DP);
            var lblRead = new voltmx.ui.Label({
                "height": "80%",
                "id": "lblRead",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblFont697386DubaiNormalSize40px",
                "text": "Read",
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
            flxRead.add(lblRead);
            flxCategerory.add(flxALL, flxUnread, flxRead);
            var flxBorderline = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "0.20%",
                "id": "flxBorderline",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBgE4E8EEBorderE4E8EE1px",
                "top": "14%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBorderline.setDefaultUnit(voltmx.flex.DP);
            flxBorderline.add();
            var flxContent = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "88%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "14%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxContent.setDefaultUnit(voltmx.flex.DP);
            var segNotifications = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "btnchat": "Button",
                    "btndecline": "Decline",
                    "imgUser": "imagedrag.png",
                    "lblDayAndTime": "fsgfdgweytwftwetfdfdfdsdfs",
                    "lblText": "wetrwtetreuiuiuydddddddddddddddddddddddddddddddddddddddddddddd"
                }, {
                    "btnchat": "Button",
                    "btndecline": "Decline",
                    "imgUser": "imagedrag.png",
                    "lblDayAndTime": "fsgfdgweytwftwetfdfdfdsdfs",
                    "lblText": "wetrwtetreuiuiuydddddddddddddddddddddddddddddddddddddddddddddd"
                }, {
                    "btnchat": "Button",
                    "btndecline": "Decline",
                    "imgUser": "imagedrag.png",
                    "lblDayAndTime": "fsgfdgweytwftwetfdfdfdsdfs",
                    "lblText": "wetrwtetreuiuiuydddddddddddddddddddddddddddddddddddddddddddddd"
                }, {
                    "btnchat": "Button",
                    "btndecline": "Decline",
                    "imgUser": "imagedrag.png",
                    "lblDayAndTime": "fsgfdgweytwftwetfdfdfdsdfs",
                    "lblText": "wetrwtetreuiuiuydddddddddddddddddddddddddddddddddddddddddddddd"
                }, {
                    "btnchat": "Button",
                    "btndecline": "Decline",
                    "imgUser": "imagedrag.png",
                    "lblDayAndTime": "fsgfdgweytwftwetfdfdfdsdfs",
                    "lblText": "wetrwtetreuiuiuydddddddddddddddddddddddddddddddddddddddddddddd"
                }, {
                    "btnchat": "Button",
                    "btndecline": "Decline",
                    "imgUser": "imagedrag.png",
                    "lblDayAndTime": "fsgfdgweytwftwetfdfdfdsdfs",
                    "lblText": "wetrwtetreuiuiuydddddddddddddddddddddddddddddddddddddddddddddd"
                }, {
                    "btnchat": "Button",
                    "btndecline": "Decline",
                    "imgUser": "imagedrag.png",
                    "lblDayAndTime": "fsgfdgweytwftwetfdfdfdsdfs",
                    "lblText": "wetrwtetreuiuiuydddddddddddddddddddddddddddddddddddddddddddddd"
                }, {
                    "btnchat": "Button",
                    "btndecline": "Decline",
                    "imgUser": "imagedrag.png",
                    "lblDayAndTime": "fsgfdgweytwftwetfdfdfdsdfs",
                    "lblText": "wetrwtetreuiuiuydddddddddddddddddddddddddddddddddddddddddddddd"
                }, {
                    "btnchat": "Button",
                    "btndecline": "Decline",
                    "imgUser": "imagedrag.png",
                    "lblDayAndTime": "fsgfdgweytwftwetfdfdfdsdfs",
                    "lblText": "wetrwtetreuiuiuydddddddddddddddddddddddddddddddddddddddddddddd"
                }, {
                    "btnchat": "Button",
                    "btndecline": "Decline",
                    "imgUser": "imagedrag.png",
                    "lblDayAndTime": "fsgfdgweytwftwetfdfdfdsdfs",
                    "lblText": "wetrwtetreuiuiuydddddddddddddddddddddddddddddddddddddddddddddd"
                }],
                "groupCells": false,
                "height": "97%",
                "id": "segNotifications",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSegNotification",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "3%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnchat": "btnchat",
                    "btndecline": "btndecline",
                    "flxDayAndTime": "flxDayAndTime",
                    "flxImgAndText": "flxImgAndText",
                    "flxSegNotification": "flxSegNotification",
                    "flxUserImg": "flxUserImg",
                    "flxbuttons": "flxbuttons",
                    "imgUser": "imgUser",
                    "lblDayAndTime": "lblDayAndTime",
                    "lblText": "lblText"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxContent.add(segNotifications);
            flxBody.add(flxNotification, flxCategerory, flxBorderline, flxContent);
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
            "addWidgets": addWidgetsfrmNotifications,
            "enabledForIdleTimeout": false,
            "id": "frmNotifications",
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
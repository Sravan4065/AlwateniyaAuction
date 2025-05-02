define("frmCominSoon", function() {
    return function(controller) {
        function addWidgetsfrmCominSoon() {
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
                "skin": "CopyslFbox0be3cd41383744b",
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
                "clipBounds": false,
                "height": "560dp",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0be3cd41383744b",
                "top": 100,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flxHeading = new voltmx.ui.FlexContainer({
                "clipBounds": false,
                "height": "220dp",
                "id": "flxHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0be3cd41383744b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeading.setDefaultUnit(voltmx.flex.DP);
            var lblComingSoon = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblComingSoon",
                "isVisible": true,
                "skin": "sknlblCPBoldCaptFont170px",
                "text": "COMING SOON",
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
            flxHeading.add(lblComingSoon);
            var flxPara = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "250dp",
                "id": "flxPara",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0be3cd41383744b",
                "top": 220,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPara.setDefaultUnit(voltmx.flex.DP);
            var lblSubHead = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblSubHead",
                "isVisible": true,
                "skin": "sknlblCPRegd32437Font60px",
                "text": "EXITING THINGS ARE ON THE WAY!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPara = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "lblPara",
                "isVisible": true,
                "skin": "CopysknlblCPReg1",
                "text": " Stay tuned for our upcoming auctions—exclusive items, rare treasures, and amazing deals are just around the corner. You won’t want to miss out! Keep an eye on this space for more details, and get ready to place your bids!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPara.add(lblSubHead, lblPara);
            var btnBrowseOtherCategories = new voltmx.ui.Button({
                "bottom": "40dp",
                "centerX": "50%",
                "focusSkin": "CopydefBtnFocus5",
                "height": "50dp",
                "id": "btnBrowseOtherCategories",
                "isVisible": true,
                "left": "0",
                "skin": "CopysknbtnCstmBorder",
                "text": "Browse Other Categories",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBody.add(flxHeading, flxPara, btnBrowseOtherCategories);
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
            "addWidgets": addWidgetsfrmCominSoon,
            "enabledForIdleTimeout": false,
            "id": "frmCominSoon",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0d50f71a1088d41",
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
            "titleBarSkin": "CopyslTitleBar5",
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});
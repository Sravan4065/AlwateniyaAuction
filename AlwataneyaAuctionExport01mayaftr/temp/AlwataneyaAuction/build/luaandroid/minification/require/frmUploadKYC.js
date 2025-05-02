define("frmUploadKYC", function() {
    return function(controller) {
        function addWidgetsfrmUploadKYC() {
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
                "skin": "CopyslFbox0i210d896374948",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMain.setDefaultUnit(voltmx.flex.DP);
            var flxUpload = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "48%",
                "clipBounds": false,
                "height": "70%",
                "id": "flxUpload",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0efddb5a3ffa749",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUpload.setDefaultUnit(voltmx.flex.DP);
            var flxUploadGovId = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "27%",
                "id": "flxUploadGovId",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0f93d0a81242143",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadGovId.setDefaultUnit(voltmx.flex.DP);
            var flxBtnToUploadGovtID = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxBtnToUploadGovtID",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0cfed9ba201d94f",
                "top": 0,
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBtnToUploadGovtID.setDefaultUnit(voltmx.flex.DP);
            var imgPlus = new voltmx.ui.Image2({
                "height": "70%",
                "id": "imgPlus",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "plus.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUploadGovtId = new voltmx.ui.Label({
                "bottom": "10dp",
                "centerX": "50%",
                "height": "30%",
                "id": "lblUploadGovtId",
                "isVisible": true,
                "skin": "sknlblCPRegffffffFont45px",
                "text": "Upload Govt ID",
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
            flxBtnToUploadGovtID.add(imgPlus, lblUploadGovtId);
            var flxUploadConfirmationinGovtID = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40%",
                "id": "flxUploadConfirmationinGovtID",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a4eca8ca0fd045",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadConfirmationinGovtID.setDefaultUnit(voltmx.flex.DP);
            var imgDone = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "60%",
                "id": "imgDone",
                "isVisible": true,
                "left": "43dp",
                "skin": "slImage",
                "src": "verify.png",
                "width": "15%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFileNameGovtID = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblFileNameGovtID",
                "isVisible": true,
                "right": 20,
                "skin": "CopydefLabel0f29e824be19f40",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "65%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUploadConfirmationinGovtID.add(imgDone, lblFileNameGovtID);
            flxUploadGovId.add(flxBtnToUploadGovtID, flxUploadConfirmationinGovtID);
            var flxUploadContract = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "27%",
                "id": "flxUploadContract",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0f93d0a81242143",
                "top": "15dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadContract.setDefaultUnit(voltmx.flex.DP);
            var flxBtnToUploadContract = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxBtnToUploadContract",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0cfed9ba201d94f",
                "top": 0,
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBtnToUploadContract.setDefaultUnit(voltmx.flex.DP);
            var CopyimgPlus0db2937fd861c42 = new voltmx.ui.Image2({
                "height": "70%",
                "id": "CopyimgPlus0db2937fd861c42",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "plus.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUploadContract = new voltmx.ui.Label({
                "bottom": "10dp",
                "centerX": "50%",
                "height": "30%",
                "id": "lblUploadContract",
                "isVisible": true,
                "skin": "sknlblCPRegffffffFont45px",
                "text": "Upload Contract",
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
            flxBtnToUploadContract.add(CopyimgPlus0db2937fd861c42, lblUploadContract);
            var flxUploadConfirmationInContract = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40%",
                "id": "flxUploadConfirmationInContract",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadConfirmationInContract.setDefaultUnit(voltmx.flex.DP);
            var CopyimgDone0b6cdd50304ab47 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "60%",
                "id": "CopyimgDone0b6cdd50304ab47",
                "isVisible": true,
                "left": "43dp",
                "skin": "slImage",
                "src": "verify.png",
                "width": "15%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFileNameUploadContract = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblFileNameUploadContract",
                "isVisible": true,
                "right": "0",
                "skin": "CopydefLabel0f29e824be19f40",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "65%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUploadConfirmationInContract.add(CopyimgDone0b6cdd50304ab47, lblFileNameUploadContract);
            flxUploadContract.add(flxBtnToUploadContract, flxUploadConfirmationInContract);
            var flxUploadIbanDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "27%",
                "id": "flxUploadIbanDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0f93d0a81242143",
                "top": "15dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadIbanDetails.setDefaultUnit(voltmx.flex.DP);
            var flxBtnToUploadIbanDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxBtnToUploadIbanDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0cfed9ba201d94f",
                "top": 0,
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBtnToUploadIbanDetails.setDefaultUnit(voltmx.flex.DP);
            var CopyimgPlus0d20fc55994794e = new voltmx.ui.Image2({
                "height": "70%",
                "id": "CopyimgPlus0d20fc55994794e",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "plus.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUploadIbanDetails = new voltmx.ui.Label({
                "bottom": "10dp",
                "centerX": "50%",
                "height": "30%",
                "id": "lblUploadIbanDetails",
                "isVisible": true,
                "skin": "sknlblCPRegffffffFont45px",
                "text": "Upload Iban Details",
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
            flxBtnToUploadIbanDetails.add(CopyimgPlus0d20fc55994794e, lblUploadIbanDetails);
            var flxUploadConfirmationInIban = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40%",
                "id": "flxUploadConfirmationInIban",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadConfirmationInIban.setDefaultUnit(voltmx.flex.DP);
            var CopyimgDone0f616a70512dc4b = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "60%",
                "id": "CopyimgDone0f616a70512dc4b",
                "isVisible": true,
                "left": "43dp",
                "skin": "slImage",
                "src": "verify.png",
                "width": "15%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFileNameIbanDetails = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblFileNameIbanDetails",
                "isVisible": true,
                "right": "0",
                "skin": "CopydefLabel0f29e824be19f40",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "65%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUploadConfirmationInIban.add(CopyimgDone0f616a70512dc4b, lblFileNameIbanDetails);
            flxUploadIbanDetails.add(flxBtnToUploadIbanDetails, flxUploadConfirmationInIban);
            var btnUpload = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnUpload",
                "isVisible": true,
                "left": "136dp",
                "skin": "sknbtnCPRegd32437Fontffffff50px",
                "text": "Upload",
                "top": "15dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUpload.add(flxUploadGovId, flxUploadContract, flxUploadIbanDetails, btnUpload);
            var Header2WithLatestMenu = new com.hcl.voltmx.Alwataneya2.Header2WithLatestMenu({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "Header2WithLatestMenu",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox5",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "Header2WithLatestMenu": {
                        "left": "0dp",
                        "top": "0dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
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
            flxMain.add(flxUpload, Header2WithLatestMenu, Footer2);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmUploadKYC,
            "enabledForIdleTimeout": false,
            "id": "frmUploadKYC",
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
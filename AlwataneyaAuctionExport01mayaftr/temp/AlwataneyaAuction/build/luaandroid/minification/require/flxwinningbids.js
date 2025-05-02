define("flxwinningbids", function() {
    return function(controller) {
        var flxwinningbids = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "380dp",
            "id": "flxwinningbids",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxroundborder",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxwinningbids.setDefaultUnit(voltmx.flex.DP);
        var flxMain = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "sknflxroundedgreyblack",
            "top": "10dp",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxMain.setDefaultUnit(voltmx.flex.DP);
        var flxWinningdetails = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxWinningdetails",
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
        flxWinningdetails.setDefaultUnit(voltmx.flex.DP);
        var flxImage = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxImage",
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
        flxImage.setDefaultUnit(voltmx.flex.DP);
        var imgCardata = new voltmx.ui.Image2({
            "height": "139dp",
            "id": "imgCardata",
            "isVisible": true,
            "left": "7dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "11dp",
            "width": "333dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgCardata);
        var lblWinningmodelname = new voltmx.ui.Label({
            "id": "lblWinningmodelname",
            "isVisible": true,
            "left": "22dp",
            "skin": "sknlblCPReg231F20Font40px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "167dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lbllocationanme = new voltmx.ui.Label({
            "id": "lbllocationanme",
            "isVisible": true,
            "left": "234dp",
            "skin": "sknlblCPReg231F20Font40px",
            "text": "Mussafah Yard",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "167dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lbllot = new voltmx.ui.Label({
            "id": "lbllot",
            "isVisible": true,
            "left": "22dp",
            "skin": "sknlbld32437semiboldCP",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "194dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var Button0e5f7819ec0104b = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "29dp",
            "id": "Button0e5f7819ec0104b",
            "isVisible": true,
            "left": "239dp",
            "skin": "sknbtnD32437CPRegCustom5pxFont70",
            "text": "PAY NOW",
            "top": "198dp",
            "width": "87dp"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxline = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "1dp",
            "id": "flxline",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "sknflxLine",
            "top": "241dp",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxline.setDefaultUnit(voltmx.flex.DP);
        flxline.add();
        var lblApproval = new voltmx.ui.Label({
            "id": "lblApproval",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosPro6e6e6esemibold10px",
            "text": "APPROVAL STATUS",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "251dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPaymentstatus = new voltmx.ui.Label({
            "id": "lblPaymentstatus",
            "isVisible": true,
            "left": "38%",
            "skin": "sknLblCronosPro6e6e6esemibold10px",
            "text": "PAYMENT STATUS",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "251dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblWinningbid = new voltmx.ui.Label({
            "id": "lblWinningbid",
            "isVisible": true,
            "left": "74%",
            "skin": "sknLblCronosPro6e6e6esemibold10px",
            "text": "WINNING BID",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "251dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblStatusApproved = new voltmx.ui.Label({
            "id": "lblStatusApproved",
            "isVisible": true,
            "left": "7%",
            "skin": "sknlbl029051CPreg60px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "274dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblwinningbidamt = new voltmx.ui.Label({
            "id": "lblwinningbidamt",
            "isVisible": true,
            "left": "76%",
            "skin": "sknlbl029051CPreg60px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "274dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblpaymentstatusred = new voltmx.ui.Label({
            "id": "lblpaymentstatusred",
            "isVisible": true,
            "left": "43%",
            "skin": "sknlbld32437semiboldCP",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "274dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxRequestaccess = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "37dp",
            "id": "flxRequestaccess",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "7%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "309dp",
            "width": "37%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxRequestaccess.setDefaultUnit(voltmx.flex.DP);
        var Image0f2a5efec3d9a49 = new voltmx.ui.Image2({
            "height": "20dp",
            "id": "Image0f2a5efec3d9a49",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "8dp",
            "width": "30dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblrequestaccess = new voltmx.ui.Label({
            "id": "lblrequestaccess",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlbl0075e150pxCP",
            "text": "Request Access",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRequestaccess.add(Image0f2a5efec3d9a49, lblrequestaccess);
        var flxDocuments = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "33dp",
            "id": "flxDocuments",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "48%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "313dp",
            "width": "41.88%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxDocuments.setDefaultUnit(voltmx.flex.DP);
        var imgdoc = new voltmx.ui.Image2({
            "height": "20dp",
            "id": "imgdoc",
            "isVisible": true,
            "left": "36dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "2dp",
            "width": "30dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDocuments = new voltmx.ui.Label({
            "id": "lblDocuments",
            "isVisible": true,
            "left": "9dp",
            "skin": "sknlbl0075e150pxCP",
            "text": "Documents",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDocuments.add(imgdoc, lblDocuments);
        var Image0f64cf40eed744e = new voltmx.ui.Image2({
            "height": "20dp",
            "id": "Image0f64cf40eed744e",
            "isVisible": true,
            "left": "198dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "167dp",
            "width": "30dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxWinningdetails.add(flxImage, lblWinningmodelname, lbllocationanme, lbllot, Button0e5f7819ec0104b, flxline, lblApproval, lblPaymentstatus, lblWinningbid, lblStatusApproved, lblwinningbidamt, lblpaymentstatusred, flxRequestaccess, flxDocuments, Image0f64cf40eed744e);
        flxMain.add(flxWinningdetails);
        flxwinningbids.add(flxMain);
        return flxwinningbids;
    }
})
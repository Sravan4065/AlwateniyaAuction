define("flxBidlist", function() {
    return function(controller) {
        var flxBidlist = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "350dp",
            "id": "flxBidlist",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxBidlist.setDefaultUnit(voltmx.flex.DP);
        var flxDetails = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "bottom": "20dp",
            "clipBounds": true,
            "id": "flxDetails",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "sknFlxFFFFFFBorderCCCCCC2px",
            "top": "0dp",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxDetails.setDefaultUnit(voltmx.flex.DP);
        var flxImage = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48%",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxImage.setDefaultUnit(voltmx.flex.DP);
        var imgCardata = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgCardata",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgCardata);
        var flxCardata = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "52%",
            "id": "flxCardata",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxCardata.setDefaultUnit(voltmx.flex.DP);
        var lblTotalbids = new voltmx.ui.Label({
            "id": "lblTotalbids",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknlblCPReg231F20Font40px",
            "text": "Total Bids: 68",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "82dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblCurrentbid = new voltmx.ui.Label({
            "id": "lblCurrentbid",
            "isVisible": true,
            "left": "246dp",
            "skin": "sknLblDMSans6e6e6esemibold15px",
            "text": "Current Bid",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "73dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblCurrentbidamount = new voltmx.ui.Label({
            "id": "lblCurrentbidamount",
            "isVisible": true,
            "left": "260dp",
            "skin": "sknlbl029051CPreg60px",
            "text": "10,000",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "99dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnBidnow = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "35dp",
            "id": "btnBidnow",
            "isVisible": true,
            "left": "248dp",
            "skin": "sknbtnD32437CPRegCustom5pxFont70",
            "text": "BID NOW",
            "top": "137dp",
            "width": "83dp"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxfav = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "20dp",
            "id": "flxfav",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "15dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "142dp",
            "width": "7.69%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxfav.setDefaultUnit(voltmx.flex.DP);
        var imgfavicon = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgfavicon",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxfav.add(imgfavicon);
        var flxShare = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "20dp",
            "id": "flxShare",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "54dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "142dp",
            "width": "30dp",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxShare.setDefaultUnit(voltmx.flex.DP);
        var imgshare = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgshare",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxShare.add(imgshare);
        var flxline = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "0dp",
            "id": "flxline",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5.70%",
            "isModalContainer": false,
            "skin": "sknflxLine",
            "top": "62dp",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxline.setDefaultUnit(voltmx.flex.DP);
        flxline.add();
        var flxRebid = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "20dp",
            "id": "flxRebid",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "205dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "142dp",
            "width": "30dp",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxRebid.setDefaultUnit(voltmx.flex.DP);
        var imgrebid = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgrebid",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRebid.add(imgrebid);
        var flxNameAndAddress = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30%",
            "id": "flxNameAndAddress",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxNameAndAddress.setDefaultUnit(voltmx.flex.DP);
        var lblCarmodelname = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblCarmodelname",
            "isVisible": true,
            "left": "7dp",
            "skin": "sknLblDubai00000020pxBold",
            "text": "Kia Carnival 2019",
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
        var imglocation = new voltmx.ui.Image2({
            "centerY": "50%",
            "height": "32dp",
            "id": "imglocation",
            "isVisible": true,
            "left": "223dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "9dp",
            "width": "21dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblarea = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblarea",
            "isVisible": true,
            "left": "252dp",
            "skin": "sknlblCPReg231F20Font40px",
            "text": "Mussafah Yard",
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
        var Label0ba9f64edaddd49 = new voltmx.ui.Label({
            "id": "Label0ba9f64edaddd49",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLblDubaid3243714px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "34dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxNameAndAddress.add(lblCarmodelname, imglocation, lblarea, Label0ba9f64edaddd49);
        flxCardata.add(lblTotalbids, lblCurrentbid, lblCurrentbidamount, btnBidnow, flxfav, flxShare, flxline, flxRebid, flxNameAndAddress);
        flxDetails.add(flxImage, flxCardata);
        flxBidlist.add(flxDetails);
        return flxBidlist;
    }
})
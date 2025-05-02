define("flxlostbid", function() {
    return function(controller) {
        var flxlostbid = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "375dp",
            "id": "flxlostbid",
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
        flxlostbid.setDefaultUnit(voltmx.flex.DP);
        var flxMain = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "365dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "sknflxroundedgreyblack",
            "top": "0",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxMain.setDefaultUnit(voltmx.flex.DP);
        var flximage = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flximage",
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
        flximage.setDefaultUnit(voltmx.flex.DP);
        var imglostbidcar = new voltmx.ui.Image2({
            "height": "150dp",
            "id": "imglostbidcar",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0",
            "width": "350dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flximage.add(imglostbidcar);
        var lblmodelnamecar = new voltmx.ui.Label({
            "id": "lblmodelnamecar",
            "isVisible": true,
            "left": "12dp",
            "skin": "sknlblCPReg231F20Font40px",
            "text": "Nissan Patrol 2019",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "164dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lbllocationname = new voltmx.ui.Label({
            "id": "lbllocationname",
            "isVisible": true,
            "left": "240dp",
            "skin": "sknlblCPReg231F20Font40px",
            "text": "Mussafah Yard",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "164dp",
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
            "left": "11dp",
            "skin": "sknlbld32437semiboldCP",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "188dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxline = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "1dp",
            "id": "flxline",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "3.82%",
            "isModalContainer": false,
            "skin": "sknflxLine",
            "top": "220dp",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxline.setDefaultUnit(voltmx.flex.DP);
        flxline.add();
        var lbltotalbidsize = new voltmx.ui.Label({
            "id": "lbltotalbidsize",
            "isVisible": true,
            "left": "14dp",
            "skin": "sknlblCPReg231F20Font40px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "237dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblyourbid = new voltmx.ui.Label({
            "id": "lblyourbid",
            "isVisible": true,
            "left": "257dp",
            "skin": "sknLblDMSans6e6e6esemibold15px",
            "text": "YOUR BID",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "232dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var llblyourbidno = new voltmx.ui.Label({
            "id": "llblyourbidno",
            "isVisible": true,
            "left": "271dp",
            "skin": "sknlbld32437semiboldCP",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "261dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblmanymore = new voltmx.ui.Label({
            "id": "lblmanymore",
            "isVisible": true,
            "left": "3%",
            "skin": "sknlbl0075e150pxCP",
            "text": "MANY MORE TO CHOOSE FROM",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "306dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblgotoauctions = new voltmx.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "10%",
            "id": "lblgotoauctions",
            "isVisible": true,
            "left": "68%",
            "skin": "sknbtnD32437CPRegCustom5pxFont70",
            "text": "GO TO AUCTIONS",
            "top": "296dp",
            "width": "29%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Image0f64cf40eed744e = new voltmx.ui.Image2({
            "height": "20dp",
            "id": "Image0f64cf40eed744e",
            "isVisible": true,
            "left": "206dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "163dp",
            "width": "30dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMain.add(flximage, lblmodelnamecar, lbllocationname, lbllot, flxline, lbltotalbidsize, lblyourbid, llblyourbidno, lblmanymore, lblgotoauctions, Image0f64cf40eed744e);
        flxlostbid.add(flxMain);
        return flxlostbid;
    }
})
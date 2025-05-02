define("flxCurrentAuctions", function() {
    return function(controller) {
        var flxCurrentAuctions = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "240dp",
            "id": "flxCurrentAuctions",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxCurrentAuctions.setDefaultUnit(voltmx.flex.DP);
        var flxImgContainer = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "85%",
            "id": "flxImgContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "2%",
            "isModalContainer": false,
            "skin": "sknFlxFFFFFFBorder2pxebebeb",
            "top": "0dp",
            "width": "45%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxImgContainer.setDefaultUnit(voltmx.flex.DP);
        var imgCarPIcture = new voltmx.ui.Image2({
            "centerY": "50%",
            "height": "100%",
            "id": "imgCarPIcture",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImgContainer.add(imgCarPIcture);
        var flxCarDetails = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxCarDetails",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0",
            "width": "52%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxCarDetails.setDefaultUnit(voltmx.flex.DP);
        var lblCarname = new voltmx.ui.Label({
            "height": "15%",
            "id": "lblCarname",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLblDubai00000020pxBold",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8%",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTimerCount = new voltmx.ui.Label({
            "id": "lblTimerCount",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLblDubaid3243714px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLot = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "25dp",
            "id": "flxLot",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxLot.setDefaultUnit(voltmx.flex.DP);
        var lblLot = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblLot",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLblDubai231f20",
            "text": "Label",
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
        var lblLotNum = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblLotNum",
            "isVisible": true,
            "right": "8%",
            "skin": "sknLblDubai231f20",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblObjID = new voltmx.ui.Label({
            "centerY": "60%",
            "id": "lblObjID",
            "isVisible": false,
            "right": "-2%",
            "skin": "sknLblDubai231f20",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAuctionID = new voltmx.ui.Label({
            "centerY": "70%",
            "id": "lblAuctionID",
            "isVisible": false,
            "right": "-12%",
            "skin": "sknLblDubai231f20",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxLot.add(lblLot, lblLotNum, lblObjID, lblAuctionID);
        var flxTotalBids = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "25dp",
            "id": "flxTotalBids",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxTotalBids.setDefaultUnit(voltmx.flex.DP);
        var lblTotalBids = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblTotalBids",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLblDubai231f20",
            "text": "Label",
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
        var lblTotalBidsCount = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblTotalBidsCount",
            "isVisible": true,
            "right": "8%",
            "skin": "sknLblDubai231f20",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxTotalBids.add(lblTotalBids, lblTotalBidsCount);
        var flxLocation = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "25dp",
            "id": "flxLocation",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxLocation.setDefaultUnit(voltmx.flex.DP);
        var lblLocation = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblLocation",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLblDubai231f20",
            "text": "Label",
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
        var lblLocationName = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblLocationName",
            "isVisible": true,
            "right": "8%",
            "skin": "sknLblDubai231f20",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxLocation.add(lblLocation, lblLocationName);
        var lblPrice = new voltmx.ui.Label({
            "id": "lblPrice",
            "isVisible": true,
            "right": "8%",
            "skin": "sknLblDubaid3243720pxbold",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxLikeBid = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxLikeBid",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxLikeBid.setDefaultUnit(voltmx.flex.DP);
        var flxLikeHeart = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "34dp",
            "id": "flxLikeHeart",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlx231f20custom120pxround",
            "top": "0%",
            "width": "34dp",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxLikeHeart.setDefaultUnit(voltmx.flex.DP);
        var imgHeart = new voltmx.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "55%",
            "id": "imgHeart",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "imgdislikenew.png",
            "top": "0",
            "width": "55%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxLikeHeart.add(imgHeart);
        var flxAutoBid = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "35dp",
            "id": "flxAutoBid",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10%",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0.00%",
            "width": "42dp",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxAutoBid.setDefaultUnit(voltmx.flex.DP);
        var imgAutoBidicon = new voltmx.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "75%",
            "id": "imgAutoBidicon",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "autobidnewone.png",
            "top": "8%",
            "width": "75%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAutoBid.add(imgAutoBidicon);
        var btnBidNow = new voltmx.ui.Button({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnBidNow",
            "isVisible": true,
            "left": "2%",
            "skin": "sknBtnBid61B35C8pxradius",
            "text": "BID NOW",
            "top": "0dp",
            "width": "85dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxLikeBid.add(flxLikeHeart, flxAutoBid, btnBidNow);
        flxCarDetails.add(lblCarname, lblTimerCount, flxLot, flxTotalBids, flxLocation, lblPrice, flxLikeBid);
        flxCurrentAuctions.add(flxImgContainer, flxCarDetails);
        return flxCurrentAuctions;
    }
})
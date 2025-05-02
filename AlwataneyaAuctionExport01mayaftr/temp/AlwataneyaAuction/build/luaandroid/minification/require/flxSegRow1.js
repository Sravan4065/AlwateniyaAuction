define("flxSegRow1", function() {
    return function(controller) {
        var flxSegRow1 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "150dp",
            "id": "flxSegRow1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxSegRow",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxSegRow1.setDefaultUnit(voltmx.flex.DP);
        var flxImg = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxImg",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 5,
            "isModalContainer": false,
            "skin": "sknflxRoundedCornerBorderOpacity0",
            "top": "0",
            "width": "35%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxImg.setDefaultUnit(voltmx.flex.DP);
        var imgCar = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgCar",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "mask_group.png",
            "top": "0",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImg.add(imgCar);
        var flxVehicleData = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "80%",
            "id": "flxVehicleData",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 5,
            "top": "0",
            "width": "60%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxVehicleData.setDefaultUnit(voltmx.flex.DP);
        var flxRow1 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "20%",
            "id": "flxRow1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxRow1.setDefaultUnit(voltmx.flex.DP);
        var lblCarName = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblCarName",
            "isVisible": true,
            "left": "0",
            "skin": "sknlblCPCapt231F20Font100",
            "text": "ChevRolt ukmsmdn ",
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
        var flxTime = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxTime",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0",
            "width": "30%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxTime.setDefaultUnit(voltmx.flex.DP);
        var imgTime = new voltmx.ui.Image2({
            "centerY": "50%",
            "height": "70%",
            "id": "imgTime",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "vector__6_.png",
            "top": "0",
            "width": "30%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTime = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblTime",
            "isVisible": true,
            "right": 5,
            "skin": "sknlblSansSerif6e6e6eFont80",
            "text": "04:59S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxTime.add(imgTime, lblTime);
        flxRow1.add(lblCarName, flxTime);
        var flxLot = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "10%",
            "id": "flxLot",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxLot.setDefaultUnit(voltmx.flex.DP);
        var lblLot = new voltmx.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblLot",
            "isVisible": true,
            "left": "0",
            "text": "#lot: 69952",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxLot.add(lblLot);
        var flxCurrent = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "35%",
            "clipBounds": false,
            "height": "10%",
            "id": "flxCurrent",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxCurrent.setDefaultUnit(voltmx.flex.DP);
        var lblCurrent = new voltmx.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCurrent",
            "isVisible": true,
            "right": 0,
            "skin": "sknlblCPCapt6e6e6eFont70",
            "text": "CURRENT",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "30%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCurrent.add(lblCurrent);
        var flxTotalBids = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "12%",
            "id": "flxTotalBids",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "48dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxTotalBids.setDefaultUnit(voltmx.flex.DP);
        var lblTotalBids = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblTotalBids",
            "isVisible": true,
            "left": "0",
            "skin": "sknlblCPReg231F20Font90",
            "text": "Total Bids : ",
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
        var lblTotalBidsCount = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblTotalBidsCount",
            "isVisible": true,
            "left": "60dp",
            "skin": "sknlblCPBold231F20Font90",
            "text": "67",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAmount = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblAmount",
            "isVisible": true,
            "right": 5,
            "skin": "sknlblCPBoldD32437Font120",
            "text": "40,000",
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
        flxTotalBids.add(lblTotalBids, lblTotalBidsCount, lblAmount);
        var flxBidNow = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": 2,
            "clipBounds": false,
            "height": "35%",
            "id": "flxBidNow",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxBidNow.setDefaultUnit(voltmx.flex.DP);
        var flxIcons = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "85%",
            "id": "flxIcons",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "30%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxIcons.setDefaultUnit(voltmx.flex.DP);
        var flxWishListContainer = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxWishListContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknflxccccccBorderCustom100",
            "top": "0",
            "width": "45%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxWishListContainer.setDefaultUnit(voltmx.flex.DP);
        var imgWishList = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgWishList",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "vector__7_.png",
            "top": "0",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxWishListContainer.add(imgWishList);
        var flxBoltContainer = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxBoltContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "sknflxccccccBorderCustom100",
            "top": "0",
            "width": "45%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxBoltContainer.setDefaultUnit(voltmx.flex.DP);
        var imgFireBolt = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgFireBolt",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "vector__8_.png",
            "top": "0",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBoltContainer.add(imgFireBolt);
        flxIcons.add(flxWishListContainer, flxBoltContainer);
        var flxBid = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxBid",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0",
            "width": "60%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxBid.setDefaultUnit(voltmx.flex.DP);
        var flxBidDropDown = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "75%",
            "id": "flxBidDropDown",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknflxccccccCustomBorder5pxrad",
            "top": "0",
            "width": "65%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxBidDropDown.setDefaultUnit(voltmx.flex.DP);
        var lblSelectBid = new voltmx.ui.Label({
            "centerY": "50%",
            "height": "70%",
            "id": "lblSelectBid",
            "isVisible": true,
            "left": "3dp",
            "skin": "sknlblCPSubh231F20Font70",
            "text": "Select Bid",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "70%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgDropDown = new voltmx.ui.Image2({
            "centerY": "50%",
            "height": "80%",
            "id": "imgDropDown",
            "isVisible": true,
            "right": 5,
            "skin": "slImage",
            "src": "vector__9_.png",
            "top": "0",
            "width": "20%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBidDropDown.add(lblSelectBid, imgDropDown);
        flxBid.add(flxBidDropDown);
        var btnBidNow = new voltmx.ui.Button({
            "centerY": "50%",
            "focusSkin": "defBtnFocus",
            "height": "75%",
            "id": "btnBidNow",
            "isVisible": true,
            "right": 0,
            "skin": "sknbtnD32437CPRegCustom5pxFont70",
            "text": "Bid Now",
            "top": "0",
            "width": "20%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBidNow.add(flxIcons, flxBid, btnBidNow);
        flxVehicleData.add(flxRow1, flxLot, flxCurrent, flxTotalBids, flxBidNow);
        flxSegRow1.add(flxImg, flxVehicleData);
        return flxSegRow1;
    }
})
define("flxMyVehicles", function() {
    return function(controller) {
        var flxMyVehicles = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "240dp",
            "id": "flxMyVehicles",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxMyVehicles.setDefaultUnit(voltmx.flex.DP);
        var flxCarDetails = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxCarDetails",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxCarDetails.setDefaultUnit(voltmx.flex.DP);
        var lblChassis = new voltmx.ui.Label({
            "height": "15%",
            "id": "lblChassis",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLblDubai00000020pxBold",
            "text": "Chassis Number",
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
        var lblChassisValue = new voltmx.ui.Label({
            "id": "lblChassisValue",
            "isVisible": true,
            "left": "4.84%",
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
        var lblObjId = new voltmx.ui.Label({
            "id": "lblObjId",
            "isVisible": false,
            "left": "4.84%",
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
            "text": "Lot ID",
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
            "text": "89756",
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
        flxLot.add(lblLot, lblLotNum);
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
        var lblModel = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblModel",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLblDubai231f20",
            "text": "Model",
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
        var lblModelValue = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblModelValue",
            "isVisible": true,
            "right": "8%",
            "skin": "sknLblDubai231f20",
            "text": "2013",
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
        flxTotalBids.add(lblModel, lblModelValue);
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
        var lblAdded = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblAdded",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLblDubai231f20",
            "text": "Added",
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
        var lblAddedValue = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblAddedValue",
            "isVisible": true,
            "right": "8%",
            "skin": "sknLblDubai231f20",
            "text": "2025-03-03",
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
        flxLocation.add(lblAdded, lblAddedValue);
        var lblTargetSellingPrice = new voltmx.ui.Label({
            "id": "lblTargetSellingPrice",
            "isVisible": true,
            "right": "8%",
            "skin": "sknLblDubai02905120pxBold",
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
        var btnUpload = new voltmx.ui.Button({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnUpload",
            "isVisible": true,
            "left": "2%",
            "skin": "sknBtnBid61B35C8pxradius",
            "text": "Upload File",
            "top": "0dp",
            "width": "85dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnAddRequest = new voltmx.ui.Button({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnAddRequest",
            "isVisible": true,
            "left": "6%",
            "skin": "sknBtnBid61B35C8pxradius",
            "text": "Add Request",
            "top": "0dp",
            "width": "85dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnDone = new voltmx.ui.Button({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnDone",
            "isVisible": true,
            "left": "6%",
            "skin": "sknBtnBid61B35C8pxradius",
            "text": "Done",
            "top": "0dp",
            "width": "85dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxLikeBid.add(btnUpload, btnAddRequest, btnDone);
        flxCarDetails.add(lblChassis, lblChassisValue, lblObjId, flxLot, flxTotalBids, flxLocation, lblTargetSellingPrice, flxLikeBid);
        flxMyVehicles.add(flxCarDetails);
        return flxMyVehicles;
    }
})
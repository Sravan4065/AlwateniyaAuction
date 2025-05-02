define("frmOnlineAuction", function() {
    return function(controller) {
        function addWidgetsfrmOnlineAuction() {
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
            var Header2 = new com.hcl.voltmx.Alwataneya.Header2({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Header2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknflxHeader",
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
            var flxScrollBody = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "900dp",
                "horizontalScrollIndicator": true,
                "id": "flxScrollBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "9%",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            flxScrollBody.setDefaultUnit(voltmx.flex.DP);
            var Segment0b716038cf03046 = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "btnBidNow": "Bid Now",
                    "imgCar": "mask_group.png",
                    "imgDropDown": "vector__9_.png",
                    "imgFireBolt": "vector__8_.png",
                    "imgTime": "imagedrag.png",
                    "imgWishList": "vector__7_.png",
                    "lblAmount": "40,000",
                    "lblCarName": "ChevRolt ukmsmdn ",
                    "lblCurrent": "CURRENT",
                    "lblLot": "#lot: 69952",
                    "lblSelectBid": "Select Bid",
                    "lblTime": "04:59S",
                    "lblTotalBids": "Total Bids : ",
                    "lblTotalBidsCount": "67"
                }, {
                    "btnBidNow": "Bid Now",
                    "imgCar": "mask_group.png",
                    "imgDropDown": "vector__9_.png",
                    "imgFireBolt": "vector__8_.png",
                    "imgTime": "imagedrag.png",
                    "imgWishList": "vector__7_.png",
                    "lblAmount": "40,000",
                    "lblCarName": "ChevRolt ukmsmdn ",
                    "lblCurrent": "CURRENT",
                    "lblLot": "#lot: 69952",
                    "lblSelectBid": "Select Bid",
                    "lblTime": "04:59S",
                    "lblTotalBids": "Total Bids : ",
                    "lblTotalBidsCount": "67"
                }, {
                    "btnBidNow": "Bid Now",
                    "imgCar": "mask_group.png",
                    "imgDropDown": "vector__9_.png",
                    "imgFireBolt": "vector__8_.png",
                    "imgTime": "imagedrag.png",
                    "imgWishList": "vector__7_.png",
                    "lblAmount": "40,000",
                    "lblCarName": "ChevRolt ukmsmdn ",
                    "lblCurrent": "CURRENT",
                    "lblLot": "#lot: 69952",
                    "lblSelectBid": "Select Bid",
                    "lblTime": "04:59S",
                    "lblTotalBids": "Total Bids : ",
                    "lblTotalBidsCount": "67"
                }, {
                    "btnBidNow": "Bid Now",
                    "imgCar": "mask_group.png",
                    "imgDropDown": "vector__9_.png",
                    "imgFireBolt": "vector__8_.png",
                    "imgTime": "imagedrag.png",
                    "imgWishList": "vector__7_.png",
                    "lblAmount": "40,000",
                    "lblCarName": "ChevRolt ukmsmdn ",
                    "lblCurrent": "CURRENT",
                    "lblLot": "#lot: 69952",
                    "lblSelectBid": "Select Bid",
                    "lblTime": "04:59S",
                    "lblTotalBids": "Total Bids : ",
                    "lblTotalBidsCount": "67"
                }, {
                    "btnBidNow": "Bid Now",
                    "imgCar": "mask_group.png",
                    "imgDropDown": "vector__9_.png",
                    "imgFireBolt": "vector__8_.png",
                    "imgTime": "imagedrag.png",
                    "imgWishList": "vector__7_.png",
                    "lblAmount": "40,000",
                    "lblCarName": "ChevRolt ukmsmdn ",
                    "lblCurrent": "CURRENT",
                    "lblLot": "#lot: 69952",
                    "lblSelectBid": "Select Bid",
                    "lblTime": "04:59S",
                    "lblTotalBids": "Total Bids : ",
                    "lblTotalBidsCount": "67"
                }, {
                    "btnBidNow": "Bid Now",
                    "imgCar": "mask_group.png",
                    "imgDropDown": "vector__9_.png",
                    "imgFireBolt": "vector__8_.png",
                    "imgTime": "imagedrag.png",
                    "imgWishList": "vector__7_.png",
                    "lblAmount": "40,000",
                    "lblCarName": "ChevRolt ukmsmdn ",
                    "lblCurrent": "CURRENT",
                    "lblLot": "#lot: 69952",
                    "lblSelectBid": "Select Bid",
                    "lblTime": "04:59S",
                    "lblTotalBids": "Total Bids : ",
                    "lblTotalBidsCount": "67"
                }, {
                    "btnBidNow": "Bid Now",
                    "imgCar": "mask_group.png",
                    "imgDropDown": "vector__9_.png",
                    "imgFireBolt": "vector__8_.png",
                    "imgTime": "imagedrag.png",
                    "imgWishList": "vector__7_.png",
                    "lblAmount": "40,000",
                    "lblCarName": "ChevRolt ukmsmdn ",
                    "lblCurrent": "CURRENT",
                    "lblLot": "#lot: 69952",
                    "lblSelectBid": "Select Bid",
                    "lblTime": "04:59S",
                    "lblTotalBids": "Total Bids : ",
                    "lblTotalBidsCount": "67"
                }, {
                    "btnBidNow": "Bid Now",
                    "imgCar": "mask_group.png",
                    "imgDropDown": "vector__9_.png",
                    "imgFireBolt": "vector__8_.png",
                    "imgTime": "imagedrag.png",
                    "imgWishList": "vector__7_.png",
                    "lblAmount": "40,000",
                    "lblCarName": "ChevRolt ukmsmdn ",
                    "lblCurrent": "CURRENT",
                    "lblLot": "#lot: 69952",
                    "lblSelectBid": "Select Bid",
                    "lblTime": "04:59S",
                    "lblTotalBids": "Total Bids : ",
                    "lblTotalBidsCount": "67"
                }, {
                    "btnBidNow": "Bid Now",
                    "imgCar": "mask_group.png",
                    "imgDropDown": "vector__9_.png",
                    "imgFireBolt": "vector__8_.png",
                    "imgTime": "imagedrag.png",
                    "imgWishList": "vector__7_.png",
                    "lblAmount": "40,000",
                    "lblCarName": "ChevRolt ukmsmdn ",
                    "lblCurrent": "CURRENT",
                    "lblLot": "#lot: 69952",
                    "lblSelectBid": "Select Bid",
                    "lblTime": "04:59S",
                    "lblTotalBids": "Total Bids : ",
                    "lblTotalBidsCount": "67"
                }, {
                    "btnBidNow": "Bid Now",
                    "imgCar": "mask_group.png",
                    "imgDropDown": "vector__9_.png",
                    "imgFireBolt": "vector__8_.png",
                    "imgTime": "imagedrag.png",
                    "imgWishList": "vector__7_.png",
                    "lblAmount": "40,000",
                    "lblCarName": "ChevRolt ukmsmdn ",
                    "lblCurrent": "CURRENT",
                    "lblLot": "#lot: 69952",
                    "lblSelectBid": "Select Bid",
                    "lblTime": "04:59S",
                    "lblTotalBids": "Total Bids : ",
                    "lblTotalBidsCount": "67"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "Segment0b716038cf03046",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSegRow1",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnBidNow": "btnBidNow",
                    "flxBid": "flxBid",
                    "flxBidDropDown": "flxBidDropDown",
                    "flxBidNow": "flxBidNow",
                    "flxBoltContainer": "flxBoltContainer",
                    "flxCurrent": "flxCurrent",
                    "flxIcons": "flxIcons",
                    "flxImg": "flxImg",
                    "flxLot": "flxLot",
                    "flxRow1": "flxRow1",
                    "flxSegRow1": "flxSegRow1",
                    "flxTime": "flxTime",
                    "flxTotalBids": "flxTotalBids",
                    "flxVehicleData": "flxVehicleData",
                    "flxWishListContainer": "flxWishListContainer",
                    "imgCar": "imgCar",
                    "imgDropDown": "imgDropDown",
                    "imgFireBolt": "imgFireBolt",
                    "imgTime": "imgTime",
                    "imgWishList": "imgWishList",
                    "lblAmount": "lblAmount",
                    "lblCarName": "lblCarName",
                    "lblCurrent": "lblCurrent",
                    "lblLot": "lblLot",
                    "lblSelectBid": "lblSelectBid",
                    "lblTime": "lblTime",
                    "lblTotalBids": "lblTotalBids",
                    "lblTotalBidsCount": "lblTotalBidsCount"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxScrollBody.add(Segment0b716038cf03046);
            flxMain.add(Header2, flxScrollBody);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmOnlineAuction,
            "enabledForIdleTimeout": false,
            "id": "frmOnlineAuction",
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
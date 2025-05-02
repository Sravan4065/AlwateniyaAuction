define("frmAllAuctionsList", function() {
    return function(controller) {
        function addWidgetsfrmAllAuctionsList() {
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
            var flxHeader = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "8%",
                "id": "flxHeader",
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
            flxHeader.setDefaultUnit(voltmx.flex.DP);
            var flxHeaderNew = new com.hcl.Alwataneya2.headernewfigma.flxHeaderNew({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100%",
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
                "overrides": {
                    "flxHeaderNew": {
                        "height": "100%"
                    },
                    "imgLogo": {
                        "src": "awaheaderlogo.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxHeaderNew);
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "81%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "9%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flxFilterBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxFilterBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFilterBody.setDefaultUnit(voltmx.flex.DP);
            var flxFilterBodyLeft = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "58%",
                "id": "flxFilterBodyLeft",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": "0",
                "width": "32%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFilterBodyLeft.setDefaultUnit(voltmx.flex.DP);
            var imgFiltericon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "54%",
                "id": "imgFiltericon",
                "isVisible": true,
                "left": "8%",
                "skin": "slImage",
                "src": "filtericon2x.png",
                "top": "0",
                "width": "18%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFilters = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblFilters",
                "isVisible": true,
                "left": "4%",
                "skin": "sknlbl000000CPRegFont120P",
                "text": "Filters",
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
            var flxNumOfFilters = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "68%",
                "id": "flxNumOfFilters",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxNotificationRound",
                "top": "0",
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxNumOfFilters.setDefaultUnit(voltmx.flex.DP);
            var lblFilterNumber = new voltmx.ui.Label({
                "centerX": "46%",
                "centerY": "48%",
                "id": "lblFilterNumber",
                "isVisible": true,
                "skin": "sknlblCronosProffffff14px",
                "text": "1",
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
            flxNumOfFilters.add(lblFilterNumber);
            flxFilterBodyLeft.add(imgFiltericon, lblFilters, flxNumOfFilters);
            var flxScrollFilterBody = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerY": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "80%",
                "horizontalScrollIndicator": false,
                "id": "flxScrollFilterBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "5dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "68%"
            }, {
                "paddingInPixel": false
            }, {});
            flxScrollFilterBody.setDefaultUnit(voltmx.flex.DP);
            var flxSort = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "68%",
                "id": "flxSort",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": "0",
                "width": "80dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSort.setDefaultUnit(voltmx.flex.DP);
            var lblSort = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSort",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Sort",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 5, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgSortArrow = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "imgSortArrow",
                "isVisible": true,
                "left": "5dp",
                "skin": "slImage",
                "src": "sortarrow.png",
                "top": "0",
                "width": "18dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSort.add(lblSort, imgSortArrow);
            var flxVehicleType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "68%",
                "id": "flxVehicleType",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": "0",
                "width": "130dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVehicleType.setDefaultUnit(voltmx.flex.DP);
            var lblVehicleType = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblVehicleType",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Vehicle Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 5, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgArrow = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgArrow",
                "isVisible": true,
                "left": "5dp",
                "skin": "slImage",
                "src": "downarrowgrey.png",
                "top": "0",
                "width": "15dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxVehicleType.add(lblVehicleType, imgArrow);
            var flxBodyType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "68%",
                "id": "flxBodyType",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": "0",
                "width": "110dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBodyType.setDefaultUnit(voltmx.flex.DP);
            var lblBodyType = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblBodyType",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Body Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 5, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgArrow1 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgArrow1",
                "isVisible": true,
                "left": "5dp",
                "skin": "slImage",
                "src": "downarrowgrey.png",
                "top": "0",
                "width": "15dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBodyType.add(lblBodyType, imgArrow1);
            var flxCondition = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "68%",
                "id": "flxCondition",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": "0",
                "width": "110dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCondition.setDefaultUnit(voltmx.flex.DP);
            var lblCondition = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblCondition",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Condition",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 5, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgArrow2 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgArrow2",
                "isVisible": true,
                "left": "5dp",
                "skin": "slImage",
                "src": "downarrowgrey.png",
                "top": "0",
                "width": "15dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCondition.add(lblCondition, imgArrow2);
            flxScrollFilterBody.add(flxSort, flxVehicleType, flxBodyType, flxCondition);
            flxFilterBody.add(flxFilterBodyLeft, flxScrollFilterBody);
            var flxCurrentandUpcomingAuctionBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxCurrentandUpcomingAuctionBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCurrentandUpcomingAuctionBody.setDefaultUnit(voltmx.flex.DP);
            var flxCurrentandUpcomingAuctionHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "10%",
                "id": "flxCurrentandUpcomingAuctionHeading",
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
            flxCurrentandUpcomingAuctionHeading.setDefaultUnit(voltmx.flex.DP);
            var flxCurrentAuctionHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "95%",
                "id": "flxCurrentAuctionHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCurrentAuctionHeading.setDefaultUnit(voltmx.flex.DP);
            var lblCurrentAuctions = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblCurrentAuctions",
                "isVisible": true,
                "skin": "sknLblCronosPro231f2018px49",
                "text": "Current Auctions",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxCALine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "52%",
                "clipBounds": false,
                "height": "10%",
                "id": "flxCALine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxOrangePlainDark",
                "width": "88%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCALine.setDefaultUnit(voltmx.flex.DP);
            flxCALine.add();
            flxCurrentAuctionHeading.add(lblCurrentAuctions, flxCALine);
            var flxUpcomingAuctionsHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "95%",
                "id": "flxUpcomingAuctionsHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "50%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUpcomingAuctionsHeading.setDefaultUnit(voltmx.flex.DP);
            var lblUpcomingAuctions = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblUpcomingAuctions",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e18px49",
                "text": "Upcoming Auctions",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxUALine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": false,
                "height": "10%",
                "id": "flxUALine",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxOrangePlainDark",
                "width": "88%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUALine.setDefaultUnit(voltmx.flex.DP);
            flxUALine.add();
            flxUpcomingAuctionsHeading.add(lblUpcomingAuctions, flxUALine);
            var FlexContainer0i271199669ff47 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "5%",
                "id": "FlexContainer0i271199669ff47",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxeae9e9",
                "width": "95%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0i271199669ff47.setDefaultUnit(voltmx.flex.DP);
            FlexContainer0i271199669ff47.add();
            flxCurrentandUpcomingAuctionHeading.add(flxCurrentAuctionHeading, flxUpcomingAuctionsHeading, FlexContainer0i271199669ff47);
            var flxWarn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "8%",
                "id": "flxWarn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxeae9e9",
                "top": "15dp",
                "width": "100%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxWarn.setDefaultUnit(voltmx.flex.DP);
            var flxBidCloseWarning = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "88%",
                "id": "flxBidCloseWarning",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBidCloseWarning.setDefaultUnit(voltmx.flex.DP);
            var imgWarn = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "imgWarn",
                "isVisible": true,
                "left": "8%",
                "skin": "slImage",
                "src": "warn.png",
                "top": "0",
                "width": "18dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblWarnMsg = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblWarnMsg",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosProd3243714px",
                "text": "Bids in the last 5 minutes extend closing by  5 minutes",
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
            flxBidCloseWarning.add(imgWarn, lblWarnMsg);
            flxWarn.add(flxBidCloseWarning);
            var flxScrollAuctionSegmentBody = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "84%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollAuctionSegmentBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "-10dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            flxScrollAuctionSegmentBody.setDefaultUnit(voltmx.flex.DP);
            var flxAuctionsSegmentBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAuctionsSegmentBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxeae9e9",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionsSegmentBody.setDefaultUnit(voltmx.flex.DP);
            var segCurrentAuctionList = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "15dp",
                "data": [{
                    "btnBidNow": "BID NOW",
                    "imgAutoBidicon": "autobidnewone.png",
                    "imgCarPIcture": "imagedrag.png",
                    "imgHeart": "dislikeheartcurrentauctions.png",
                    "lblAuctionID": "Label",
                    "lblCarname": "Chevrolet Impala 2018",
                    "lblLocation": "Location",
                    "lblLocationName": "Abu Dhabi",
                    "lblLot": "Lot #",
                    "lblLotNum": "69865",
                    "lblObjID": "Label",
                    "lblPrice": "AED 40,000",
                    "lblTimerCount": "11D 7H 02M",
                    "lblTotalBids": "Total Bids",
                    "lblTotalBidsCount": "69"
                }, {
                    "btnBidNow": "BID NOW",
                    "imgAutoBidicon": "autobidnewone.png",
                    "imgCarPIcture": "imagedrag.png",
                    "imgHeart": "dislikeheartcurrentauctions.png",
                    "lblAuctionID": "Label",
                    "lblCarname": "Chevrolet Impala 2018",
                    "lblLocation": "Location",
                    "lblLocationName": "Abu Dhabi",
                    "lblLot": "Lot #",
                    "lblLotNum": "69865",
                    "lblObjID": "Label",
                    "lblPrice": "AED 40,000",
                    "lblTimerCount": "11D 7H 02M",
                    "lblTotalBids": "Total Bids",
                    "lblTotalBidsCount": "69"
                }, {
                    "btnBidNow": "BID NOW",
                    "imgAutoBidicon": "autobidnewone.png",
                    "imgCarPIcture": "imagedrag.png",
                    "imgHeart": "dislikeheartcurrentauctions.png",
                    "lblAuctionID": "Label",
                    "lblCarname": "Chevrolet Impala 2018",
                    "lblLocation": "Location",
                    "lblLocationName": "Abu Dhabi",
                    "lblLot": "Lot #",
                    "lblLotNum": "69865",
                    "lblObjID": "Label",
                    "lblPrice": "AED 40,000",
                    "lblTimerCount": "11D 7H 02M",
                    "lblTotalBids": "Total Bids",
                    "lblTotalBidsCount": "69"
                }, {
                    "btnBidNow": "BID NOW",
                    "imgAutoBidicon": "autobidnewone.png",
                    "imgCarPIcture": "imagedrag.png",
                    "imgHeart": "dislikeheartcurrentauctions.png",
                    "lblAuctionID": "Label",
                    "lblCarname": "Chevrolet Impala 2018",
                    "lblLocation": "Location",
                    "lblLocationName": "Abu Dhabi",
                    "lblLot": "Lot #",
                    "lblLotNum": "69865",
                    "lblObjID": "Label",
                    "lblPrice": "AED 40,000",
                    "lblTimerCount": "11D 7H 02M",
                    "lblTotalBids": "Total Bids",
                    "lblTotalBidsCount": "69"
                }, {
                    "btnBidNow": "BID NOW",
                    "imgAutoBidicon": "autobidnewone.png",
                    "imgCarPIcture": "imagedrag.png",
                    "imgHeart": "dislikeheartcurrentauctions.png",
                    "lblAuctionID": "Label",
                    "lblCarname": "Chevrolet Impala 2018",
                    "lblLocation": "Location",
                    "lblLocationName": "Abu Dhabi",
                    "lblLot": "Lot #",
                    "lblLotNum": "69865",
                    "lblObjID": "Label",
                    "lblPrice": "AED 40,000",
                    "lblTimerCount": "11D 7H 02M",
                    "lblTotalBids": "Total Bids",
                    "lblTotalBidsCount": "69"
                }, {
                    "btnBidNow": "BID NOW",
                    "imgAutoBidicon": "autobidnewone.png",
                    "imgCarPIcture": "imagedrag.png",
                    "imgHeart": "dislikeheartcurrentauctions.png",
                    "lblAuctionID": "Label",
                    "lblCarname": "Chevrolet Impala 2018",
                    "lblLocation": "Location",
                    "lblLocationName": "Abu Dhabi",
                    "lblLot": "Lot #",
                    "lblLotNum": "69865",
                    "lblObjID": "Label",
                    "lblPrice": "AED 40,000",
                    "lblTimerCount": "11D 7H 02M",
                    "lblTotalBids": "Total Bids",
                    "lblTotalBidsCount": "69"
                }, {
                    "btnBidNow": "BID NOW",
                    "imgAutoBidicon": "autobidnewone.png",
                    "imgCarPIcture": "imagedrag.png",
                    "imgHeart": "dislikeheartcurrentauctions.png",
                    "lblAuctionID": "Label",
                    "lblCarname": "Chevrolet Impala 2018",
                    "lblLocation": "Location",
                    "lblLocationName": "Abu Dhabi",
                    "lblLot": "Lot #",
                    "lblLotNum": "69865",
                    "lblObjID": "Label",
                    "lblPrice": "AED 40,000",
                    "lblTimerCount": "11D 7H 02M",
                    "lblTotalBids": "Total Bids",
                    "lblTotalBidsCount": "69"
                }],
                "groupCells": false,
                "id": "segCurrentAuctionList",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxCurrentAuctions",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "eae9e900",
                "separatorRequired": true,
                "separatorThickness": 4,
                "showScrollbars": false,
                "top": "10dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnBidNow": "btnBidNow",
                    "flxAutoBid": "flxAutoBid",
                    "flxCarDetails": "flxCarDetails",
                    "flxCurrentAuctions": "flxCurrentAuctions",
                    "flxImgContainer": "flxImgContainer",
                    "flxLikeBid": "flxLikeBid",
                    "flxLikeHeart": "flxLikeHeart",
                    "flxLocation": "flxLocation",
                    "flxLot": "flxLot",
                    "flxTotalBids": "flxTotalBids",
                    "imgAutoBidicon": "imgAutoBidicon",
                    "imgCarPIcture": "imgCarPIcture",
                    "imgHeart": "imgHeart",
                    "lblAuctionID": "lblAuctionID",
                    "lblCarname": "lblCarname",
                    "lblLocation": "lblLocation",
                    "lblLocationName": "lblLocationName",
                    "lblLot": "lblLot",
                    "lblLotNum": "lblLotNum",
                    "lblObjID": "lblObjID",
                    "lblPrice": "lblPrice",
                    "lblTimerCount": "lblTimerCount",
                    "lblTotalBids": "lblTotalBids",
                    "lblTotalBidsCount": "lblTotalBidsCount"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAuctionsSegmentBody.add(segCurrentAuctionList);
            var btnLoadMore = new voltmx.ui.Button({
                "bottom": "90dp",
                "centerX": "50%",
                "height": "50dp",
                "id": "btnLoadMore",
                "isVisible": true,
                "left": "0",
                "skin": "sknBtnEFEFEFbordercccccc",
                "text": "Load More",
                "top": "20dp",
                "width": "40%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxScrollAuctionSegmentBody.add(flxAuctionsSegmentBody, btnLoadMore);
            flxCurrentandUpcomingAuctionBody.add(flxCurrentandUpcomingAuctionHeading, flxWarn, flxScrollAuctionSegmentBody);
            flxBody.add(flxFilterBody, flxCurrentandUpcomingAuctionBody);
            var flxVehicleTypeFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "flxVehicleTypeFilter",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasicBorderRadius",
                "width": "100%",
                "zIndex": 101,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVehicleTypeFilter.setDefaultUnit(voltmx.flex.DP);
            var flxRemoveVehicleTypeFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "38dp",
                "id": "flxRemoveVehicleTypeFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "15dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "27dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveVehicleTypeFilter.setDefaultUnit(voltmx.flex.DP);
            var imgRemove1 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgRemove1",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "removefromauctionlistfilter.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveVehicleTypeFilter.add(imgRemove1);
            var flxVehicleTypeSelectedItems = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxVehicleTypeSelectedItems",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVehicleTypeSelectedItems.setDefaultUnit(voltmx.flex.DP);
            var Label0ba64c889b35c48 = new voltmx.ui.Label({
                "height": "1dp",
                "id": "Label0ba64c889b35c48",
                "isVisible": true,
                "left": "0",
                "skin": "defLabel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxCommercialVehiclesSelected = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxCommercialVehiclesSelected",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxd32437Border",
                "top": "0",
                "width": "43.76%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCommercialVehiclesSelected.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0edd8a33fc5f447 = new voltmx.ui.Label({
                "centerX": "42%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0edd8a33fc5f447",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosProffffff18px",
                "text": "Commercial Vehicles",
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
            var flxRemoveCommercialVehicleFromFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRemoveCommercialVehicleFromFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveCommercialVehicleFromFilter.setDefaultUnit(voltmx.flex.DP);
            var Image0i52822c9ff514e = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "Image0i52822c9ff514e",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "removeitemfilter.png",
                "top": "0dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveCommercialVehicleFromFilter.add(Image0i52822c9ff514e);
            flxCommercialVehiclesSelected.add(CopyLabel0edd8a33fc5f447, flxRemoveCommercialVehicleFromFilter);
            var flxClassicCarsSelected = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxClassicCarsSelected",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxd32437Border",
                "top": 1,
                "width": "48.42%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxClassicCarsSelected.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0dadbb1316c6b45 = new voltmx.ui.Label({
                "centerX": "42%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0dadbb1316c6b45",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosProffffff18px",
                "text": "Classic & Collector Cars",
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
            var flxRemoveClassicCarsFromFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRemoveClassicCarsFromFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveClassicCarsFromFilter.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0c844121bbae54d = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "CopyImage0c844121bbae54d",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "removeitemfilter.png",
                "top": "0dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveClassicCarsFromFilter.add(CopyImage0c844121bbae54d);
            flxClassicCarsSelected.add(CopyLabel0dadbb1316c6b45, flxRemoveClassicCarsFromFilter);
            var flxSalvageSelected = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxSalvageSelected",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxd32437Border",
                "top": 1,
                "width": "59.59%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSalvageSelected.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0bf2c9faf7a664c = new voltmx.ui.Label({
                "centerX": "42%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0bf2c9faf7a664c",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosProffffff18px",
                "text": "Salvage & Repairable Vehicles",
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
            var flxRemoveSalvageFromFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRemoveSalvageFromFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveSalvageFromFilter.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0g2bb5f042bd442 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "CopyImage0g2bb5f042bd442",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "removeitemfilter.png",
                "top": "0dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveSalvageFromFilter.add(CopyImage0g2bb5f042bd442);
            flxSalvageSelected.add(CopyLabel0bf2c9faf7a664c, flxRemoveSalvageFromFilter);
            var flxBikesSelected = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxBikesSelected",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxd32437Border",
                "top": 1,
                "width": "24.21%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBikesSelected.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0hd59dd89298e4d = new voltmx.ui.Label({
                "centerX": "42%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0hd59dd89298e4d",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosProffffff18px",
                "text": "Bikes",
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
            var flxRemoveBikesFromFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRemoveBikesFromFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "14%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveBikesFromFilter.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0ha16f39697d245 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "CopyImage0ha16f39697d245",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "removeitemfilter.png",
                "top": "0dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveBikesFromFilter.add(CopyImage0ha16f39697d245);
            flxBikesSelected.add(CopyLabel0hd59dd89298e4d, flxRemoveBikesFromFilter);
            var flxHeavyVehiclesSelected = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxHeavyVehiclesSelected",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxd32437Border",
                "top": 1,
                "width": "60.52%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeavyVehiclesSelected.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0e360f43d0bf845 = new voltmx.ui.Label({
                "centerX": "42%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0e360f43d0bf845",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosProffffff18px",
                "text": "Heavy Vehicle & Machinery",
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
            var flxRemoveHeavyVehiclesFromFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRemoveHeavyVehiclesFromFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveHeavyVehiclesFromFilter.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0f7a9db3613b54e = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "CopyImage0f7a9db3613b54e",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "removeitemfilter.png",
                "top": "0dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveHeavyVehiclesFromFilter.add(CopyImage0f7a9db3613b54e);
            flxHeavyVehiclesSelected.add(CopyLabel0e360f43d0bf845, flxRemoveHeavyVehiclesFromFilter);
            var flxLightVehiclesSelected = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxLightVehiclesSelected",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxd32437Border",
                "top": 1,
                "width": "33.82%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLightVehiclesSelected.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0e28eead383304d = new voltmx.ui.Label({
                "centerX": "42%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0e28eead383304d",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosProffffff18px",
                "text": "Light Vehicles",
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
            var flxRemoveLightVehiclesFromFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRemoveLightVehiclesFromFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveLightVehiclesFromFilter.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0fdc52abcbe3d4a = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "CopyImage0fdc52abcbe3d4a",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "removeitemfilter.png",
                "top": "0dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveLightVehiclesFromFilter.add(CopyImage0fdc52abcbe3d4a);
            flxLightVehiclesSelected.add(CopyLabel0e28eead383304d, flxRemoveLightVehiclesFromFilter);
            flxVehicleTypeSelectedItems.add(Label0ba64c889b35c48, flxCommercialVehiclesSelected, flxClassicCarsSelected, flxSalvageSelected, flxBikesSelected, flxHeavyVehiclesSelected, flxLightVehiclesSelected);
            var flxVehicleTypeHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxVehicleTypeHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVehicleTypeHeading.setDefaultUnit(voltmx.flex.DP);
            var Image0jf4c81bc09914d = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "Image0jf4c81bc09914d",
                "isVisible": true,
                "left": "23dp",
                "skin": "slImage",
                "src": "vehicletypefiltericon.png",
                "top": "0",
                "width": "27dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblVehicleTypetext = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblVehicleTypetext",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosPro231f2018px49",
                "text": "Vehicle Type",
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
            flxVehicleTypeHeading.add(Image0jf4c81bc09914d, lblVehicleTypetext);
            var flxVehicleTypeFitlerItems = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxVehicleTypeFitlerItems",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVehicleTypeFitlerItems.setDefaultUnit(voltmx.flex.DP);
            var flxRow1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxRow1",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRow1.setDefaultUnit(voltmx.flex.DP);
            var flxCommercialVehicles = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxCommercialVehicles",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": "0",
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCommercialVehicles.setDefaultUnit(voltmx.flex.DP);
            var Label0c94313c7f51246 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "Label0c94313c7f51246",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Commercial Vehicles",
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
            flxCommercialVehicles.add(Label0c94313c7f51246);
            var flxClassicandCollectorCars = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxClassicandCollectorCars",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": 0,
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxClassicandCollectorCars.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0f4a3bc22313c46 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0f4a3bc22313c46",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Classic & Collector Cars",
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
            flxClassicandCollectorCars.add(CopyLabel0f4a3bc22313c46);
            flxRow1.add(flxCommercialVehicles, flxClassicandCollectorCars);
            var CopyflxRow0ecb53625a9704f = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "CopyflxRow0ecb53625a9704f",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxRow0ecb53625a9704f.setDefaultUnit(voltmx.flex.DP);
            var flxSalvageVehicles = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxSalvageVehicles",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": "0",
                "width": "52%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSalvageVehicles.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0b2fe4f5a738d4f = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0b2fe4f5a738d4f",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Salvage & Repairable Vehicles",
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
            flxSalvageVehicles.add(CopyLabel0b2fe4f5a738d4f);
            var flxBikes = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxBikes",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": 0,
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBikes.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0f7073e5456ca43 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0f7073e5456ca43",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Bikes",
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
            flxBikes.add(CopyLabel0f7073e5456ca43);
            CopyflxRow0ecb53625a9704f.add(flxSalvageVehicles, flxBikes);
            var CopyflxRow0cf14b22bef994b = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "CopyflxRow0cf14b22bef994b",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxRow0cf14b22bef994b.setDefaultUnit(voltmx.flex.DP);
            var flxHeavyVehicles = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxHeavyVehicles",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": "0",
                "width": "50%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeavyVehicles.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0idc55b3a99df4f = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0idc55b3a99df4f",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Heavy Vehicle & Machinery",
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
            flxHeavyVehicles.add(CopyLabel0idc55b3a99df4f);
            var flxLightVehicles = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxLightVehicles",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": 0,
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLightVehicles.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0iab94213b23a46 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0iab94213b23a46",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Light Vehicles",
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
            flxLightVehicles.add(CopyLabel0iab94213b23a46);
            CopyflxRow0cf14b22bef994b.add(flxHeavyVehicles, flxLightVehicles);
            var btnVehicleTypeApply = new voltmx.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnVehicleTypeApply",
                "isVisible": true,
                "left": "0",
                "skin": "sknBtnBidNow",
                "text": "Apply",
                "top": "25dp",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxVehicleTypeFitlerItems.add(flxRow1, CopyflxRow0ecb53625a9704f, CopyflxRow0cf14b22bef994b, btnVehicleTypeApply);
            flxVehicleTypeFilter.add(flxRemoveVehicleTypeFilter, flxVehicleTypeSelectedItems, flxVehicleTypeHeading, flxVehicleTypeFitlerItems);
            var flxBodyTypeFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBodyTypeFilter",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBasicBorderRadius",
                "top": "110dp",
                "width": "100.00%",
                "zIndex": 101,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBodyTypeFilter.setDefaultUnit(voltmx.flex.DP);
            var flxRemoveBodyTypeFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "38dp",
                "id": "flxRemoveBodyTypeFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "15dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "27dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveBodyTypeFilter.setDefaultUnit(voltmx.flex.DP);
            var CopyimgRemove0df24b128fca847 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CopyimgRemove0df24b128fca847",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "removefromauctionlistfilter.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveBodyTypeFilter.add(CopyimgRemove0df24b128fca847);
            var flxBodyTypeSelectedItems = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBodyTypeSelectedItems",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBodyTypeSelectedItems.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0dec2ae88c7144f = new voltmx.ui.Label({
                "height": "1dp",
                "id": "CopyLabel0dec2ae88c7144f",
                "isVisible": true,
                "left": "0",
                "skin": "defLabel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxCommercialVehiclesBodyTypeSelected = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxCommercialVehiclesBodyTypeSelected",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxd32437Border",
                "top": "0",
                "width": "43.76%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCommercialVehiclesBodyTypeSelected.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0e2eaa4c35ff542 = new voltmx.ui.Label({
                "centerX": "42%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0e2eaa4c35ff542",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosProffffff18px",
                "text": "Commercial Vehicles",
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
            var flxRemoveCommercialVehicleBTFromFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRemoveCommercialVehicleBTFromFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveCommercialVehicleBTFromFilter.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0gc659985af5545 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "CopyImage0gc659985af5545",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "removeitemfilter.png",
                "top": "0dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveCommercialVehicleBTFromFilter.add(CopyImage0gc659985af5545);
            flxCommercialVehiclesBodyTypeSelected.add(CopyLabel0e2eaa4c35ff542, flxRemoveCommercialVehicleBTFromFilter);
            var flxClassicCarsBodyTypeSelected = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxClassicCarsBodyTypeSelected",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxd32437Border",
                "top": 1,
                "width": "48.42%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxClassicCarsBodyTypeSelected.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0efbca59d4fb84b = new voltmx.ui.Label({
                "centerX": "42%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0efbca59d4fb84b",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosProffffff18px",
                "text": "Classic & Collector Cars",
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
            var flxRemoveClassicCarsBTFromFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRemoveClassicCarsBTFromFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveClassicCarsBTFromFilter.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0gb97f329d6484b = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "CopyImage0gb97f329d6484b",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "removeitemfilter.png",
                "top": "0dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveClassicCarsBTFromFilter.add(CopyImage0gb97f329d6484b);
            flxClassicCarsBodyTypeSelected.add(CopyLabel0efbca59d4fb84b, flxRemoveClassicCarsBTFromFilter);
            var flxSalvageBodyTypeSelected = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxSalvageBodyTypeSelected",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxd32437Border",
                "top": 1,
                "width": "59.59%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSalvageBodyTypeSelected.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0ic5c0f7be3fc4c = new voltmx.ui.Label({
                "centerX": "42%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0ic5c0f7be3fc4c",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosProffffff18px",
                "text": "Salvage & Repairable Vehicles",
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
            var flxRemoveSalvageBTFromFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRemoveSalvageBTFromFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveSalvageBTFromFilter.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0h48f3d4be77c40 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "CopyImage0h48f3d4be77c40",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "removeitemfilter.png",
                "top": "0dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveSalvageBTFromFilter.add(CopyImage0h48f3d4be77c40);
            flxSalvageBodyTypeSelected.add(CopyLabel0ic5c0f7be3fc4c, flxRemoveSalvageBTFromFilter);
            var flxBikesBodyTypeSelected = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxBikesBodyTypeSelected",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxd32437Border",
                "top": 1,
                "width": "24.21%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBikesBodyTypeSelected.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0hd6b58e2c4d241 = new voltmx.ui.Label({
                "centerX": "42%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0hd6b58e2c4d241",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosProffffff18px",
                "text": "Bikes",
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
            var flxRemoveBikeBTFromFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRemoveBikeBTFromFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "14%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveBikeBTFromFilter.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0a2269b3c884348 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "CopyImage0a2269b3c884348",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "removeitemfilter.png",
                "top": "0dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveBikeBTFromFilter.add(CopyImage0a2269b3c884348);
            flxBikesBodyTypeSelected.add(CopyLabel0hd6b58e2c4d241, flxRemoveBikeBTFromFilter);
            var flxHeavyVehiclesBodyTypeSelected = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxHeavyVehiclesBodyTypeSelected",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxd32437Border",
                "top": 1,
                "width": "60.52%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeavyVehiclesBodyTypeSelected.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0ba042ae0793049 = new voltmx.ui.Label({
                "centerX": "42%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0ba042ae0793049",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosProffffff18px",
                "text": "Heavy Vehicle & Machinery",
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
            var flxRemoveHeavyVehiclesBTFromFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRemoveHeavyVehiclesBTFromFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveHeavyVehiclesBTFromFilter.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0dcc22709b32e4a = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "CopyImage0dcc22709b32e4a",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "removeitemfilter.png",
                "top": "0dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveHeavyVehiclesBTFromFilter.add(CopyImage0dcc22709b32e4a);
            flxHeavyVehiclesBodyTypeSelected.add(CopyLabel0ba042ae0793049, flxRemoveHeavyVehiclesBTFromFilter);
            var flxLightVehiclesBodyTypeSelected = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxLightVehiclesBodyTypeSelected",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxd32437Border",
                "top": 1,
                "width": "33.82%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLightVehiclesBodyTypeSelected.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0d8de2c71bb5b41 = new voltmx.ui.Label({
                "centerX": "42%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0d8de2c71bb5b41",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCronosProffffff18px",
                "text": "Light Vehicles",
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
            var flxRemoveLightVehiclesBTFromFilter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRemoveLightVehiclesBTFromFilter",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "14%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveLightVehiclesBTFromFilter.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0c46ce4836b604f = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10dp",
                "id": "CopyImage0c46ce4836b604f",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "removeitemfilter.png",
                "top": "0dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveLightVehiclesBTFromFilter.add(CopyImage0c46ce4836b604f);
            flxLightVehiclesBodyTypeSelected.add(CopyLabel0d8de2c71bb5b41, flxRemoveLightVehiclesBTFromFilter);
            flxBodyTypeSelectedItems.add(CopyLabel0dec2ae88c7144f, flxCommercialVehiclesBodyTypeSelected, flxClassicCarsBodyTypeSelected, flxSalvageBodyTypeSelected, flxBikesBodyTypeSelected, flxHeavyVehiclesBodyTypeSelected, flxLightVehiclesBodyTypeSelected);
            var flxBodyTypeHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxBodyTypeHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBodyTypeHeading.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0c811428980ce42 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "17dp",
                "id": "CopyImage0c811428980ce42",
                "isVisible": true,
                "left": "23dp",
                "skin": "slImage",
                "src": "vehicletypefiltericon.png",
                "top": "0",
                "width": "27dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBodyTypeText = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblBodyTypeText",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblCronosPro231f2018px49",
                "text": "BodyType",
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
            flxBodyTypeHeading.add(CopyImage0c811428980ce42, lblBodyTypeText);
            var CopyflxVehicleTypeFitlerItems0b70ce2965ced45 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxVehicleTypeFitlerItems0b70ce2965ced45",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxVehicleTypeFitlerItems0b70ce2965ced45.setDefaultUnit(voltmx.flex.DP);
            var CopyflxRow0j702e97f686644 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "CopyflxRow0j702e97f686644",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxRow0j702e97f686644.setDefaultUnit(voltmx.flex.DP);
            var flxCommercialVehiclesBodyType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxCommercialVehiclesBodyType",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": "0",
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCommercialVehiclesBodyType.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0d76096d6e2af42 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0d76096d6e2af42",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Commercial Vehicles",
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
            flxCommercialVehiclesBodyType.add(CopyLabel0d76096d6e2af42);
            var flxClassicCarsBodyType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxClassicCarsBodyType",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": 0,
                "width": "40%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxClassicCarsBodyType.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0c876a42dcddb40 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0c876a42dcddb40",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Classic & Collector Cars",
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
            flxClassicCarsBodyType.add(CopyLabel0c876a42dcddb40);
            CopyflxRow0j702e97f686644.add(flxCommercialVehiclesBodyType, flxClassicCarsBodyType);
            var CopyflxRow0fb48506f26a04a = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "CopyflxRow0fb48506f26a04a",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxRow0fb48506f26a04a.setDefaultUnit(voltmx.flex.DP);
            var flxSalvageVehiclesBodyType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxSalvageVehiclesBodyType",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": "0",
                "width": "52%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSalvageVehiclesBodyType.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0h522cd1d8c1448 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0h522cd1d8c1448",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Salvage & Repairable Vehicles",
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
            flxSalvageVehiclesBodyType.add(CopyLabel0h522cd1d8c1448);
            var flxBikesBodyType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxBikesBodyType",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": 0,
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBikesBodyType.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0df3873a8b93b4d = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0df3873a8b93b4d",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Bikes",
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
            flxBikesBodyType.add(CopyLabel0df3873a8b93b4d);
            CopyflxRow0fb48506f26a04a.add(flxSalvageVehiclesBodyType, flxBikesBodyType);
            var CopyflxRow0e8d1cb5ba99e42 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "CopyflxRow0e8d1cb5ba99e42",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxRow0e8d1cb5ba99e42.setDefaultUnit(voltmx.flex.DP);
            var flxHeavyVehiclesBodyType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxHeavyVehiclesBodyType",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": "0",
                "width": "50%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeavyVehiclesBodyType.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0j3e3a093c9a544 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0j3e3a093c9a544",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Heavy Vehicle & Machinery",
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
            flxHeavyVehiclesBodyType.add(CopyLabel0j3e3a093c9a544);
            var flxLightVehiclesBodyType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxLightVehiclesBodyType",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": 0,
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLightVehiclesBodyType.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0e4c2192ecf6740 = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyLabel0e4c2192ecf6740",
                "isVisible": true,
                "skin": "sknLblCronosPro8e8e8e14px",
                "text": "Light Vehicles",
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
            flxLightVehiclesBodyType.add(CopyLabel0e4c2192ecf6740);
            CopyflxRow0e8d1cb5ba99e42.add(flxHeavyVehiclesBodyType, flxLightVehiclesBodyType);
            var btnBodyTypeApply = new voltmx.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "btnBodyTypeApply",
                "isVisible": true,
                "left": "0",
                "skin": "sknBtnBidNow",
                "text": "Apply",
                "top": "25dp",
                "width": "293dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxVehicleTypeFitlerItems0b70ce2965ced45.add(CopyflxRow0j702e97f686644, CopyflxRow0fb48506f26a04a, CopyflxRow0e8d1cb5ba99e42, btnBodyTypeApply);
            flxBodyTypeFilter.add(flxRemoveBodyTypeFilter, flxBodyTypeSelectedItems, flxBodyTypeHeading, CopyflxVehicleTypeFitlerItems0b70ce2965ced45);
            var flxBidSuccessPopup = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "id": "flxBidSuccessPopup",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknFlxBasicBorderRadius",
                "width": "100.00%",
                "zIndex": 101,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBidSuccessPopup.setDefaultUnit(voltmx.flex.DP);
            var flxRemoveBidSuccessPopup = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30dp",
                "id": "flxRemoveBidSuccessPopup",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "15dp",
                "skin": "slFbox",
                "top": "5dp",
                "width": "30dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveBidSuccessPopup.setDefaultUnit(voltmx.flex.DP);
            var Image0f44fb0ceb7a049 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "Image0f44fb0ceb7a049",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "removefromauctionlistfilter.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveBidSuccessPopup.add(Image0f44fb0ceb7a049);
            var Image0e695d0fc135d40 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "150dp",
                "id": "Image0e695d0fc135d40",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "successpopupgreen.png",
                "top": "0",
                "width": "150dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0a076c7f3e67d42 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Label0a076c7f3e67d42",
                "isVisible": true,
                "skin": "sknLblDubai231f2034px",
                "text": "Congratulations!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSuccessMsg = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblSuccessMsg",
                "isVisible": true,
                "skin": "sknLblDubai231f2019px",
                "text": "Your Bid Has Been Placed Successfully",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnCloseBidSuccessPopUp = new voltmx.ui.Button({
                "bottom": "15dp",
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnCloseBidSuccessPopUp",
                "isVisible": true,
                "left": "0",
                "skin": "sknBtnBidNow",
                "text": "Close",
                "top": "25dp",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBidSuccessPopup.add(flxRemoveBidSuccessPopup, Image0e695d0fc135d40, Label0a076c7f3e67d42, lblSuccessMsg, btnCloseBidSuccessPopUp);
            var flxOverLay = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxOverLay",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": true,
                "skin": "sknFlxGreyWithOpacity",
                "top": "0",
                "width": "100%",
                "zIndex": 100,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOverLay.setDefaultUnit(voltmx.flex.DP);
            flxOverLay.add();
            var flxBidAmountSelectionContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "-15dp",
                "clipBounds": true,
                "height": "260dp",
                "id": "flxBidAmountSelectionContainer",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasicBorderRadius",
                "width": "100%",
                "zIndex": 101,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBidAmountSelectionContainer.setDefaultUnit(voltmx.flex.DP);
            var flxSelectTheIncrement = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxSelectTheIncrement",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSelectTheIncrement.setDefaultUnit(voltmx.flex.DP);
            var lblSelectIncrement = new voltmx.ui.Label({
                "bottom": "0",
                "id": "lblSelectIncrement",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLblDubai75778620pxBold",
                "text": "Select the Increment",
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
            var flxCloseBidAmountSelection = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxCloseBidAmountSelection",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0",
                "width": "15%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCloseBidAmountSelection.setDefaultUnit(voltmx.flex.DP);
            var Image0ac86cce9b73c4e = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "Image0ac86cce9b73c4e",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "removefromauctionlistfilter.png",
                "top": "0",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCloseBidAmountSelection.add(Image0ac86cce9b73c4e);
            flxSelectTheIncrement.add(lblSelectIncrement, flxCloseBidAmountSelection);
            var flxAutoBidandAmounts = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxAutoBidandAmounts",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAutoBidandAmounts.setDefaultUnit(voltmx.flex.DP);
            var btnAutoBid = new voltmx.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "70%",
                "id": "btnAutoBid",
                "isVisible": true,
                "left": "4%",
                "skin": "sknBtn0077BABorder20px",
                "text": "Auto Bid",
                "top": 0,
                "width": "30%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxScrollBidAmount = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerY": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "82%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollBidAmount",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "1%",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "67%"
            }, {
                "paddingInPixel": false
            }, {});
            flxScrollBidAmount.setDefaultUnit(voltmx.flex.DP);
            var btn500AED = new voltmx.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "100%",
                "id": "btn500AED",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtnCCCCCCBorderDubai75778620px",
                "text": "+500 AED",
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [5, 0, 5, 0],
                "paddingInPixel": false
            }, {});
            var btn1000AED = new voltmx.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "100%",
                "id": "btn1000AED",
                "isVisible": true,
                "left": "2%",
                "skin": "sknBtnCCCCCCBorderDubai75778620px",
                "text": "+1000 AED",
                "top": "10dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [5, 0, 5, 0],
                "paddingInPixel": false
            }, {});
            var btn1500AED = new voltmx.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "100%",
                "id": "btn1500AED",
                "isVisible": true,
                "left": "2%",
                "skin": "sknBtnCCCCCCBorderDubai75778620px",
                "text": "+1500 AED",
                "top": "10dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [5, 0, 5, 0],
                "paddingInPixel": false
            }, {});
            flxScrollBidAmount.add(btn500AED, btn1000AED, btn1500AED);
            flxAutoBidandAmounts.add(btnAutoBid, flxScrollBidAmount);
            var flxBidAmountEnterBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "48dp",
                "id": "flxBidAmountEnterBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBidAmountEnterBox.setDefaultUnit(voltmx.flex.DP);
            var tbxBidAmount = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCCCCCCBorder231f20Dubai30pxbold",
                "height": "90%",
                "id": "tbxBidAmount",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "4%",
                "placeholder": "Enter Bid Amount",
                "secureTextEntry": false,
                "skin": "sknTbxCCCCCCBorder231f20Dubai30pxbold",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0",
                "width": "65%",
                "zIndex": 2
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxCCCCCCBorder757786Dubai32pxbold",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var btnBidNow = new voltmx.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "90%",
                "id": "btnBidNow",
                "isVisible": true,
                "left": "-2%",
                "skin": "sknBtnBid61B35C8pxradius",
                "text": "BID NOW",
                "top": 0,
                "width": "30%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBidAmountEnterBox.add(tbxBidAmount, btnBidNow);
            var flxAcknowledge = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxAcknowledge",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAcknowledge.setDefaultUnit(voltmx.flex.DP);
            var flxCheckBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxCheckBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxb5b5b5border",
                "top": "2%",
                "width": "20dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCheckBox.setDefaultUnit(voltmx.flex.DP);
            var imgCheck = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgCheck",
                "isVisible": false,
                "left": "0",
                "skin": "slImage",
                "src": "chckboxblack.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckBox.add(imgCheck);
            var Label0dd78b64d0e8140 = new voltmx.ui.Label({
                "height": "95%",
                "id": "Label0dd78b64d0e8140",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblDubai231f2016pxBold",
                "text": "I acknowledge that I have examined the vehicle, accept its current condition, and agree to the terms and conditions related to it.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": "83%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAcknowledge.add(flxCheckBox, Label0dd78b64d0e8140);
            flxBidAmountSelectionContainer.add(flxSelectTheIncrement, flxAutoBidandAmounts, flxBidAmountEnterBox, flxAcknowledge);
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
                    },
                    "imgHome": {
                        "src": "homefooteractive.png"
                    },
                    "imgMegaPhone": {
                        "src": "auctionsfooter.png"
                    },
                    "imgMyBids": {
                        "src": "mybidsfooter.png"
                    },
                    "imgSearch": {
                        "src": "ssearchfooter.png"
                    },
                    "imgSellCar": {
                        "src": "group__2_.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxAutoBidAmountContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "140dp",
                "id": "flxAutoBidAmountContainer",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasicBorderRadius",
                "top": "0",
                "width": "90%",
                "zIndex": 101,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAutoBidAmountContainer.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0j5bacec28fdf43 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "FlexContainer0j5bacec28fdf43",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0j5bacec28fdf43.setDefaultUnit(voltmx.flex.DP);
            var lblEnterMaxBidAmount = new voltmx.ui.Label({
                "centerX": "48%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblEnterMaxBidAmount",
                "isVisible": true,
                "skin": "sknLblDubai76767622px",
                "text": "Enter Maximum Bid Amount",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxCloseAutoBidAmountContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxCloseAutoBidAmountContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0",
                "width": "12%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCloseAutoBidAmountContainer.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0je358d0f2aa441 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "CopyImage0je358d0f2aa441",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "removefromauctionlistfilter.png",
                "top": "0",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCloseAutoBidAmountContainer.add(CopyImage0je358d0f2aa441);
            FlexContainer0j5bacec28fdf43.add(lblEnterMaxBidAmount, flxCloseAutoBidAmountContainer);
            var flxAmountAndButton = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxAmountAndButton",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAmountAndButton.setDefaultUnit(voltmx.flex.DP);
            var tbxAutoBidAmount = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCCCCCCBorder231f20Dubai32pxbold",
                "height": "100%",
                "id": "tbxAutoBidAmount",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "placeholder": " Amount",
                "secureTextEntry": false,
                "skin": "sknTbxCCCCCCBorder231f20Dubai32pxbold",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0",
                "width": "65%",
                "zIndex": 2
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxCCCCCCBorder757786Dubai32pxbold",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var btnAutoBidCall = new voltmx.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "100%",
                "id": "btnAutoBidCall",
                "isVisible": true,
                "left": "0",
                "skin": "sknBtnAutoBid0077baDubaiffffffBold",
                "text": "Auto Bid",
                "top": "0",
                "width": "35%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAmountAndButton.add(tbxAutoBidAmount, btnAutoBidCall);
            flxAutoBidAmountContainer.add(FlexContainer0j5bacec28fdf43, flxAmountAndButton);
            flxMain.add(flxHeader, flxBody, flxVehicleTypeFilter, flxBodyTypeFilter, flxBidSuccessPopup, flxOverLay, flxBidAmountSelectionContainer, Footer2, flxAutoBidAmountContainer);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAllAuctionsList,
            "enabledForIdleTimeout": false,
            "id": "frmAllAuctionsList",
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
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});
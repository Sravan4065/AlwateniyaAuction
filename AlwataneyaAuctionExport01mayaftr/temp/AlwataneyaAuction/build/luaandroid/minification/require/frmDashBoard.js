define("frmDashBoard", function() {
    return function(controller) {
        function addWidgetsfrmDashBoard() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
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
                "skin": "sknFlxBasic",
                "top": "0dp",
                "width": "100%",
                "zIndex": 6,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "flxHeaderNew": {
                        "zIndex": 6
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
            var flxScrollBody = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": false,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "86%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0i827abe5630042",
                "top": "5%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 5
            }, {
                "paddingInPixel": false
            }, {});
            flxScrollBody.setDefaultUnit(voltmx.flex.DP);
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasicGrey",
                "top": 12,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flxCarouselview = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "250dp",
                "id": "flxCarouselview",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "15dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCarouselview.setDefaultUnit(voltmx.flex.DP);
            var segCarouselView = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "btnAction": "Button",
                    "imgCarousel": "imagedrag.png",
                    "lblCarouselSlideHeading": "Label",
                    "lblCarouselSlideSubheading": "Label"
                }],
                "groupCells": false,
                "height": "220dp",
                "id": "segCarouselView",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": false,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": true,
                "rowFocusSkin": "Copyseg5",
                "rowSkin": "Copyseg0g2ea407f116046",
                "rowTemplate": "flxDashboardCarouselNew",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopysliPhoneSegmentHeader3",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "8%",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
                "widgetDataMap": {
                    "btnAction": "btnAction",
                    "flxDashboardCarouselNew": "flxDashboardCarouselNew",
                    "imgCarousel": "imgCarousel",
                    "lblCarouselSlideHeading": "lblCarouselSlideHeading",
                    "lblCarouselSlideSubheading": "lblCarouselSlideSubheading"
                },
                "width": "94%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCarouselview.add(segCarouselView);
            var flxAuctionCalendar = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "360dp",
                "id": "flxAuctionCalendar",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "5dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionCalendar.setDefaultUnit(voltmx.flex.DP);
            var flxAuctionCalendarHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxAuctionCalendarHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox5",
                "top": 12,
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionCalendarHeading.setDefaultUnit(voltmx.flex.DP);
            var lblAuctionCalendar = new voltmx.ui.Label({
                "id": "lblAuctionCalendar",
                "isVisible": true,
                "left": 10,
                "skin": "sknLblCPBold50px",
                "text": "Auction Calendar",
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
            var flxUnderLineContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "10dp",
                "id": "flxUnderLineContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox5",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUnderLineContainer.setDefaultUnit(voltmx.flex.DP);
            var flxUL1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "5dp",
                "id": "flxUL1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 10,
                "isModalContainer": false,
                "skin": "sknFlxOrangePlainDark",
                "top": "2dp",
                "width": "13%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUL1.setDefaultUnit(voltmx.flex.DP);
            flxUL1.add();
            var flxUL2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "5dp",
                "id": "flxUL2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "sknFlxPlainea4235Plainopa10",
                "top": "2dp",
                "width": "5%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUL2.setDefaultUnit(voltmx.flex.DP);
            flxUL2.add();
            flxUnderLineContainer.add(flxUL1, flxUL2);
            flxAuctionCalendarHeading.add(lblAuctionCalendar, flxUnderLineContainer);
            var flxAuctionCalendarItems = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "76%",
                "id": "flxAuctionCalendarItems",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "2%",
                "width": "94%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionCalendarItems.setDefaultUnit(voltmx.flex.DP);
            var flxAuctionCalendarItemsTop = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "42%",
                "id": "flxAuctionCalendarItemsTop",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionCalendarItemsTop.setDefaultUnit(voltmx.flex.DP);
            var flxAuctionCalendarItem1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxAuctionCalendarItem1",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionCalendarItem1.setDefaultUnit(voltmx.flex.DP);
            var CopyimgServiceItem0j5c40bbaa85e45 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "45%",
                "id": "CopyimgServiceItem0j5c40bbaa85e45",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "auccalitem1.png",
                "top": "15%",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblServiceItem0cef14616000344 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "12%",
                "id": "CopylblServiceItem0cef14616000344",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCPSemibold231f20services",
                "text": "Vehicles",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAuctionCalendarItem1.add(CopyimgServiceItem0j5c40bbaa85e45, CopylblServiceItem0cef14616000344);
            var flxAuctionCalendarItem2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxAuctionCalendarItem2",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionCalendarItem2.setDefaultUnit(voltmx.flex.DP);
            var CopyimgServiceItem0h985330ebec84a = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "46%",
                "id": "CopyimgServiceItem0h985330ebec84a",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "auccalitem2.png",
                "top": "14%",
                "width": "75%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblServiceItem0ae6b3f20071644 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "12%",
                "id": "CopylblServiceItem0ae6b3f20071644",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCPSemibold231f20services",
                "text": "Properties",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAuctionCalendarItem2.add(CopyimgServiceItem0h985330ebec84a, CopylblServiceItem0ae6b3f20071644);
            var flxAuctionCalendarItem3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxAuctionCalendarItem3",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionCalendarItem3.setDefaultUnit(voltmx.flex.DP);
            var CopyimgServiceItem0d38d98492dec47 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "45%",
                "id": "CopyimgServiceItem0d38d98492dec47",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "auccalitem3.png",
                "top": "15%",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblServiceItem0d685eec66cd348 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "12%",
                "id": "CopylblServiceItem0d685eec66cd348",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCPSemibold231f20services",
                "text": "UAE Plates",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAuctionCalendarItem3.add(CopyimgServiceItem0d38d98492dec47, CopylblServiceItem0d685eec66cd348);
            flxAuctionCalendarItemsTop.add(flxAuctionCalendarItem1, flxAuctionCalendarItem2, flxAuctionCalendarItem3);
            var flxAuctionCalendarItemsBottom = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "42%",
                "id": "flxAuctionCalendarItemsBottom",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "4%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionCalendarItemsBottom.setDefaultUnit(voltmx.flex.DP);
            var flxAuctionCalendarItem4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxAuctionCalendarItem4",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionCalendarItem4.setDefaultUnit(voltmx.flex.DP);
            var CopyimgServiceItem0eca0d03e99dd43 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "45%",
                "id": "CopyimgServiceItem0eca0d03e99dd43",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "auccalitem4.png",
                "top": "15%",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblServiceItem0a67b0f71af8d49 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "25%",
                "id": "CopylblServiceItem0a67b0f71af8d49",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCPSemibold231f20services",
                "text": "Equipment & Machinery",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAuctionCalendarItem4.add(CopyimgServiceItem0eca0d03e99dd43, CopylblServiceItem0a67b0f71af8d49);
            var flxAuctionCalendarItem5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxAuctionCalendarItem5",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionCalendarItem5.setDefaultUnit(voltmx.flex.DP);
            var CopyimgServiceItem0j86f0a78a0744e = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "45%",
                "id": "CopyimgServiceItem0j86f0a78a0744e",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "auccalitem5.png",
                "top": "15%",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblServiceItem0e5f94c04e72f4a = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "25%",
                "id": "CopylblServiceItem0e5f94c04e72f4a",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCPSemibold231f20services",
                "text": "Jewellery & Watches",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAuctionCalendarItem5.add(CopyimgServiceItem0j86f0a78a0744e, CopylblServiceItem0e5f94c04e72f4a);
            var flxAuctionCalendarItem6 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxAuctionCalendarItem6",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionCalendarItem6.setDefaultUnit(voltmx.flex.DP);
            var CopyimgServiceItem0dc4b9c7ba0fc4b = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "45%",
                "id": "CopyimgServiceItem0dc4b9c7ba0fc4b",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "auccalitem6.png",
                "top": "15%",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblServiceItem0h7eb84b90cd14a = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "25%",
                "id": "CopylblServiceItem0h7eb84b90cd14a",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCPSemibold231f20services",
                "text": "General Items",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAuctionCalendarItem6.add(CopyimgServiceItem0dc4b9c7ba0fc4b, CopylblServiceItem0h7eb84b90cd14a);
            flxAuctionCalendarItemsBottom.add(flxAuctionCalendarItem4, flxAuctionCalendarItem5, flxAuctionCalendarItem6);
            flxAuctionCalendarItems.add(flxAuctionCalendarItemsTop, flxAuctionCalendarItemsBottom);
            flxAuctionCalendar.add(flxAuctionCalendarHeading, flxAuctionCalendarItems);
            var flxFeaturedAuctions = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxFeaturedAuctions",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFeaturedAuctions.setDefaultUnit(voltmx.flex.DP);
            var flxFeaturedAuctionsHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "40dp",
                "id": "flxFeaturedAuctionsHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox5",
                "top": "18dp",
                "width": "98%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFeaturedAuctionsHeading.setDefaultUnit(voltmx.flex.DP);
            var lblFeaturedAuctions = new voltmx.ui.Label({
                "id": "lblFeaturedAuctions",
                "isVisible": true,
                "left": 10,
                "skin": "sknLblCronosProBlack24px",
                "text": "Featured Auctions",
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
            var CopyflxUnderLineContainer0c2064eb597744b = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "10dp",
                "id": "CopyflxUnderLineContainer0c2064eb597744b",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox5",
                "top": "25dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxUnderLineContainer0c2064eb597744b.setDefaultUnit(voltmx.flex.DP);
            var CopyflxUL0b0601b8e8ad34c = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "6dp",
                "id": "CopyflxUL0b0601b8e8ad34c",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 10,
                "isModalContainer": false,
                "skin": "sknFlxOrangePlainDark",
                "top": "2dp",
                "width": "13%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxUL0b0601b8e8ad34c.setDefaultUnit(voltmx.flex.DP);
            CopyflxUL0b0601b8e8ad34c.add();
            var CopyflxUL0j1859389c2564e = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "6dp",
                "id": "CopyflxUL0j1859389c2564e",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "sknFlxPlainea4235Plainopa10",
                "top": "2dp",
                "width": "5%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxUL0j1859389c2564e.setDefaultUnit(voltmx.flex.DP);
            CopyflxUL0j1859389c2564e.add();
            CopyflxUnderLineContainer0c2064eb597744b.add(CopyflxUL0b0601b8e8ad34c, CopyflxUL0j1859389c2564e);
            var flxViewAll = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxViewAll",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxViewAll.setDefaultUnit(voltmx.flex.DP);
            var lblViewAll = new voltmx.ui.Label({
                "id": "lblViewAll",
                "isVisible": true,
                "right": "10dp",
                "skin": "sknlblViewAll",
                "text": "VIEW ALL",
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
            flxViewAll.add(lblViewAll);
            flxFeaturedAuctionsHeading.add(lblFeaturedAuctions, CopyflxUnderLineContainer0c2064eb597744b, flxViewAll);
            var flxScrollRecommendedFilterHeading = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "60dp",
                "horizontalScrollIndicator": false,
                "id": "flxScrollRecommendedFilterHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_HORIZONTAL,
                "skin": "CopyslFSbox2",
                "top": "15dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            flxScrollRecommendedFilterHeading.setDefaultUnit(voltmx.flex.DP);
            var btnRecommended = new voltmx.ui.Button({
                "focusSkin": "sknBtnRecommendedFilterNormal",
                "height": "45dp",
                "id": "btnRecommended",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknBtnRecommendedFilter",
                "text": "Recommended",
                "top": "7dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [5, 0, 5, 0],
                "paddingInPixel": false
            }, {});
            var btnEndingSoon = new voltmx.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnRecommendedFilterNormal",
                "height": "45dp",
                "id": "btnEndingSoon",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknBtnRecommendedFilterNormal",
                "text": "Ending Soon",
                "top": "7dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [5, 0, 5, 0],
                "paddingInPixel": false
            }, {});
            var btnRecentlyViewed = new voltmx.ui.Button({
                "focusSkin": "sknBtnRecommendedFilterNormal",
                "height": "45dp",
                "id": "btnRecentlyViewed",
                "isVisible": true,
                "left": 10,
                "skin": "sknBtnRecommendedFilterNormal",
                "text": "Recently Viewed",
                "top": "7dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [5, 0, 5, 0],
                "paddingInPixel": false
            }, {});
            var btnYourFavourites = new voltmx.ui.Button({
                "focusSkin": "sknBtnRecommendedFilterNormal",
                "height": "45dp",
                "id": "btnYourFavourites",
                "isVisible": true,
                "left": 10,
                "skin": "sknBtnRecommendedFilterNormal",
                "text": "Your Favourites",
                "top": "7dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [5, 0, 5, 0],
                "paddingInPixel": false
            }, {});
            var btnNewlyListedVehicles = new voltmx.ui.Button({
                "focusSkin": "sknBtnRecommendedFilterNormal",
                "height": "45dp",
                "id": "btnNewlyListedVehicles",
                "isVisible": true,
                "left": 10,
                "skin": "sknBtnRecommendedFilterNormal",
                "text": "Newly Listed Vehicles",
                "top": "7dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [5, 0, 5, 0],
                "paddingInPixel": false
            }, {});
            flxScrollRecommendedFilterHeading.add(btnRecommended, btnEndingSoon, btnRecentlyViewed, btnYourFavourites, btnNewlyListedVehicles);
            var flxScrollFilteredItems = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": false,
                "enableScrolling": true,
                "height": "320dp",
                "horizontalScrollIndicator": true,
                "id": "flxScrollFilteredItems",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "pagingEnabled": false,
                "right": "10dp",
                "scrollDirection": voltmx.flex.SCROLL_HORIZONTAL,
                "skin": "CopyslFSbox2",
                "top": "15dp",
                "verticalScrollIndicator": true,
                "width": "105%"
            }, {
                "paddingInPixel": false
            }, {});
            flxScrollFilteredItems.setDefaultUnit(voltmx.flex.DP);
            flxScrollFilteredItems.add();
            flxFeaturedAuctions.add(flxFeaturedAuctionsHeading, flxScrollRecommendedFilterHeading, flxScrollFilteredItems);
            var flxValueAddedServices = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "380dp",
                "id": "flxValueAddedServices",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "10dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxValueAddedServices.setDefaultUnit(voltmx.flex.DP);
            var lblValueAddedServices = new voltmx.ui.Label({
                "height": "10%",
                "id": "lblValueAddedServices",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblCronosProBlack24px",
                "text": "Value Added Services",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxUnderLineContainer0gbfb74c5256c4c = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "10dp",
                "id": "CopyflxUnderLineContainer0gbfb74c5256c4c",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox5",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxUnderLineContainer0gbfb74c5256c4c.setDefaultUnit(voltmx.flex.DP);
            var CopyflxUL0a9f0cfb1600944 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "6dp",
                "id": "CopyflxUL0a9f0cfb1600944",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 10,
                "isModalContainer": false,
                "skin": "sknFlxOrangePlainDark",
                "top": "2dp",
                "width": "13%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxUL0a9f0cfb1600944.setDefaultUnit(voltmx.flex.DP);
            CopyflxUL0a9f0cfb1600944.add();
            var CopyflxUL0b5ba46d98e234d = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "6dp",
                "id": "CopyflxUL0b5ba46d98e234d",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "sknFlxPlainea4235Plainopa10",
                "top": "2dp",
                "width": "5%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxUL0b5ba46d98e234d.setDefaultUnit(voltmx.flex.DP);
            CopyflxUL0b5ba46d98e234d.add();
            CopyflxUnderLineContainer0gbfb74c5256c4c.add(CopyflxUL0a9f0cfb1600944, CopyflxUL0b5ba46d98e234d);
            var flxValueAddedServicesItems = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "76%",
                "id": "flxValueAddedServicesItems",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "2%",
                "width": "94%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxValueAddedServicesItems.setDefaultUnit(voltmx.flex.DP);
            var flxServiceItemsTop = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "48%",
                "id": "flxServiceItemsTop",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxServiceItemsTop.setDefaultUnit(voltmx.flex.DP);
            var flxServiceItem1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxServiceItem1",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxServiceItem1.setDefaultUnit(voltmx.flex.DP);
            var imgServiceItem1 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "45%",
                "id": "imgServiceItem1",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "vehinspnew.png",
                "top": "15%",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblServiceItem1 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "30%",
                "id": "lblServiceItem1",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCPSemibold231f20services",
                "text": "Vehicle Inspection",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxServiceItem1.add(imgServiceItem1, lblServiceItem1);
            var flxServiceItem2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxServiceItem2",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxServiceItem2.setDefaultUnit(voltmx.flex.DP);
            var imgServiceItem2 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "46%",
                "id": "imgServiceItem2",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "vehicledelnew.png",
                "top": "14%",
                "width": "75%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblServiceItem2 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "30%",
                "id": "lblServiceItem2",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCPSemibold231f20services",
                "text": "Vehicle Delivery",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxServiceItem2.add(imgServiceItem2, lblServiceItem2);
            var flxServiceItem3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxServiceItem3",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxServiceItem3.setDefaultUnit(voltmx.flex.DP);
            var imgServiceItem3 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "45%",
                "id": "imgServiceItem3",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "owntrnew.png",
                "top": "15%",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblServiceItem3 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "30%",
                "id": "lblServiceItem3",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCPSemibold231f20services",
                "text": "Ownership Transfer",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxServiceItem3.add(imgServiceItem3, lblServiceItem3);
            flxServiceItemsTop.add(flxServiceItem1, flxServiceItem2, flxServiceItem3);
            var flxServiceItemsBottom = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "48%",
                "id": "flxServiceItemsBottom",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "4%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxServiceItemsBottom.setDefaultUnit(voltmx.flex.DP);
            var flxServiceItem4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxServiceItem4",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxServiceItem4.setDefaultUnit(voltmx.flex.DP);
            var imgServiceItem4 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "45%",
                "id": "imgServiceItem4",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "polishingnew.png",
                "top": "15%",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblServiceItem4 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "30%",
                "id": "lblServiceItem4",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCPSemibold231f20services",
                "text": "Publishing & Detailing",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxServiceItem4.add(imgServiceItem4, lblServiceItem4);
            var flxServiceItem5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxServiceItem5",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxServiceItem5.setDefaultUnit(voltmx.flex.DP);
            var imgServiceItem5 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "45%",
                "id": "imgServiceItem5",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "maintenancenew.png",
                "top": "15%",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblServiceItem5 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "30%",
                "id": "lblServiceItem5",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCPSemibold231f20services",
                "text": "Maintenance & Repairs",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxServiceItem5.add(imgServiceItem5, lblServiceItem5);
            var flxServiceItem6 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxServiceItem6",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxServiceItem6.setDefaultUnit(voltmx.flex.DP);
            var imgServiceItem6 = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "45%",
                "id": "imgServiceItem6",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "moreservicesnew.png",
                "top": "15%",
                "width": "70%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblServiceItem6 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "30%",
                "id": "lblServiceItem6",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblCPSemibold231f20services",
                "text": "More Services",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxServiceItem6.add(imgServiceItem6, lblServiceItem6);
            flxServiceItemsBottom.add(flxServiceItem4, flxServiceItem5, flxServiceItem6);
            flxValueAddedServicesItems.add(flxServiceItemsTop, flxServiceItemsBottom);
            flxValueAddedServices.add(lblValueAddedServices, CopyflxUnderLineContainer0gbfb74c5256c4c, flxValueAddedServicesItems);
            flxBody.add(flxCarouselview, flxAuctionCalendar, flxFeaturedAuctions, flxValueAddedServices);
            flxScrollBody.add(flxBody);
            var flxWhatsappcomponent = new com.hcl.voltmx.Whatsapp.flxWhatsappcomponent({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "20%",
                "height": "50dp",
                "id": "flxWhatsappcomponent",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknFlx029051100borderadius",
                "width": "50dp",
                "zIndex": 7,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "flxWhatsappcomponent": {
                        "bottom": "20%",
                        "left": "viz.val_cleared",
                        "right": "10dp",
                        "top": "viz.val_cleared",
                        "zIndex": 7
                    },
                    "imgWhatsapp": {
                        "src": "whatsappicon.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
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
                "zIndex": 106,
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
                "isVisible": true,
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
                "zIndex": 104,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxOverLay.setDefaultUnit(voltmx.flex.DP);
            flxOverLay.add();
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
                "zIndex": 7,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "Footer2": {
                        "height": "10%",
                        "zIndex": 7
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
                "zIndex": 106,
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
                "zIndex": 106,
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
            flxMain.add(flxHeaderNew, flxScrollBody, flxWhatsappcomponent, flxBidAmountSelectionContainer, flxOverLay, Footer2, flxBidSuccessPopup, flxAutoBidAmountContainer);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmDashBoard,
            "enabledForIdleTimeout": false,
            "id": "frmDashBoard",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0bac9e509772f4b",
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
            "titleBarSkin": "CopyslTitleBar4",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});
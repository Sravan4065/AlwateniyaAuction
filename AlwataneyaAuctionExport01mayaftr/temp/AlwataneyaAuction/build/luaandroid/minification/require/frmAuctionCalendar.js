define("frmAuctionCalendar", function() {
    return function(controller) {
        function addWidgetsfrmAuctionCalendar() {
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
                "skin": "slFbox",
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
                "zIndex": 1,
                "appName": "AlwataneyaAuction",
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "82%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxeae9e9",
                "top": "8%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flxAuctionCalendarDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "28%",
                "id": "flxAuctionCalendarDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxeae9e9",
                "top": "5dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionCalendarDetails.setDefaultUnit(voltmx.flex.DP);
            var flxAuctionCalendarHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "25%",
                "id": "flxAuctionCalendarHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "2%",
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
            var flxCalendarShow = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42%",
                "id": "flxCalendarShow",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "1%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCalendarShow.setDefaultUnit(voltmx.flex.DP);
            var flxItem1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxItem1",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "2%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "12%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxItem1.setDefaultUnit(voltmx.flex.DP);
            var lblWeekDay1 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblWeekDay1",
                "isVisible": true,
                "text": "MON",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDate1 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "33%",
                "id": "lblDate1",
                "isVisible": true,
                "text": "10",
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
            var flxActiveItem1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "13%",
                "id": "flxActiveItem1",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "1%",
                "width": "22%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxActiveItem1.setDefaultUnit(voltmx.flex.DP);
            flxActiveItem1.add();
            flxItem1.add(lblWeekDay1, lblDate1, flxActiveItem1);
            var flxItem2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxItem2",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxeae9e9",
                "top": "0",
                "width": "12%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxItem2.setDefaultUnit(voltmx.flex.DP);
            var lblWeekDay2 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblWeekDay2",
                "isVisible": true,
                "text": "TUE",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDate2 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "33%",
                "id": "lblDate2",
                "isVisible": true,
                "text": "11",
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
            var flxActiveItem2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "13%",
                "id": "flxActiveItem2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "1%",
                "width": "22%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxActiveItem2.setDefaultUnit(voltmx.flex.DP);
            flxActiveItem2.add();
            flxItem2.add(lblWeekDay2, lblDate2, flxActiveItem2);
            var flxItem3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxItem3",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "12%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxItem3.setDefaultUnit(voltmx.flex.DP);
            var lblWeekDay3 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblWeekDay3",
                "isVisible": true,
                "text": "WED",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDate3 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "33%",
                "id": "lblDate3",
                "isVisible": true,
                "text": "12",
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
            var flxActiveItem3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "13%",
                "id": "flxActiveItem3",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "1%",
                "width": "22%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxActiveItem3.setDefaultUnit(voltmx.flex.DP);
            flxActiveItem3.add();
            flxItem3.add(lblWeekDay3, lblDate3, flxActiveItem3);
            var flxItem4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxItem4",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "12%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxItem4.setDefaultUnit(voltmx.flex.DP);
            var lblWeekDay4 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblWeekDay4",
                "isVisible": true,
                "text": "THU",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDate4 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "33%",
                "id": "lblDate4",
                "isVisible": true,
                "text": "13",
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
            var flxActiveItem4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "13%",
                "id": "flxActiveItem4",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "1%",
                "width": "22%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxActiveItem4.setDefaultUnit(voltmx.flex.DP);
            flxActiveItem4.add();
            flxItem4.add(lblWeekDay4, lblDate4, flxActiveItem4);
            var flxItem5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxItem5",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "12%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxItem5.setDefaultUnit(voltmx.flex.DP);
            var lblWeekDay5 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblWeekDay5",
                "isVisible": true,
                "text": "FRI",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDate5 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "33%",
                "id": "lblDate5",
                "isVisible": true,
                "text": "14",
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
            var flxActiveItem5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "13%",
                "id": "flxActiveItem5",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "1%",
                "width": "22%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxActiveItem5.setDefaultUnit(voltmx.flex.DP);
            flxActiveItem5.add();
            flxItem5.add(lblWeekDay5, lblDate5, flxActiveItem5);
            var flxItem6 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxItem6",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "12%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxItem6.setDefaultUnit(voltmx.flex.DP);
            var lblWeekDay6 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblWeekDay6",
                "isVisible": true,
                "text": "SAT",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDate6 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "33%",
                "id": "lblDate6",
                "isVisible": true,
                "text": "15",
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
            var flxActiveItem6 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "13%",
                "id": "flxActiveItem6",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "1%",
                "width": "22%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxActiveItem6.setDefaultUnit(voltmx.flex.DP);
            flxActiveItem6.add();
            flxItem6.add(lblWeekDay6, lblDate6, flxActiveItem6);
            var flxItem7 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxItem7",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "12%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxItem7.setDefaultUnit(voltmx.flex.DP);
            var lblWeekDay7 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblWeekDay7",
                "isVisible": true,
                "text": "SUN",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDate7 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "33%",
                "id": "lblDate7",
                "isVisible": true,
                "text": "16",
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
            var flxActiveItem7 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "13%",
                "id": "flxActiveItem7",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "1%",
                "width": "22%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxActiveItem7.setDefaultUnit(voltmx.flex.DP);
            flxActiveItem7.add();
            flxItem7.add(lblWeekDay7, lblDate7, flxActiveItem7);
            var flxItem8 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxItem8",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "12%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxItem8.setDefaultUnit(voltmx.flex.DP);
            var lblWeekDay8 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblWeekDay8",
                "isVisible": true,
                "text": "MON",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDate8 = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "33%",
                "id": "lblDate8",
                "isVisible": true,
                "text": "17",
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
            var flxActiveItem8 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "13%",
                "id": "flxActiveItem8",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "1%",
                "width": "22%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxActiveItem8.setDefaultUnit(voltmx.flex.DP);
            flxActiveItem8.add();
            flxItem8.add(lblWeekDay8, lblDate8, flxActiveItem8);
            flxCalendarShow.add(flxItem1, flxItem2, flxItem3, flxItem4, flxItem5, flxItem6, flxItem7, flxItem8);
            var flxDateAndNumberOfVehicles = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30%",
                "id": "flxDateAndNumberOfVehicles",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "2%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDateAndNumberOfVehicles.setDefaultUnit(voltmx.flex.DP);
            var Image0b0525d37826a46 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "Image0b0525d37826a46",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "auccalendaricon.png",
                "top": 0,
                "width": "10%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0ebfc4da074df49 = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "Label0ebfc4da074df49",
                "isVisible": true,
                "left": "3%",
                "text": "March 11, Tuesday",
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
            var CopyImage0c6872d126bb346 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "54.52%",
                "id": "CopyImage0c6872d126bb346",
                "isVisible": true,
                "left": "23%",
                "skin": "slImage",
                "src": "vehicle_3.png",
                "top": 0,
                "width": "8.42%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyLabel0adb76031db8246 = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0adb76031db8246",
                "isVisible": true,
                "left": "1%",
                "text": "52",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "15%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDateAndNumberOfVehicles.add(Image0b0525d37826a46, Label0ebfc4da074df49, CopyImage0c6872d126bb346, CopyLabel0adb76031db8246);
            flxAuctionCalendarDetails.add(flxAuctionCalendarHeading, flxCalendarShow, flxDateAndNumberOfVehicles);
            var flxAuctionsSegmentBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "71%",
                "id": "flxAuctionsSegmentBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxeae9e9",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctionsSegmentBody.setDefaultUnit(voltmx.flex.DP);
            var segCurrentAuctionList = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "btnBidNow": "BID NOW",
                    "imgAutoBidicon": "autobidnewone.png",
                    "imgCarPIcture": "imagedrag.png",
                    "imgHeart": "imgdislikenew.png",
                    "lblAuctionID": "Label",
                    "lblCarname": "Label",
                    "lblLocation": "Label",
                    "lblLocationName": "Label",
                    "lblLot": "Label",
                    "lblLotNum": "Label",
                    "lblObjID": "Label",
                    "lblPrice": "Label",
                    "lblTimerCount": "Label",
                    "lblTotalBids": "Label",
                    "lblTotalBidsCount": "Label"
                }],
                "groupCells": false,
                "height": "99%",
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
                "top": "1%",
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
            var flxFilterBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxFilterBody",
                "isVisible": false,
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
                "height": "80%",
                "id": "flxFilterBodyLeft",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
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
                "height": "60%",
                "id": "flxNumOfFilters",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxNotificationRound",
                "top": "0",
                "width": "24%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxNumOfFilters.setDefaultUnit(voltmx.flex.DP);
            var lblFilterNumber = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
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
                "left": "0",
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
                "height": "100%",
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
                "isVisible": false,
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
            flxCurrentandUpcomingAuctionHeading.setDefaultUnit(voltmx.flex.DP);
            var flxCurrentAuctionHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
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
                "centerX": "50%",
                "clipBounds": false,
                "height": "12%",
                "id": "flxCALine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxOrangePlainDark",
                "width": "100%",
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
                "height": "100%",
                "id": "flxUpcomingAuctionsHeading",
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
                "height": "12%",
                "id": "flxUALine",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxOrangePlainDark",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUALine.setDefaultUnit(voltmx.flex.DP);
            flxUALine.add();
            flxUpcomingAuctionsHeading.add(lblUpcomingAuctions, flxUALine);
            flxCurrentandUpcomingAuctionHeading.add(flxCurrentAuctionHeading, flxUpcomingAuctionsHeading);
            var flxWarn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "10%",
                "id": "flxWarn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxeae9e9",
                "top": "0",
                "width": "100%",
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
                "height": "40dp",
                "id": "flxBidCloseWarning",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBorder00000050opa49",
                "top": "10dp",
                "width": "92%",
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
                "left": "4%",
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
            flxCurrentandUpcomingAuctionBody.add(flxCurrentandUpcomingAuctionHeading, flxWarn);
            flxBody.add(flxAuctionCalendarDetails, flxAuctionsSegmentBody, flxFilterBody, flxCurrentandUpcomingAuctionBody);
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
                "zIndex": 2,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "Footer2": {
                        "height": "10%",
                        "zIndex": 2
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
                "zIndex": 3,
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
                "zIndex": 3,
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
            var flxOverLay = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80%",
                "id": "flxOverLay",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
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
            flxMain.add(flxHeaderNew, flxBody, Footer2, flxVehicleTypeFilter, flxBodyTypeFilter, flxOverLay);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAuctionCalendar,
            "enabledForIdleTimeout": false,
            "id": "frmAuctionCalendar",
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
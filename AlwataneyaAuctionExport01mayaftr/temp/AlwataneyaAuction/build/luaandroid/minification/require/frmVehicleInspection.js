define("frmVehicleInspection", function() {
    return function(controller) {
        function addWidgetsfrmVehicleInspection() {
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
            var flxHeaderNew = new com.hcl.Alwataneya2.headernewfigma.flxHeaderNew({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "8%",
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
                "clipBounds": true,
                "enableScrolling": true,
                "height": "84%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "6%",
                "verticalScrollIndicator": true,
                "width": "100%"
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
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBody.setDefaultUnit(voltmx.flex.DP);
            var flxVehicleInspectionPicture = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "320dp",
                "id": "flxVehicleInspectionPicture",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVehicleInspectionPicture.setDefaultUnit(voltmx.flex.DP);
            var imgVehcileInspection = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgVehcileInspection",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "maninspectingvehicle.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxBackArrow = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "12.78%",
                "id": "flxBackArrow",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5%",
                "width": "9.31%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBackArrow.setDefaultUnit(voltmx.flex.DP);
            var imgBackArrow = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "55%",
                "id": "imgBackArrow",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "backarrowfromvehicleinspection.png",
                "top": "0dp",
                "width": "55%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBackArrow.add(imgBackArrow);
            flxVehicleInspectionPicture.add(imgVehcileInspection, flxBackArrow);
            var flxInfo1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": false,
                "id": "flxInfo1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxEEEEEEBorder1px",
                "top": "30dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInfo1.setDefaultUnit(voltmx.flex.DP);
            var lblInfo1 = new voltmx.ui.Label({
                "id": "lblInfo1",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2016px",
                "text": "Bid Smarter. Buy Confidently. Minimize Surprises.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 3, 0, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDownArrow1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "35dp",
                "id": "flxDownArrow1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "2.13%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "6%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDownArrow1.setDefaultUnit(voltmx.flex.DP);
            var imgDownArrow1 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "60%",
                "id": "imgDownArrow1",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "downarrowfromvehicleinsp.png",
                "top": "0dp",
                "width": "60%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDownArrow1.add(imgDownArrow1);
            var flxInfo1Matter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxInfo1Matter",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "40dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInfo1Matter.setDefaultUnit(voltmx.flex.DP);
            var lblInfo1Matter = new voltmx.ui.Label({
                "id": "lblInfo1Matter",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "When it comes to purchasing a vehicle, knowledge is power. With Al Wataneya Auctions' vehicle inspection services, conducted by the trusted experts at Emirates Transport, you gain all the insights you need to make informed decisions.",
                "textStyle": {
                    "lineSpacing": 1,
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 4],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInfo1Matter.add(lblInfo1Matter);
            flxInfo1.add(lblInfo1, flxDownArrow1, flxInfo1Matter);
            var flxInfo2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": false,
                "id": "flxInfo2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxEEEEEEBorder1px",
                "top": "30dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInfo2.setDefaultUnit(voltmx.flex.DP);
            var lblInfo2 = new voltmx.ui.Label({
                "id": "lblInfo2",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2016px",
                "text": "Why Choose Our Vehicle Inspection Services?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 3, 0, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDownArrow2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "35dp",
                "id": "flxDownArrow2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "2.13%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "6%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDownArrow2.setDefaultUnit(voltmx.flex.DP);
            var imgDownArrow2 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "60%",
                "id": "imgDownArrow2",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "downarrowfromvehicleinsp.png",
                "top": "0dp",
                "width": "60%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDownArrow2.add(imgDownArrow2);
            var flxInfo2Matter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxInfo2Matter",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "40dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInfo2Matter.setDefaultUnit(voltmx.flex.DP);
            var lblBidSmarter = new voltmx.ui.Label({
                "id": "lblBidSmarter",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2016px",
                "text": "Bid Smarter",
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
            var lblInfo2Matter = new voltmx.ui.Label({
                "id": "lblInfo2Matter",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "When it comes to purchasing a vehicle, knowledge is power. With Al Wataneya Auctions' vehicle inspection services, conducted by the trusted experts at Emirates Transport, you gain all the insights you need to make informed decisions.",
                "textStyle": {
                    "lineSpacing": 1,
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 4],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblBidSmarter0c8029ff6fe5c41 = new voltmx.ui.Label({
                "id": "CopylblBidSmarter0c8029ff6fe5c41",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2016px",
                "text": "Buy Confidently",
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
            var CopylblInfo0b0c3fbaedf5240 = new voltmx.ui.Label({
                "id": "CopylblInfo0b0c3fbaedf5240",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "Understand the repairs needed and potential costs before making a commitment.",
                "textStyle": {
                    "lineSpacing": 1,
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 4],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblBidSmarter0a384ffea58ee4f = new voltmx.ui.Label({
                "id": "CopylblBidSmarter0a384ffea58ee4f",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2016px",
                "text": "Know What You're Getting",
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
            var CopylblInfo0fae68c3dfc9147 = new voltmx.ui.Label({
                "id": "CopylblInfo0fae68c3dfc9147",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "Avoid unpleasant surprises and ensure the vehicle meets your expectations.",
                "textStyle": {
                    "lineSpacing": 1,
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 4],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInfo2Matter.add(lblBidSmarter, lblInfo2Matter, CopylblBidSmarter0c8029ff6fe5c41, CopylblInfo0b0c3fbaedf5240, CopylblBidSmarter0a384ffea58ee4f, CopylblInfo0fae68c3dfc9147);
            flxInfo2.add(lblInfo2, flxDownArrow2, flxInfo2Matter);
            var flxInfo3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": false,
                "id": "flxInfo3",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxEEEEEEBorder1px",
                "top": "30dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInfo3.setDefaultUnit(voltmx.flex.DP);
            var CopylblInfo0he1c46959a4448 = new voltmx.ui.Label({
                "id": "CopylblInfo0he1c46959a4448",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2016px",
                "text": "Our Basic Inspection Packages AED 250 Includes:",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 3, 0, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDownArrow3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "35dp",
                "id": "flxDownArrow3",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "2.13%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "6%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDownArrow3.setDefaultUnit(voltmx.flex.DP);
            var imgDownArrow3 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "60%",
                "id": "imgDownArrow3",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "downarrowfromvehicleinsp.png",
                "top": "0dp",
                "width": "60%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDownArrow3.add(imgDownArrow3);
            var flxInfo3Matter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxInfo3Matter",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "40dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInfo3Matter.setDefaultUnit(voltmx.flex.DP);
            var Label0e3c247fa51b646 = new voltmx.ui.Label({
                "id": "Label0e3c247fa51b646",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Vehicle Condition Score.",
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
            var CopyLabel0gceeb734f95349 = new voltmx.ui.Label({
                "id": "CopyLabel0gceeb734f95349",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Vehicle Details.",
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
            var CopyLabel0d28348760e8e4b = new voltmx.ui.Label({
                "id": "CopyLabel0d28348760e8e4b",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Engine Condition.",
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
            var CopyLabel0ce1c118e21f14c = new voltmx.ui.Label({
                "id": "CopyLabel0ce1c118e21f14c",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Supsension Condition.",
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
            var CopyLabel0ed03209f7c5d49 = new voltmx.ui.Label({
                "id": "CopyLabel0ed03209f7c5d49",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Transmission Condition.",
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
            var CopyLabel0d2fff366c2b84c = new voltmx.ui.Label({
                "id": "CopyLabel0d2fff366c2b84c",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Fault Photos.",
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
            var CopyLabel0a1e5a2acaec649 = new voltmx.ui.Label({
                "id": "CopyLabel0a1e5a2acaec649",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Electrical System Condition.",
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
            var CopyLabel0d164797d9abc4e = new voltmx.ui.Label({
                "id": "CopyLabel0d164797d9abc4e",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Brake System, Rims & Tyres Condition.",
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
            var CopyLabel0e774e7e1752042 = new voltmx.ui.Label({
                "id": "CopyLabel0e774e7e1752042",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Tyre Photos.",
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
            var CopyLabel0h9c7d3e8b02546 = new voltmx.ui.Label({
                "id": "CopyLabel0h9c7d3e8b02546",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Interior Condition.",
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
            var CopyLabel0hf69e936126b49 = new voltmx.ui.Label({
                "id": "CopyLabel0hf69e936126b49",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Service History & Manuals.",
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
            var CopyLabel0b8f61eb1ba8e4f = new voltmx.ui.Label({
                "id": "CopyLabel0b8f61eb1ba8e4f",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Paint Condition.",
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
            var CopyLabel0b4ed0d64c2604e = new voltmx.ui.Label({
                "id": "CopyLabel0b4ed0d64c2604e",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "• Interior Photos.",
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
            flxInfo3Matter.add(Label0e3c247fa51b646, CopyLabel0gceeb734f95349, CopyLabel0d28348760e8e4b, CopyLabel0ce1c118e21f14c, CopyLabel0ed03209f7c5d49, CopyLabel0d2fff366c2b84c, CopyLabel0a1e5a2acaec649, CopyLabel0d164797d9abc4e, CopyLabel0e774e7e1752042, CopyLabel0h9c7d3e8b02546, CopyLabel0hf69e936126b49, CopyLabel0b8f61eb1ba8e4f, CopyLabel0b4ed0d64c2604e);
            flxInfo3.add(CopylblInfo0he1c46959a4448, flxDownArrow3, flxInfo3Matter);
            var flxInfo4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": false,
                "id": "flxInfo4",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxEEEEEEBorder1px",
                "top": "30dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInfo4.setDefaultUnit(voltmx.flex.DP);
            var CopylblInfo0b746e42e77e342 = new voltmx.ui.Label({
                "id": "CopylblInfo0b746e42e77e342",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2016px",
                "text": "How It Works",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 3, 0, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDownArrow4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "35dp",
                "id": "flxDownArrow4",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "2.13%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "6%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDownArrow4.setDefaultUnit(voltmx.flex.DP);
            var imgDownArrow4 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "60%",
                "id": "imgDownArrow4",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "downarrowfromvehicleinsp.png",
                "top": "0dp",
                "width": "60%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDownArrow4.add(imgDownArrow4);
            var flxInfo4Matter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxInfo4Matter",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "40dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInfo4Matter.setDefaultUnit(voltmx.flex.DP);
            var Label0c5282cc35e9541 = new voltmx.ui.Label({
                "id": "Label0c5282cc35e9541",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2014pxbold",
                "text": "• Select your package :",
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
            var CopyLabel0f1ce39efd15541 = new voltmx.ui.Label({
                "id": "CopyLabel0f1ce39efd15541",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "Choose from Basic or Comprehensive Inspection Options.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0ab04ba9d51f841 = new voltmx.ui.Label({
                "id": "CopyLabel0ab04ba9d51f841",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2014pxbold",
                "text": "• Complete Payment :",
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
            var CopyLabel0j6eb788849194e = new voltmx.ui.Label({
                "id": "CopyLabel0j6eb788849194e",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "Securely pay online.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0ha839953df5c4a = new voltmx.ui.Label({
                "id": "CopyLabel0ha839953df5c4a",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2014pxbold",
                "text": "• Get Your Report :",
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
            var CopyLabel0bcb2b63519ea4b = new voltmx.ui.Label({
                "id": "CopyLabel0bcb2b63519ea4b",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "Receive a detailed inspection report via email within 24 hours.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 2],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInfo4Matter.add(Label0c5282cc35e9541, CopyLabel0f1ce39efd15541, CopyLabel0ab04ba9d51f841, CopyLabel0j6eb788849194e, CopyLabel0ha839953df5c4a, CopyLabel0bcb2b63519ea4b);
            flxInfo4.add(CopylblInfo0b746e42e77e342, flxDownArrow4, flxInfo4Matter);
            var flxInfo5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": false,
                "id": "flxInfo5",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxEEEEEEBorder1px",
                "top": "30dp",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInfo5.setDefaultUnit(voltmx.flex.DP);
            var CopylblInfo0f0885aa5620947 = new voltmx.ui.Label({
                "id": "CopylblInfo0f0885aa5620947",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2016px",
                "text": "Why Al Wataneya Auctions & Emirates Transport?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 3, 0, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDownArrow5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "35dp",
                "id": "flxDownArrow5",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "2.13%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "6%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDownArrow5.setDefaultUnit(voltmx.flex.DP);
            var imgDownArrow5 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "60%",
                "id": "imgDownArrow5",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "downarrowfromvehicleinsp.png",
                "top": "0dp",
                "width": "60%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDownArrow5.add(imgDownArrow5);
            var flxInfo5Matter = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxInfo5Matter",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "40dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInfo5Matter.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0hf700cd3fc2140 = new voltmx.ui.Label({
                "id": "CopyLabel0hf700cd3fc2140",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2014pxbold",
                "text": "• Accurate Estimates :",
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
            var CopyLabel0d528a62255224b = new voltmx.ui.Label({
                "id": "CopyLabel0d528a62255224b",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "Gain clarity on vehicle value and potential repairs.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0cbd6c0ccc80d4c = new voltmx.ui.Label({
                "id": "CopyLabel0cbd6c0ccc80d4c",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2014pxbold",
                "text": "• Trusted Expertise :",
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
            var CopyLabel0c0992fbca9634c = new voltmx.ui.Label({
                "id": "CopyLabel0c0992fbca9634c",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "Inspections conducted by Emirates Transport, a name synonymous with quailty and professionalism.",
                "textStyle": {
                    "lineSpacing": 1,
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0j1fc9e912b1a4e = new voltmx.ui.Label({
                "id": "CopyLabel0j1fc9e912b1a4e",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2014pxbold",
                "text": "• Fast Results :",
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
            var CopyLabel0e2b1681e84b94e = new voltmx.ui.Label({
                "id": "CopyLabel0e2b1681e84b94e",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "Reports delivered in just 24 hours.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0b59011c56e4646 = new voltmx.ui.Label({
                "id": "CopyLabel0b59011c56e4646",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblCronosPro231f2014pxbold",
                "text": "• Seamless Process :",
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
            var CopyLabel0fc213308ce374b = new voltmx.ui.Label({
                "id": "CopyLabel0fc213308ce374b",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblCronoPro231f2014pxnormal",
                "text": "Simple and hassle-free from start to finish.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 2],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInfo5Matter.add(CopyLabel0hf700cd3fc2140, CopyLabel0d528a62255224b, CopyLabel0cbd6c0ccc80d4c, CopyLabel0c0992fbca9634c, CopyLabel0j1fc9e912b1a4e, CopyLabel0e2b1681e84b94e, CopyLabel0b59011c56e4646, CopyLabel0fc213308ce374b);
            flxInfo5.add(CopylblInfo0f0885aa5620947, flxDownArrow5, flxInfo5Matter);
            var btnContactUs = new voltmx.ui.Button({
                "bottom": "75dp",
                "centerX": "50%",
                "height": "50dp",
                "id": "btnContactUs",
                "isVisible": true,
                "left": "0",
                "skin": "sknBtnBidNow",
                "text": "Contact Us",
                "top": "30dp",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBody.add(flxVehicleInspectionPicture, flxInfo1, flxInfo2, flxInfo3, flxInfo4, flxInfo5, btnContactUs);
            flxScrollBody.add(flxBody);
            var Footer2 = new com.hcl.voltmx.alwataneya1.Footer2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "height": "12%",
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
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxWhatsappcomponent = new com.hcl.voltmx.Whatsapp.flxWhatsappcomponent({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "15%",
                "height": "50dp",
                "id": "flxWhatsappcomponent",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknFlx029051100borderadius",
                "width": "50dp",
                "zIndex": 1,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "flxWhatsappcomponent": {
                        "bottom": "15%",
                        "left": "viz.val_cleared",
                        "right": "10dp",
                        "top": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMain.add(flxHeaderNew, flxScrollBody, Footer2, flxWhatsappcomponent);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmVehicleInspection,
            "enabledForIdleTimeout": false,
            "id": "frmVehicleInspection",
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
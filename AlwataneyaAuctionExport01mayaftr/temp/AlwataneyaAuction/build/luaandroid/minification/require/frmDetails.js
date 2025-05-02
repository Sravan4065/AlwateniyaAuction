define("frmDetails", function() {
    return function(controller) {
        function addWidgetsfrmDetails() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexContainer({
                "clipBounds": false,
                "height": "100%",
                "id": "flxMain",
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
            flxMain.setDefaultUnit(voltmx.flex.DP);
            var flxScrollMain = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollMain",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "sknflxScrollBGeaecf0",
                "top": "-3%",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            flxScrollMain.setDefaultUnit(voltmx.flex.DP);
            var flxCarImagesCarousel = new voltmx.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxCarImagesCarousel",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "3%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCarImagesCarousel.setDefaultUnit(voltmx.flex.DP);
            var flxBack = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30dp",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknFlxBasicBorderRadius",
                "top": "10dp",
                "width": "30dp",
                "zIndex": 30,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBack.setDefaultUnit(voltmx.flex.DP);
            var Image0c8cd9e7ee3d04f = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "55%",
                "id": "Image0c8cd9e7ee3d04f",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "backnavigate_chevron.png",
                "top": "0",
                "width": "55%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(Image0c8cd9e7ee3d04f);
            var CopyflxBack0da64c5d53cf443 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": false,
                "height": "30dp",
                "id": "CopyflxBack0da64c5d53cf443",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknFlxBasicBorderRadius",
                "width": "30dp",
                "zIndex": 30,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxBack0da64c5d53cf443.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0c0c899c5886240 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "60%",
                "id": "CopyImage0c0c899c5886240",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "imagesmultiple.png",
                "top": "0",
                "width": "60%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxBack0da64c5d53cf443.add(CopyImage0c0c899c5886240);
            var imgCarousel = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgCarousel",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxImageBackward = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "30dp",
                "id": "flxImageBackward",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTransparent",
                "top": "0",
                "width": "30dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImageBackward.setDefaultUnit(voltmx.flex.DP);
            var Image0fa36f64965554c = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "Image0fa36f64965554c",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "carouselleft.png",
                "top": "0",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImageBackward.add(Image0fa36f64965554c);
            var flxImageForward = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "30dp",
                "id": "flxImageForward",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxTransparent",
                "top": "0",
                "width": "30dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImageForward.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0f8e19f8ebd2846 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "CopyImage0f8e19f8ebd2846",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "carouselright.png",
                "top": "0",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImageForward.add(CopyImage0f8e19f8ebd2846);
            flxCarImagesCarousel.add(flxBack, CopyflxBack0da64c5d53cf443, imgCarousel, flxImageBackward, flxImageForward);
            var flxCarDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "430dp",
                "id": "flxCarDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffff",
                "top": "240dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCarDetails.setDefaultUnit(voltmx.flex.DP);
            var flxInnerCarDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "95%",
                "id": "flxInnerCarDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0fae185829a9a4b",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerCarDetails.setDefaultUnit(voltmx.flex.DP);
            var flxCarDetailsHead = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "70dp",
                "id": "flxCarDetailsHead",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0e0581d29b06f4b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCarDetailsHead.setDefaultUnit(voltmx.flex.DP);
            var flxHead1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50%",
                "id": "flxHead1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0g0f50845a89843",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHead1.setDefaultUnit(voltmx.flex.DP);
            var lblCarName = new voltmx.ui.Label({
                "bottom": "0",
                "height": "70%",
                "id": "lblCarName",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0c193b967e7554b",
                "text": "Chevrolet Impala 2018",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lbllotNumber = new voltmx.ui.Label({
                "bottom": "0",
                "height": "50%",
                "id": "lbllotNumber",
                "isVisible": true,
                "right": 0,
                "skin": "CopydefLabel0bd148fc841ab4e",
                "text": "#Lot Number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "23%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHead1.add(lblCarName, lbllotNumber);
            var flxHead2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "50%",
                "id": "flxHead2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxHead2.setDefaultUnit(voltmx.flex.DP);
            var flxLocation = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxLocation",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "45%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLocation.setDefaultUnit(voltmx.flex.DP);
            var imgLocation = new voltmx.ui.Image2({
                "height": "50%",
                "id": "imgLocation",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "location.png",
                "top": "0dp",
                "width": "10%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLocation = new voltmx.ui.Label({
                "id": "lblLocation",
                "isVisible": true,
                "right": 0,
                "skin": "CopydefLabel0c21139e08ebe43",
                "text": "Arabian Gulf Road",
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
            flxLocation.add(imgLocation, lblLocation);
            var lblLotID = new voltmx.ui.Label({
                "height": "60%",
                "id": "lblLotID",
                "isVisible": true,
                "right": 0,
                "skin": "sknlblCPRegD32437Font54px",
                "text": "69952",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "25%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHead2.add(flxLocation, lblLotID);
            flxCarDetailsHead.add(flxHead1, flxHead2);
            var flxDist = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "26%",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxDist",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDist.setDefaultUnit(voltmx.flex.DP);
            var flxBlue = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxBlue",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baCustomBorder0077ba15px",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBlue.setDefaultUnit(voltmx.flex.DP);
            var flxDistance = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxDistance",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baBorder0000001px",
                "top": "0",
                "width": "33%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDistance.setDefaultUnit(voltmx.flex.DP);
            var imgDistance = new voltmx.ui.Image2({
                "height": "60%",
                "id": "imgDistance",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group1.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDistance = new voltmx.ui.Label({
                "bottom": "5%",
                "centerX": "50%",
                "height": "50%",
                "id": "lblDistance",
                "isVisible": true,
                "skin": "CopydefLabel0d112fa46a77a4a",
                "text": "2,130 KM",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDistance.add(imgDistance, lblDistance);
            var flxAutomatic = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxAutomatic",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxBG0077baBorder0000001px",
                "top": "10dp",
                "width": "33%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxAutomatic.setDefaultUnit(voltmx.flex.DP);
            var imgAutomatic = new voltmx.ui.Image2({
                "height": "60%",
                "id": "imgAutomatic",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "frame.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAutomatic = new voltmx.ui.Label({
                "bottom": "5%",
                "centerX": "50%",
                "height": "50%",
                "id": "lblAutomatic",
                "isVisible": true,
                "skin": "CopydefLabel0d112fa46a77a4a",
                "text": "Automatic",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAutomatic.add(imgAutomatic, lblAutomatic);
            var flxPetrol = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxPetrol",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "sknflxBG0077baBorder0000001px",
                "width": "33%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPetrol.setDefaultUnit(voltmx.flex.DP);
            var imgPetrol = new voltmx.ui.Image2({
                "height": "60%",
                "id": "imgPetrol",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "frame__1_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblPetrol = new voltmx.ui.Label({
                "bottom": "5%",
                "centerX": "50%",
                "height": "50%",
                "id": "lblPetrol",
                "isVisible": true,
                "skin": "CopydefLabel0d112fa46a77a4a",
                "text": "petrol",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPetrol.add(imgPetrol, lblPetrol);
            flxBlue.add(flxDistance, flxAutomatic, flxPetrol);
            flxDist.add(flxBlue);
            var flxBids = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "125dp",
                "id": "flxBids",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGf4f4f4Bordere6e7e8RoundedCorner",
                "top": "160dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBids.setDefaultUnit(voltmx.flex.DP);
            var flxCurrentBid = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxCurrentBid",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0cd6ecd96f13142",
                "top": "0",
                "width": "50%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCurrentBid.setDefaultUnit(voltmx.flex.DP);
            var imgCurrentBid = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "50%",
                "id": "imgCurrentBid",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group_1321315041.png",
                "top": "0",
                "width": "59%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCurrentBid = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "20%",
                "id": "lblCurrentBid",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0j5e0caf00b9d42",
                "text": "Current Bid",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "60dp",
                "width": "55%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBidAmount = new voltmx.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "height": "20%",
                "id": "lblBidAmount",
                "isVisible": true,
                "skin": "CopydefLabel0a41f9dafb9a540",
                "text": "AED30,540.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCurrentBid.add(imgCurrentBid, lblCurrentBid, lblBidAmount);
            var flxTotalBids = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxTotalBids",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "CopyslFbox0cd6ecd96f13142",
                "top": "10dp",
                "width": "50%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTotalBids.setDefaultUnit(voltmx.flex.DP);
            var imgTotalBids = new voltmx.ui.Image2({
                "centerX": "50%",
                "height": "50%",
                "id": "imgTotalBids",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group_1321315041__1_.png",
                "top": "0",
                "width": "59%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTotalBids = new voltmx.ui.Label({
                "centerX": "50%",
                "height": "20%",
                "id": "lblTotalBids",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0j5e0caf00b9d42",
                "text": "Total Bids",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "60dp",
                "width": "45%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTotalBidsAmount = new voltmx.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "height": "20%",
                "id": "lblTotalBidsAmount",
                "isVisible": true,
                "skin": "sknlblCPBold029051Font50px",
                "text": "255",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTotalBids.add(imgTotalBids, lblTotalBids, lblTotalBidsAmount);
            flxBids.add(flxCurrentBid, flxTotalBids);
            var flxRecommended = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": false,
                "height": "95dp",
                "id": "flxRecommended",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGf4f4f4Bordere6e7e8RoundedCorner",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRecommended.setDefaultUnit(voltmx.flex.DP);
            var flxRecommendedBid = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRecommendedBid",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "50%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRecommendedBid.setDefaultUnit(voltmx.flex.DP);
            var flexRecommendedBid = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "30%",
                "id": "flexRecommendedBid",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG00904bRoundedBorder00904b1px",
                "top": 12,
                "width": "80%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flexRecommendedBid.setDefaultUnit(voltmx.flex.DP);
            var lblRecommendedBid = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "95%",
                "id": "lblRecommendedBid",
                "isVisible": true,
                "skin": "CopydefLabel0iace1cc065a14d",
                "text": "Recommended Bid",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "95%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flexRecommendedBid.add(lblRecommendedBid);
            var flxRecommendedBidAmount = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "65%",
                "clipBounds": false,
                "height": "40dp",
                "id": "flxRecommendedBidAmount",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0gad209c1823a41",
                "top": 20,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRecommendedBidAmount.setDefaultUnit(voltmx.flex.DP);
            var imgRecoJudge = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgRecoJudge",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "judge_1.png",
                "top": "0",
                "width": "20%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblRecoBidAmount = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblRecoBidAmount",
                "isVisible": true,
                "right": "10dp",
                "skin": "sknlblCPBold029051Font50px",
                "text": "AED 30,540.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRecommendedBidAmount.add(imgRecoJudge, lblRecoBidAmount);
            flxRecommendedBid.add(flexRecommendedBid, flxRecommendedBidAmount);
            var flxRetailValue = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxRetailValue",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "10dp",
                "width": "50%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRetailValue.setDefaultUnit(voltmx.flex.DP);
            var flexRetailValue = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "30%",
                "id": "flexRetailValue",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG0077baRoundedBorder0077ba1px",
                "top": 12,
                "width": "80%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flexRetailValue.setDefaultUnit(voltmx.flex.DP);
            var lblRetailValue = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "95%",
                "id": "lblRetailValue",
                "isVisible": true,
                "skin": "CopydefLabel0iace1cc065a14d",
                "text": "Retail Value",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "95%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flexRetailValue.add(lblRetailValue);
            var flxRetailValueAmount = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "65%",
                "clipBounds": false,
                "height": "40dp",
                "id": "flxRetailValueAmount",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0gad209c1823a41",
                "top": 20,
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxRetailValueAmount.setDefaultUnit(voltmx.flex.DP);
            var lblRetailValueBidAmount = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "lblRetailValueBidAmount",
                "isVisible": true,
                "right": "15dp",
                "skin": "sknlblCPBold0077BAFont50px",
                "text": "AED 30,540.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRetailValueAmount.add(lblRetailValueBidAmount);
            flxRetailValue.add(flexRetailValue, flxRetailValueAmount);
            flxRecommended.add(flxRecommendedBid, flxRetailValue);
            flxInnerCarDetails.add(flxCarDetailsHead, flxDist, flxBids, flxRecommended);
            flxCarDetails.add(flxInnerCarDetails);
            var flxBasicInformation = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "500dp",
                "id": "flxBasicInformation",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffff",
                "top": "680dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBasicInformation.setDefaultUnit(voltmx.flex.DP);
            var flxBasicInfoInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "95%",
                "id": "flxBasicInfoInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBasicInfoInner.setDefaultUnit(voltmx.flex.DP);
            var flxBasicInfoHead = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80dp",
                "id": "flxBasicInfoHead",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "15dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBasicInfoHead.setDefaultUnit(voltmx.flex.DP);
            var lblBasicInformation = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblBasicInformation",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPBold000000Font60px",
                "text": "Basic Information",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxTechnicalReport = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "45%",
                "id": "flxTechnicalReport",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "CopyslFbox0i8e6e35b097b4d",
                "top": "0",
                "width": "43%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTechnicalReport.setDefaultUnit(voltmx.flex.DP);
            var lblTechnicalReport = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblTechnicalReport",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0fe396f71be5548",
                "text": "Technical Report",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "83%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgDownload = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "95%",
                "id": "imgDownload",
                "isVisible": true,
                "right": 0,
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "material_symbols_light_download_sharp.png",
                "top": "0",
                "width": "20%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTechnicalReport.add(lblTechnicalReport, imgDownload);
            flxBasicInfoHead.add(lblBasicInformation, flxTechnicalReport);
            var flxBasicInfoBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "400dp",
                "id": "flxBasicInfoBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "100dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBasicInfoBody.setDefaultUnit(voltmx.flex.DP);
            var flxBodyStyleFuelType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "16%",
                "id": "flxBodyStyleFuelType",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBodyStyleFuelType.setDefaultUnit(voltmx.flex.DP);
            var flxBodyStyle = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxBodyStyle",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c14d6a2daf7d49",
                "top": "0",
                "width": "49%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBodyStyle.setDefaultUnit(voltmx.flex.DP);
            var flxBodyStyleInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "75%",
                "id": "flxBodyStyleInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBodyStyleInner.setDefaultUnit(voltmx.flex.DP);
            var lblBodyStyle = new voltmx.ui.Label({
                "height": "20dp",
                "id": "lblBodyStyle",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg231f20Font45px",
                "text": "Body Style",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSUV = new voltmx.ui.Label({
                "bottom": 0,
                "height": "60%",
                "id": "lblSUV",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPLt8e8e8eFont45px",
                "text": "SUV",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgCarBodyStyle = new voltmx.ui.Image2({
                "height": "95%",
                "id": "imgCarBodyStyle",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group_1321315125.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBodyStyleInner.add(lblBodyStyle, lblSUV, imgCarBodyStyle);
            flxBodyStyle.add(flxBodyStyleInner);
            var flxFuelType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxFuelType",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0c14d6a2daf7d49",
                "top": "10dp",
                "width": "49%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFuelType.setDefaultUnit(voltmx.flex.DP);
            var flxFuelTypeInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "75%",
                "id": "flxFuelTypeInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFuelTypeInner.setDefaultUnit(voltmx.flex.DP);
            var lblFuelType = new voltmx.ui.Label({
                "height": "20dp",
                "id": "lblFuelType",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg231f20Font45px",
                "text": "Fuel Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDiesel = new voltmx.ui.Label({
                "bottom": 0,
                "height": "60%",
                "id": "lblDiesel",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPLt8e8e8eFont45px",
                "text": "Diesel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgFuelType = new voltmx.ui.Image2({
                "height": "95%",
                "id": "imgFuelType",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group_1321315125__1_.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFuelTypeInner.add(lblFuelType, lblDiesel, imgFuelType);
            flxFuelType.add(flxFuelTypeInner);
            flxBodyStyleFuelType.add(flxBodyStyle, flxFuelType);
            var flxLocationYear = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "16%",
                "id": "flxLocationYear",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "75dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLocationYear.setDefaultUnit(voltmx.flex.DP);
            var flexLocation = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexLocation",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c14d6a2daf7d49",
                "top": "0",
                "width": "49%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flexLocation.setDefaultUnit(voltmx.flex.DP);
            var flxLocationInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "75%",
                "id": "flxLocationInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLocationInner.setDefaultUnit(voltmx.flex.DP);
            var lblLocationBasicInfo = new voltmx.ui.Label({
                "height": "20dp",
                "id": "lblLocationBasicInfo",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg231f20Font45px",
                "text": "Location",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSharjah = new voltmx.ui.Label({
                "bottom": 0,
                "height": "60%",
                "id": "lblSharjah",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPLt8e8e8eFont45px",
                "text": "Sharjah",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgLoc = new voltmx.ui.Image2({
                "height": "95%",
                "id": "imgLoc",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group_1321315125__2_.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLocationInner.add(lblLocationBasicInfo, lblSharjah, imgLoc);
            flexLocation.add(flxLocationInner);
            var flxYear = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxYear",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0c14d6a2daf7d49",
                "top": "10dp",
                "width": "49%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxYear.setDefaultUnit(voltmx.flex.DP);
            var flxYearInnerFlex = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "75%",
                "id": "flxYearInnerFlex",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxYearInnerFlex.setDefaultUnit(voltmx.flex.DP);
            var lblYear = new voltmx.ui.Label({
                "height": "20dp",
                "id": "lblYear",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg231f20Font45px",
                "text": "Year",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblyearText = new voltmx.ui.Label({
                "bottom": 0,
                "height": "60%",
                "id": "lblyearText",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPLt8e8e8eFont45px",
                "text": "2021",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgCalender = new voltmx.ui.Image2({
                "height": "95%",
                "id": "imgCalender",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group_1321315125__3_.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxYearInnerFlex.add(lblYear, lblyearText, imgCalender);
            flxYear.add(flxYearInnerFlex);
            flxLocationYear.add(flexLocation, flxYear);
            var flxMileageTransmission = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "16%",
                "id": "flxMileageTransmission",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "150dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMileageTransmission.setDefaultUnit(voltmx.flex.DP);
            var flxMileage = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxMileage",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c14d6a2daf7d49",
                "top": "0",
                "width": "49%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMileage.setDefaultUnit(voltmx.flex.DP);
            var flxMileageInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "75%",
                "id": "flxMileageInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMileageInner.setDefaultUnit(voltmx.flex.DP);
            var lblMileage = new voltmx.ui.Label({
                "height": "20dp",
                "id": "lblMileage",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg231f20Font45px",
                "text": "Mileage",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMileageAmount = new voltmx.ui.Label({
                "bottom": 0,
                "height": "60%",
                "id": "lblMileageAmount",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPLt8e8e8eFont45px",
                "text": "15000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgMileage = new voltmx.ui.Image2({
                "height": "95%",
                "id": "imgMileage",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group_3044.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMileageInner.add(lblMileage, lblMileageAmount, imgMileage);
            flxMileage.add(flxMileageInner);
            var flxTransmission = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxTransmission",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0c14d6a2daf7d49",
                "top": "10dp",
                "width": "49%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTransmission.setDefaultUnit(voltmx.flex.DP);
            var flxTransmissionIner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "75%",
                "id": "flxTransmissionIner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTransmissionIner.setDefaultUnit(voltmx.flex.DP);
            var lblTransmission = new voltmx.ui.Label({
                "height": "20dp",
                "id": "lblTransmission",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg231f20Font45px",
                "text": "Transmission",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "65%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAautomaticBasicInfo = new voltmx.ui.Label({
                "bottom": 0,
                "height": "60%",
                "id": "lblAautomaticBasicInfo",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPLt8e8e8eFont45px",
                "text": "Automatic",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "55%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgTransmission = new voltmx.ui.Image2({
                "height": "95%",
                "id": "imgTransmission",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group_1321315125__4_.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTransmissionIner.add(lblTransmission, lblAautomaticBasicInfo, imgTransmission);
            flxTransmission.add(flxTransmissionIner);
            flxMileageTransmission.add(flxMileage, flxTransmission);
            var flxExteriorInteriorColour = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "64%",
                "clipBounds": false,
                "height": "16%",
                "id": "flxExteriorInteriorColour",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "30dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "50dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxExteriorInteriorColour.setDefaultUnit(voltmx.flex.DP);
            var flxExteriorColor = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxExteriorColor",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c14d6a2daf7d49",
                "top": "0",
                "width": "49%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxExteriorColor.setDefaultUnit(voltmx.flex.DP);
            var flxExteriorColorInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "75%",
                "id": "flxExteriorColorInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxExteriorColorInner.setDefaultUnit(voltmx.flex.DP);
            var lblExterior = new voltmx.ui.Label({
                "height": "20dp",
                "id": "lblExterior",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg231f20Font45px",
                "text": "Exterior Colour",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblExteriorColor = new voltmx.ui.Label({
                "bottom": 0,
                "height": "60%",
                "id": "lblExteriorColor",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPLt8e8e8eFont45px",
                "text": "red",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgExterior = new voltmx.ui.Image2({
                "height": "95%",
                "id": "imgExterior",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group_1321315125__5_.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxExteriorColorInner.add(lblExterior, lblExteriorColor, imgExterior);
            flxExteriorColor.add(flxExteriorColorInner);
            var flxInteriorColour = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxInteriorColour",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0c14d6a2daf7d49",
                "top": "10dp",
                "width": "49%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInteriorColour.setDefaultUnit(voltmx.flex.DP);
            var flxInteriorColourInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "75%",
                "id": "flxInteriorColourInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInteriorColourInner.setDefaultUnit(voltmx.flex.DP);
            var lblInteriorColour = new voltmx.ui.Label({
                "height": "20dp",
                "id": "lblInteriorColour",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg231f20Font45px",
                "text": "Interior Colour",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblInteriorColor = new voltmx.ui.Label({
                "bottom": 0,
                "height": "60%",
                "id": "lblInteriorColor",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPLt8e8e8eFont45px",
                "text": "White",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgInterior = new voltmx.ui.Image2({
                "height": "95%",
                "id": "imgInterior",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group_1321315125__6_.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInteriorColourInner.add(lblInteriorColour, lblInteriorColor, imgInterior);
            flxInteriorColour.add(flxInteriorColourInner);
            flxExteriorInteriorColour.add(flxExteriorColor, flxInteriorColour);
            var flxDriveTypeEngine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "9%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "16%",
                "id": "flxDriveTypeEngine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "40dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDriveTypeEngine.setDefaultUnit(voltmx.flex.DP);
            var flxDriveType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxDriveType",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c14d6a2daf7d49",
                "top": "0",
                "width": "49%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDriveType.setDefaultUnit(voltmx.flex.DP);
            var flxDriveTypeInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "75%",
                "id": "flxDriveTypeInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDriveTypeInner.setDefaultUnit(voltmx.flex.DP);
            var lblDriveType = new voltmx.ui.Label({
                "height": "20dp",
                "id": "lblDriveType",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg231f20Font45px",
                "text": "Drive Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lbl4WD = new voltmx.ui.Label({
                "bottom": 0,
                "height": "60%",
                "id": "lbl4WD",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPLt8e8e8eFont45px",
                "text": "4WD",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgDriveType = new voltmx.ui.Image2({
                "height": "95%",
                "id": "imgDriveType",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group_1321315125__7_.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDriveTypeInner.add(lblDriveType, lbl4WD, imgDriveType);
            flxDriveType.add(flxDriveTypeInner);
            var flxEngine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxEngine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0c14d6a2daf7d49",
                "top": "10dp",
                "width": "49%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEngine.setDefaultUnit(voltmx.flex.DP);
            var flxEngineInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "75%",
                "id": "flxEngineInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "85%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEngineInner.setDefaultUnit(voltmx.flex.DP);
            var lblEngine = new voltmx.ui.Label({
                "height": "20dp",
                "id": "lblEngine",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg231f20Font45px",
                "text": "Engine",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCylinder = new voltmx.ui.Label({
                "bottom": 0,
                "height": "60%",
                "id": "lblCylinder",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPLt8e8e8eFont45px",
                "text": "2 Cylinder",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgEngine = new voltmx.ui.Image2({
                "height": "95%",
                "id": "imgEngine",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "group_1321315125__8_.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEngineInner.add(lblEngine, lblCylinder, imgEngine);
            flxEngine.add(flxEngineInner);
            flxDriveTypeEngine.add(flxDriveType, flxEngine);
            flxBasicInfoBody.add(flxBodyStyleFuelType, flxLocationYear, flxMileageTransmission, flxExteriorInteriorColour, flxDriveTypeEngine);
            flxBasicInfoInner.add(flxBasicInfoHead, flxBasicInfoBody);
            flxBasicInformation.add(flxBasicInfoInner);
            var flxVehicleNote = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "230dp",
                "id": "flxVehicleNote",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffff",
                "top": "1195dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVehicleNote.setDefaultUnit(voltmx.flex.DP);
            var flxVehicleNoteInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "95%",
                "id": "flxVehicleNoteInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVehicleNoteInner.setDefaultUnit(voltmx.flex.DP);
            var flxVehicleNoteHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "30%",
                "id": "flxVehicleNoteHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVehicleNoteHeading.setDefaultUnit(voltmx.flex.DP);
            var lblVehicleNote = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblVehicleNote",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPBold000000Font60px",
                "text": "Vehicle Note",
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
            flxVehicleNoteHeading.add(lblVehicleNote);
            var flxVehicleNoteBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "70%",
                "id": "flxVehicleNoteBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVehicleNoteBody.setDefaultUnit(voltmx.flex.DP);
            var lblVehicleNoteBodyText = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblVehicleNoteBodyText",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0jf7062a546ae42",
                "text": "Please be advised that the completion of the sale is subject to management approval. You will receive a response from management either approving or rejecting the sale within 2 to 21 working days, which may be extended depending on the vehicle&#39;s condition. An a",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxVehicleNoteBody.add(lblVehicleNoteBodyText);
            flxVehicleNoteInner.add(flxVehicleNoteHeading, flxVehicleNoteBody);
            flxVehicleNote.add(flxVehicleNoteInner);
            var flxGallery = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "400dp",
                "id": "flxGallery",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffff",
                "top": "1440dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGallery.setDefaultUnit(voltmx.flex.DP);
            var flxGalleryInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxGalleryInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0je5e5aa421ef47",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGalleryInner.setDefaultUnit(voltmx.flex.DP);
            var flxGalleryHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxGalleryHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGalleryHeading.setDefaultUnit(voltmx.flex.DP);
            var lblGallery = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblGallery",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPBold000000Font60px",
                "text": "Gallery",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "40%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxGalleryHeading.add(lblGallery);
            var flxGallerySubHeadingToggle = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "60dp",
                "id": "flxGallerySubHeadingToggle",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0g503ddb1274844",
                "top": "40dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGallerySubHeadingToggle.setDefaultUnit(voltmx.flex.DP);
            var flxInterior = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxInterior",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0h2280603929c4b",
                "top": "0",
                "width": "33.30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInterior.setDefaultUnit(voltmx.flex.DP);
            var lblInterior = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "lblInterior",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPBold000000Font45px",
                "text": "Interior",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxInteriorBottomLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "12%",
                "id": "flxInteriorBottomLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGd32437Borderd324371px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInteriorBottomLine.setDefaultUnit(voltmx.flex.DP);
            flxInteriorBottomLine.add();
            flxInterior.add(lblInterior, flxInteriorBottomLine);
            var flxTireAndTrims = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxTireAndTrims",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0bad17d1a0b9740",
                "top": "0",
                "width": "33.30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTireAndTrims.setDefaultUnit(voltmx.flex.DP);
            var lblTireAndTrims = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblTireAndTrims",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknlblCPBold8e8e8eFont45px",
                "text": "Tire & Trims",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxTireBottomLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "12%",
                "id": "flxTireBottomLine",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGd32437Borderd324371px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTireBottomLine.setDefaultUnit(voltmx.flex.DP);
            flxTireBottomLine.add();
            flxTireAndTrims.add(lblTireAndTrims, flxTireBottomLine);
            var flxFrontsAndRare = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxFrontsAndRare",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "33.30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFrontsAndRare.setDefaultUnit(voltmx.flex.DP);
            var lblFrontsAndRare = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblFrontsAndRare",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPBold8e8e8eFont45px",
                "text": "Fronts and Rear",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxFrontsBottomLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "12%",
                "id": "flxFrontsBottomLine",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGd32437Borderd324371px",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxFrontsBottomLine.setDefaultUnit(voltmx.flex.DP);
            flxFrontsBottomLine.add();
            flxFrontsAndRare.add(lblFrontsAndRare, flxFrontsBottomLine);
            flxGallerySubHeadingToggle.add(flxInterior, flxTireAndTrims, flxFrontsAndRare);
            var flxGalleryInteriorBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "220dp",
                "id": "flxGalleryInteriorBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c22c354bc87f48",
                "top": "120dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGalleryInteriorBody.setDefaultUnit(voltmx.flex.DP);
            var flxGalleryImgSection1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50%",
                "id": "flxGalleryImgSection1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0f1660769fd294b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGalleryImgSection1.setDefaultUnit(voltmx.flex.DP);
            var flxImg1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxImg1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxRoundedBorderffffff1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImg1.setDefaultUnit(voltmx.flex.DP);
            var carImg1 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "carImg1",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__1_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImg1.add(carImg1);
            var flxImg2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxImg2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxRoundedBorderffffff1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImg2.setDefaultUnit(voltmx.flex.DP);
            var carImg2 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "carImg2",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__2_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImg2.add(carImg2);
            var flxImg3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxImg3",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "sknflxRoundedBorderffffff1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImg3.setDefaultUnit(voltmx.flex.DP);
            var carImg3 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "carImg3",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__4_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImg3.add(carImg3);
            flxGalleryImgSection1.add(flxImg1, flxImg2, flxImg3);
            var flxGalleryImgSection2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "50%",
                "id": "flxGalleryImgSection2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f1660769fd294b",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGalleryImgSection2.setDefaultUnit(voltmx.flex.DP);
            var flxImg4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxImg4",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxRoundedBorderffffff1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImg4.setDefaultUnit(voltmx.flex.DP);
            var carImg4 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "carImg4",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__5_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImg4.add(carImg4);
            var flxImg5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxImg5",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxRoundedBorderffffff1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImg5.setDefaultUnit(voltmx.flex.DP);
            var carImg5 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "carImg5",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__2_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImg5.add(carImg5);
            var flxImg6 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxImg6",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "sknflxRoundedBorderffffff1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImg6.setDefaultUnit(voltmx.flex.DP);
            var carImg6 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "carImg6",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__6_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImg6.add(carImg6);
            flxGalleryImgSection2.add(flxImg4, flxImg5, flxImg6);
            flxGalleryInteriorBody.add(flxGalleryImgSection1, flxGalleryImgSection2);
            var flxGalleryTireTrimsBody = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "220dp",
                "id": "flxGalleryTireTrimsBody",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c22c354bc87f48",
                "top": "130dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxGalleryTireTrimsBody.setDefaultUnit(voltmx.flex.DP);
            var CopyflxGalleryImgSection0f57100c7bae64b = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50%",
                "id": "CopyflxGalleryImgSection0f57100c7bae64b",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0f1660769fd294b",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxGalleryImgSection0f57100c7bae64b.setDefaultUnit(voltmx.flex.DP);
            var CopyflxImg0d85712a35c6545 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "CopyflxImg0d85712a35c6545",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxRoundedBorderffffff1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxImg0d85712a35c6545.setDefaultUnit(voltmx.flex.DP);
            var CopycarImg0c31083003b584a = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CopycarImg0c31083003b584a",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__1_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxImg0d85712a35c6545.add(CopycarImg0c31083003b584a);
            var CopyflxImg0ba6a18adf02d44 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "CopyflxImg0ba6a18adf02d44",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxRoundedBorderffffff1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxImg0ba6a18adf02d44.setDefaultUnit(voltmx.flex.DP);
            var CopycarImg0c775a1e7e0e848 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CopycarImg0c775a1e7e0e848",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__2_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxImg0ba6a18adf02d44.add(CopycarImg0c775a1e7e0e848);
            var CopyflxImg0ea0c971120ce4a = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "CopyflxImg0ea0c971120ce4a",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "sknflxRoundedBorderffffff1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxImg0ea0c971120ce4a.setDefaultUnit(voltmx.flex.DP);
            var CopycarImg0d7ef27653e7149 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CopycarImg0d7ef27653e7149",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__4_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxImg0ea0c971120ce4a.add(CopycarImg0d7ef27653e7149);
            CopyflxGalleryImgSection0f57100c7bae64b.add(CopyflxImg0d85712a35c6545, CopyflxImg0ba6a18adf02d44, CopyflxImg0ea0c971120ce4a);
            var CopyflxGalleryImgSection0aa1f2ff6036340 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "50%",
                "id": "CopyflxGalleryImgSection0aa1f2ff6036340",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f1660769fd294b",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxGalleryImgSection0aa1f2ff6036340.setDefaultUnit(voltmx.flex.DP);
            var CopyflxImg0b464e1cb64e248 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "CopyflxImg0b464e1cb64e248",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxRoundedBorderffffff1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxImg0b464e1cb64e248.setDefaultUnit(voltmx.flex.DP);
            var CopycarImg0aeed7563ab904d = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CopycarImg0aeed7563ab904d",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__5_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxImg0b464e1cb64e248.add(CopycarImg0aeed7563ab904d);
            var CopyflxImg0b481c2dc38b14e = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "CopyflxImg0b481c2dc38b14e",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "sknflxRoundedBorderffffff1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxImg0b481c2dc38b14e.setDefaultUnit(voltmx.flex.DP);
            var CopycarImg0j0abe201fe644a = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CopycarImg0j0abe201fe644a",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__2_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxImg0b481c2dc38b14e.add(CopycarImg0j0abe201fe644a);
            var CopyflxImg0f7295107859c4d = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "CopyflxImg0f7295107859c4d",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "sknflxRoundedBorderffffff1px",
                "top": "0",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxImg0f7295107859c4d.setDefaultUnit(voltmx.flex.DP);
            var CopycarImg0g0a8b44241fa4c = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CopycarImg0g0a8b44241fa4c",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__6_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxImg0f7295107859c4d.add(CopycarImg0g0a8b44241fa4c);
            CopyflxGalleryImgSection0aa1f2ff6036340.add(CopyflxImg0b464e1cb64e248, CopyflxImg0b481c2dc38b14e, CopyflxImg0f7295107859c4d);
            flxGalleryTireTrimsBody.add(CopyflxGalleryImgSection0f57100c7bae64b, CopyflxGalleryImgSection0aa1f2ff6036340);
            flxGalleryInner.add(flxGalleryHeading, flxGallerySubHeadingToggle, flxGalleryInteriorBody, flxGalleryTireTrimsBody);
            flxGallery.add(flxGalleryInner);
            var flxLocationContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "700dp",
                "id": "flxLocationContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffff",
                "top": "1860dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLocationContainer.setDefaultUnit(voltmx.flex.DP);
            var flxInnerLocation = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "95%",
                "id": "flxInnerLocation",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ba387c9ec1d442",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerLocation.setDefaultUnit(voltmx.flex.DP);
            var flxLocationHead = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxLocationHead",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLocationHead.setDefaultUnit(voltmx.flex.DP);
            var lblLocationText = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblLocationText",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPBold000000Font60px",
                "text": "Location",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "26%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLocationHead.add(lblLocationText);
            var flxMap = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "220dp",
                "id": "flxMap",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "45dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMap.setDefaultUnit(voltmx.flex.DP);
            var flxImgMapContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "75%",
                "id": "flxImgMapContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0i91b2c8821914d",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImgMapContainer.setDefaultUnit(voltmx.flex.DP);
            var imgMap = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgMap",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image_48.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgMapContainer.add(imgMap);
            var flxMapDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "25%",
                "id": "flxMapDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0i78b2e78943544",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMapDetails.setDefaultUnit(voltmx.flex.DP);
            var flxLocImg = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "70%",
                "id": "flxLocImg",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "20%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLocImg.setDefaultUnit(voltmx.flex.DP);
            var imgLocIcon = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgLocIcon",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "qlementine_icons_location_16.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLocImg.add(imgLocIcon);
            var lblAddressLoc = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblAddressLoc",
                "isVisible": true,
                "right": "0",
                "skin": "CopydefLabel0d6947f27b0364d",
                "text": "7JJC+FQ9 - Unnamed Road - Sharjah - United Arab Emirates",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMapDetails.add(flxLocImg, lblAddressLoc);
            flxMap.add(flxImgMapContainer, flxMapDetails);
            var flxTermsAndCondition = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "clipBounds": false,
                "height": "380dp",
                "id": "flxTermsAndCondition",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c44f69cde23b41",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTermsAndCondition.setDefaultUnit(voltmx.flex.DP);
            var segOptions = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "imgRight": "vector__2_1_1.png",
                    "lblOptions": "Terms & Conditions"
                }, {
                    "imgRight": "vector__2_1_1.png",
                    "lblOptions": "Options"
                }, {
                    "imgRight": "vector__2_1_1.png",
                    "lblOptions": "Specifications"
                }, {
                    "imgRight": "vector__2_1_1.png",
                    "lblOptions": "Inspection Location Map"
                }, {
                    "imgRight": "vector__2_1_1.png",
                    "lblOptions": "Chat Now"
                }],
                "groupCells": false,
                "height": "80%",
                "id": "segOptions",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "Copyseg0gd3150bb437747",
                "rowSkin": "Copyseg0f79cb7f92cbc4c",
                "rowTemplate": "flxSegRowOptions",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopysliPhoneSegmentHeader4",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSegRowOptions": "flxSegRowOptions",
                    "imgRight": "imgRight",
                    "lblOptions": "lblOptions"
                },
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxButtons = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "20%",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxButtons.setDefaultUnit(voltmx.flex.DP);
            var flxShare = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxShare",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBG000000CustomBorder5px",
                "top": "0",
                "width": "48%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxShare.setDefaultUnit(voltmx.flex.DP);
            var imgShare = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "imgShare",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "material_symbols_share_outline.png",
                "top": 0,
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblShare = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblShare",
                "isVisible": true,
                "right": 2,
                "skin": "CopydefLabel0fb4336d15cae4f",
                "text": "Share",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxShare.add(imgShare, lblShare);
            var flxWatch = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "centerY": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "flxWatch",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0",
                "skin": "sknflxBG000000CustomBorder5px",
                "width": "48%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxWatch.setDefaultUnit(voltmx.flex.DP);
            var imgWatch = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "imgWatch",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "mdi_eye_outline.png",
                "top": 0,
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblWatch = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "lblWatch",
                "isVisible": true,
                "right": 2,
                "skin": "CopydefLabel0fb4336d15cae4f",
                "text": "Watch",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxWatch.add(imgWatch, lblWatch);
            flxButtons.add(flxShare, flxWatch);
            flxTermsAndCondition.add(segOptions, flxButtons);
            flxInnerLocation.add(flxLocationHead, flxMap, flxTermsAndCondition);
            flxLocationContainer.add(flxInnerLocation);
            var flxSimilarVehicles = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "600dp",
                "id": "flxSimilarVehicles",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknflxBGffffff",
                "top": "2575dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSimilarVehicles.setDefaultUnit(voltmx.flex.DP);
            var flxInnerSimilarVehicles = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "95%",
                "id": "flxInnerSimilarVehicles",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "90%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxInnerSimilarVehicles.setDefaultUnit(voltmx.flex.DP);
            var flxSimilarVehiclesHeading = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "12%",
                "id": "flxSimilarVehiclesHeading",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSimilarVehiclesHeading.setDefaultUnit(voltmx.flex.DP);
            var lblSimilarVehicles = new voltmx.ui.Label({
                "id": "lblSimilarVehicles",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPBold000000Font60px",
                "text": "Similar Vehicles",
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
            flxSimilarVehiclesHeading.add(lblSimilarVehicles);
            var flxSimilarVehiclesScroll = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "380dp",
                "horizontalScrollIndicator": true,
                "id": "flxSimilarVehiclesScroll",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0ja38d0b3c77b43",
                "top": "40dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            flxSimilarVehiclesScroll.setDefaultUnit(voltmx.flex.DP);
            var flxCarImgContainer = new voltmx.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxCarImgContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0aad5745fe40042",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCarImgContainer.setDefaultUnit(voltmx.flex.DP);
            var imgCarScrol = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgCarScrol",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "image__7_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgBadge = new voltmx.ui.Image2({
                "height": "30%",
                "id": "imgBadge",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "badge.png",
                "top": "0",
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCarName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "50%",
                "id": "flxCarName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0bcefe2b3b7744d",
                "width": "70%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCarName.setDefaultUnit(voltmx.flex.DP);
            var lblVehicleName = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "40%",
                "id": "lblVehicleName",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0a70d22801d234e",
                "text": "Toyota Corolla 2012",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblVehicleAmount = new voltmx.ui.Label({
                "bottom": 0,
                "centerX": "50%",
                "height": "40%",
                "id": "lblVehicleAmount",
                "isVisible": true,
                "left": 10,
                "skin": "CopydefLabel0cc62c07a8d2b4b",
                "text": "3600",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "72%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCarName.add(lblVehicleName, lblVehicleAmount);
            flxCarImgContainer.add(imgCarScrol, imgBadge, flxCarName);
            var flxBottom = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "45%",
                "id": "flxBottom",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a39c7ff5c7f140",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBottom.setDefaultUnit(voltmx.flex.DP);
            var flxBidNow = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50%",
                "id": "flxBidNow",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0dc09f0607e5347",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBidNow.setDefaultUnit(voltmx.flex.DP);
            var flxTimer = new voltmx.ui.Label({
                "centerY": "51.85%",
                "height": "80%",
                "id": "flxTimer",
                "isVisible": true,
                "left": "35dp",
                "skin": "CopydefLabel0gb8d286259b84f",
                "text": "6D 4H 47M23S",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnBidNow = new voltmx.ui.Button({
                "centerY": "50%",
                "focusSkin": "CopydefBtnFocus0e4c71e836ede43",
                "height": "45%",
                "id": "btnBidNow",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknlblCPReg0077BAFont45px",
                "text": "Bid Now",
                "top": "0",
                "width": "30%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBidNow.add(flxTimer, btnBidNow);
            var flxCalenderDiesel = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "15dp",
                "clipBounds": false,
                "height": "45%",
                "id": "flxCalenderDiesel",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0j13e6d5c41d743",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCalenderDiesel.setDefaultUnit(voltmx.flex.DP);
            var flxCalender = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "70%",
                "id": "flxCalender",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": 0,
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxCalender.setDefaultUnit(voltmx.flex.DP);
            var imgCal = new voltmx.ui.Image2({
                "centerX": "40%",
                "centerY": "50%",
                "height": "70%",
                "id": "imgCal",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "calendar.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCalender = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblCalender",
                "isVisible": true,
                "right": "0",
                "skin": "CopydefLabel0f00ff54fbd3e47",
                "text": "2021",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCalender.add(imgCal, lblCalender);
            var flDistance = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "70%",
                "id": "flDistance",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ad7260b0561e40",
                "top": 0,
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flDistance.setDefaultUnit(voltmx.flex.DP);
            var CopyimgCal0d2511435c9e448 = new voltmx.ui.Image2({
                "centerX": "30%",
                "centerY": "50%",
                "height": "70%",
                "id": "CopyimgCal0d2511435c9e448",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "calendar.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblCalender0f19f2adef8c04f = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "CopylblCalender0f19f2adef8c04f",
                "isVisible": true,
                "right": "0",
                "skin": "CopydefLabel0f00ff54fbd3e47",
                "text": "15000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flDistance.add(CopyimgCal0d2511435c9e448, CopylblCalender0f19f2adef8c04f);
            var flxDiesel = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0",
                "centerY": "50%",
                "clipBounds": false,
                "height": "70%",
                "id": "flxDiesel",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "CopyslFbox0ad7260b0561e40",
                "width": "30%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxDiesel.setDefaultUnit(voltmx.flex.DP);
            var CopyimgCal0f96ba8c8e57240 = new voltmx.ui.Image2({
                "centerX": "30%",
                "centerY": "50%",
                "height": "70%",
                "id": "CopyimgCal0f96ba8c8e57240",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0ff9c664e5ea14e",
                "src": "calendar.png",
                "top": "0",
                "width": "25%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblCalender0a29dc036610840 = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "CopylblCalender0a29dc036610840",
                "isVisible": true,
                "right": "0",
                "skin": "CopydefLabel0f00ff54fbd3e47",
                "text": "Diesel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDiesel.add(CopyimgCal0f96ba8c8e57240, CopylblCalender0a29dc036610840);
            flxCalenderDiesel.add(flxCalender, flDistance, flxDiesel);
            flxBottom.add(flxBidNow, flxCalenderDiesel);
            flxSimilarVehiclesScroll.add(flxCarImgContainer, flxBottom);
            flxInnerSimilarVehicles.add(flxSimilarVehiclesHeading, flxSimilarVehiclesScroll);
            flxSimilarVehicles.add(flxInnerSimilarVehicles);
            flxScrollMain.add(flxCarImagesCarousel, flxCarDetails, flxBasicInformation, flxVehicleNote, flxGallery, flxLocationContainer, flxSimilarVehicles);
            var flxBidNowButton = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxBidNowButton",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "width": "100%",
                "zIndex": 2,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBidNowButton.setDefaultUnit(voltmx.flex.DP);
            var btnBidNowLast = new voltmx.ui.Button({
                "bottom": 20,
                "centerX": "50%",
                "focusSkin": "CopydefBtnFocus0e4c71e836ede43",
                "height": "50dp",
                "id": "btnBidNowLast",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblCPReg0077BAFont45px",
                "text": "Bid Now",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBidNowButton.add(btnBidNowLast);
            var flxWhatsappcomponent = new com.hcl.voltmx.Whatsapp.flxWhatsappcomponent({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "80dp",
                "height": "50dp",
                "id": "flxWhatsappcomponent",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "sknFlx029051100borderadius",
                "width": "50dp",
                "zIndex": 3,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "flxWhatsappcomponent": {
                        "bottom": "80dp",
                        "left": "viz.val_cleared",
                        "right": "5dp",
                        "top": "viz.val_cleared",
                        "zIndex": 3
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMain.add(flxScrollMain, flxBidNowButton, flxWhatsappcomponent);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmDetails,
            "enabledForIdleTimeout": false,
            "id": "frmDetails",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0idb8e0f3a2bb4b",
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
            "titleBarSkin": "CopyslTitleBar0e867845ca12349",
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});
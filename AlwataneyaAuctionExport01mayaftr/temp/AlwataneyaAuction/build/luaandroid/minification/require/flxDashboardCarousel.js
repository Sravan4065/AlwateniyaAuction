define("flxDashboardCarousel", function() {
    return function(controller) {
        var flxDashboardCarousel = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "180dp",
            "id": "flxDashboardCarousel",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBasicwithBgImage",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxDashboardCarousel.setDefaultUnit(voltmx.flex.DP);
        var imgAwaLogo = new voltmx.ui.Image2({
            "height": "20%",
            "id": "imgAwaLogo",
            "isVisible": false,
            "right": 10,
            "skin": "slImage",
            "src": "awalogodashboardcarousel.png",
            "top": "10dp",
            "width": "40%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRelatedSlide1 = new voltmx.ui.Image2({
            "bottom": "5%",
            "height": "70%",
            "id": "imgRelatedSlide1",
            "isVisible": true,
            "left": "38%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "65%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgBackgroundCarousel = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgBackgroundCarousel",
            "isVisible": false,
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
        var imgFlashAuctionslide = new voltmx.ui.Image2({
            "height": "50dp",
            "id": "imgFlashAuctionslide",
            "isVisible": false,
            "left": "48%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "15dp",
            "width": "50dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxFlowVerticalInside = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxFlowVerticalInside",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxFlowVerticalInside.setDefaultUnit(voltmx.flex.DP);
        var lblCarouselSlideHeading = new voltmx.ui.Label({
            "id": "lblCarouselSlideHeading",
            "isVisible": true,
            "left": "4%",
            "skin": "CopysknLblCronosProBlack24px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblCarouselSlideSubheading = new voltmx.ui.Label({
            "id": "lblCarouselSlideSubheading",
            "isVisible": true,
            "left": "4%",
            "skin": "sknlblConspro40pxnormal",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2%",
            "width": "55%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnAction = new voltmx.ui.Button({
            "height": "35dp",
            "id": "btnAction",
            "isVisible": true,
            "left": "4%",
            "skin": "sknBtnActionDashboardCarousel",
            "text": "Button",
            "top": "4%",
            "width": "80dp",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [2, 0, 2, 0],
            "paddingInPixel": false
        }, {});
        flxFlowVerticalInside.add(lblCarouselSlideHeading, lblCarouselSlideSubheading, btnAction);
        flxDashboardCarousel.add(imgAwaLogo, imgRelatedSlide1, imgBackgroundCarousel, imgFlashAuctionslide, flxFlowVerticalInside);
        return flxDashboardCarousel;
    }
})
define("flxDashboardCarouselNew", function() {
    return function(controller) {
        var flxDashboardCarouselNew = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "220dp",
            "id": "flxDashboardCarouselNew",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxDropShadowFFFFFF",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxDashboardCarouselNew.setDefaultUnit(voltmx.flex.DP);
        var imgCarousel = new voltmx.ui.Image2({
            "centerX": "50%",
            "height": "65%",
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
        var lblCarouselSlideHeading = new voltmx.ui.Label({
            "height": "25dp",
            "id": "lblCarouselSlideHeading",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlack24px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "70%",
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
            "left": "5%",
            "skin": "sknlblConspro40pxnormal",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "82%",
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
            "right": "2%",
            "skin": "sknBtnActionDashboardCarousel",
            "text": "Button",
            "top": "79.83%",
            "width": "90dp",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [2, 0, 2, 0],
            "paddingInPixel": false
        }, {});
        flxDashboardCarouselNew.add(imgCarousel, lblCarouselSlideHeading, lblCarouselSlideSubheading, btnAction);
        return flxDashboardCarouselNew;
    }
})
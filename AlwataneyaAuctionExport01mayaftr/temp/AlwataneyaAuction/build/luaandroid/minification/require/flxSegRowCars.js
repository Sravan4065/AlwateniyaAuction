define("flxSegRowCars", function() {
    return function(controller) {
        var flxSegRowCars = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "220dp",
            "id": "flxSegRowCars",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0ad7260b0561e40",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxSegRowCars.setDefaultUnit(voltmx.flex.DP);
        var imgCar = new voltmx.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgCar",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage0ff9c664e5ea14e",
            "src": "carimage.png",
            "top": "0",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxForwardAndBackWard = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "50dp",
            "id": "flxForwardAndBackWard",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0i03c7720742749",
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxForwardAndBackWard.setDefaultUnit(voltmx.flex.DP);
        var imgBack = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgBack",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage0ff9c664e5ea14e",
            "src": "group_1000004656__1_.png",
            "top": "0",
            "width": "10%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgForward = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgForward",
            "isVisible": true,
            "right": 0,
            "skin": "CopyslImage0ff9c664e5ea14e",
            "src": "group_1000004655.png",
            "top": "0",
            "width": "10%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxForwardAndBackWard.add(imgBack, imgForward);
        flxSegRowCars.add(imgCar, flxForwardAndBackWard);
        return flxSegRowCars;
    }
})
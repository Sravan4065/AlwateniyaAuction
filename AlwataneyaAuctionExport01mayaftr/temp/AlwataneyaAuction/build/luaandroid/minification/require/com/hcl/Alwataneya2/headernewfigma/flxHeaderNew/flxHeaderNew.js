define(function() {
    return function(controller) {
        var flxHeaderNew = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "8%",
            "id": "flxHeaderNew",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHeaderNew"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeaderNew"), extendConfig({}, controller.args[2], "flxHeaderNew"));
        flxHeaderNew.setDefaultUnit(voltmx.flex.DP);
        var imgLogo = new voltmx.ui.Image2(extendConfig({
            "centerY": "45%",
            "height": "24dp",
            "id": "imgLogo",
            "isVisible": true,
            "left": "5%",
            "skin": "slImage",
            "src": "awaheaderlogo.png",
            "top": "0",
            "width": "100dp"
        }, controller.args[0], "imgLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogo"), extendConfig({}, controller.args[2], "imgLogo"));
        var btnChangeLang = new voltmx.ui.Button(extendConfig({
            "centerY": "45%",
            "height": "50dp",
            "id": "btnChangeLang",
            "isVisible": true,
            "right": "2%",
            "skin": "sknBtnFFFFFFFontCronosPro231f20",
            "text": "العربية",
            "top": "0",
            "width": "97dp"
        }, controller.args[0], "btnChangeLang"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnChangeLang"), extendConfig({}, controller.args[2], "btnChangeLang"));
        flxHeaderNew.add(imgLogo, btnChangeLang);
        return flxHeaderNew;
    }
})
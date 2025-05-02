define(function() {
    return function(controller) {
        var flxWhatsappcomponent = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "50dp",
            "clipBounds": true,
            "isMaster": true,
            "height": "50dp",
            "id": "flxWhatsappcomponent",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "50dp",
            "skin": "sknFlx029051100borderadius",
            "width": "50dp",
            "zIndex": 1,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxWhatsappcomponent"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxWhatsappcomponent"), extendConfig({}, controller.args[2], "flxWhatsappcomponent"));
        flxWhatsappcomponent.setDefaultUnit(voltmx.flex.DP);
        var imgWhatsapp = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "60%",
            "id": "imgWhatsapp",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "whatsappicon.png",
            "top": "0",
            "width": "60%"
        }, controller.args[0], "imgWhatsapp"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgWhatsapp"), extendConfig({}, controller.args[2], "imgWhatsapp"));
        flxWhatsappcomponent.add(imgWhatsapp);
        return flxWhatsappcomponent;
    }
})
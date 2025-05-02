define(function() {
    return function(controller) {
        var HeaderRegister = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "10%",
            "id": "HeaderRegister",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "HeaderRegister"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "HeaderRegister"), extendConfig({}, controller.args[2], "HeaderRegister"));
        HeaderRegister.setDefaultUnit(voltmx.flex.DP);
        var imgAWA = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "90%",
            "id": "imgAWA",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "logo_1.png",
            "top": "0",
            "width": "30%"
        }, controller.args[0], "imgAWA"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAWA"), extendConfig({}, controller.args[2], "imgAWA"));
        var btnLogin = new voltmx.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "defBtnFocus",
            "height": "50dp",
            "id": "btnLogin",
            "isVisible": true,
            "right": 0,
            "skin": "sknlblCPReg0077BAFont52px",
            "text": "LOG IN",
            "top": "0",
            "width": "30%"
        }, controller.args[0], "btnLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogin"), extendConfig({}, controller.args[2], "btnLogin"));
        HeaderRegister.add(imgAWA, btnLogin);
        return HeaderRegister;
    }
})
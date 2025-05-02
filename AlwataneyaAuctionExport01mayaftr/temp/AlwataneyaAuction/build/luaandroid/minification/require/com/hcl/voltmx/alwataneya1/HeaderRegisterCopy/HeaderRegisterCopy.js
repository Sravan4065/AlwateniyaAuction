define(function() {
    return function(controller) {
        var HeaderRegisterCopy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "10%",
            "id": "HeaderRegisterCopy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0a9831affa2094b",
            "top": 0,
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "HeaderRegisterCopy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "HeaderRegisterCopy"), extendConfig({}, controller.args[2], "HeaderRegisterCopy"));
        HeaderRegisterCopy.setDefaultUnit(voltmx.flex.DP);
        var imgAWA = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "90%",
            "id": "imgAWA",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage0bce6b78d7c284f",
            "src": "logo_1_4.png",
            "top": "0",
            "width": "30%"
        }, controller.args[0], "imgAWA"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAWA"), extendConfig({}, controller.args[2], "imgAWA"));
        var btnLogin = new voltmx.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "CopydefBtnFocus0if8fb27e68c84c",
            "height": "50%",
            "id": "btnLogin",
            "isVisible": true,
            "right": 0,
            "skin": "CopysknlblCPReg0c975cf6093bd41",
            "text": "LOG IN",
            "top": "0",
            "width": "25%"
        }, controller.args[0], "btnLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogin"), extendConfig({}, controller.args[2], "btnLogin"));
        var imgBack = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgBack",
            "isVisible": false,
            "left": "3%",
            "skin": "CopyslImage0bce6b78d7c284f",
            "src": "vector__1_1.png",
            "top": "0",
            "width": "20%"
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        HeaderRegisterCopy.add(imgAWA, btnLogin, imgBack);
        return HeaderRegisterCopy;
    }
})
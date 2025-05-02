define(function() {
    return function(controller) {
        var HeaderRegister1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "10%",
            "id": "HeaderRegister1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": 0,
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "HeaderRegister1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "HeaderRegister1"), extendConfig({}, controller.args[2], "HeaderRegister1"));
        HeaderRegister1.setDefaultUnit(voltmx.flex.DP);
        var flxBack = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "90%",
            "id": "flxBack",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "20%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxBack"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxBack"), extendConfig({}, controller.args[2], "flxBack"));
        flxBack.setDefaultUnit(voltmx.flex.DP);
        var imgBack = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "90%",
            "id": "imgBack",
            "isVisible": true,
            "left": "3%",
            "skin": "CopyslImage0bce6b78d7c284f",
            "src": "vector__1_1.png",
            "top": "0",
            "width": "80%"
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        flxBack.add(imgBack);
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
        var flxLogin = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "centerY": "50%",
            "clipBounds": false,
            "height": "80%",
            "id": "flxLogin",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "width": "30%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxLogin"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLogin"), extendConfig({}, controller.args[2], "flxLogin"));
        flxLogin.setDefaultUnit(voltmx.flex.DP);
        var btnLogin = new voltmx.ui.Button(extendConfig({
            "bottom": "0",
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "CopydefBtnFocus0if8fb27e68c84c",
            "height": "80%",
            "id": "btnLogin",
            "isVisible": true,
            "right": "0dp",
            "skin": "CopysknlblCPReg0c975cf6093bd41",
            "text": "LOG IN",
            "width": "80%"
        }, controller.args[0], "btnLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogin"), extendConfig({}, controller.args[2], "btnLogin"));
        flxLogin.add(btnLogin);
        HeaderRegister1.add(flxBack, imgAWA, flxLogin);
        return HeaderRegister1;
    }
})
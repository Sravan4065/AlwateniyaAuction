define(function() {
    return function(controller) {
        var browsefile = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "browsefile",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0haff06a500cb4d",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "browsefile"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "browsefile"), extendConfig({}, controller.args[2], "browsefile"));
        browsefile.setDefaultUnit(voltmx.flex.DP);
        var brwsrUpload = new voltmx.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "brwsrUpload",
            "isVisible": true,
            "left": "0dp",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "DragAnddrop.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "brwsrUpload"), extendConfig({}, controller.args[1], "brwsrUpload"), extendConfig({}, controller.args[2], "brwsrUpload"));
        browsefile.add(brwsrUpload);
        return browsefile;
    }
})
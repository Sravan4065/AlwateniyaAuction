define(function() {
    return function(controller) {
        var browsefileCopy1 = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "browsefileCopy1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0i0fde3a129ab45",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "browsefileCopy1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "browsefileCopy1"), extendConfig({}, controller.args[2], "browsefileCopy1"));
        browsefileCopy1.setDefaultUnit(voltmx.flex.DP);
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
                "URL": "CopyDragAnddrop1.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "brwsrUpload"), extendConfig({}, controller.args[1], "brwsrUpload"), extendConfig({}, controller.args[2], "brwsrUpload"));
        browsefileCopy1.add(brwsrUpload);
        return browsefileCopy1;
    }
})
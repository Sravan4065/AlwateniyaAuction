define(function() {
    return function(controller) {
        var browsefileCopy = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "browsefileCopy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0f6e8402ae24a4a",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "browsefileCopy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "browsefileCopy"), extendConfig({}, controller.args[2], "browsefileCopy"));
        browsefileCopy.setDefaultUnit(voltmx.flex.DP);
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
                "URL": "CopyDragAnddrop.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "brwsrUpload"), extendConfig({}, controller.args[1], "brwsrUpload"), extendConfig({}, controller.args[2], "brwsrUpload"));
        browsefileCopy.add(brwsrUpload);
        return browsefileCopy;
    }
})
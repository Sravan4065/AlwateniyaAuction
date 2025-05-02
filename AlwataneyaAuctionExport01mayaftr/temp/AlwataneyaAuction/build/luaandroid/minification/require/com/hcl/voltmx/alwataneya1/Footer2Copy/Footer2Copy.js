define(function() {
    return function(controller) {
        var Footer2Copy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "clipBounds": false,
            "isMaster": true,
            "height": "12%",
            "id": "Footer2Copy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxFooter",
            "width": "100%",
            "zIndex": 1,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "Footer2Copy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "Footer2Copy"), extendConfig({}, controller.args[2], "Footer2Copy"));
        Footer2Copy.setDefaultUnit(voltmx.flex.DP);
        var flxHome = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxHome",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_bc1022a116094373a5ce84fbfc1d2e88,
            "skin": "CopysknflxForm",
            "top": "0",
            "width": "20%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHome"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHome"), extendConfig({}, controller.args[2], "flxHome"));
        flxHome.setDefaultUnit(voltmx.flex.DP);
        var imgHome = new voltmx.ui.Image2(extendConfig({
            "height": "70%",
            "id": "imgHome",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopyslImage2",
            "src": "home__1_1_2.png",
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "imgHome"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgHome"), extendConfig({}, controller.args[2], "imgHome"));
        var lblHome = new voltmx.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "20%",
            "id": "lblHome",
            "isVisible": true,
            "left": "0",
            "skin": "CopysknlblCPBoldDisp",
            "text": "Home",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%"
        }, controller.args[0], "lblHome"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHome"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHome"));
        flxHome.add(imgHome, lblHome);
        var flxAuctions = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxAuctions",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "20%",
            "isModalContainer": false,
            "skin": "CopysknflxForm",
            "top": "0",
            "width": "20%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxAuctions"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxAuctions"), extendConfig({}, controller.args[2], "flxAuctions"));
        flxAuctions.setDefaultUnit(voltmx.flex.DP);
        var imgMegaPhone = new voltmx.ui.Image2(extendConfig({
            "height": "70%",
            "id": "imgMegaPhone",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopyslImage2",
            "src": "megaphone_2.png",
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "imgMegaPhone"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMegaPhone"), extendConfig({}, controller.args[2], "imgMegaPhone"));
        var lblAuctions = new voltmx.ui.Label(extendConfig({
            "bottom": "10dp",
            "centerX": "50%",
            "height": "20%",
            "id": "lblAuctions",
            "isVisible": true,
            "left": "0",
            "skin": "CopysknlblCPBoldCapt1",
            "text": "Auctions",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%"
        }, controller.args[0], "lblAuctions"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAuctions"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAuctions"));
        flxAuctions.add(imgMegaPhone, lblAuctions);
        var flxSearch = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxSearch",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "40%",
            "isModalContainer": false,
            "skin": "CopysknflxForm",
            "top": "0",
            "width": "20%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxSearch"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSearch"), extendConfig({}, controller.args[2], "flxSearch"));
        flxSearch.setDefaultUnit(voltmx.flex.DP);
        var imgSearch = new voltmx.ui.Image2(extendConfig({
            "height": "70%",
            "id": "imgSearch",
            "isVisible": true,
            "left": "0",
            "skin": "CopyCopyslImage2",
            "src": "vector__3__2.png",
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "imgSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearch"), extendConfig({}, controller.args[2], "imgSearch"));
        var lblSearch = new voltmx.ui.Label(extendConfig({
            "bottom": "10%",
            "centerX": "50%",
            "height": "20%",
            "id": "lblSearch",
            "isVisible": true,
            "left": "0",
            "skin": "CopysknlblCPBoldCapt1",
            "text": "Search",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%"
        }, controller.args[0], "lblSearch"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSearch"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSearch"));
        flxSearch.add(imgSearch, lblSearch);
        var flxMyBids = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxMyBids",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "60%",
            "isModalContainer": false,
            "skin": "CopysknflxForm",
            "top": "0",
            "width": "20%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMyBids"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMyBids"), extendConfig({}, controller.args[2], "flxMyBids"));
        flxMyBids.setDefaultUnit(voltmx.flex.DP);
        var imgMyBids = new voltmx.ui.Image2(extendConfig({
            "height": "70%",
            "id": "imgMyBids",
            "isVisible": true,
            "left": "0",
            "skin": "CopyCopyslImage2",
            "src": "vector__4__2.png",
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "imgMyBids"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMyBids"), extendConfig({}, controller.args[2], "imgMyBids"));
        var lblMyBids = new voltmx.ui.Label(extendConfig({
            "bottom": "10%",
            "centerX": "50%",
            "height": "20%",
            "id": "lblMyBids",
            "isVisible": true,
            "left": "0",
            "skin": "CopysknlblCPBoldCapt1",
            "text": "My Bids",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%"
        }, controller.args[0], "lblMyBids"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMyBids"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMyBids"));
        flxMyBids.add(imgMyBids, lblMyBids);
        var flxSellCar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxSellCar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "80%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_c081617ed40d45fb85cf954b3b66da07,
            "skin": "CopysknflxForm",
            "top": "0",
            "width": "20%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxSellCar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSellCar"), extendConfig({}, controller.args[2], "flxSellCar"));
        flxSellCar.setDefaultUnit(voltmx.flex.DP);
        var imgSellCar = new voltmx.ui.Image2(extendConfig({
            "height": "70%",
            "id": "imgSellCar",
            "isVisible": true,
            "left": "0",
            "skin": "CopyCopyslImage2",
            "src": "vehicle_2.png",
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "imgSellCar"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSellCar"), extendConfig({}, controller.args[2], "imgSellCar"));
        var lblSellCar = new voltmx.ui.Label(extendConfig({
            "bottom": "10%",
            "height": "20%",
            "id": "lblSellCar",
            "isVisible": true,
            "left": "0",
            "skin": "CopysknlblCPBoldCapt1",
            "text": "Sell Car",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%"
        }, controller.args[0], "lblSellCar"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSellCar"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSellCar"));
        flxSellCar.add(imgSellCar, lblSellCar);
        Footer2Copy.add(flxHome, flxAuctions, flxSearch, flxMyBids, flxSellCar);
        return Footer2Copy;
    }
})
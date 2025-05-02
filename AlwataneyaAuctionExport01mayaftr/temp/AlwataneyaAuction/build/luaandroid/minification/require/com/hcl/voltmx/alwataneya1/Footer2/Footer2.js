define(function() {
    return function(controller) {
        var Footer2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "clipBounds": false,
            "isMaster": true,
            "height": "12%",
            "id": "Footer2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxFooter",
            "width": "100%",
            "zIndex": 1,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "Footer2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "Footer2"), extendConfig({}, controller.args[2], "Footer2"));
        Footer2.setDefaultUnit(voltmx.flex.DP);
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
            "onClick": controller.AS_FlexContainer_a37c16fa84644dc28f6fcee5b30ca546,
            "skin": "sknflxForm",
            "top": "0",
            "width": "20%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHome"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHome"), extendConfig({}, controller.args[2], "flxHome"));
        flxHome.setDefaultUnit(voltmx.flex.DP);
        var imgHome = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "55%",
            "id": "imgHome",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyslImage",
            "src": "homefooteractive.png",
            "top": "10dp",
            "width": "45%"
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
            "skin": "sknlblCPBoldDisp333333Font200",
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
        var flxHL1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "5dp",
            "id": "flxHL1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 10,
            "isModalContainer": false,
            "skin": "sknFlxOrangePlainDark",
            "top": "2dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHL1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHL1"), extendConfig({}, controller.args[2], "flxHL1"));
        flxHL1.setDefaultUnit(voltmx.flex.DP);
        flxHL1.add();
        flxHome.add(imgHome, lblHome, flxHL1);
        var flxAuctions = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxAuctions",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "20%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_d22c255a1f934e37bbaca766416e2a6d,
            "skin": "sknflxForm",
            "top": "0",
            "width": "20%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxAuctions"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxAuctions"), extendConfig({}, controller.args[2], "flxAuctions"));
        flxAuctions.setDefaultUnit(voltmx.flex.DP);
        var imgMegaPhone = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "55%",
            "id": "imgMegaPhone",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyslImage",
            "src": "auctionsfooter.png",
            "top": "10dp",
            "width": "45%"
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
            "skin": "sknlblCPBoldCapt181818Font100",
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
        var flxHL2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "5dp",
            "id": "flxHL2",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 10,
            "isModalContainer": false,
            "skin": "sknFlxOrangePlainDark",
            "top": "2dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHL2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHL2"), extendConfig({}, controller.args[2], "flxHL2"));
        flxHL2.setDefaultUnit(voltmx.flex.DP);
        flxHL2.add();
        flxAuctions.add(imgMegaPhone, lblAuctions, flxHL2);
        var flxSearch = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxSearch",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "40%",
            "isModalContainer": false,
            "skin": "sknflxForm",
            "top": "0",
            "width": "20%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxSearch"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSearch"), extendConfig({}, controller.args[2], "flxSearch"));
        flxSearch.setDefaultUnit(voltmx.flex.DP);
        var imgSearch = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "55%",
            "id": "imgSearch",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage",
            "src": "ssearchfooter.png",
            "top": "10dp",
            "width": "45%"
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
            "skin": "sknlblCPBoldCapt181818Font100",
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
        var flxHL3 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "5dp",
            "id": "flxHL3",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 10,
            "isModalContainer": false,
            "skin": "sknFlxOrangePlainDark",
            "top": "2dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHL3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHL3"), extendConfig({}, controller.args[2], "flxHL3"));
        flxHL3.setDefaultUnit(voltmx.flex.DP);
        flxHL3.add();
        flxSearch.add(imgSearch, lblSearch, flxHL3);
        var flxMyBids = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxMyBids",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "60%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_b57beac7ca6940c2a9d17543c723053a,
            "skin": "sknflxForm",
            "top": "0",
            "width": "20%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMyBids"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMyBids"), extendConfig({}, controller.args[2], "flxMyBids"));
        flxMyBids.setDefaultUnit(voltmx.flex.DP);
        var imgMyBids = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "55%",
            "id": "imgMyBids",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage",
            "src": "mybidsfooter.png",
            "top": "10dp",
            "width": "45%"
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
            "skin": "sknlblCPBoldCapt181818Font100",
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
        var flxHL4 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "5dp",
            "id": "flxHL4",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 10,
            "isModalContainer": false,
            "skin": "sknFlxOrangePlainDark",
            "top": "2dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHL4"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHL4"), extendConfig({}, controller.args[2], "flxHL4"));
        flxHL4.setDefaultUnit(voltmx.flex.DP);
        flxHL4.add();
        flxMyBids.add(imgMyBids, lblMyBids, flxHL4);
        var flxSellCar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxSellCar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "80%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_a822db0177a2476286ad5fee56aef334,
            "skin": "sknflxForm",
            "top": "0",
            "width": "20%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxSellCar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSellCar"), extendConfig({}, controller.args[2], "flxSellCar"));
        flxSellCar.setDefaultUnit(voltmx.flex.DP);
        var imgSellCar = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "55%",
            "id": "imgSellCar",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage",
            "src": "group__2_.png",
            "top": "10dp",
            "width": "45%"
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
            "skin": "sknlblCPBoldCapt181818Font100",
            "text": "Profile",
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
        var flxHL5 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "5dp",
            "id": "flxHL5",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 10,
            "isModalContainer": false,
            "skin": "sknFlxOrangePlainDark",
            "top": "2dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHL5"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHL5"), extendConfig({}, controller.args[2], "flxHL5"));
        flxHL5.setDefaultUnit(voltmx.flex.DP);
        flxHL5.add();
        var flxProfile = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "45%",
            "clipBounds": true,
            "height": "50%",
            "id": "flxProfile",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0da7339ba1fa24f",
            "top": "0",
            "width": "65%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxProfile"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxProfile"), extendConfig({}, controller.args[2], "flxProfile"));
        flxProfile.setDefaultUnit(voltmx.flex.DP);
        var CopyimgProfile0e0b55f5e422d40 = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "CopyimgProfile0e0b55f5e422d40",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "person.png",
            "top": 0,
            "width": "100%"
        }, controller.args[0], "CopyimgProfile0e0b55f5e422d40"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyimgProfile0e0b55f5e422d40"), extendConfig({}, controller.args[2], "CopyimgProfile0e0b55f5e422d40"));
        flxProfile.add(CopyimgProfile0e0b55f5e422d40);
        flxSellCar.add(imgSellCar, lblSellCar, flxHL5, flxProfile);
        Footer2.add(flxHome, flxAuctions, flxSearch, flxMyBids, flxSellCar);
        return Footer2;
    }
})
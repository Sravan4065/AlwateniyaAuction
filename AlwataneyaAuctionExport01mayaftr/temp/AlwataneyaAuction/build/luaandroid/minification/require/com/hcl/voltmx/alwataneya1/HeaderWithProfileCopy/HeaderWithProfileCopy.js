define(function() {
    return function(controller) {
        var HeaderWithProfileCopy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100dp",
            "id": "HeaderWithProfileCopy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0b50531d3a58344",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "HeaderWithProfileCopy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "HeaderWithProfileCopy"), extendConfig({}, controller.args[2], "HeaderWithProfileCopy"));
        HeaderWithProfileCopy.setDefaultUnit(voltmx.flex.DP);
        var flxHeader = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "60%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0c5122c846fc447",
            "top": "0",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHeader"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(voltmx.flex.DP);
        var flxImgContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxImgContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0d0508f0038ff46",
            "top": "0",
            "width": "15%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxImgContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxImgContainer"), extendConfig({}, controller.args[2], "flxImgContainer"));
        flxImgContainer.setDefaultUnit(voltmx.flex.DP);
        var imgUser = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgUser",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage0e7338b50aa2044",
            "src": "group_37358_1.png",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "imgUser"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgUser"), extendConfig({}, controller.args[2], "imgUser"));
        flxImgContainer.add(imgUser);
        var imgAWA = new voltmx.ui.Image2(extendConfig({
            "centerX": "48%",
            "centerY": "50%",
            "height": "70%",
            "id": "imgAWA",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage0e7338b50aa2044",
            "src": "logo_1_1_2.png",
            "top": "0",
            "width": "30%"
        }, controller.args[0], "imgAWA"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAWA"), extendConfig({}, controller.args[2], "imgAWA"));
        var flxRightHeader = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "centerY": "50%",
            "clipBounds": false,
            "height": "90%",
            "id": "flxRightHeader",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0",
            "skin": "CopysknFlxIconsWishListNotificationsHeader1",
            "width": "29%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxRightHeader"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRightHeader"), extendConfig({}, controller.args[2], "flxRightHeader"));
        flxRightHeader.setDefaultUnit(voltmx.flex.DP);
        var lxWishListContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "90%",
            "id": "lxWishListContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "CopysknFlxWishList1",
            "top": "0",
            "width": "45%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "lxWishListContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "lxWishListContainer"), extendConfig({}, controller.args[2], "lxWishListContainer"));
        lxWishListContainer.setDefaultUnit(voltmx.flex.DP);
        var flxImgWishList = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "55%",
            "height": "70%",
            "id": "flxImgWishList",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage0e7338b50aa2044",
            "src": "vector__2__5.png",
            "top": "0",
            "width": "70%"
        }, controller.args[0], "flxImgWishList"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "flxImgWishList"), extendConfig({}, controller.args[2], "flxImgWishList"));
        var flxWishListCountContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": false,
            "height": "40%",
            "id": "flxWishListCountContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0",
            "skin": "CopysknFlxCustomRoundMaroonCount1",
            "top": "5dp",
            "width": "50%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxWishListCountContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxWishListCountContainer"), extendConfig({}, controller.args[2], "flxWishListCountContainer"));
        flxWishListCountContainer.setDefaultUnit(voltmx.flex.DP);
        var lblCount = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "45%",
            "id": "lblCount",
            "isVisible": true,
            "skin": "CopysknlblCPCaptffffffFont1",
            "text": "62",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCount"));
        flxWishListCountContainer.add(lblCount);
        lxWishListContainer.add(flxImgWishList, flxWishListCountContainer);
        var flxNotificationContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "centerX": "70%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "90%",
            "id": "flxNotificationContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0",
            "skin": "CopysknFlxNotifications1",
            "width": "45%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxNotificationContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxNotificationContainer"), extendConfig({}, controller.args[2], "flxNotificationContainer"));
        flxNotificationContainer.setDefaultUnit(voltmx.flex.DP);
        var imgNotification = new voltmx.ui.Image2(extendConfig({
            "bottom": 0,
            "centerX": "50%",
            "height": "90%",
            "id": "imgNotification",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage0e7338b50aa2044",
            "src": "vector__1__5.png",
            "width": "70%"
        }, controller.args[0], "imgNotification"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgNotification"), extendConfig({}, controller.args[2], "imgNotification"));
        var flxNotificationCountContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "clipBounds": false,
            "height": "40%",
            "id": "flxNotificationCountContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 3,
            "skin": "CopysknFlxCustomRoundMaroonCount1",
            "top": "5dp",
            "width": "50%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxNotificationCountContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxNotificationCountContainer"), extendConfig({}, controller.args[2], "flxNotificationCountContainer"));
        flxNotificationCountContainer.setDefaultUnit(voltmx.flex.DP);
        var CopylblNotificationCount0a538061f678e44 = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "45%",
            "id": "CopylblNotificationCount0a538061f678e44",
            "isVisible": true,
            "skin": "CopysknlblCPCaptffffffFont1",
            "text": "10",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "CopylblNotificationCount0a538061f678e44"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopylblNotificationCount0a538061f678e44"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopylblNotificationCount0a538061f678e44"));
        flxNotificationCountContainer.add(CopylblNotificationCount0a538061f678e44);
        flxNotificationContainer.add(imgNotification, flxNotificationCountContainer);
        flxRightHeader.add(lxWishListContainer, flxNotificationContainer);
        flxHeader.add(flxImgContainer, imgAWA, flxRightHeader);
        HeaderWithProfileCopy.add(flxHeader);
        return HeaderWithProfileCopy;
    }
})
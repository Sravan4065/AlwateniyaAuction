define(function() {
    return function(controller) {
        var Header2Copy1Copy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "12%",
            "id": "Header2Copy1Copy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0ha80230836c64b",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "Header2Copy1Copy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "Header2Copy1Copy"), extendConfig({}, controller.args[2], "Header2Copy1Copy"));
        Header2Copy1Copy.setDefaultUnit(voltmx.flex.DP);
        var flxHeaderContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "70%",
            "id": "flxHeaderContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0ibff1bb1d1be44",
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHeaderContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeaderContainer"), extendConfig({}, controller.args[2], "flxHeaderContainer"));
        flxHeaderContainer.setDefaultUnit(voltmx.flex.DP);
        var flxMenuContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxMenuContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "CopyCopysknProfileContainerRound",
            "top": "0",
            "width": "17%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMenuContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMenuContainer"), extendConfig({}, controller.args[2], "flxMenuContainer"));
        flxMenuContainer.setDefaultUnit(voltmx.flex.DP);
        var imgMenu = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "90%",
            "id": "imgMenu",
            "isVisible": true,
            "left": "0",
            "skin": "CopyCopyslImage4",
            "src": "vector_2_1.png",
            "top": "0",
            "width": "90%"
        }, controller.args[0], "imgMenu"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMenu"), extendConfig({}, controller.args[2], "imgMenu"));
        flxMenuContainer.add(imgMenu);
        var flxLogoContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "80%",
            "id": "flxLogoContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0i9715e74b86947",
            "top": "0",
            "width": "35%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxLogoContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLogoContainer"), extendConfig({}, controller.args[2], "flxLogoContainer"));
        flxLogoContainer.setDefaultUnit(voltmx.flex.DP);
        var imgAWA = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgAWA",
            "isVisible": true,
            "left": "0",
            "skin": "CopyCopyslImage4",
            "src": "logo_1_2_1.png",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "imgAWA"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAWA"), extendConfig({}, controller.args[2], "imgAWA"));
        flxLogoContainer.add(imgAWA);
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
            "skin": "CopyCopyslFbox0e5335e31dbe747",
            "width": "30%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxRightHeader"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRightHeader"), extendConfig({}, controller.args[2], "flxRightHeader"));
        flxRightHeader.setDefaultUnit(voltmx.flex.DP);
        var flxWishListContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "90%",
            "id": "flxWishListContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0d772ac6feb2646",
            "top": "0",
            "width": "45%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxWishListContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxWishListContainer"), extendConfig({}, controller.args[2], "flxWishListContainer"));
        flxWishListContainer.setDefaultUnit(voltmx.flex.DP);
        var imgWishList = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "60%",
            "height": "70%",
            "id": "imgWishList",
            "isVisible": true,
            "left": "0",
            "skin": "CopyCopyslImage4",
            "src": "vector__2__2_1.png",
            "top": "0",
            "width": "70%"
        }, controller.args[0], "imgWishList"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgWishList"), extendConfig({}, controller.args[2], "imgWishList"));
        var flxCountContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": false,
            "height": "40%",
            "id": "flxCountContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0",
            "skin": "CopyCopyslFbox0a0ebcf2504e74c",
            "top": "5dp",
            "width": "50%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxCountContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCountContainer"), extendConfig({}, controller.args[2], "flxCountContainer"));
        flxCountContainer.setDefaultUnit(voltmx.flex.DP);
        var lblCount = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "45%",
            "id": "lblCount",
            "isVisible": true,
            "skin": "sknlblWhiteFont70",
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
        flxCountContainer.add(lblCount);
        flxWishListContainer.add(imgWishList, flxCountContainer);
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
            "skin": "CopyCopyslFbox3",
            "width": "45%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxNotificationContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxNotificationContainer"), extendConfig({}, controller.args[2], "flxNotificationContainer"));
        flxNotificationContainer.setDefaultUnit(voltmx.flex.DP);
        var imgNotification = new voltmx.ui.Image2(extendConfig({
            "bottom": "0",
            "centerX": "50%",
            "height": "90%",
            "id": "imgNotification",
            "isVisible": true,
            "left": "0",
            "skin": "CopyCopyslImage4",
            "src": "vector__1__2_1.png",
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
            "skin": "CopyCopyslFbox0j0d039bbba1a43",
            "top": "5dp",
            "width": "50%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxNotificationCountContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxNotificationCountContainer"), extendConfig({}, controller.args[2], "flxNotificationCountContainer"));
        flxNotificationCountContainer.setDefaultUnit(voltmx.flex.DP);
        var lblNotificationCount = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "45%",
            "id": "lblNotificationCount",
            "isVisible": true,
            "skin": "sknlblWhiteFont70",
            "text": "10",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblNotificationCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNotificationCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNotificationCount"));
        flxNotificationCountContainer.add(lblNotificationCount);
        flxNotificationContainer.add(imgNotification, flxNotificationCountContainer);
        flxRightHeader.add(flxWishListContainer, flxNotificationContainer);
        flxHeaderContainer.add(flxMenuContainer, flxLogoContainer, flxRightHeader);
        Header2Copy1Copy.add(flxHeaderContainer);
        return Header2Copy1Copy;
    }
})
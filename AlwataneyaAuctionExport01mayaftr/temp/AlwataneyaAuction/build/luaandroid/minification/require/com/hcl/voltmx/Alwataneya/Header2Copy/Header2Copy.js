define(function() {
    return function(controller) {
        var Header2Copy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "id": "Header2Copy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknflxHeader",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "Header2Copy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "Header2Copy"), extendConfig({}, controller.args[2], "Header2Copy"));
        Header2Copy.setDefaultUnit(voltmx.flex.DP);
        var flxHead1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "60dp",
            "id": "flxHead1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopysknFlxSubHeader",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHead1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHead1"), extendConfig({}, controller.args[2], "flxHead1"));
        flxHead1.setDefaultUnit(voltmx.flex.DP);
        var flxMenuContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxMenuContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "CopysknProfileContainerRound2",
            "top": "7dp",
            "width": "15%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMenuContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMenuContainer"), extendConfig({}, controller.args[2], "flxMenuContainer"));
        flxMenuContainer.setDefaultUnit(voltmx.flex.DP);
        var CopyimgMenu0de7d746081ee46 = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "90%",
            "id": "CopyimgMenu0de7d746081ee46",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage0bce6b78d7c284f",
            "src": "vector_4.png",
            "top": "0",
            "width": "90%"
        }, controller.args[0], "CopyimgMenu0de7d746081ee46"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyimgMenu0de7d746081ee46"), extendConfig({}, controller.args[2], "CopyimgMenu0de7d746081ee46"));
        flxMenuContainer.add(CopyimgMenu0de7d746081ee46);
        var flxLogoContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "60dp",
            "id": "flxLogoContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyslFbox0a9831affa2094b",
            "top": "0",
            "width": "35%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxLogoContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLogoContainer"), extendConfig({}, controller.args[2], "flxLogoContainer"));
        flxLogoContainer.setDefaultUnit(voltmx.flex.DP);
        var CopyimgAWA0a2583e6eb03b4b = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "CopyimgAWA0a2583e6eb03b4b",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage0bce6b78d7c284f",
            "src": "logo_1_4.png",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "CopyimgAWA0a2583e6eb03b4b"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyimgAWA0a2583e6eb03b4b"), extendConfig({}, controller.args[2], "CopyimgAWA0a2583e6eb03b4b"));
        flxLogoContainer.add(CopyimgAWA0a2583e6eb03b4b);
        var flxRightHeader = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "clipBounds": false,
            "height": "60dp",
            "id": "flxRightHeader",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0",
            "skin": "CopysknFlxIconsWishListNotificationsHeader",
            "width": "30%",
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
            "skin": "CopysknFlxWishList",
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
            "skin": "CopyslImage0bce6b78d7c284f",
            "src": "vector__2__4.png",
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
            "skin": "CopysknFlxCustomRoundMaroonCount",
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
            "skin": "CopysknlblCPCaptffffffFont",
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
            "skin": "CopysknFlxNotifications",
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
            "skin": "CopyslImage0bce6b78d7c284f",
            "src": "vector__1__4.png",
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
            "skin": "CopysknFlxCustomRoundMaroonCount",
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
            "skin": "CopysknlblCPCaptffffffFont",
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
        flxHead1.add(flxMenuContainer, flxLogoContainer, flxRightHeader);
        var flxHeadSearchFilter = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "flxHeadSearchFilter",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": 60,
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHeadSearchFilter"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeadSearchFilter"), extendConfig({}, controller.args[2], "flxHeadSearchFilter"));
        flxHeadSearchFilter.setDefaultUnit(voltmx.flex.DP);
        var flxSearch = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "70%",
            "id": "flxSearch",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0",
            "width": "95%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxSearch"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSearch"), extendConfig({}, controller.args[2], "flxSearch"));
        flxSearch.setDefaultUnit(voltmx.flex.DP);
        var txtSearch = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "CopydefTextBoxFocus2",
            "height": "40dp",
            "id": "txtSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "25dp",
            "placeholder": "Browse for vehicles by lot, brand, Model, and more",
            "secureTextEntry": false,
            "skin": "CopyCopydefTextBoxNormal",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0",
            "width": "70%"
        }, controller.args[0], "txtSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtSearch"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "CopydefTextBoxPlaceholder",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSearch"));
        var imgSearch = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "80%",
            "id": "imgSearch",
            "isVisible": true,
            "left": 7,
            "skin": "CopyslImage0bce6b78d7c284f",
            "src": "component_52_1.png",
            "top": "0",
            "width": "6%"
        }, controller.args[0], "imgSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearch"), extendConfig({}, controller.args[2], "imgSearch"));
        var flxFilter = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "40dp",
            "id": "flxFilter",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "CopysknflxMaroonBackground",
            "top": "0",
            "width": "22%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxFilter"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxFilter"), extendConfig({}, controller.args[2], "flxFilter"));
        flxFilter.setDefaultUnit(voltmx.flex.DP);
        var imgFilter = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgFilter",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage0bce6b78d7c284f",
            "src": "vector__5__1.png",
            "top": "0",
            "width": "50%"
        }, controller.args[0], "imgFilter"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFilter"), extendConfig({}, controller.args[2], "imgFilter"));
        var lblFilter = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblFilter",
            "isVisible": true,
            "right": 10,
            "skin": "CopysknlblCPCaptffffffFont",
            "text": "Filter",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblFilter"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFilter"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFilter"));
        flxFilter.add(imgFilter, lblFilter);
        flxSearch.add(txtSearch, imgSearch, flxFilter);
        flxHeadSearchFilter.add(flxSearch);
        Header2Copy.add(flxHead1, flxHeadSearchFilter);
        return Header2Copy;
    }
})
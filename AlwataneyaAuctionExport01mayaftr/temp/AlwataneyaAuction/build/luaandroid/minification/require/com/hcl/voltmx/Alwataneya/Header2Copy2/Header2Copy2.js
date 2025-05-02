define(function() {
    return function(controller) {
        var Header2Copy2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "Header2Copy2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox5",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "Header2Copy2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "Header2Copy2"), extendConfig({}, controller.args[2], "Header2Copy2"));
        Header2Copy2.setDefaultUnit(voltmx.flex.DP);
        var flxHeaderContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "9%",
            "id": "flxHeaderContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox5",
            "top": "0",
            "width": "100%",
            "zIndex": 2,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHeaderContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeaderContainer"), extendConfig({}, controller.args[2], "flxHeaderContainer"));
        flxHeaderContainer.setDefaultUnit(voltmx.flex.DP);
        var flxMenuContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "73%",
            "id": "flxMenuContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_a5fd681ebc1f45529787db970ba40a59,
            "skin": "CopysknProfileContainerRound1",
            "top": "0",
            "width": "15%",
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
            "skin": "CopyslImage5",
            "src": "person.png",
            "top": "0",
            "width": "90%"
        }, controller.args[0], "imgMenu"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMenu"), extendConfig({}, controller.args[2], "imgMenu"));
        flxMenuContainer.add(imgMenu);
        var flxLogoContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "75%",
            "id": "flxLogoContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyslFbox5",
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
            "skin": "CopyslImage5",
            "src": "logo_1_3.png",
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
            "height": "85%",
            "id": "flxRightHeader",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0",
            "skin": "sknFlxBasic",
            "width": "30%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxRightHeader"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRightHeader"), extendConfig({}, controller.args[2], "flxRightHeader"));
        flxRightHeader.setDefaultUnit(voltmx.flex.DP);
        var flxWishListContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": 0,
            "centerY": "52%",
            "clipBounds": false,
            "height": "90%",
            "id": "flxWishListContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "width": "45%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxWishListContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxWishListContainer"), extendConfig({}, controller.args[2], "flxWishListContainer"));
        flxWishListContainer.setDefaultUnit(voltmx.flex.DP);
        var imgWishList = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70%",
            "id": "imgWishList",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage5",
            "src": "vector__2__3.png",
            "top": "8dp",
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
            "height": "36%",
            "id": "flxCountContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 4,
            "skin": "sknFlxNotificationRound",
            "top": "10%",
            "width": "43%",
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
            "skin": "CopysknlblWhiteFont",
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
            "centerX": "72%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "90%",
            "id": "flxNotificationContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0",
            "width": "44%",
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
            "skin": "CopyslImage5",
            "src": "vector__1__3.png",
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
            "height": "36%",
            "id": "flxNotificationCountContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 4,
            "skin": "sknFlxNotificationRound",
            "top": "10dp",
            "width": "43%",
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
            "skin": "CopysknlblWhiteFont",
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
        var flxMenuBarMain = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxMenuBarMain",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0",
            "width": "94%",
            "zIndex": 4,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMenuBarMain"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMenuBarMain"), extendConfig({}, controller.args[2], "flxMenuBarMain"));
        flxMenuBarMain.setDefaultUnit(voltmx.flex.DP);
        var flxMenuHeader = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "10%",
            "id": "flxMenuHeader",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxMenuHeader",
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMenuHeader"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMenuHeader"), extendConfig({}, controller.args[2], "flxMenuHeader"));
        flxMenuHeader.setDefaultUnit(voltmx.flex.DP);
        var flxProfileMenuBar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "50%",
            "id": "flxProfileMenuBar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "sknFlxWhiteRoundProfile",
            "top": "0",
            "width": "11%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxProfileMenuBar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxProfileMenuBar"), extendConfig({}, controller.args[2], "flxProfileMenuBar"));
        flxProfileMenuBar.setDefaultUnit(voltmx.flex.DP);
        var imgProfileMenuBar = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgProfileMenuBar",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage5",
            "src": "imagedrag.png",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "imgProfileMenuBar"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgProfileMenuBar"), extendConfig({}, controller.args[2], "imgProfileMenuBar"));
        flxProfileMenuBar.add(imgProfileMenuBar);
        var flxUserNameandtype = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxUserNameandtype",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "20%",
            "isModalContainer": false,
            "skin": "sknFlxMenuHeader",
            "top": "0",
            "width": "60%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxUserNameandtype"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxUserNameandtype"), extendConfig({}, controller.args[2], "flxUserNameandtype"));
        flxUserNameandtype.setDefaultUnit(voltmx.flex.DP);
        var lblUserName = new voltmx.ui.Label(extendConfig({
            "height": "40%",
            "id": "lblUserName",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblCronosProWhite20px",
            "text": "Mark Stevly",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblUserName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUserName"));
        var lblUserType = new voltmx.ui.Label(extendConfig({
            "id": "lblUserType",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblCronosProWhite12px",
            "text": "Admin",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblUserType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserType"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUserType"));
        flxUserNameandtype.add(lblUserName, lblUserType);
        var flxRemove = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxRemove",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "82%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_afed16d9f7cd4c69ba588388d142a168,
            "skin": "sknFlxMenuHeader",
            "top": "0%",
            "width": "17%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxRemove"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRemove"), extendConfig({}, controller.args[2], "flxRemove"));
        flxRemove.setDefaultUnit(voltmx.flex.DP);
        var RemoveItem = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "RemoveItem",
            "isVisible": true,
            "skin": "sknLblRemoveItem",
            "text": "",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "RemoveItem"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "RemoveItem"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "RemoveItem"));
        flxRemove.add(RemoveItem);
        flxMenuHeader.add(flxProfileMenuBar, flxUserNameandtype, flxRemove);
        var flxScrollMenuBody = new voltmx.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "80%",
            "horizontalScrollIndicator": true,
            "id": "flxScrollMenuBody",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "pagingEnabled": false,
            "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
            "skin": "CopyslFSbox0f26ef081503042",
            "top": "10%",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxScrollMenuBody"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxScrollMenuBody"), extendConfig({}, controller.args[2], "flxScrollMenuBody"));
        flxScrollMenuBody.setDefaultUnit(voltmx.flex.DP);
        var flxMenuContent = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMenuContent",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMenuContent"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMenuContent"), extendConfig({}, controller.args[2], "flxMenuContent"));
        flxMenuContent.setDefaultUnit(voltmx.flex.DP);
        var flxMenuContent1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxMenuContent1",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMenuContent1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMenuContent1"), extendConfig({}, controller.args[2], "flxMenuContent1"));
        flxMenuContent1.setDefaultUnit(voltmx.flex.DP);
        var flxMyAccount = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxMyAccount",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMyAccount"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMyAccount"), extendConfig({}, controller.args[2], "flxMyAccount"));
        flxMyAccount.setDefaultUnit(voltmx.flex.DP);
        var imgProfileIcon = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgProfileIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage5",
            "src": "profileicon.png",
            "top": "6dp",
            "width": "30dp"
        }, controller.args[0], "imgProfileIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgProfileIcon"), extendConfig({}, controller.args[2], "imgProfileIcon"));
        var lblMyAccount = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblMyAccount",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlacl20px",
            "text": "My Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblMyAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMyAccount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMyAccount"));
        var flxImgArrowToggle1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30dp",
            "id": "flxImgArrowToggle1",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_f19131c95c87465bb5186476e739b341,
            "skin": "CopyslFbox5",
            "top": "8dp",
            "width": "30dp",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxImgArrowToggle1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxImgArrowToggle1"), extendConfig({}, controller.args[2], "flxImgArrowToggle1"));
        flxImgArrowToggle1.setDefaultUnit(voltmx.flex.DP);
        var imgArrowToggle = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgArrowToggle",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslImage5",
            "src": "downarrow.png",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "imgArrowToggle"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrowToggle"), extendConfig({}, controller.args[2], "imgArrowToggle"));
        flxImgArrowToggle1.add(imgArrowToggle);
        flxMyAccount.add(imgProfileIcon, lblMyAccount, flxImgArrowToggle1);
        var flxOpenMyAccount = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "340dp",
            "id": "flxOpenMyAccount",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxOpenMyAccount"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOpenMyAccount"), extendConfig({}, controller.args[2], "flxOpenMyAccount"));
        flxOpenMyAccount.setDefaultUnit(voltmx.flex.DP);
        var flxLine1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": false,
            "height": "290dp",
            "id": "flxLine1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10%",
            "isModalContainer": false,
            "skin": "sknFlxOrangeBold",
            "top": "15dp",
            "width": "1%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxLine1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLine1"), extendConfig({}, controller.args[2], "flxLine1"));
        flxLine1.setDefaultUnit(voltmx.flex.DP);
        flxLine1.add();
        var flxOpenMyAccountContent = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": false,
            "id": "flxOpenMyAccountContent",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "15%",
            "isModalContainer": false,
            "skin": "CopyslFbox5",
            "top": "10dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxOpenMyAccountContent"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOpenMyAccountContent"), extendConfig({}, controller.args[2], "flxOpenMyAccountContent"));
        flxOpenMyAccountContent.setDefaultUnit(voltmx.flex.DP);
        var flxCompleteRegistration = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxCompleteRegistration",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxOrangeMenuItems",
            "top": "0dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxCompleteRegistration"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCompleteRegistration"), extendConfig({}, controller.args[2], "flxCompleteRegistration"));
        flxCompleteRegistration.setDefaultUnit(voltmx.flex.DP);
        var lblCompleteRegistration = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblCompleteRegistration",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProLghtOrangeNormal",
            "text": "Complete Registration",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblCompleteRegistration"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCompleteRegistration"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCompleteRegistration"));
        flxCompleteRegistration.add(lblCompleteRegistration);
        var flxMyDocuments = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxMyDocuments",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMyDocuments"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMyDocuments"), extendConfig({}, controller.args[2], "flxMyDocuments"));
        flxMyDocuments.setDefaultUnit(voltmx.flex.DP);
        var lblMyDocuments = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblMyDocuments",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "My Documents",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblMyDocuments"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMyDocuments"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMyDocuments"));
        flxMyDocuments.add(lblMyDocuments);
        var flxWatchList = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxWatchList",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxWatchList"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxWatchList"), extendConfig({}, controller.args[2], "flxWatchList"));
        flxWatchList.setDefaultUnit(voltmx.flex.DP);
        var lblWatchList = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblWatchList",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Watchlist",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblWatchList"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWatchList"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblWatchList"));
        flxWatchList.add(lblWatchList);
        var flxSavedSearches = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxSavedSearches",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxSavedSearches"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSavedSearches"), extendConfig({}, controller.args[2], "flxSavedSearches"));
        flxSavedSearches.setDefaultUnit(voltmx.flex.DP);
        var lblSavedSearches = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSavedSearches",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Saved Searches",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblSavedSearches"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSavedSearches"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSavedSearches"));
        flxSavedSearches.add(lblSavedSearches);
        var flxPayments = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxPayments",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxPayments"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxPayments"), extendConfig({}, controller.args[2], "flxPayments"));
        flxPayments.setDefaultUnit(voltmx.flex.DP);
        var lblPayments = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblPayments",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Payments",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblPayments"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPayments"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPayments"));
        flxPayments.add(lblPayments);
        var flxPaymentHistory = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxPaymentHistory",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxPaymentHistory"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxPaymentHistory"), extendConfig({}, controller.args[2], "flxPaymentHistory"));
        flxPaymentHistory.setDefaultUnit(voltmx.flex.DP);
        var lblPaymentHistory = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblPaymentHistory",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Payment History",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblPaymentHistory"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPaymentHistory"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPaymentHistory"));
        flxPaymentHistory.add(lblPaymentHistory);
        var flxDeposits = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxDeposits",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxDeposits"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxDeposits"), extendConfig({}, controller.args[2], "flxDeposits"));
        flxDeposits.setDefaultUnit(voltmx.flex.DP);
        var lblDeposits = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDeposits",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Deposits",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblDeposits"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDeposits"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDeposits"));
        flxDeposits.add(lblDeposits);
        flxOpenMyAccountContent.add(flxCompleteRegistration, flxMyDocuments, flxWatchList, flxSavedSearches, flxPayments, flxPaymentHistory, flxDeposits);
        flxOpenMyAccount.add(flxLine1, flxOpenMyAccountContent);
        var flxBidStatus = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxBidStatus",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxBidStatus"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxBidStatus"), extendConfig({}, controller.args[2], "flxBidStatus"));
        flxBidStatus.setDefaultUnit(voltmx.flex.DP);
        var imgBidStatusIcon = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgBidStatusIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage5",
            "src": "bidicon.png",
            "top": "6dp",
            "width": "30dp"
        }, controller.args[0], "imgBidStatusIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBidStatusIcon"), extendConfig({}, controller.args[2], "imgBidStatusIcon"));
        var lblBidStatus = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblBidStatus",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlacl20px",
            "text": "Bid Status",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblBidStatus"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBidStatus"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblBidStatus"));
        var flxImgArrowToggle2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30dp",
            "id": "flxImgArrowToggle2",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_b37d95cd3a1b460da52b57211e0124c3,
            "skin": "CopyslFbox5",
            "top": "8dp",
            "width": "30dp",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxImgArrowToggle2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxImgArrowToggle2"), extendConfig({}, controller.args[2], "flxImgArrowToggle2"));
        flxImgArrowToggle2.setDefaultUnit(voltmx.flex.DP);
        var imgArrowToggle2 = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgArrowToggle2",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslImage5",
            "src": "downarrow.png",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "imgArrowToggle2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrowToggle2"), extendConfig({}, controller.args[2], "imgArrowToggle2"));
        flxImgArrowToggle2.add(imgArrowToggle2);
        flxBidStatus.add(imgBidStatusIcon, lblBidStatus, flxImgArrowToggle2);
        var flxOpenBidStatus = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "190dp",
            "id": "flxOpenBidStatus",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxOpenBidStatus"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOpenBidStatus"), extendConfig({}, controller.args[2], "flxOpenBidStatus"));
        flxOpenBidStatus.setDefaultUnit(voltmx.flex.DP);
        var flxLine2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": false,
            "height": "170dp",
            "id": "flxLine2",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10%",
            "isModalContainer": false,
            "skin": "sknFlxOrangeBold",
            "top": "15dp",
            "width": "1%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxLine2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLine2"), extendConfig({}, controller.args[2], "flxLine2"));
        flxLine2.setDefaultUnit(voltmx.flex.DP);
        flxLine2.add();
        var flxOpenBidStatusContent = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": false,
            "id": "flxOpenBidStatusContent",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "15%",
            "isModalContainer": false,
            "skin": "CopyslFbox5",
            "top": "10dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxOpenBidStatusContent"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOpenBidStatusContent"), extendConfig({}, controller.args[2], "flxOpenBidStatusContent"));
        flxOpenBidStatusContent.setDefaultUnit(voltmx.flex.DP);
        var flxMyBids = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxMyBids",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxOrangeMenuItems",
            "top": "0dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMyBids"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMyBids"), extendConfig({}, controller.args[2], "flxMyBids"));
        flxMyBids.setDefaultUnit(voltmx.flex.DP);
        var lblMyBids = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblMyBids",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProLghtOrangeNormal",
            "text": "My Bids",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblMyBids"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMyBids"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMyBids"));
        flxMyBids.add(lblMyBids);
        var flxApprovedVehicles = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxApprovedVehicles",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxApprovedVehicles"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxApprovedVehicles"), extendConfig({}, controller.args[2], "flxApprovedVehicles"));
        flxApprovedVehicles.setDefaultUnit(voltmx.flex.DP);
        var lblApprovedVehicles = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblApprovedVehicles",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Approved Vehicles",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblApprovedVehicles"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblApprovedVehicles"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblApprovedVehicles"));
        flxApprovedVehicles.add(lblApprovedVehicles);
        var flxRejectedVehicles = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxRejectedVehicles",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxRejectedVehicles"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRejectedVehicles"), extendConfig({}, controller.args[2], "flxRejectedVehicles"));
        flxRejectedVehicles.setDefaultUnit(voltmx.flex.DP);
        var lblRejectedVehicles = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblRejectedVehicles",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Rejected Vehicles",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblRejectedVehicles"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRejectedVehicles"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRejectedVehicles"));
        flxRejectedVehicles.add(lblRejectedVehicles);
        var flxPendingApprovals = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxPendingApprovals",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxPendingApprovals"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxPendingApprovals"), extendConfig({}, controller.args[2], "flxPendingApprovals"));
        flxPendingApprovals.setDefaultUnit(voltmx.flex.DP);
        var lblPendingApprovals = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblPendingApprovals",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Pending Vehicles",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblPendingApprovals"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPendingApprovals"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPendingApprovals"));
        flxPendingApprovals.add(lblPendingApprovals);
        flxOpenBidStatusContent.add(flxMyBids, flxApprovedVehicles, flxRejectedVehicles, flxPendingApprovals);
        flxOpenBidStatus.add(flxLine2, flxOpenBidStatusContent);
        var flxAuctions = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxAuctions",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxAuctions"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxAuctions"), extendConfig({}, controller.args[2], "flxAuctions"));
        flxAuctions.setDefaultUnit(voltmx.flex.DP);
        var imgAuctionIcon = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgAuctionIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage5",
            "src": "profileicon.png",
            "top": "6dp",
            "width": "30dp"
        }, controller.args[0], "imgAuctionIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAuctionIcon"), extendConfig({}, controller.args[2], "imgAuctionIcon"));
        var lblAuctions = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAuctions",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlacl20px",
            "text": "Auctions",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblAuctions"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAuctions"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAuctions"));
        var flxImgArrowToggle3 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30dp",
            "id": "flxImgArrowToggle3",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_eb476b78f8f147afa1a80349deec0412,
            "skin": "CopyslFbox5",
            "top": "8dp",
            "width": "30dp",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxImgArrowToggle3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxImgArrowToggle3"), extendConfig({}, controller.args[2], "flxImgArrowToggle3"));
        flxImgArrowToggle3.setDefaultUnit(voltmx.flex.DP);
        var imgArrowToggle3 = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgArrowToggle3",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslImage5",
            "src": "downarrow.png",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "imgArrowToggle3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrowToggle3"), extendConfig({}, controller.args[2], "imgArrowToggle3"));
        flxImgArrowToggle3.add(imgArrowToggle3);
        flxAuctions.add(imgAuctionIcon, lblAuctions, flxImgArrowToggle3);
        var flxOpenAuctions = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100dp",
            "id": "flxOpenAuctions",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxOpenAuctions"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOpenAuctions"), extendConfig({}, controller.args[2], "flxOpenAuctions"));
        flxOpenAuctions.setDefaultUnit(voltmx.flex.DP);
        var flxLine3 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": false,
            "height": "80dp",
            "id": "flxLine3",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10%",
            "isModalContainer": false,
            "skin": "sknFlxOrangeBold",
            "top": "15dp",
            "width": "1%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxLine3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLine3"), extendConfig({}, controller.args[2], "flxLine3"));
        flxLine3.setDefaultUnit(voltmx.flex.DP);
        flxLine3.add();
        var flxOpenAuctionsContent = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": false,
            "id": "flxOpenAuctionsContent",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "15%",
            "isModalContainer": false,
            "skin": "CopyslFbox5",
            "top": "10dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxOpenAuctionsContent"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOpenAuctionsContent"), extendConfig({}, controller.args[2], "flxOpenAuctionsContent"));
        flxOpenAuctionsContent.setDefaultUnit(voltmx.flex.DP);
        var flxTodaysAuction = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxTodaysAuction",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxOrangeMenuItems",
            "top": "0dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxTodaysAuction"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxTodaysAuction"), extendConfig({}, controller.args[2], "flxTodaysAuction"));
        flxTodaysAuction.setDefaultUnit(voltmx.flex.DP);
        var lblTodaysAuction = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTodaysAuction",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProLghtOrangeNormal",
            "text": "Today's Auction",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblTodaysAuction"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTodaysAuction"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTodaysAuction"));
        flxTodaysAuction.add(lblTodaysAuction);
        var flxAuctionCalendar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxAuctionCalendar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxAuctionCalendar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxAuctionCalendar"), extendConfig({}, controller.args[2], "flxAuctionCalendar"));
        flxAuctionCalendar.setDefaultUnit(voltmx.flex.DP);
        var lblAuctionCalendar = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAuctionCalendar",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Auction Calendar",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblAuctionCalendar"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAuctionCalendar"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAuctionCalendar"));
        flxAuctionCalendar.add(lblAuctionCalendar);
        flxOpenAuctionsContent.add(flxTodaysAuction, flxAuctionCalendar);
        flxOpenAuctions.add(flxLine3, flxOpenAuctionsContent);
        var flxHelp = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxHelp",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHelp"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHelp"), extendConfig({}, controller.args[2], "flxHelp"));
        flxHelp.setDefaultUnit(voltmx.flex.DP);
        var imgHelpIcon = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgHelpIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage5",
            "src": "profileicon.png",
            "top": "6dp",
            "width": "30dp"
        }, controller.args[0], "imgHelpIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgHelpIcon"), extendConfig({}, controller.args[2], "imgHelpIcon"));
        var lblHelp = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblHelp",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlacl20px",
            "text": "Help",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblHelp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHelp"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHelp"));
        var flxImgArrowToggle4 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30dp",
            "id": "flxImgArrowToggle4",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_ie6a222af7584d7b9179e352c507dff9,
            "skin": "CopyslFbox5",
            "top": "8dp",
            "width": "30dp",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxImgArrowToggle4"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxImgArrowToggle4"), extendConfig({}, controller.args[2], "flxImgArrowToggle4"));
        flxImgArrowToggle4.setDefaultUnit(voltmx.flex.DP);
        var imgArrowToggle4 = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgArrowToggle4",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslImage5",
            "src": "downarrow.png",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "imgArrowToggle4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrowToggle4"), extendConfig({}, controller.args[2], "imgArrowToggle4"));
        flxImgArrowToggle4.add(imgArrowToggle4);
        flxHelp.add(imgHelpIcon, lblHelp, flxImgArrowToggle4);
        var flxOpenHelp = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "340dp",
            "id": "flxOpenHelp",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxOpenHelp"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOpenHelp"), extendConfig({}, controller.args[2], "flxOpenHelp"));
        flxOpenHelp.setDefaultUnit(voltmx.flex.DP);
        var flxLine4 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": false,
            "height": "290dp",
            "id": "flxLine4",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10%",
            "isModalContainer": false,
            "skin": "sknFlxOrangeBold",
            "top": "15dp",
            "width": "1%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxLine4"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLine4"), extendConfig({}, controller.args[2], "flxLine4"));
        flxLine4.setDefaultUnit(voltmx.flex.DP);
        flxLine4.add();
        var flxOpenHelpContent = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": false,
            "id": "flxOpenHelpContent",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "15%",
            "isModalContainer": false,
            "skin": "CopyslFbox5",
            "top": "10dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxOpenHelpContent"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOpenHelpContent"), extendConfig({}, controller.args[2], "flxOpenHelpContent"));
        flxOpenHelpContent.setDefaultUnit(voltmx.flex.DP);
        var flxFindBranches = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxFindBranches",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxOrangeMenuItems",
            "top": "0dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxFindBranches"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxFindBranches"), extendConfig({}, controller.args[2], "flxFindBranches"));
        flxFindBranches.setDefaultUnit(voltmx.flex.DP);
        var lblFindBranches = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblFindBranches",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProLghtOrangeNormal",
            "text": "Find Branches",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblFindBranches"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFindBranches"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFindBranches"));
        flxFindBranches.add(lblFindBranches);
        var flxHelpCenter = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxHelpCenter",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHelpCenter"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHelpCenter"), extendConfig({}, controller.args[2], "flxHelpCenter"));
        flxHelpCenter.setDefaultUnit(voltmx.flex.DP);
        var lblHelpCenter = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblHelpCenter",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Help Center",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblHelpCenter"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHelpCenter"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHelpCenter"));
        flxHelpCenter.add(lblHelpCenter);
        var flxSellYourCar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxSellYourCar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxSellYourCar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSellYourCar"), extendConfig({}, controller.args[2], "flxSellYourCar"));
        flxSellYourCar.setDefaultUnit(voltmx.flex.DP);
        var lblSellYourCar = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSellYourCar",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Sell Your Car",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblSellYourCar"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSellYourCar"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSellYourCar"));
        flxSellYourCar.add(lblSellYourCar);
        var flxTutorials = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxTutorials",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxTutorials"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxTutorials"), extendConfig({}, controller.args[2], "flxTutorials"));
        flxTutorials.setDefaultUnit(voltmx.flex.DP);
        var lblTutorials = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTutorials",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Tutorials",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblTutorials"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTutorials"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTutorials"));
        flxTutorials.add(lblTutorials);
        var flxAboutUs = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxAboutUs",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxAboutUs"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxAboutUs"), extendConfig({}, controller.args[2], "flxAboutUs"));
        flxAboutUs.setDefaultUnit(voltmx.flex.DP);
        var lblAboutUs = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAboutUs",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "About Us",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblAboutUs"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAboutUs"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAboutUs"));
        flxAboutUs.add(lblAboutUs);
        var flxContactUs = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxContactUs",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxContactUs"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxContactUs"), extendConfig({}, controller.args[2], "flxContactUs"));
        flxContactUs.setDefaultUnit(voltmx.flex.DP);
        var lblContactUs = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblContactUs",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Contact Us",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblContactUs"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContactUs"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblContactUs"));
        flxContactUs.add(lblContactUs);
        var flxChatAndWtspSupport = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxChatAndWtspSupport",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxChatAndWtspSupport"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxChatAndWtspSupport"), extendConfig({}, controller.args[2], "flxChatAndWtspSupport"));
        flxChatAndWtspSupport.setDefaultUnit(voltmx.flex.DP);
        var lblChatAndWtspSupport = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblChatAndWtspSupport",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Chat & WhatsApp Support",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblChatAndWtspSupport"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblChatAndWtspSupport"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblChatAndWtspSupport"));
        flxChatAndWtspSupport.add(lblChatAndWtspSupport);
        flxOpenHelpContent.add(flxFindBranches, flxHelpCenter, flxSellYourCar, flxTutorials, flxAboutUs, flxContactUs, flxChatAndWtspSupport);
        flxOpenHelp.add(flxLine4, flxOpenHelpContent);
        var flxAppSettings = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxAppSettings",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxAppSettings"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxAppSettings"), extendConfig({}, controller.args[2], "flxAppSettings"));
        flxAppSettings.setDefaultUnit(voltmx.flex.DP);
        var imgAppSettingsIcon = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgAppSettingsIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage5",
            "src": "profileicon.png",
            "top": "6dp",
            "width": "30dp"
        }, controller.args[0], "imgAppSettingsIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAppSettingsIcon"), extendConfig({}, controller.args[2], "imgAppSettingsIcon"));
        var lblAppSettings = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAppSettings",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlacl20px",
            "text": "App Settings",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblAppSettings"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAppSettings"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAppSettings"));
        var flxImgArrowToggle5 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30dp",
            "id": "flxImgArrowToggle5",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_bd47f76d2bb24b4cae1c5aaea00c1413,
            "skin": "CopyslFbox5",
            "top": "8dp",
            "width": "30dp",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxImgArrowToggle5"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxImgArrowToggle5"), extendConfig({}, controller.args[2], "flxImgArrowToggle5"));
        flxImgArrowToggle5.setDefaultUnit(voltmx.flex.DP);
        var imgArrowToggle5 = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgArrowToggle5",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslImage5",
            "src": "downarrow.png",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "imgArrowToggle5"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrowToggle5"), extendConfig({}, controller.args[2], "imgArrowToggle5"));
        flxImgArrowToggle5.add(imgArrowToggle5);
        flxAppSettings.add(imgAppSettingsIcon, lblAppSettings, flxImgArrowToggle5);
        var flxOpenAppSettings = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "150dp",
            "id": "flxOpenAppSettings",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxOpenAppSettings"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOpenAppSettings"), extendConfig({}, controller.args[2], "flxOpenAppSettings"));
        flxOpenAppSettings.setDefaultUnit(voltmx.flex.DP);
        var flxLine6 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": false,
            "height": "110dp",
            "id": "flxLine6",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10%",
            "isModalContainer": false,
            "skin": "sknFlxOrangeBold",
            "top": "15dp",
            "width": "1%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxLine6"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLine6"), extendConfig({}, controller.args[2], "flxLine6"));
        flxLine6.setDefaultUnit(voltmx.flex.DP);
        flxLine6.add();
        var flxOpenAppSettingsContent = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": false,
            "id": "flxOpenAppSettingsContent",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "15%",
            "isModalContainer": false,
            "skin": "CopyslFbox5",
            "top": "10dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxOpenAppSettingsContent"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOpenAppSettingsContent"), extendConfig({}, controller.args[2], "flxOpenAppSettingsContent"));
        flxOpenAppSettingsContent.setDefaultUnit(voltmx.flex.DP);
        var flxNotifications = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxNotifications",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxOrangeMenuItems",
            "top": "0dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxNotifications"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxNotifications"), extendConfig({}, controller.args[2], "flxNotifications"));
        flxNotifications.setDefaultUnit(voltmx.flex.DP);
        var lblNotifications = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblNotifications",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProLghtOrangeNormal",
            "text": "Notifications",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblNotifications"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNotifications"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNotifications"));
        flxNotifications.add(lblNotifications);
        var flxTAndC = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxTAndC",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxTAndC"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxTAndC"), extendConfig({}, controller.args[2], "flxTAndC"));
        flxTAndC.setDefaultUnit(voltmx.flex.DP);
        var lblTAndC = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTAndC",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "Terms & Conditions",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblTAndC"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTAndC"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTAndC"));
        flxTAndC.add(lblTAndC);
        var flxGeneralSettings = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxGeneralSettings",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "1dp",
            "width": "85%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxGeneralSettings"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxGeneralSettings"), extendConfig({}, controller.args[2], "flxGeneralSettings"));
        flxGeneralSettings.setDefaultUnit(voltmx.flex.DP);
        var lblGeneralSettings = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblGeneralSettings",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblCronosProDarkOrangeNormal",
            "text": "General Settings",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblGeneralSettings"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblGeneralSettings"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblGeneralSettings"));
        flxGeneralSettings.add(lblGeneralSettings);
        flxOpenAppSettingsContent.add(flxNotifications, flxTAndC, flxGeneralSettings);
        flxOpenAppSettings.add(flxLine6, flxOpenAppSettingsContent);
        flxMenuContent1.add(flxMyAccount, flxOpenMyAccount, flxBidStatus, flxOpenBidStatus, flxAuctions, flxOpenAuctions, flxHelp, flxOpenHelp, flxAppSettings, flxOpenAppSettings);
        var flxMenuContent2 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxMenuContent2",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "15dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMenuContent2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMenuContent2"), extendConfig({}, controller.args[2], "flxMenuContent2"));
        flxMenuContent2.setDefaultUnit(voltmx.flex.DP);
        var flxHeadingAdditionalFeatures = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxHeadingAdditionalFeatures",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxHeadingAdditionalFeatures"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeadingAdditionalFeatures"), extendConfig({}, controller.args[2], "flxHeadingAdditionalFeatures"));
        flxHeadingAdditionalFeatures.setDefaultUnit(voltmx.flex.DP);
        var lblAdditionalFeatures = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAdditionalFeatures",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProRed22px",
            "text": "Additional Features",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblAdditionalFeatures"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAdditionalFeatures"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAdditionalFeatures"));
        flxHeadingAdditionalFeatures.add(lblAdditionalFeatures);
        var flxLanguageToggle = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxLanguageToggle",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxLanguageToggle"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLanguageToggle"), extendConfig({}, controller.args[2], "flxLanguageToggle"));
        flxLanguageToggle.setDefaultUnit(voltmx.flex.DP);
        var imgLanguageToggleIcon = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgLanguageToggleIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage5",
            "src": "profileicon.png",
            "top": "6dp",
            "width": "30dp"
        }, controller.args[0], "imgLanguageToggleIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLanguageToggleIcon"), extendConfig({}, controller.args[2], "imgLanguageToggleIcon"));
        var lblLanguageToggle = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblLanguageToggle",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlacl20px",
            "text": "Language Toggle",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblLanguageToggle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLanguageToggle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLanguageToggle"));
        var imgDarkDownArrow = new voltmx.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgDarkDownArrow",
            "isVisible": true,
            "left": "4%",
            "skin": "CopyslImage5",
            "src": "downarrow.png",
            "top": "8dp",
            "width": "30dp"
        }, controller.args[0], "imgDarkDownArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDarkDownArrow"), extendConfig({}, controller.args[2], "imgDarkDownArrow"));
        flxLanguageToggle.add(imgLanguageToggleIcon, lblLanguageToggle, imgDarkDownArrow);
        var flxSettings = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxSettings",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxSettings"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSettings"), extendConfig({}, controller.args[2], "flxSettings"));
        flxSettings.setDefaultUnit(voltmx.flex.DP);
        var imgSettingsIcon = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgSettingsIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage5",
            "src": "profileicon.png",
            "top": "6dp",
            "width": "30dp"
        }, controller.args[0], "imgSettingsIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSettingsIcon"), extendConfig({}, controller.args[2], "imgSettingsIcon"));
        var lblSettings = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSettings",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlacl20px",
            "text": "Settings",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblSettings"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSettings"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSettings"));
        flxSettings.add(imgSettingsIcon, lblSettings);
        var flxDarkMode = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxDarkMode",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxDarkMode"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxDarkMode"), extendConfig({}, controller.args[2], "flxDarkMode"));
        flxDarkMode.setDefaultUnit(voltmx.flex.DP);
        var imgDarkModeIcon = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgDarkModeIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage5",
            "src": "profileicon.png",
            "top": "6dp",
            "width": "30dp"
        }, controller.args[0], "imgDarkModeIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDarkModeIcon"), extendConfig({}, controller.args[2], "imgDarkModeIcon"));
        var lblDarkMode = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDarkMode",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlacl20px",
            "text": "Dark Mode",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblDarkMode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDarkMode"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDarkMode"));
        flxDarkMode.add(imgDarkModeIcon, lblDarkMode);
        var flxShareApp = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxShareApp",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxShareApp"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxShareApp"), extendConfig({}, controller.args[2], "flxShareApp"));
        flxShareApp.setDefaultUnit(voltmx.flex.DP);
        var imgShareIcon = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgShareIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage5",
            "src": "profileicon.png",
            "top": "6dp",
            "width": "30dp"
        }, controller.args[0], "imgShareIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgShareIcon"), extendConfig({}, controller.args[2], "imgShareIcon"));
        var lblShareApp = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblShareApp",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlacl20px",
            "text": "Share App",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblShareApp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblShareApp"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblShareApp"));
        flxShareApp.add(imgShareIcon, lblShareApp);
        var flxContact = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxContact",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_a5e8b54a036741cd901d69a79cdfb2f1,
            "skin": "sknFlxBasic",
            "top": "15dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxContact"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxContact"), extendConfig({}, controller.args[2], "flxContact"));
        flxContact.setDefaultUnit(voltmx.flex.DP);
        var imgContactUsIcon = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgContactUsIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage5",
            "src": "profileicon.png",
            "top": "6dp",
            "width": "30dp"
        }, controller.args[0], "imgContactUsIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgContactUsIcon"), extendConfig({}, controller.args[2], "imgContactUsIcon"));
        var lblContact = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblContact",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlacl20px",
            "text": "Contact Us",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblContact"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContact"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblContact"));
        flxContact.add(imgContactUsIcon, lblContact);
        var flxFeedBack = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxFeedBack",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxFeedBack"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxFeedBack"), extendConfig({}, controller.args[2], "flxFeedBack"));
        flxFeedBack.setDefaultUnit(voltmx.flex.DP);
        var imgFeedBackIcon = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgFeedBackIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage5",
            "src": "profileicon.png",
            "top": "6dp",
            "width": "30dp"
        }, controller.args[0], "imgFeedBackIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFeedBackIcon"), extendConfig({}, controller.args[2], "imgFeedBackIcon"));
        var lblFeedback = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblFeedback",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlacl20px",
            "text": "Feedback",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblFeedback"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFeedback"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFeedback"));
        flxFeedBack.add(imgFeedBackIcon, lblFeedback);
        var flxLogout = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxLogout",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxLogout"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLogout"), extendConfig({}, controller.args[2], "flxLogout"));
        flxLogout.setDefaultUnit(voltmx.flex.DP);
        var imgLogoutIcon = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgLogoutIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage5",
            "src": "profileicon.png",
            "top": "6dp",
            "width": "30dp"
        }, controller.args[0], "imgLogoutIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogoutIcon"), extendConfig({}, controller.args[2], "imgLogoutIcon"));
        var lblLogout = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblLogout",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblCronosProBlacl20px",
            "text": "Logout",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%"
        }, controller.args[0], "lblLogout"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLogout"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLogout"));
        flxLogout.add(imgLogoutIcon, lblLogout);
        flxMenuContent2.add(flxHeadingAdditionalFeatures, flxLanguageToggle, flxSettings, flxDarkMode, flxShareApp, flxContact, flxFeedBack, flxLogout);
        flxMenuContent.add(flxMenuContent1, flxMenuContent2);
        flxScrollMenuBody.add(flxMenuContent);
        var flxMenuFooter = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "10%",
            "id": "flxMenuFooter",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxMenuHeader",
            "top": "90%",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMenuFooter"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMenuFooter"), extendConfig({}, controller.args[2], "flxMenuFooter"));
        flxMenuFooter.setDefaultUnit(voltmx.flex.DP);
        var imgMenuFooterIcon = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "70%",
            "id": "imgMenuFooterIcon",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage5",
            "src": "imgfootericon.png",
            "top": "0dp",
            "width": "80%"
        }, controller.args[0], "imgMenuFooterIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMenuFooterIcon"), extendConfig({}, controller.args[2], "imgMenuFooterIcon"));
        flxMenuFooter.add(imgMenuFooterIcon);
        var flxOpacity = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "360dp",
            "id": "flxOpacity",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxGreyWithOpacity",
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxOpacity"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOpacity"), extendConfig({}, controller.args[2], "flxOpacity"));
        flxOpacity.setDefaultUnit(voltmx.flex.DP);
        flxOpacity.add();
        flxMenuBarMain.add(flxMenuHeader, flxScrollMenuBody, flxMenuFooter, flxOpacity);
        var flxContactPopup = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "clipBounds": false,
            "id": "flxContactPopup",
            "isVisible": false,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "width": "100%",
            "zIndex": 10,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxContactPopup"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxContactPopup"), extendConfig({}, controller.args[2], "flxContactPopup"));
        flxContactPopup.setDefaultUnit(voltmx.flex.DP);
        var lblContactusheading = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblContactusheading",
            "isVisible": true,
            "skin": "CopysknLblCronosProBlack24px",
            "text": "Contact Us",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblContactusheading"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContactusheading"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblContactusheading"));
        var flxFirstandLastnameContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "flxFirstandLastnameContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "15dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxFirstandLastnameContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxFirstandLastnameContainer"), extendConfig({}, controller.args[2], "flxFirstandLastnameContainer"));
        flxFirstandLastnameContainer.setDefaultUnit(voltmx.flex.DP);
        var flxFirstName = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "50dp",
            "id": "flxFirstName",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox",
            "top": "10dp",
            "width": "45%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxFirstName"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxFirstName"), extendConfig({}, controller.args[2], "flxFirstName"));
        flxFirstName.setDefaultUnit(voltmx.flex.DP);
        var flxFirstNamelbl = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "20dp",
            "id": "flxFirstNamelbl",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "13.00%",
            "isModalContainer": false,
            "skin": "CopysknflxCatagerynameontop1",
            "top": "0dp",
            "width": "45%",
            "zIndex": 5,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxFirstNamelbl"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxFirstNamelbl"), extendConfig({}, controller.args[2], "flxFirstNamelbl"));
        flxFirstNamelbl.setDefaultUnit(voltmx.flex.DP);
        var lblFirstName = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblFirstName",
            "isVisible": true,
            "left": "2%",
            "skin": "sknlblConspro40pxnormal",
            "text": "First name",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblFirstName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFirstName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFirstName"));
        var imgyearofmakingstar = new voltmx.ui.Image2(extendConfig({
            "height": "10dp",
            "id": "imgyearofmakingstar",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyslImage",
            "src": "image___3.png",
            "top": "2dp",
            "width": "10dp"
        }, controller.args[0], "imgyearofmakingstar"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgyearofmakingstar"), extendConfig({}, controller.args[2], "imgyearofmakingstar"));
        flxFirstNamelbl.add(lblFirstName, imgyearofmakingstar);
        var flxtextboxFirstname = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "focusSkin": "CopysknflxD1",
            "height": "35dp",
            "id": "flxtextboxFirstname",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopysknflxD1",
            "top": "10dp",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxtextboxFirstname"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxtextboxFirstname"), extendConfig({}, controller.args[2], "flxtextboxFirstname"));
        flxtextboxFirstname.setDefaultUnit(voltmx.flex.DP);
        var tbxFirstname = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyskntbxCpReg2",
            "height": "25dp",
            "id": "tbxFirstname",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "6%",
            "secureTextEntry": false,
            "skin": "CopyskntbxCpReg2",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "8dp",
            "width": "89.24%"
        }, controller.args[0], "tbxFirstname"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxFirstname"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "CopyskntbxCpReg2",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxFirstname"));
        flxtextboxFirstname.add(tbxFirstname);
        flxFirstName.add(flxFirstNamelbl, flxtextboxFirstname);
        var flxLastname = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "50dp",
            "id": "flxLastname",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5%",
            "skin": "CopyCopyslFbox",
            "top": "20dp",
            "width": "45%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxLastname"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLastname"), extendConfig({}, controller.args[2], "flxLastname"));
        flxLastname.setDefaultUnit(voltmx.flex.DP);
        var flxLastnamelbl = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "20dp",
            "id": "flxLastnamelbl",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "13.00%",
            "isModalContainer": false,
            "skin": "CopysknflxCatagerynameontop1",
            "top": "0dp",
            "width": "45%",
            "zIndex": 5,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxLastnamelbl"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLastnamelbl"), extendConfig({}, controller.args[2], "flxLastnamelbl"));
        flxLastnamelbl.setDefaultUnit(voltmx.flex.DP);
        var lblLastname = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblLastname",
            "isVisible": true,
            "left": "2%",
            "skin": "sknlblConspro40pxnormal",
            "text": "Last name",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblLastname"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLastname"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLastname"));
        var imgStar2 = new voltmx.ui.Image2(extendConfig({
            "height": "10dp",
            "id": "imgStar2",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyslImage",
            "src": "image___3.png",
            "top": "2dp",
            "width": "10dp"
        }, controller.args[0], "imgStar2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgStar2"), extendConfig({}, controller.args[2], "imgStar2"));
        flxLastnamelbl.add(lblLastname, imgStar2);
        var flxTextboxLastname = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "focusSkin": "CopysknflxD1",
            "height": "35dp",
            "id": "flxTextboxLastname",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopysknflxD1",
            "top": "10dp",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxTextboxLastname"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxTextboxLastname"), extendConfig({}, controller.args[2], "flxTextboxLastname"));
        flxTextboxLastname.setDefaultUnit(voltmx.flex.DP);
        var tbxLastname = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyskntbxCpReg2",
            "height": "25dp",
            "id": "tbxLastname",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "6%",
            "secureTextEntry": false,
            "skin": "CopyskntbxCpReg2",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "8dp",
            "width": "89.24%"
        }, controller.args[0], "tbxLastname"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxLastname"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "CopyskntbxCpReg2",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxLastname"));
        flxTextboxLastname.add(tbxLastname);
        flxLastname.add(flxLastnamelbl, flxTextboxLastname);
        flxFirstandLastnameContainer.add(flxFirstName, flxLastname);
        var flxEmailContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "55dp",
            "id": "flxEmailContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "5dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxEmailContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxEmailContainer"), extendConfig({}, controller.args[2], "flxEmailContainer"));
        flxEmailContainer.setDefaultUnit(voltmx.flex.DP);
        var flxEmail = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "55dp",
            "id": "flxEmail",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox",
            "top": "10dp",
            "width": "92%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxEmail"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxEmail"), extendConfig({}, controller.args[2], "flxEmail"));
        flxEmail.setDefaultUnit(voltmx.flex.DP);
        var flxEmailLabel = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "20dp",
            "id": "flxEmailLabel",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "13.00%",
            "isModalContainer": false,
            "skin": "CopysknflxCatagerynameontop1",
            "top": "0dp",
            "width": "20%",
            "zIndex": 5,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxEmailLabel"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxEmailLabel"), extendConfig({}, controller.args[2], "flxEmailLabel"));
        flxEmailLabel.setDefaultUnit(voltmx.flex.DP);
        var lblEmail = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblEmail",
            "isVisible": true,
            "left": "2%",
            "skin": "sknlblConspro40pxnormal",
            "text": "Email ",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblEmail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmail"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEmail"));
        var Copyimgyearofmakingstar0h9c365a23ddc42 = new voltmx.ui.Image2(extendConfig({
            "height": "10dp",
            "id": "Copyimgyearofmakingstar0h9c365a23ddc42",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyslImage",
            "src": "image___3.png",
            "top": "2dp",
            "width": "10dp"
        }, controller.args[0], "Copyimgyearofmakingstar0h9c365a23ddc42"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Copyimgyearofmakingstar0h9c365a23ddc42"), extendConfig({}, controller.args[2], "Copyimgyearofmakingstar0h9c365a23ddc42"));
        flxEmailLabel.add(lblEmail, Copyimgyearofmakingstar0h9c365a23ddc42);
        var flxTextboxEmail = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "focusSkin": "CopysknflxD1",
            "height": "35dp",
            "id": "flxTextboxEmail",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopysknflxD1",
            "top": "10dp",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxTextboxEmail"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxTextboxEmail"), extendConfig({}, controller.args[2], "flxTextboxEmail"));
        flxTextboxEmail.setDefaultUnit(voltmx.flex.DP);
        var tbxEmail = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyskntbxCpReg2",
            "height": "25dp",
            "id": "tbxEmail",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "6%",
            "secureTextEntry": false,
            "skin": "CopyskntbxCpReg2",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "8dp",
            "width": "90.60%"
        }, controller.args[0], "tbxEmail"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxEmail"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "CopyskntbxCpReg2",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxEmail"));
        flxTextboxEmail.add(tbxEmail);
        flxEmail.add(flxEmailLabel, flxTextboxEmail);
        flxEmailContainer.add(flxEmail);
        var flxPhoneContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "55dp",
            "id": "flxPhoneContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "5dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxPhoneContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxPhoneContainer"), extendConfig({}, controller.args[2], "flxPhoneContainer"));
        flxPhoneContainer.setDefaultUnit(voltmx.flex.DP);
        var flxPhone = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "55dp",
            "id": "flxPhone",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox",
            "top": "10dp",
            "width": "92%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxPhone"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxPhone"), extendConfig({}, controller.args[2], "flxPhone"));
        flxPhone.setDefaultUnit(voltmx.flex.DP);
        var flxPhoneLabel = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "20dp",
            "id": "flxPhoneLabel",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "13.00%",
            "isModalContainer": false,
            "skin": "CopysknflxCatagerynameontop1",
            "top": "0dp",
            "width": "15%",
            "zIndex": 5,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxPhoneLabel"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxPhoneLabel"), extendConfig({}, controller.args[2], "flxPhoneLabel"));
        flxPhoneLabel.setDefaultUnit(voltmx.flex.DP);
        var lblPhone = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblPhone",
            "isVisible": true,
            "left": "2%",
            "skin": "sknlblConspro40pxnormal",
            "text": "Phone",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblPhone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPhone"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPhone"));
        flxPhoneLabel.add(lblPhone);
        var flxTextboxPhone = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "focusSkin": "CopysknflxD1",
            "height": "35dp",
            "id": "flxTextboxPhone",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopysknflxD1",
            "top": "10dp",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxTextboxPhone"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxTextboxPhone"), extendConfig({}, controller.args[2], "flxTextboxPhone"));
        flxTextboxPhone.setDefaultUnit(voltmx.flex.DP);
        var tbxPhone = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyskntbxCpReg2",
            "height": "25dp",
            "id": "tbxPhone",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "6%",
            "secureTextEntry": false,
            "skin": "CopyskntbxCpReg2",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "3dp",
            "width": "75%"
        }, controller.args[0], "tbxPhone"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxPhone"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "CopyskntbxCpReg2",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxPhone"));
        flxTextboxPhone.add(tbxPhone);
        flxPhone.add(flxPhoneLabel, flxTextboxPhone);
        flxPhoneContainer.add(flxPhone);
        var flxMessageContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "120dp",
            "id": "flxMessageContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "5dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMessageContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMessageContainer"), extendConfig({}, controller.args[2], "flxMessageContainer"));
        flxMessageContainer.setDefaultUnit(voltmx.flex.DP);
        var flxMessage = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxMessage",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox",
            "top": "5dp",
            "width": "92%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMessage"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMessage"), extendConfig({}, controller.args[2], "flxMessage"));
        flxMessage.setDefaultUnit(voltmx.flex.DP);
        var flxMessageLabel = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "20dp",
            "id": "flxMessageLabel",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "13.00%",
            "isModalContainer": false,
            "skin": "CopysknflxCatagerynameontop1",
            "top": "0dp",
            "width": "20%",
            "zIndex": 5,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxMessageLabel"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMessageLabel"), extendConfig({}, controller.args[2], "flxMessageLabel"));
        flxMessageLabel.setDefaultUnit(voltmx.flex.DP);
        var lblMessage = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblMessage",
            "isVisible": true,
            "left": "2%",
            "skin": "sknlblConspro40pxnormal",
            "text": "Message",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMessage"));
        var Copyimgyearofmakingstar0fa4aa5f0d47143 = new voltmx.ui.Image2(extendConfig({
            "height": "10dp",
            "id": "Copyimgyearofmakingstar0fa4aa5f0d47143",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyslImage",
            "src": "image___3.png",
            "top": "2dp",
            "width": "10dp"
        }, controller.args[0], "Copyimgyearofmakingstar0fa4aa5f0d47143"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Copyimgyearofmakingstar0fa4aa5f0d47143"), extendConfig({}, controller.args[2], "Copyimgyearofmakingstar0fa4aa5f0d47143"));
        flxMessageLabel.add(lblMessage, Copyimgyearofmakingstar0fa4aa5f0d47143);
        var flxTextboxMessage = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "focusSkin": "CopysknflxD1",
            "height": "100%",
            "id": "flxTextboxMessage",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopysknflxD1",
            "top": "10dp",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxTextboxMessage"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxTextboxMessage"), extendConfig({}, controller.args[2], "flxTextboxMessage"));
        flxTextboxMessage.setDefaultUnit(voltmx.flex.DP);
        var tbAreaMessage = new voltmx.ui.TextArea2(extendConfig({
            "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
            "focusSkin": "defTextAreaFocus",
            "height": "80%",
            "id": "tbAreaMessage",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
            "left": "10dp",
            "numberOfVisibleLines": 3,
            "skin": "defTextAreaNormal",
            "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
            "top": "9dp",
            "width": "90%"
        }, controller.args[0], "tbAreaMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [2, 2, 2, 2],
            "paddingInPixel": false
        }, controller.args[1], "tbAreaMessage"), extendConfig({}, controller.args[2], "tbAreaMessage"));
        flxTextboxMessage.add(tbAreaMessage);
        flxMessage.add(flxMessageLabel, flxTextboxMessage);
        flxMessageContainer.add(flxMessage);
        var flxCancelandSubmitButtons = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "18dp",
            "clipBounds": false,
            "height": "40dp",
            "id": "flxCancelandSubmitButtons",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "30dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxCancelandSubmitButtons"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCancelandSubmitButtons"), extendConfig({}, controller.args[2], "flxCancelandSubmitButtons"));
        flxCancelandSubmitButtons.setDefaultUnit(voltmx.flex.DP);
        var btnCancel = new voltmx.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnCancel",
            "isVisible": true,
            "left": "5%",
            "onClick": controller.AS_Button_ad088e61aca24fca97b51761abbdcef0,
            "skin": "sknBtnCancelRedBorder",
            "text": "Cancel",
            "top": "0",
            "width": "35%"
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({}, controller.args[2], "btnCancel"));
        var btnSubmit = new voltmx.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnSubmit",
            "isVisible": true,
            "right": "10%",
            "skin": "sknBtnSubmitGreenBorder",
            "text": "Submit",
            "top": "0",
            "width": "35%"
        }, controller.args[0], "btnSubmit"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSubmit"), extendConfig({}, controller.args[2], "btnSubmit"));
        flxCancelandSubmitButtons.add(btnCancel, btnSubmit);
        flxContactPopup.add(lblContactusheading, flxFirstandLastnameContainer, flxEmailContainer, flxPhoneContainer, flxMessageContainer, flxCancelandSubmitButtons);
        var flxFilterFromHeader = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "8%",
            "id": "flxFilterFromHeader",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBasic",
            "top": "9%",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxFilterFromHeader"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxFilterFromHeader"), extendConfig({}, controller.args[2], "flxFilterFromHeader"));
        flxFilterFromHeader.setDefaultUnit(voltmx.flex.DP);
        var flxFilterSearch = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxFilterSearch",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxFilterSearchBoxBlackRoundBorder",
            "top": "0",
            "width": "90%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxFilterSearch"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxFilterSearch"), extendConfig({}, controller.args[2], "flxFilterSearch"));
        flxFilterSearch.setDefaultUnit(voltmx.flex.DP);
        var imgSearch = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgSearch",
            "isVisible": true,
            "left": "5%",
            "skin": "slImage",
            "src": "searchicon.png",
            "top": "0",
            "width": "20dp"
        }, controller.args[0], "imgSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearch"), extendConfig({}, controller.args[2], "imgSearch"));
        var tbxSearchByCategory = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "sknTbxNoBorder231f20cronosrpronormal",
            "height": "90%",
            "id": "tbxSearchByCategory",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "13%",
            "placeholder": "Search by Category",
            "secureTextEntry": false,
            "skin": "sknTbxNoBorder231f20cronosrpronormal",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0",
            "width": "73%"
        }, controller.args[0], "tbxSearchByCategory"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxSearchByCategory"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "sknTbxNoBorder231f20cronosrpronormal",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxSearchByCategory"));
        var flxFilterActionFlex = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "98%",
            "id": "flxFilterActionFlex",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "85.5%",
            "isModalContainer": false,
            "skin": "sknFlxNotificationRound",
            "top": "0",
            "width": "14%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxFilterActionFlex"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxFilterActionFlex"), extendConfig({}, controller.args[2], "flxFilterActionFlex"));
        flxFilterActionFlex.setDefaultUnit(voltmx.flex.DP);
        var Image0f1aebe5a8f1041 = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "75%",
            "id": "Image0f1aebe5a8f1041",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "filtericon.png",
            "top": "0",
            "width": "70%"
        }, controller.args[0], "Image0f1aebe5a8f1041"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Image0f1aebe5a8f1041"), extendConfig({}, controller.args[2], "Image0f1aebe5a8f1041"));
        flxFilterActionFlex.add(Image0f1aebe5a8f1041);
        flxFilterSearch.add(imgSearch, tbxSearchByCategory, flxFilterActionFlex);
        flxFilterFromHeader.add(flxFilterSearch);
        Header2Copy2.add(flxHeaderContainer, flxMenuBarMain, flxContactPopup, flxFilterFromHeader);
        return Header2Copy2;
    }
})
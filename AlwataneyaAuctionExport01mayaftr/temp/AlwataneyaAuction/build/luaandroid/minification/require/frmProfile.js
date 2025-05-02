define("frmProfile", function() {
    return function(controller) {
        function addWidgetsfrmProfile() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMain.setDefaultUnit(voltmx.flex.DP);
            var flxMenuBarMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "90%",
                "id": "flxMenuBarMain",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0",
                "width": "100%",
                "zIndex": 4,
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMenuBarMain.setDefaultUnit(voltmx.flex.DP);
            var flxScrollMenuBody = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "102%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollMenuBody",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0f26ef081503042",
                "top": "-2%",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            flxScrollMenuBody.setDefaultUnit(voltmx.flex.DP);
            var flxMenuHeader = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": false,
                "height": "18%",
                "id": "flxMenuHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "4%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMenuHeader.setDefaultUnit(voltmx.flex.DP);
            var flxProfileMenuBar = new voltmx.ui.FlexContainer({
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
                "width": "16%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxProfileMenuBar.setDefaultUnit(voltmx.flex.DP);
            var imgProfileMenuBar = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgProfileMenuBar",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage5",
                "src": "person.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProfileMenuBar.add(imgProfileMenuBar);
            var flxUserDetailsMenuBar = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "98%",
                "id": "flxUserDetailsMenuBar",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxBasic",
                "top": "0",
                "width": "70%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxUserDetailsMenuBar.setDefaultUnit(voltmx.flex.DP);
            var lblUsernameMenubar = new voltmx.ui.Label({
                "height": "30%",
                "id": "lblUsernameMenubar",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblCronosProBlack24px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxVerifiedUser = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30%",
                "id": "flxVerifiedUser",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxFeaturedAuctionsItem",
                "top": "5dp",
                "width": "50%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxVerifiedUser.setDefaultUnit(voltmx.flex.DP);
            var imgVerified = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "50%",
                "id": "imgVerified",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "verified.png",
                "top": "0dp",
                "width": "20%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblVerifiedUser = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblVerifiedUser",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblCronosPro1F86C0Normal",
                "text": "VERIFIED USER",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [2, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxVerifiedUser.add(imgVerified, lblVerifiedUser);
            var btnCompleteKYC = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "30%",
                "id": "btnCompleteKYC",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknbtnCPRegD32437Fontffffff45px",
                "text": "Please Complete KYC",
                "top": 5,
                "width": "70%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblJoinedOn = new voltmx.ui.Label({
                "id": "lblJoinedOn",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLblCronosProA7A5A6Normal13px",
                "text": "Joined on March 2020",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUserDetailsMenuBar.add(lblUsernameMenubar, flxVerifiedUser, btnCompleteKYC, lblJoinedOn);
            flxMenuHeader.add(flxProfileMenuBar, flxUserDetailsMenuBar);
            var flxMenuContent = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMenuContent",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "1%",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMenuContent.setDefaultUnit(voltmx.flex.DP);
            var flxMenuContent1 = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxMenuContent1.setDefaultUnit(voltmx.flex.DP);
            var flxMyAccount = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxMyAccount.setDefaultUnit(voltmx.flex.DP);
            var imgProfileIcon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgProfileIcon",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "myaccountprofile.png",
                "top": "6dp",
                "width": "20dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMyAccount = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxImgArrowToggle1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30dp",
                "id": "flxImgArrowToggle1",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "6%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_hcfaf4152e2c4e8c93932c6a1eacb728,
                "skin": "CopyslFbox5",
                "top": "8dp",
                "width": "30dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImgArrowToggle1.setDefaultUnit(voltmx.flex.DP);
            var imgArrowToggle = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgArrowToggle",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslImage5",
                "src": "right_chevron.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgArrowToggle1.add(imgArrowToggle);
            flxMyAccount.add(imgProfileIcon, lblMyAccount, flxImgArrowToggle1);
            var flxBidStatus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxBidStatus",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxBidStatus.setDefaultUnit(voltmx.flex.DP);
            var imgBidStatusIcon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgBidStatusIcon",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "bidicon.png",
                "top": "6dp",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBidStatus = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxImgArrowToggle2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30dp",
                "id": "flxImgArrowToggle2",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_d8a73ca7e9de42aa954f8887a6d0d6d8,
                "skin": "CopyslFbox5",
                "top": "8dp",
                "width": "30dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImgArrowToggle2.setDefaultUnit(voltmx.flex.DP);
            var imgArrowToggle2 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgArrowToggle2",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslImage5",
                "src": "right_chevron.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgArrowToggle2.add(imgArrowToggle2);
            flxBidStatus.add(imgBidStatusIcon, lblBidStatus, flxImgArrowToggle2);
            var flxMyVehicles = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxMyVehicles",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxMyVehicles.setDefaultUnit(voltmx.flex.DP);
            var imgMyVehicles = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgMyVehicles",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "myvehiclesprofile.png",
                "top": "6dp",
                "width": "20dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMyVehicles = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblMyVehicles",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblCronosProBlacl20px",
                "text": "My Vehicles",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxImgArrowToggle0ia2a1ef42d984e = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30dp",
                "id": "CopyflxImgArrowToggle0ia2a1ef42d984e",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "6%",
                "isModalContainer": false,
                "skin": "CopyslFbox5",
                "top": "8dp",
                "width": "30dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxImgArrowToggle0ia2a1ef42d984e.setDefaultUnit(voltmx.flex.DP);
            var CopyimgArrowToggle0ga7aeb42b88c4a = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrowToggle0ga7aeb42b88c4a",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslImage5",
                "src": "right_chevron.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxImgArrowToggle0ia2a1ef42d984e.add(CopyimgArrowToggle0ga7aeb42b88c4a);
            flxMyVehicles.add(imgMyVehicles, lblMyVehicles, CopyflxImgArrowToggle0ia2a1ef42d984e);
            var flxAuctions = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxAuctions.setDefaultUnit(voltmx.flex.DP);
            var imgAuctionIcon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgAuctionIcon",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "auctionsprofile.png",
                "top": "6dp",
                "width": "20dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAuctions = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxImgArrowToggle3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30dp",
                "id": "flxImgArrowToggle3",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "6%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_ee49e0c99e4747deb42b4959ddaeab39,
                "skin": "CopyslFbox5",
                "top": "8dp",
                "width": "30dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImgArrowToggle3.setDefaultUnit(voltmx.flex.DP);
            var imgArrowToggle3 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgArrowToggle3",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslImage5",
                "src": "right_chevron.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgArrowToggle3.add(imgArrowToggle3);
            flxAuctions.add(imgAuctionIcon, lblAuctions, flxImgArrowToggle3);
            var flxSellCar = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxSellCar",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxSellCar.setDefaultUnit(voltmx.flex.DP);
            var imgVehicle = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "imgVehicle",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "vehicle_3.png",
                "top": "6dp",
                "width": "22dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSellCar = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSellCar",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblCronosProBlacl20px",
                "text": "Sell Car",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxImgArrowToggle0e6777395139b41 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30dp",
                "id": "CopyflxImgArrowToggle0e6777395139b41",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "6%",
                "isModalContainer": false,
                "skin": "CopyslFbox5",
                "top": "8dp",
                "width": "30dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxImgArrowToggle0e6777395139b41.setDefaultUnit(voltmx.flex.DP);
            var CopyimgArrowToggle0a8b5a29412af4a = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrowToggle0a8b5a29412af4a",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslImage5",
                "src": "right_chevron.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxImgArrowToggle0e6777395139b41.add(CopyimgArrowToggle0a8b5a29412af4a);
            flxSellCar.add(imgVehicle, lblSellCar, CopyflxImgArrowToggle0e6777395139b41);
            var flxHelp = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxHelp.setDefaultUnit(voltmx.flex.DP);
            var imgHelpIcon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "imgHelpIcon",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "helpmyprofile.png",
                "top": "6dp",
                "width": "22dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHelp = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxImgArrowToggle4 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30dp",
                "id": "flxImgArrowToggle4",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "6%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_eb87f8419d0449c081c0e7136f9252f1,
                "skin": "CopyslFbox5",
                "top": "8dp",
                "width": "30dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImgArrowToggle4.setDefaultUnit(voltmx.flex.DP);
            var imgArrowToggle4 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgArrowToggle4",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslImage5",
                "src": "right_chevron.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgArrowToggle4.add(imgArrowToggle4);
            flxHelp.add(imgHelpIcon, lblHelp, flxImgArrowToggle4);
            var flxAppSettings = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxAppSettings.setDefaultUnit(voltmx.flex.DP);
            var imgAppSettingsIcon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgAppSettingsIcon",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "settingsmyprofile.png",
                "top": "6dp",
                "width": "20dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAppSettings = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxImgArrowToggle5 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30dp",
                "id": "flxImgArrowToggle5",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "6%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_f22804aef939469bb2aac079d8ec64b5,
                "skin": "CopyslFbox5",
                "top": "8dp",
                "width": "30dp",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImgArrowToggle5.setDefaultUnit(voltmx.flex.DP);
            var imgArrowToggle5 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgArrowToggle5",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslImage5",
                "src": "right_chevron.png",
                "top": "0dp",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgArrowToggle5.add(imgArrowToggle5);
            flxAppSettings.add(imgAppSettingsIcon, lblAppSettings, flxImgArrowToggle5);
            flxMenuContent1.add(flxMyAccount, flxBidStatus, flxMyVehicles, flxAuctions, flxSellCar, flxHelp, flxAppSettings);
            var flxMenuContent2 = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxMenuContent2.setDefaultUnit(voltmx.flex.DP);
            var flxHeadingAdditionalFeatures = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxHeadingAdditionalFeatures.setDefaultUnit(voltmx.flex.DP);
            var lblAdditionalFeatures = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeadingAdditionalFeatures.add(lblAdditionalFeatures);
            var flxLanguageToggle = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxLanguageToggle.setDefaultUnit(voltmx.flex.DP);
            var imgLanguageToggleIcon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgLanguageToggleIcon",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "languageglobe.png",
                "top": "6dp",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLanguageToggle = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLanguageToggle.add(imgLanguageToggleIcon, lblLanguageToggle);
            var flxSettings = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxSettings.setDefaultUnit(voltmx.flex.DP);
            var imgSettingsIcon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgSettingsIcon",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "settings_1.png",
                "top": "6dp",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSettings = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSettings",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblCronosProBlacl20px",
                "text": "Favourites",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSettings.add(imgSettingsIcon, lblSettings);
            var flxNotifications = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxNotifications",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBasic",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxNotifications.setDefaultUnit(voltmx.flex.DP);
            var CopyimgSettingsIcon0gc4911f7666c40 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "CopyimgSettingsIcon0gc4911f7666c40",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "settings_1.png",
                "top": "6dp",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblSettings0ae3d43376d3949 = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "CopylblSettings0ae3d43376d3949",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblCronosProBlacl20px",
                "text": "Notifications",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "60%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNotifications.add(CopyimgSettingsIcon0gc4911f7666c40, CopylblSettings0ae3d43376d3949);
            var flxDarkMode = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxDarkMode.setDefaultUnit(voltmx.flex.DP);
            var imgDarkModeIcon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgDarkModeIcon",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "dark_lght_toggle.png",
                "top": "6dp",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDarkMode = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDarkMode.add(imgDarkModeIcon, lblDarkMode);
            var flxShareApp = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxShareApp.setDefaultUnit(voltmx.flex.DP);
            var imgShareIcon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgShareIcon",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "switch_5.png",
                "top": "6dp",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblShareApp = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxShareApp.add(imgShareIcon, lblShareApp);
            var flxContact = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxContact",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_ff6039d8fa9d43118c06efd2c728d8af,
                "skin": "sknFlxBasic",
                "top": "15dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxContact.setDefaultUnit(voltmx.flex.DP);
            var imgContactUsIcon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgContactUsIcon",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "customer_support__1__1.png",
                "top": "6dp",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblContact = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxContact.add(imgContactUsIcon, lblContact);
            var flxFeedBack = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxFeedBack.setDefaultUnit(voltmx.flex.DP);
            var imgFeedBackIcon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgFeedBackIcon",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "feedback.png",
                "top": "6dp",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFeedback = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFeedBack.add(imgFeedBackIcon, lblFeedback);
            var flxLogout = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxLogout",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_gf38a9ac525c4fff92500494f47c0717,
                "skin": "sknFlxBasic",
                "top": "0dp",
                "width": "100%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxLogout.setDefaultUnit(voltmx.flex.DP);
            var imgLogoutIcon = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgLogoutIcon",
                "isVisible": true,
                "left": "5%",
                "skin": "CopyslImage5",
                "src": "profileicon.png",
                "top": "6dp",
                "width": "30dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLogout = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLogout.add(imgLogoutIcon, lblLogout);
            flxMenuContent2.add(flxHeadingAdditionalFeatures, flxLanguageToggle, flxSettings, flxNotifications, flxDarkMode, flxShareApp, flxContact, flxFeedBack, flxLogout);
            flxMenuContent.add(flxMenuContent1, flxMenuContent2);
            flxScrollMenuBody.add(flxMenuHeader, flxMenuContent);
            var flxOpacity = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxOpacity.setDefaultUnit(voltmx.flex.DP);
            flxOpacity.add();
            flxMenuBarMain.add(flxScrollMenuBody, flxOpacity);
            var flxContactPopup = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxContactPopup.setDefaultUnit(voltmx.flex.DP);
            var lblContactusheading = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lblContactusheading",
                "isVisible": true,
                "skin": "sknLblCronosProBlack24px",
                "text": "Contact Us",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxFirstandLastnameContainer = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxFirstandLastnameContainer.setDefaultUnit(voltmx.flex.DP);
            var flxFirstName = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxFirstName.setDefaultUnit(voltmx.flex.DP);
            var flxFirstNamelbl = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxFirstNamelbl.setDefaultUnit(voltmx.flex.DP);
            var lblFirstName = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgyearofmakingstar = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "imgyearofmakingstar",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopyslImage",
                "src": "image___3.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFirstNamelbl.add(lblFirstName, imgyearofmakingstar);
            var flxtextboxFirstname = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxtextboxFirstname.setDefaultUnit(voltmx.flex.DP);
            var tbxFirstname = new voltmx.ui.TextBox2({
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
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyskntbxCpReg2",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxtextboxFirstname.add(tbxFirstname);
            flxFirstName.add(flxFirstNamelbl, flxtextboxFirstname);
            var flxLastname = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxLastname.setDefaultUnit(voltmx.flex.DP);
            var flxLastnamelbl = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxLastnamelbl.setDefaultUnit(voltmx.flex.DP);
            var lblLastname = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgStar2 = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "imgStar2",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopyslImage",
                "src": "image___3.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLastnamelbl.add(lblLastname, imgStar2);
            var flxTextboxLastname = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxTextboxLastname.setDefaultUnit(voltmx.flex.DP);
            var tbxLastname = new voltmx.ui.TextBox2({
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
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyskntbxCpReg2",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxTextboxLastname.add(tbxLastname);
            flxLastname.add(flxLastnamelbl, flxTextboxLastname);
            flxFirstandLastnameContainer.add(flxFirstName, flxLastname);
            var flxEmailContainer = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailContainer.setDefaultUnit(voltmx.flex.DP);
            var flxEmail = new voltmx.ui.FlexContainer({
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
                "width": "94%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmail.setDefaultUnit(voltmx.flex.DP);
            var flxEmailLabel = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailLabel.setDefaultUnit(voltmx.flex.DP);
            var lblEmail = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Copyimgyearofmakingstar0h9c365a23ddc42 = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "Copyimgyearofmakingstar0h9c365a23ddc42",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopyslImage",
                "src": "image___3.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmailLabel.add(lblEmail, Copyimgyearofmakingstar0h9c365a23ddc42);
            var flxTextboxEmail = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxTextboxEmail.setDefaultUnit(voltmx.flex.DP);
            var tbxEmail = new voltmx.ui.TextBox2({
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
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyskntbxCpReg2",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxTextboxEmail.add(tbxEmail);
            flxEmail.add(flxEmailLabel, flxTextboxEmail);
            flxEmailContainer.add(flxEmail);
            var flxPhoneContainer = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxPhoneContainer.setDefaultUnit(voltmx.flex.DP);
            var flxPhone = new voltmx.ui.FlexContainer({
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
                "width": "94%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxPhone.setDefaultUnit(voltmx.flex.DP);
            var flxPhoneLabel = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxPhoneLabel.setDefaultUnit(voltmx.flex.DP);
            var lblPhone = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPhoneLabel.add(lblPhone);
            var flxTextboxPhone = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxTextboxPhone.setDefaultUnit(voltmx.flex.DP);
            var tbxPhone = new voltmx.ui.TextBox2({
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
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopyskntbxCpReg2",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxTextboxPhone.add(tbxPhone);
            flxPhone.add(flxPhoneLabel, flxTextboxPhone);
            flxPhoneContainer.add(flxPhone);
            var flxMessageContainer = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxMessageContainer.setDefaultUnit(voltmx.flex.DP);
            var flxMessage = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxMessage.setDefaultUnit(voltmx.flex.DP);
            var flxMessageLabel = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxMessageLabel.setDefaultUnit(voltmx.flex.DP);
            var lblMessage = new voltmx.ui.Label({
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
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Copyimgyearofmakingstar0fa4aa5f0d47143 = new voltmx.ui.Image2({
                "height": "10dp",
                "id": "Copyimgyearofmakingstar0fa4aa5f0d47143",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopyslImage",
                "src": "image___3.png",
                "top": "2dp",
                "width": "10dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMessageLabel.add(lblMessage, Copyimgyearofmakingstar0fa4aa5f0d47143);
            var flxTextboxMessage = new voltmx.ui.FlexContainer({
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
                "width": "94%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxTextboxMessage.setDefaultUnit(voltmx.flex.DP);
            var tbAreaMessage = new voltmx.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "height": "80%",
                "id": "tbAreaMessage",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "10dp",
                "numberOfVisibleLines": 3,
                "skin": "CopydefTextAreaNormal0ifba63613ca74a",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "9dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {});
            flxTextboxMessage.add(tbAreaMessage);
            flxMessage.add(flxMessageLabel, flxTextboxMessage);
            flxMessageContainer.add(flxMessage);
            var flxCancelandSubmitButtons = new voltmx.ui.FlexContainer({
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
            }, {
                "paddingInPixel": false
            }, {});
            flxCancelandSubmitButtons.setDefaultUnit(voltmx.flex.DP);
            var btnCancel = new voltmx.ui.Button({
                "centerY": "50%",
                "height": "45dp",
                "id": "btnCancel",
                "isVisible": true,
                "left": "5%",
                "onClick": controller.AS_Button_d653236f19dc4a449358f03f30bc9970,
                "skin": "sknBtnCancelRedBorder",
                "text": "Cancel",
                "top": "0",
                "width": "33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSubmit = new voltmx.ui.Button({
                "centerY": "50%",
                "height": "45dp",
                "id": "btnSubmit",
                "isVisible": true,
                "onClick": controller.AS_Button_adbcc0ffde2743c3a79810f6d72a97e4,
                "right": "5%",
                "skin": "sknBtnSubmitGreenBorder",
                "text": "Submit",
                "top": "0",
                "width": "33%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCancelandSubmitButtons.add(btnCancel, btnSubmit);
            flxContactPopup.add(lblContactusheading, flxFirstandLastnameContainer, flxEmailContainer, flxPhoneContainer, flxMessageContainer, flxCancelandSubmitButtons);
            var Footer2 = new com.hcl.voltmx.alwataneya1.Footer2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "height": "10%",
                "id": "Footer2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxFooter",
                "width": "100%",
                "zIndex": 1,
                "appName": "AlwataneyaAuction",
                "overrides": {
                    "Footer2": {
                        "bottom": "0dp",
                        "centerY": "viz.val_cleared",
                        "height": "10%",
                        "top": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMain.add(flxMenuBarMain, flxContactPopup, Footer2);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmProfile,
            "enabledForIdleTimeout": false,
            "id": "frmProfile",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "AlwataneyaAuction"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});
define("frmCompleteAutoBid", function() {
    return function(controller) {
        function addWidgetsfrmCompleteAutoBid() {
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
            var flxImg = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "45%",
                "id": "flxImg",
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
            flxImg.setDefaultUnit(voltmx.flex.DP);
            var CopyimgFrame0a8b5d51cfce447 = new voltmx.ui.Image2({
                "height": "100%",
                "id": "CopyimgFrame0a8b5d51cfce447",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "frame__2_.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxImgs = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "50%",
                "id": "flxImgs",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%",
                "appName": "AlwataneyaAuction"
            }, {
                "paddingInPixel": false
            }, {});
            flxImgs.setDefaultUnit(voltmx.flex.DP);
            var CopyImage0f45d4d4e959c47 = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "150dp",
                "id": "CopyImage0f45d4d4e959c47",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "image__8_.png",
                "top": "0",
                "width": "150dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Image0gdce109c17ad4d = new voltmx.ui.Image2({
                "height": "150dp",
                "id": "Image0gdce109c17ad4d",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "success_icon.png",
                "top": "0",
                "width": "150dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgs.add(CopyImage0f45d4d4e959c47, Image0gdce109c17ad4d);
            flxImg.add(CopyimgFrame0a8b5d51cfce447, flxImgs);
            flxMain.add(flxImg);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmCompleteAutoBid,
            "enabledForIdleTimeout": false,
            "id": "frmCompleteAutoBid",
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
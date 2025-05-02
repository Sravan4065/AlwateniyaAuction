define("segRowGovtIds", function() {
    return function(controller) {
        var segRowGovtIds = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "85dp",
            "id": "segRowGovtIds",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        segRowGovtIds.setDefaultUnit(voltmx.flex.DP);
        var flxNameAndStatus = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "75%",
            "id": "flxNameAndStatus",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "40%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxNameAndStatus.setDefaultUnit(voltmx.flex.DP);
        var lblIdName = new voltmx.ui.Label({
            "height": "50%",
            "id": "lblIdName",
            "isVisible": true,
            "left": "0",
            "skin": "sknlblDubaiReg231F20Font50px",
            "text": "Passport",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "90%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnStatus = new voltmx.ui.Button({
            "bottom": "0",
            "focusSkin": "defBtnFocus",
            "height": "45%",
            "id": "btnStatus",
            "isVisible": true,
            "left": "0",
            "skin": "defBtnNormal",
            "text": "Under Review",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxNameAndStatus.add(lblIdName, btnStatus);
        var flxUpoadAndSeen = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "centerY": "50%",
            "clipBounds": false,
            "height": "60%",
            "id": "flxUpoadAndSeen",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0",
            "skin": "slFbox",
            "width": "30%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxUpoadAndSeen.setDefaultUnit(voltmx.flex.DP);
        var flxUpload = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "70%",
            "id": "flxUpload",
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
        flxUpload.setDefaultUnit(voltmx.flex.DP);
        var imgUpload = new voltmx.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgUpload",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "material_symbols_light_upload.png",
            "top": "0",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxUpload.add(imgUpload);
        var flxEyeOpen = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "60%",
            "id": "flxEyeOpen",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0",
            "width": "30%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxEyeOpen.setDefaultUnit(voltmx.flex.DP);
        var imgEyeOpen = new voltmx.ui.Image2({
            "bottom": "0",
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgEyeOpen",
            "isVisible": true,
            "right": "0",
            "skin": "slImage",
            "src": "lsicon_view_outline.png",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEyeOpen.add(imgEyeOpen);
        flxUpoadAndSeen.add(flxUpload, flxEyeOpen);
        segRowGovtIds.add(flxNameAndStatus, flxUpoadAndSeen);
        return segRowGovtIds;
    }
})
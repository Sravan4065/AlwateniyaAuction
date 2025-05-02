define("flxMenuBarItems", function() {
    return function(controller) {
        var flxMenuBarItems = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "80dp",
            "id": "flxMenuBarItems",
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
        flxMenuBarItems.setDefaultUnit(voltmx.flex.DP);
        var flxInsideItem = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxInsideItem",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxSegmentBorder",
            "top": "0",
            "width": "105%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxInsideItem.setDefaultUnit(voltmx.flex.DP);
        var lblItemName = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblItemName",
            "isVisible": true,
            "left": "25dp",
            "skin": "sknLblCronoPro7b7979Normal20px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxChevronright = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "75%",
            "id": "flxChevronright",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "25dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "20%",
            "appName": "AlwataneyaAuction"
        }, {
            "paddingInPixel": false
        }, {});
        flxChevronright.setDefaultUnit(voltmx.flex.DP);
        var imgChevronRight = new voltmx.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgChevronRight",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "chevron_right_grey.png",
            "top": "0",
            "width": "100%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxChevronright.add(imgChevronRight);
        flxInsideItem.add(lblItemName, flxChevronright);
        flxMenuBarItems.add(flxInsideItem);
        return flxMenuBarItems;
    }
})
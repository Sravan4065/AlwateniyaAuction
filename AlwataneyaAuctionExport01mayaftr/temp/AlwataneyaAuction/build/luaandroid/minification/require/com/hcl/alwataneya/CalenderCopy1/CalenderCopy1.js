define(function() {
    return function(controller) {
        var CalenderCopy1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "20%",
            "id": "CalenderCopy1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "CalenderCopy1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "CalenderCopy1"), extendConfig({}, controller.args[2], "CalenderCopy1"));
        CalenderCopy1.setDefaultUnit(voltmx.flex.DP);
        var flxCalender1 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30%",
            "id": "flxCalender1",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0",
            "width": "100%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxCalender1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCalender1"), extendConfig({}, controller.args[2], "flxCalender1"));
        flxCalender1.setDefaultUnit(voltmx.flex.DP);
        var imgLeftArrow = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgLeftArrow",
            "isVisible": true,
            "left": "0",
            "skin": "CopyslImage0e7338b50aa2044",
            "src": "group_2.png",
            "top": "0",
            "width": "20%"
        }, controller.args[0], "imgLeftArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLeftArrow"), extendConfig({}, controller.args[2], "imgLeftArrow"));
        var imgAWA = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgAWA",
            "isVisible": true,
            "left": "20%",
            "skin": "CopyslImage0e7338b50aa2044",
            "src": "logo_1_5.png",
            "top": "0",
            "width": "20%"
        }, controller.args[0], "imgAWA"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAWA"), extendConfig({}, controller.args[2], "imgAWA"));
        var flxAuctionCalenderHeading = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxAuctionCalenderHeading",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "CopyslFbox0c5122c846fc447",
            "top": "0",
            "width": "50%",
            "appName": "AlwataneyaAuction"
        }, controller.args[0], "flxAuctionCalenderHeading"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxAuctionCalenderHeading"), extendConfig({}, controller.args[2], "flxAuctionCalenderHeading"));
        flxAuctionCalenderHeading.setDefaultUnit(voltmx.flex.DP);
        var lblAuctionsCalender = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAuctionsCalender",
            "isVisible": true,
            "skin": "CopysknlblCPBoldCapt5",
            "text": "AUCTIONS CALENDAR",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, controller.args[0], "lblAuctionsCalender"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAuctionsCalender"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAuctionsCalender"));
        flxAuctionCalenderHeading.add(lblAuctionsCalender);
        flxCalender1.add(imgLeftArrow, imgAWA, flxAuctionCalenderHeading);
        CalenderCopy1.add(flxCalender1);
        return CalenderCopy1;
    }
})
define("Identity", function() {
    return function(controller) {
        function addWidgetsIdentity() {
            this.setDefaultUnit(voltmx.flex.DP);
            var btnIdentity = new voltmx.ui.Button({
                "centerX": "50%",
                "focusSkin": "CopydefBtnFocus0if8fb27e68c84c",
                "height": "50dp",
                "id": "btnIdentity",
                "isVisible": true,
                "left": "27dp",
                "onClick": controller.AS_Button_b523337045464b59b16688cbed44c2f8,
                "skin": "CopysknbtnMaroonLoginCurvedFont",
                "text": "Go",
                "top": "90dp",
                "width": "200dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(btnIdentity);
        };
        return [{
            "addWidgets": addWidgetsIdentity,
            "enabledForIdleTimeout": false,
            "id": "Identity",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0d2f85bd045d44e",
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
            "titleBarSkin": "CopyslTitleBar0fde7ba532e1640",
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});
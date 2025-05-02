define("frmTest", function() {
    return function(controller) {
        function addWidgetsfrmTest() {
            this.setDefaultUnit(voltmx.flex.DP);
            var tbxEmailAddress = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "tbxEmailAddress",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "57dp",
                "placeholder": "Placeholder",
                "secureTextEntry": false,
                "skin": "defTextBoxNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "227dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var Button0f5c113e0c0eb44 = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "Button0f5c113e0c0eb44",
                "isVisible": true,
                "left": "40dp",
                "skin": "defBtnNormal",
                "text": "Button",
                "top": "340dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Calendar0a8d9a608b2fa4c = new voltmx.ui.Calendar({
                "calendarIcon": "calbtn.png",
                "dateComponents": [2, 5, 2025, 0, 0, 0],
                "dateFormat": "dd/MM/yyyy",
                "day": 2,
                "formattedDate": "02/05/2025",
                "height": "40dp",
                "hour": 0,
                "id": "Calendar0a8d9a608b2fa4c",
                "isVisible": true,
                "left": "138dp",
                "minutes": 0,
                "month": 5,
                "seconds": 0,
                "skin": "slCalendar",
                "top": "87dp",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "300dp",
                "year": 2025,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(tbxEmailAddress, Button0f5c113e0c0eb44, Calendar0a8d9a608b2fa4c);
        };
        return [{
            "addWidgets": addWidgetsfrmTest,
            "enabledForIdleTimeout": false,
            "id": "frmTest",
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
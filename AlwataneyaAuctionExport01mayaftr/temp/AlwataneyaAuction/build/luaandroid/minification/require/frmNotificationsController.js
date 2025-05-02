define("userfrmNotificationsController", {
    onNavigate: function() {
        var self = this;
        self.view.segNotifications.widgetDataMap = {
            "imgUser": "imgUser",
            "lblText": "lblText",
            "btnchat": "btnchat",
            "btndecline": "btndecline",
            "lblDayAndTime": "lblDayAndTime",
            "flxbuttons": "flxbuttons"
        };
        var notification = [{
            "imgUser": "avatar.png",
            "lblText": "Someone has placed a higher bid for the 2019 Audi Q7. You can place a new bid or watch the auction",
            "lblDayAndTime": "Yesterday at 9:42 AM",
            "btnchat": {
                "text": "Chat"
            },
            "btndecline": {
                "text": "Decline"
            },
        }, {
            "imgUser": "avatar_01_1_.png",
            "lblText": "Someone has placed a higher bid for the 2019 Audi Q7. You can place a new bid or watch the auction",
            "lblDayAndTime": "Yesterday at 9:42 AM",
            "btnchat": {
                "text": "Chat"
            },
            "btndecline": {
                "text": "Decline"
            },
            "flxbuttons": {
                "isVisible": false
            }
        }, {
            "imgUser": "avatar.png",
            "lblText": "Someone has placed a higher bid for the 2019 Audi Q7. You can place a new bid or watch the auction",
            "lblDayAndTime": "Yesterday at 9:42 AM",
            "btnchat": {
                "text": "Chat"
            },
            "btndecline": {
                "text": "Decline"
            },
        }, {
            "imgUser": "avatar_01_1_.png",
            "lblText": "Someone has placed a higher bid for the 2019 Audi Q7. You can place a new bid or watch the auction",
            "lblDayAndTime": "Yesterday at 9:42 AM",
            "btnchat": {
                "text": "Chat"
            },
            "btndecline": {
                "text": "Decline"
            },
            "flxbuttons": {
                "isVisible": false
            }
        }];
        self.view.segNotifications.setData(notification);
    }
});
define("frmNotificationsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmNotificationsController", ["userfrmNotificationsController", "frmNotificationsControllerActions"], function() {
    var controller = require("userfrmNotificationsController");
    var controllerActions = ["frmNotificationsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

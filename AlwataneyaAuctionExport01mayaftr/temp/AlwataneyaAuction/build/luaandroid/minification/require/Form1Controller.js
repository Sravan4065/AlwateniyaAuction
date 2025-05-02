define("userForm1Controller", {
    //Type your controller code here 
});
define("Form1ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_e26f59b6ba314664a772835721d03a7f: function AS_Button_e26f59b6ba314664a772835721d03a7f(eventobject) {
        var self = this;

        function SHOW_ALERT_fd10b6306969472cbdf6f91575f6f820_True() {}

        function INVOKE_IDENTITY_SERVICE_gaa8c1b9dbdc47888f6ce42aa0f7d793_Success(response) {
            if (self.view.defaultBrowserWidgetForOauth2) {
                self.view.remove(self.view.defaultBrowserWidgetForOauth2);
            }

            function SHOW_ALERT_j0a2abff2b34402ebc918d773d940883_Callback() {
                SHOW_ALERT_j0a2abff2b34402ebc918d773d940883_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "You have successfully logged in.",
                "alertHandler": SHOW_ALERT_j0a2abff2b34402ebc918d773d940883_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function INVOKE_IDENTITY_SERVICE_gaa8c1b9dbdc47888f6ce42aa0f7d793_Failure(error) {
            if (self.view.defaultBrowserWidgetForOauth2) {
                self.view.remove(self.view.defaultBrowserWidgetForOauth2);
            }

            function SHOW_ALERT_fd10b6306969472cbdf6f91575f6f820_Callback() {
                SHOW_ALERT_fd10b6306969472cbdf6f91575f6f820_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Login failed. Please try again.",
                "alertHandler": SHOW_ALERT_fd10b6306969472cbdf6f91575f6f820_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function SHOW_ALERT_j0a2abff2b34402ebc918d773d940883_True() {}
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "DevAzureB2C$login";
        login_inputparam["operation"] = "login";
        if (!self.view.defaultBrowserWidgetForOauth2) {
            self.view.add(new voltmx.ui.Browser({
                "id": "defaultBrowserWidgetForOauth2",
                "left": "0dp",
                "top": "0dp",
                "width": "100%",
                "height": "100%"
            }, {}, {}));
        }
        login_inputparam["browserWidget"] = self.view.defaultBrowserWidgetForOauth2;
        DevAzureB2C$login = mfidentityserviceinvoker("DevAzureB2C", login_inputparam, INVOKE_IDENTITY_SERVICE_gaa8c1b9dbdc47888f6ce42aa0f7d793_Success, INVOKE_IDENTITY_SERVICE_gaa8c1b9dbdc47888f6ce42aa0f7d793_Failure);
    }
});
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

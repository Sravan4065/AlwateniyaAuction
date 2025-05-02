define("userfrmScreen2LoginController", {
    //Type your controller code here 
    onNavigate: function() {
        this.view.flxFooter.onClick = this.NavigateToSignUpForm;
        //   this.view.btnSubmit.onClick = this.submitOnclickAction;
    },
    NavigateToSignUpForm: function() {
        var ntf = new voltmx.mvc.Navigation("frmScreen3OTP1");
        ntf.navigate();
    },
    getUserObj: function() {
        // alert("Logged-in Success");
        var id = 4052; // Asset name
        // Al_Wataneya_Custom_Services
        var AssetCategoriesMasterValues_inputparam = {
            "serviceID": "Al_Wataneya_Custom_Services$GetUserObj",
            "user_id": id, // Pass ID dynamically here
            "user_source": "azure",
            "httpheaders": {},
            "httpconfig": {}
        };
        // Service call to fetch categories
        Al_Wataneya_Custom_Services$GetUserObj = mfintegrationsecureinvokerasync(AssetCategoriesMasterValues_inputparam, "Al_Wataneya_Custom_Services", "GetUserObj", function(status, response) {
            var responseString = JSON.stringify(response);
            //           self.anotherServiceCall(responseString);
            voltmx.store.setItem("UserObj", responseString);
            alert("Response from login: " + responseString);
            alert("Response from json Login : " + JSON.typeOf(responseString));
            voltmx.print("response: " + JSON.stringify(responseString));
            voltmx.print("response: " + responseString);
            if (response.opstatus === 0) {
                //   var ntf = new voltmx.mvc.Navigation("frmSellCarList12");
                ntf.navigate({
                    "variable_email": email,
                    "txtEmail_text": self.view.txtEmail.text,
                    "_meta_": {
                        "eventName": "onClick",
                        "widgetId": "btnSubmit"
                    }
                });
            }
        });
        var ntf = new voltmx.mvc.Navigation("frmSellCarList12");
        ntf.navigate();
    },
    //   submitOnclickAction: function(){
    //     var self = this;
    //       if (self.view.txtEmail.text === "" && self.view.txtPassword.text === "") {
    //         alert("Fields should be mandatory!!");
    //     }
    //     else{
    //         var login_inputparam = login_inputparam || {};
    //     login_inputparam["serviceID"] = "UserLoginRepo$login";
    //     login_inputparam["operation"] = "login";
    //     login_inputparam["userid"] = self.view.txtEmail.text;
    //     login_inputparam["password"] = self.view.txtPassword.text;
    //     UserLoginRepo$login = 
    //       mfidentityserviceinvoker("UserLoginRepo",
    //                                 login_inputparam,
    //                                  function success(){
    //                  alert("Login Success!!");
    //                  self.getUserObj();
    //                       },
    //        function failure(){
    //               alert("Login Failed!!!!");
    //     });
    //     }
    // }
});
define("frmScreen2LoginControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_a155c58c4a924e91a20df2f59c4953f1: function AS_Button_a155c58c4a924e91a20df2f59c4953f1(eventobject) {
        var self = this;

        function SHOW_ALERT_f3c6919f6adf4ba8bb010479ddbdfe05_True() {}

        function SHOW_ALERT_f3c6919f6adf4ba8bb010479ddbdfe05_False() {}

        function INVOKE_SERVICE_b58c7c833c9f425dbb30ee1cd6dad1d2_Success(response) {
            voltmx.application.dismissLoadingScreen();
            self.getUserObj.call(this);

            function SHOW_ALERT_f3c6919f6adf4ba8bb010479ddbdfe05_Callback(response) {
                if (response === true) {
                    SHOW_ALERT_f3c6919f6adf4ba8bb010479ddbdfe05_True();
                } else {
                    SHOW_ALERT_f3c6919f6adf4ba8bb010479ddbdfe05_False();
                }
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_CONFIRMATION,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "You have SuccessFully Logged in !!1",
                "alertHandler": SHOW_ALERT_f3c6919f6adf4ba8bb010479ddbdfe05_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function INVOKE_SERVICE_b58c7c833c9f425dbb30ee1cd6dad1d2_Failure(error) {
            voltmx.application.dismissLoadingScreen();
            alert("login failed!!!");

            function SHOW_ALERT_bd139b56c24b4f66b97f851ff3b82328_Callback(response) {
                if (response === true) {
                    SHOW_ALERT_bd139b56c24b4f66b97f851ff3b82328_True();
                } else {
                    SHOW_ALERT_bd139b56c24b4f66b97f851ff3b82328_False();
                }
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_CONFIRMATION,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Login Failed Please try Again!!!!",
                "alertHandler": SHOW_ALERT_bd139b56c24b4f66b97f851ff3b82328_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function SHOW_ALERT_bd139b56c24b4f66b97f851ff3b82328_True() {}

        function SHOW_ALERT_bd139b56c24b4f66b97f851ff3b82328_False() {}
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "DevAzureB2C$login";
        login_inputparam["operation"] = "login";
        login_inputparam["UseDeviceBrowser"] = true;
        login_inputparam['success_url'] = encodeURIComponent("intent://com.orgname.Alwataneya2/#Intent;scheme=alwataneya2;package=com.orgname.Alwataneya2;end");
        DevAzureB2C$login = mfidentityserviceinvoker("DevAzureB2C", login_inputparam, INVOKE_SERVICE_b58c7c833c9f425dbb30ee1cd6dad1d2_Success, INVOKE_SERVICE_b58c7c833c9f425dbb30ee1cd6dad1d2_Failure);
    }
});
define("frmScreen2LoginController", ["userfrmScreen2LoginController", "frmScreen2LoginControllerActions"], function() {
    var controller = require("userfrmScreen2LoginController");
    var controllerActions = ["frmScreen2LoginControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

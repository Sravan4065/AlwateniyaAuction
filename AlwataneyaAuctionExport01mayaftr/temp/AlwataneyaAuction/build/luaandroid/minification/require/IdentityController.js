define("userIdentityController", {
    //Type your controller code here 
    getData: function() {
        var self = this;
        var id = 4052; // Asset name
        // Al_Wataneya_Custom_Services
        var AssetCategoriesMasterValues_inputparam = {
            "serviceID": "ms_user_token$get-user-obj",
            "user_id": id, // Pass ID dynamically here
            "user_source": "azure",
            "httpheaders": {},
            "httpconfig": {}
        };
        // Service call to fetch categories
        ms_user_token$get_user_obj = mfintegrationsecureinvokerasync(AssetCategoriesMasterValues_inputparam, "ms_user_token", "get-user-obj", function(status, response) {
            var responseString = JSON.stringify(response);
            //           self.anotherServiceCall(responseString);
            voltmx.store.setItem("UserObj", responseString);
            alert("Response from login: " + responseString);
            alert("Response from json Login : " + JSON.typeOf(responseString));
            voltmx.print("response: " + JSON.stringify(responseString));
            voltmx.print("response: " + responseString);
        });
    },
});
define("IdentityControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_b523337045464b59b16688cbed44c2f8: function AS_Button_b523337045464b59b16688cbed44c2f8(eventobject) {
        var self = this;

        function SHOW_ALERT_d17d32b627814d219a6a809d3fc89636_True() {
            self.getData.call(this);
            var ntf = new voltmx.mvc.Navigation("undefined");
            ntf.navigate();
        }

        function SHOW_ALERT_f5d00a2254644da4b19b97e3b76f4b18_True() {}

        function INVOKE_SERVICE_d24a59b255504200968b3445fe3f525c_Success(response) {
            function SHOW_ALERT_d17d32b627814d219a6a809d3fc89636_Callback() {
                SHOW_ALERT_d17d32b627814d219a6a809d3fc89636_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "message": "Login Successfull!!!",
                "alertHandler": SHOW_ALERT_d17d32b627814d219a6a809d3fc89636_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function INVOKE_SERVICE_d24a59b255504200968b3445fe3f525c_Failure(error) {
            function SHOW_ALERT_f5d00a2254644da4b19b97e3b76f4b18_Callback() {
                SHOW_ALERT_f5d00a2254644da4b19b97e3b76f4b18_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "message": "Login Failed Try Again!!",
                "alertHandler": SHOW_ALERT_f5d00a2254644da4b19b97e3b76f4b18_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "CustomAzureB2C$login";
        login_inputparam["operation"] = "login";
        login_inputparam["UseDeviceBrowser"] = true;
        login_inputparam['success_url'] = encodeURIComponent("intent://com.orgname.Alwataneya2/#Intent;scheme=alwataneya2;package=com.orgname.Alwataneya2;end");
        CustomAzureB2C$login = mfidentityserviceinvoker("CustomAzureB2C", login_inputparam, INVOKE_SERVICE_d24a59b255504200968b3445fe3f525c_Success, INVOKE_SERVICE_d24a59b255504200968b3445fe3f525c_Failure);
    }
});
define("IdentityController", ["userIdentityController", "IdentityControllerActions"], function() {
    var controller = require("userIdentityController");
    var controllerActions = ["IdentityControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

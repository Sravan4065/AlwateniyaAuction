define("userfrmLogin1Controller", {
    //Type your controller code here 
    onNavigate: function() {
        this.view.flxFooter.onClick = this.NavigateToSignUpForm;
        this.view.btnSubmit.onClick = this.loginAction;
    },
    NavigateToSignUpForm: function() {
        var ntf = new voltmx.mvc.Navigation("frmScreen3OTP1");
        ntf.navigate();
    },
    loginAction: function() {
        var self = this;

        function INVOKE_SERVICE_Success(response) {
            var ntf = new voltmx.mvc.Navigation("frmScreen1DashBoard");
            ntf.navigate({
                "variable_email": email,
                "txtEmail_text": self.view.txtEmail.text,
                "_meta_": {
                    "eventName": "onClick",
                    "widgetId": "btnSubmit"
                }
            });
        }

        function INVOKE_SERVICE_Failure(error) {}
        var login_inputparam = login_inputparam || {};
        login_inputparam["serviceID"] = "UserRepo$login";
        login_inputparam["operation"] = "login";
        login_inputparam["userid"] = self.view.txtEmail.text;
        login_inputparam["password"] = self.view.txtPassword.text;
        UserRepo$login = mfidentityserviceinvoker("UserRepo", login_inputparam, INVOKE_SERVICE_Success, INVOKE_SERVICE_Failure);
    }
});
define("frmLogin1ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmLogin1Controller", ["userfrmLogin1Controller", "frmLogin1ControllerActions"], function() {
    var controller = require("userfrmLogin1Controller");
    var controllerActions = ["frmLogin1ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

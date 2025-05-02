define("userfrmPaymentMethodController", {
    //Type your controller code here 
});
define("frmPaymentMethodControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_efd93f26dffb4ac4ad7f192d266dc93b: function AS_Button_efd93f26dffb4ac4ad7f192d266dc93b(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "AlwataneyaAuction",
            "friendlyName": "frmPaymentMethod2"
        });
        ntf.navigate();
    }
});
define("frmPaymentMethodController", ["userfrmPaymentMethodController", "frmPaymentMethodControllerActions"], function() {
    var controller = require("userfrmPaymentMethodController");
    var controllerActions = ["frmPaymentMethodControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

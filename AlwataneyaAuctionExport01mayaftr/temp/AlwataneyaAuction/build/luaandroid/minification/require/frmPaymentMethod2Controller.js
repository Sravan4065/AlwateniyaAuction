define("userfrmPaymentMethod2Controller", {
    //Type your controller code here 
});
define("frmPaymentMethod2ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_cd320c2a40574715bd6778f5cb988e1a: function AS_Button_cd320c2a40574715bd6778f5cb988e1a(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "AlwataneyaAuction",
            "friendlyName": "frmPaymentProcess"
        });
        ntf.navigate();
    },
    AS_Image_hb4f97f1a8ee4423a3f471a0283b243c: function AS_Image_hb4f97f1a8ee4423a3f471a0283b243c(eventobject, x, y) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "AlwataneyaAuction",
            "friendlyName": "frmPaymentMethod"
        });
        ntf.navigate();
    }
});
define("frmPaymentMethod2Controller", ["userfrmPaymentMethod2Controller", "frmPaymentMethod2ControllerActions"], function() {
    var controller = require("userfrmPaymentMethod2Controller");
    var controllerActions = ["frmPaymentMethod2ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

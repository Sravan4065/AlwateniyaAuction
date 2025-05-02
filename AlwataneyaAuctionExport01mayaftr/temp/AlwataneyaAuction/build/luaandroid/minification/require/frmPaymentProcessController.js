define("userfrmPaymentProcessController", {
    //Type your controller code here 
});
define("frmPaymentProcessControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ae49ff4afa1e42e284f4b62458880c3b: function AS_Button_ae49ff4afa1e42e284f4b62458880c3b(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "AlwataneyaAuction",
            "friendlyName": "frmCompleteAutoBid"
        });
        ntf.navigate();
    },
    AS_Image_d7f9d83297934997ad925fe3ce6aeb78: function AS_Image_d7f9d83297934997ad925fe3ce6aeb78(eventobject, x, y) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "AlwataneyaAuction",
            "friendlyName": "frmPaymentMethod2"
        });
        ntf.navigate();
    }
});
define("frmPaymentProcessController", ["userfrmPaymentProcessController", "frmPaymentProcessControllerActions"], function() {
    var controller = require("userfrmPaymentProcessController");
    var controllerActions = ["frmPaymentProcessControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

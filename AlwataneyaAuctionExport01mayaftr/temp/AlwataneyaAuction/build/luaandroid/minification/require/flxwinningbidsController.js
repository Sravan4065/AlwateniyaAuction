define("userflxwinningbidsController", {
    //Type your controller code here 
});
define("flxwinningbidsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxwinningbidsController", ["userflxwinningbidsController", "flxwinningbidsControllerActions"], function() {
    var controller = require("userflxwinningbidsController");
    var controllerActions = ["flxwinningbidsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

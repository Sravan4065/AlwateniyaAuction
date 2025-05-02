define("userflxRowDataController", {
    //Type your controller code here 
});
define("flxRowDataControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxRowDataController", ["userflxRowDataController", "flxRowDataControllerActions"], function() {
    var controller = require("userflxRowDataController");
    var controllerActions = ["flxRowDataControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

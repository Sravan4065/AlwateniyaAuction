define("userflxlostbidController", {
    //Type your controller code here 
});
define("flxlostbidControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxlostbidController", ["userflxlostbidController", "flxlostbidControllerActions"], function() {
    var controller = require("userflxlostbidController");
    var controllerActions = ["flxlostbidControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

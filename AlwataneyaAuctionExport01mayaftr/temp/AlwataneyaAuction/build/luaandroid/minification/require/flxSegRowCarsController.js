define("userflxSegRowCarsController", {
    //Type your controller code here 
});
define("flxSegRowCarsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSegRowCarsController", ["userflxSegRowCarsController", "flxSegRowCarsControllerActions"], function() {
    var controller = require("userflxSegRowCarsController");
    var controllerActions = ["flxSegRowCarsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

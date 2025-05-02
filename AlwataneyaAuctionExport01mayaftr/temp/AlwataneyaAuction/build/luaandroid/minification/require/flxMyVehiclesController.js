define("userflxMyVehiclesController", {
    //Type your controller code here 
});
define("flxMyVehiclesControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxMyVehiclesController", ["userflxMyVehiclesController", "flxMyVehiclesControllerActions"], function() {
    var controller = require("userflxMyVehiclesController");
    var controllerActions = ["flxMyVehiclesControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("usersegRowTypesController", {
    //Type your controller code here 
});
define("segRowTypesControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("segRowTypesController", ["usersegRowTypesController", "segRowTypesControllerActions"], function() {
    var controller = require("usersegRowTypesController");
    var controllerActions = ["segRowTypesControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

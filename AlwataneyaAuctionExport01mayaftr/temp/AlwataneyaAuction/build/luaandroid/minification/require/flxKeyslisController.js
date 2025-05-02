define("userflxKeyslisController", {
    //Type your controller code here 
});
define("flxKeyslisControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxKeyslisController", ["userflxKeyslisController", "flxKeyslisControllerActions"], function() {
    var controller = require("userflxKeyslisController");
    var controllerActions = ["flxKeyslisControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

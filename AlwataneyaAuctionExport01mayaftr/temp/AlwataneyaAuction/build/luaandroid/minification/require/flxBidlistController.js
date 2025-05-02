define("userflxBidlistController", {
    //Type your controller code here 
});
define("flxBidlistControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxBidlistController", ["userflxBidlistController", "flxBidlistControllerActions"], function() {
    var controller = require("userflxBidlistController");
    var controllerActions = ["flxBidlistControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

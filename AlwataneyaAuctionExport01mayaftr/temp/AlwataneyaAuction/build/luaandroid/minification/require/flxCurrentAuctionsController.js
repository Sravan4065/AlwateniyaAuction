define("userflxCurrentAuctionsController", {
    //Type your controller code here 
});
define("flxCurrentAuctionsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCurrentAuctionsController", ["userflxCurrentAuctionsController", "flxCurrentAuctionsControllerActions"], function() {
    var controller = require("userflxCurrentAuctionsController");
    var controllerActions = ["flxCurrentAuctionsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userflxSegNotificationController", {
    //Type your controller code here 
});
define("flxSegNotificationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSegNotificationController", ["userflxSegNotificationController", "flxSegNotificationControllerActions"], function() {
    var controller = require("userflxSegNotificationController");
    var controllerActions = ["flxSegNotificationControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

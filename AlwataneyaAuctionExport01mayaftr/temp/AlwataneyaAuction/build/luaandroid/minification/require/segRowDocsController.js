define("usersegRowDocsController", {
    //Type your controller code here 
});
define("segRowDocsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("segRowDocsController", ["usersegRowDocsController", "segRowDocsControllerActions"], function() {
    var controller = require("usersegRowDocsController");
    var controllerActions = ["segRowDocsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

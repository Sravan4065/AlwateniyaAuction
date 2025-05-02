define("userfrmOnlineAuctionController", {
    //Type your controller code here 
});
define("frmOnlineAuctionControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmOnlineAuctionController", ["userfrmOnlineAuctionController", "frmOnlineAuctionControllerActions"], function() {
    var controller = require("userfrmOnlineAuctionController");
    var controllerActions = ["frmOnlineAuctionControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

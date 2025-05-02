define("userfrmLandingPageController", {
    onNavigate: function() {
        this.view.btnBuyer.onClick = this.BuyerLogin;
        this.view.btnSeller.onClick = this.sellerLogin;
    },
    BuyerLogin: function() {
        var ntf = new voltmx.mvc.Navigation("frmScreen2Login");
        ntf.navigate();
    },
    sellerLogin: function() {
        var ntf = new voltmx.mvc.Navigation("frmScreen2Login");
        ntf.navigate();
    }
});
define("frmLandingPageControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmLandingPageController", ["userfrmLandingPageController", "frmLandingPageControllerActions"], function() {
    var controller = require("userfrmLandingPageController");
    var controllerActions = ["frmLandingPageControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userfrmOpenAuctionsController", {
    onNavigate: function() {
        this.view.flxBackNavigateIcon.onClick = this.backToPreviousForm.bind(this);
    },
    backToPreviousForm: function() {
        var x = new voltmx.mvc.Navigation("frmProfile");
        x.navigate();
    }
});
define("frmOpenAuctionsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmOpenAuctionsController", ["userfrmOpenAuctionsController", "frmOpenAuctionsControllerActions"], function() {
    var controller = require("userfrmOpenAuctionsController");
    var controllerActions = ["frmOpenAuctionsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

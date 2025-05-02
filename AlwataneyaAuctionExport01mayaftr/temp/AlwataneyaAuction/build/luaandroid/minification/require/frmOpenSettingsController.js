define("userfrmOpenSettingsController", {
    onNavigate: function() {
        this.view.flxBackNavigateIcon.onClick = this.backToPreviousForm.bind(this);
    },
    backToPreviousForm: function() {
        var x = new voltmx.mvc.Navigation("frmProfile");
        x.navigate();
    }
});
define("frmOpenSettingsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmOpenSettingsController", ["userfrmOpenSettingsController", "frmOpenSettingsControllerActions"], function() {
    var controller = require("userfrmOpenSettingsController");
    var controllerActions = ["frmOpenSettingsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

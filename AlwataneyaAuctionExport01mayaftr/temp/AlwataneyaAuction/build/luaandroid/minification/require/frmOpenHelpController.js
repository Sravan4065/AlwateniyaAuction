define("userfrmOpenHelpController", {
    onNavigate: function() {
        this.view.flxBackNavigateIcon.onClick = this.backToPreviousForm.bind(this);
    },
    backToPreviousForm: function() {
        var previousForm = voltmx.application.getPreviousForm();
        if (previousForm && previousForm.id) {
            var x = new voltmx.mvc.Navigation(previousForm.id);
            x.navigate();
        } else {
            voltmx.print("No previous form found!");
        }
    }
});
define("frmOpenHelpControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmOpenHelpController", ["userfrmOpenHelpController", "frmOpenHelpControllerActions"], function() {
    var controller = require("userfrmOpenHelpController");
    var controllerActions = ["frmOpenHelpControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

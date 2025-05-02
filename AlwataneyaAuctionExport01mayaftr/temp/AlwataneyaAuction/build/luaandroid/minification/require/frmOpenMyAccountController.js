define("userfrmOpenMyAccountController", {
    onNavigate: function() {
        this.view.flxBackNavigateIcon.onClick = this.backToPreviousForm.bind(this);
        this.view.segProfileItems.onRowClick = this.segProfileItemsOnRowClickAction.bind(this);
    },
    backToPreviousForm: function() {
        var x = new voltmx.mvc.Navigation("frmProfile");
        x.navigate();
    },
    segProfileItemsOnRowClickAction: function() {
        var selectedProfileItems = this.view.segProfileItems.selectedRowItems;
        var selectedValue = selectedProfileItems[0].lblItemName;
        switch (selectedValue) {
            case "My Documents":
                {
                    var ntf = new voltmx.mvc.Navigation("frmMyDocuments");
                    ntf.navigate();
                }
                break;
            case "WatchList":
                {}
                break;
            case "Saved Searches":
                {}
                break;
            case "Payments":
                {}
                break;
            case "Payment History":
                {}
                break;
            case "Deposits":
                {}
                break;
        }
    }
});
define("frmOpenMyAccountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmOpenMyAccountController", ["userfrmOpenMyAccountController", "frmOpenMyAccountControllerActions"], function() {
    var controller = require("userfrmOpenMyAccountController");
    var controllerActions = ["frmOpenMyAccountControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

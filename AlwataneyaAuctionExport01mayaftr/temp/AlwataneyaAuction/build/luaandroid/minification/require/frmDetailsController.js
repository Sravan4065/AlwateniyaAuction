define("userfrmDetailsController", {
    onNavigate: function(context) {
        this.context = context;
        this.view.preShow = this.onPreShow.bind(this);
        this.view.flxBack.onClick = () => {
            var x = new voltmx.mvc.Navigation(voltmx.application.getPreviousForm().id);
            x.navigate();
        }
    },
    onPreShow: function() {
        this.invokeGetImagesFilesById();
        this.assignValuesToFieldsFromContext();
    },
    assignValuesToFieldsFromContext: function() {
        if (this.context && this.context.selectedItem) {
            var item = this.context.selectedItem;
            this.view.lblCarName.text = item.lblCarname;
            this.view.lblLotID.text = item.lblLotNum;
            this.view.lblLocation.text = item.lblLocationName;
        }
    },
    invokeGetImagesFilesById: function() {
        var self = this;

        function invokeFilesByIdCallback(status, get_images_files_by_id) {
            voltmx.print(get_images_files_by_id);
        }
        if (get_images_files_by_id_inputparam == undefined) {
            var get_images_files_by_id_inputparam = {};
        }
        var objid;
        if (this.context && this.context.selectedItem) {
            objid = this.context.selectedItem.lblObjID
        }
        get_images_files_by_id_inputparam["serviceID"] = "fry_int_fleet$get-images-files-by-id";
        get_images_files_by_id_inputparam["object_id"] = objid;
        var get_images_files_by_id_httpheaders = {
            "user_token": ""
        };
        get_images_files_by_id_inputparam["httpheaders"] = get_images_files_by_id_httpheaders;
        var get_images_files_by_id_httpconfigs = {};
        get_images_files_by_id_inputparam["httpconfig"] = get_images_files_by_id_httpconfigs;
        fry_int_fleet$get_images_files_by_id = mfintegrationsecureinvokerasync(get_images_files_by_id_inputparam, "fry_int_fleet", "get-images-files-by-id", invokeFilesByIdCallback);
    }
});
define("frmDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmDetailsController", ["userfrmDetailsController", "frmDetailsControllerActions"], function() {
    var controller = require("userfrmDetailsController");
    var controllerActions = ["frmDetailsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

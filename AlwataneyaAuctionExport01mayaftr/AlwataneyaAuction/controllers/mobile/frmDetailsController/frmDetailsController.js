define({ 

 onNavigate: function(context)
  {
    if(context){
   this.context = context;
    }
    this.view.preShow = this.onPreShow.bind(this);
    this.view.flxBack.onClick = () => {
      var x = new voltmx.mvc.Navigation(voltmx.application.getPreviousForm().id);
      x.navigate();
    }
    this.view.flxBackFromMultipleImages.onClick = this.hideMutlipleImagesflex.bind(this);
    this.view.flxShowMultipleImages.onClick = this.showMultipleImagesflex.bind(this);
   
  },
  
  onPreShow: function()
  {
    this.invokeGetImagesFilesById();
    this.assignValuesToFieldsFromContext();
  },
  assignValuesToFieldsFromContext: function()
  {
    if (this.context && this.context.selectedItem) {
    var item = this.context.selectedItem;
     this.view.lblCarName.text = item.lblCarname;
    this.view.lblLotID.text = item.lblLotNum;
    this.view.lblLocation.text = item.lblLocationName;
  }
    
  },
  
  invokeGetImagesFilesById: function()
  {
 var self = this;

    function invokeFilesByIdCallback(status, get_images_files_by_id) {
      voltmx.print(get_images_files_by_id);
    }
    if (get_images_files_by_id_inputparam == undefined) {
        var get_images_files_by_id_inputparam = {};
    }
    var objid;
     if (this.context && this.context.selectedItem) {
       objid =  this.context.selectedItem.lblObjID
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

  },
  
  hideMutlipleImagesflex: function()
  {
    this.view.flxScrollMain.setVisibility(true);
    this.view.flxMultipleImages.setVisibility(false);
    this.view.flxWhatsappcomponent.setVisibility(true);
    this.view.flxBidNowButton.setVisibility(true);
  },
  showMultipleImagesflex: function()
  {
    this.view.flxScrollMain.setVisibility(false);
    this.view.flxMultipleImages.setVisibility(true);
    this.view.flxWhatsappcomponent.setVisibility(false);
    this.view.flxBidNowButton.setVisibility(false);
  }

 });
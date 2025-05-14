define({ 

 onNavigate: function(context)
  {
    this.userid = voltmx.store.getItem("userId");
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
    this.invokeFleetDetails();
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
  
  invokeFleetDetails: function()
  {
    var self = this;

    function fleetDetailsCallBack(status, fleet_details) {
      voltmx.print(fleet_details);
    }
    if (fleet_details_inputparam == undefined) {
        var fleet_details_inputparam = {};
    }
    fleet_details_inputparam["serviceID"] = "fry_wf$fleet-details";
    fleet_details_inputparam["object_id"] = this.context.selectedItem.lblObjID;
//     fleet_details_inputparam["job_title"] = 
//     fleet_details_inputparam["operation_id"] = 
//     fleet_details_inputparam["plaform"] = 
    fleet_details_inputparam["user_id"] = this.userid;
    
    var fleet_details_httpheaders = {};
    fleet_details_inputparam["httpheaders"] = fleet_details_httpheaders;
    var fleet_details_httpconfigs = {};
    fleet_details_inputparam["httpconfig"] = fleet_details_httpconfigs;
    fry_wf$fleet_details = mfintegrationsecureinvokerasync(fleet_details_inputparam, "fry_wf", "fleet-details", fleetDetailsCallBack);

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
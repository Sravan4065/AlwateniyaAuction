define({ 

 onNavigate: function()
  {
   this.userid = voltmx.store.getItem("userId");
   this.view.preShow = this.onPreShow.bind(this); 
  },
  
  onPreShow: function()
  {
    this.invokeGetTrackedObjects();
    
    
    
  },
  
  invokeGetTrackedObjects: function()
  {
     var self = this;

    function invServiceCallBack(status, get_tracked_objects) {
      voltmx.print(get_tracked_objects);
    }
    if (get_tracked_objects_inputparam == undefined) {
        var get_tracked_objects_inputparam = {};
    }
    var usertoken = voltmx.store.getItem("getUserAccesstoken");
    get_tracked_objects_inputparam["serviceID"] = "fry_int_buyer$get-tracked-objects";
    get_tracked_objects_inputparam["user_id"] = this.userid;
    get_tracked_objects_inputparam["type"] = "";
    get_tracked_objects_inputparam["page"] = "1";
    get_tracked_objects_inputparam["pageSize"] = "10";
    var get_tracked_objects_httpheaders = {
      "user_token": usertoken
    };
    get_tracked_objects_inputparam["httpheaders"] = get_tracked_objects_httpheaders;
    var get_tracked_objects_httpconfigs = {};
    get_tracked_objects_inputparam["httpconfig"] = get_tracked_objects_httpconfigs;
    fry_int_buyer$get_tracked_objects = mfintegrationsecureinvokerasync(get_tracked_objects_inputparam, "fry_int_buyer", "get-tracked-objects", invServiceCallBack);

  }
  
 });
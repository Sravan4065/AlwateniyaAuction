define({ 

 onNavigate: function(){
   
   
   this.view.preShow = this.onPreShow.bind(this);
   this.view.flxBack.onClick = this.navToProfile.bind(this);
  },
  
  onPreShow: function()
  {
    
    this.invokeMYVehiclesService();
    
  },
  
  
//   vehicleList: function(){
//      this.view.flxSegVehicles.widgetDataMap = {   
//        "lblVehicle": "lblVehicle",
//        "flxEyeIcon": "flxEyeIcon",
//        "imgEyeIcon": "imgEyeIcon"    
//     }
    
    
//      var vehicles=[
//            { "lblVehicle": "Nissan Altima 2020",
//              "imgEyeIcon": "eye_icon.png" 
//            },
//        { "lblVehicle": "Nissan Sunny 2020",
//              "imgEyeIcon": "eye_icon.png" 
//            },
//        { "lblVehicle": "Nissan SENTRA 2019",
//              "imgEyeIcon": "eye_icon.png" 
//            }
//     ]
    
//     this.view.segVehicles.setData(vehicles)
    
    
    
//   },
  
  
  invokeMYVehiclesService: function()
  {
      var self = this;

    function invServiceCallBack(status, user_fleet_my_vehicles) {
      self.setVehiclesDataToSeg(user_fleet_my_vehicles.records);
    }
    if (user_fleet_my_vehicles_inputparam == undefined) {
        var user_fleet_my_vehicles_inputparam = {};
    }
    var userId = voltmx.store.getItem("userId");
    user_fleet_my_vehicles_inputparam["serviceID"] = "fry_int_fleet$user-fleet-my-vehicles";
    user_fleet_my_vehicles_inputparam["user_id"] = userId;
    user_fleet_my_vehicles_inputparam["foundrySerivceName"] = "Your Vehicles";
    user_fleet_my_vehicles_inputparam["lot_no"] = "";
     user_fleet_my_vehicles_inputparam["title"] = "";
     user_fleet_my_vehicles_inputparam["chassis_number"] = "";
     user_fleet_my_vehicles_inputparam["created_on"] = "";
     user_fleet_my_vehicles_inputparam["branch"] = "";
      user_fleet_my_vehicles_inputparam["page_number"] = "1";
      user_fleet_my_vehicles_inputparam["page_size"] = "10";
    
    

   var userToken = voltmx.store.getItem("getUserAccesstoken");
    var user_fleet_my_vehicles_httpheaders = {
      "user_token": userToken
    };
    user_fleet_my_vehicles_inputparam["httpheaders"] = user_fleet_my_vehicles_httpheaders;
    var user_fleet_my_vehicles_httpconfigs = {};
    user_fleet_my_vehicles_inputparam["httpconfig"] = user_fleet_my_vehicles_httpconfigs;
    fry_int_fleet$user_fleet_my_vehicles = mfintegrationsecureinvokerasync(user_fleet_my_vehicles_inputparam, "fry_int_fleet", "user-fleet-my-vehicles", invServiceCallBack);
    
  },
  
  setVehiclesDataToSeg: function(records)
  {
     var self = this;
    
    self.view.segVehicles.widgetDataMap = {
      "lblObjId":"lblObjId",
      "lblVehicle":"lblVehicle",
      "flxEyeIcon":"flxEyeIcon"
    };
    
     var data = [];
    
    for (var i = 0; i < records.length; i++) {
  var item = records[i];
    data.push({
       lblVehicle: item.chassis_number,
      flxEyeIcon: {
        "onClick": self.vehicleDetails.bind(this,item)
      }
    })
    }
    
    self.view.segVehicles.setData(data);
  },
  vehicleDetails: function(item){
    
    var self = this;
    self.view.flxSegVehicles.setVisibility(false);
   self.view.flxTable.setVisibility(true); 
    
    
     var vehicleDetail=[
        { "lblAuctionId":"Auction Id" ,
        "lblAuctionIdValue": item.auction_id || "N/A",
        "lblChassisNo":"Chassis No",
        "lblchassisNoValue": item.chassis_number || "N/A",
        "lblModel":"Model",
        "lblModelValue":"2020",
        "lblAdded":"Added",
        "lblAddedValue":"2025-05-01",
        "lblTargetSellingPrice": "Target Selling Price",
        "lbltargetSellingPriceValue": "AED 25,000",
        "lblLocation":"Location",
        "lblLocationValue":"Abu Dhabi",
        "lblUploadFile":"Upload File",
        "lblUploadFileValue":"altima_doc.pdf",
        "lblAddRequest":"Add Request",
        "lblAddRequestValue":"Request Sent",
        "lblDone":"Done",
        "btnDone":{"text":"Done",
                   "onClick": this.invokeFleetWFStatus.bind(this,item)
                  }
        },
   ]
   
   
   self.view.segTableVehicle.setData(vehicleDetail);
    
  },
  
  invokeFleetWFStatus: function(item)
  {
    
  },
  
  navToProfile: function()
  {
    new voltmx.mvc.Navigation("frmProfile").navigate();
  }

 
  
  
  
 });
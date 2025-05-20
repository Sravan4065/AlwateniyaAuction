define({ 

 onNavigate: function()
  {
    this.view.preShow = this.onPreShow.bind(this);
    this.view.VehiclePayments.flxBack.onClick = () =>  new  voltmx.mvc.Navigation("frmOpenMyAccount").navigate();
  },
  
  onPreShow: function()
  {
    this.toggleFooterIcons();
    this.getVehiclePayments();
  },
    getVehiclePayments: function(){

      var self = this;
      var get_buyer_fleet_payments_inputparam = {};
      var userId =  voltmx.store.getItem("userId");
      var usertoken = voltmx.store.getItem("getUserAccesstoken");

      get_buyer_fleet_payments_inputparam["serviceID"] = "fry_wf$get-buyer-fleet-payments";
      get_buyer_fleet_payments_inputparam["user_id"] = userId;
      var get_buyer_fleet_payments_httpheaders = {
        "user_token": usertoken
      };
      get_buyer_fleet_payments_inputparam["httpheaders"] = get_buyer_fleet_payments_httpheaders;
      var get_buyer_fleet_payments_httpconfigs = {};
      get_buyer_fleet_payments_inputparam["httpconfig"] = get_buyer_fleet_payments_httpconfigs;
      fry_wf$get_buyer_fleet_payments =
        mfintegrationsecureinvokerasync(get_buyer_fleet_payments_inputparam,
                                           "fry_wf", 
                         "get-buyer-fleet-payments", 
                                        function(status,response){
                           voltmx.print("status: "+status);
                           voltmx.print("response :"+JSON.stringify(response));
       
      if (
      
        !response ||
        !response.fleet_payment_details ||
        response.fleet_payment_details.length === 0
      ) {
        voltmx.print("Error: Invalid fleet payment response.");
        return;
      }

      var fleet_payment_details = response.fleet_payment_details[0];
      var total_no_of_vehicles = fleet_payment_details.total_no_of_vehicles;
      var pending_vehicles = fleet_payment_details.pending_vehicles;
      var paid_vehicles = fleet_payment_details.paid_vehicles;

      self.view.lblPendingAmount.text = pending_vehicles;
      self.view.lblPaidVehicleAmount.text = paid_vehicles;
      self.view.VehiclePayments.lblTotalPaidVehicles.text = paid_vehicles;
      self.view.VehiclePayments.lblTotalApprovedVehiclesCount.text = total_no_of_vehicles;
    }
  );

  },
  toggleFooterIcons: function()
  {
   this.view.Footer2.flxHL1.setVisibility(false);
  this.view.Footer2.flxHL2.setVisibility(false);
  this.view.Footer2.flxHL3.setVisibility(false);
  this.view.Footer2.flxHL4.setVisibility(false);
  this.view.Footer2.flxHL5.setVisibility(true);
    
  this.view.Footer2.imgHome.src = "homefooter.png";
  this.view.Footer2.lblHome.skin = "sknlblCPBoldCapt181818Font100";
  
  this.view.Footer2.imgMegaPhone.src = "auctionsfooter.png";
  this.view.Footer2.lblAuctions.skin = "sknlblCPBoldCapt181818Font100";
   this.view.Footer2.lblSellCar.skin = "sknlblCPBoldCapt181818Font100"; 
  
    
    var isLogin = voltmx.store.getItem("isLogin");
//     alert("isLogin :"+isLogin);
    var isUserCreated = voltmx.store.getItem("isUserCreated");
    
   if(isLogin === true &&  isUserCreated === true){
    
      this.view.Footer2.imgSellCar.setVisibility(false);
      this.view.Footer2.flxProfile.setVisibility(true);
    }
    else{
      this.view.Footer2.imgSellCar.setVisibility(true);
      this.view.Footer2.flxProfile.setVisibility(false);
    }
  }

 });
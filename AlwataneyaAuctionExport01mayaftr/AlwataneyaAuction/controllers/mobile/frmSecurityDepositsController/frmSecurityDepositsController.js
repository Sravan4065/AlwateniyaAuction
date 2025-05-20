define({ 

 onNavigate: function()
  {
    this.view.preShow = this.onPreShow.bind(this);
    this.view.SecurityDeposit.flxBack.onClick = () => new voltmx.mvc.Navigation("frmOpenMyAccount").navigate();
  },
  
  onPreShow: function()
  {
    this.toggleFooterIcons();
    this.getSecurityDeposit();
  },
  getSecurityDeposit: function(){
    
    var self = this;

        var get_buyer_security_deposit_inputparam = {};
//         get_buyer_security_deposit_inputparam = get_buyer_security_deposit_inputparam || {};
    
    var userId = voltmx.store.getItem("userId");
    var usertoken = voltmx.store.getItem("getUserAccesstoken");
    get_buyer_security_deposit_inputparam["serviceID"] = "fry_wf$get-buyer-security-deposit";
    get_buyer_security_deposit_inputparam["user_id"] = userId;
    
    var get_buyer_security_deposit_httpheaders = {
      "user_token": usertoken
    };
    get_buyer_security_deposit_inputparam["httpheaders"] = get_buyer_security_deposit_httpheaders;
    var get_buyer_security_deposit_httpconfigs = {};
    get_buyer_security_deposit_inputparam["httpconfig"] = get_buyer_security_deposit_httpconfigs;
    fry_wf$get_buyer_security_deposit = mfintegrationsecureinvokerasync(get_buyer_security_deposit_inputparam, 
                                        "fry_wf",
                                      "get-buyer-security-deposit", 
                                      function(status,response){
      voltmx.print("status: "+status);
      voltmx.print("security deposit :"+JSON.stringify(response));
       if ( !response || !response.security_deposit_details || response.security_deposit_details.length === 0) {
        alert("Failed to get security deposit details.");
        return;
      }

      var details = response.security_deposit_details[0];
      var available_security_deposit = details.avaliable_security_deposit;
      var available_bidding_limit = details.avaliable_bidding_limit;
      var used_limit = details.used_limit;

      self.view.SecurityDeposit.lblSDAmount.text = available_security_deposit;
      self.view.SecurityDeposit.lblSDBidAmount.text = available_bidding_limit;
      self.view.SecurityDeposit.lblSDCurrentAmount.text = used_limit;
      
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
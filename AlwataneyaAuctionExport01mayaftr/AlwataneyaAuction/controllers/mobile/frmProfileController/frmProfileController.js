define({ 

 //Type your controller code here 
  
  onNavigate: function(){
    this.view.flxSellCar.onClick = this.flxSellCarOnClickAction;
    this.view.preShow = this.preshowFunctions.bind(this);
    
//     this.view.Footer2.flxSellCar.onClick = this.Footer2flxSellCarOnClickAction;
   this.view.flxLogout.onClick = this.logoutSession.bind(this);
//    this.view.btnCompleteKYC.onClick = this.btnCompleteKYCOnClickAction;
    this.view.flxMyVehicles.onClick = this.navToMyVehicles.bind(this);
    
    this.view.flxToggleBar.onClick = this.toggleSwitchSellerBuyer.bind(this);
//    this.view.flxLogout.onClick = this.flxLogoutOnClickAction;
  },
  
  logoutSession: function(){
    voltmx.store.setItem("isLogin",false);

    voltmx.store.removeItem("refreshtoken");
    voltmx.store.removeItem("expon");
    voltmx.store.removeItem("userAccessTokenExp");


    voltmx.store.setItem("isUserCreated",false);
    voltmx.store.removeItem("accesstoken");
    voltmx.store.removeItem("userObject");
    voltmx.store.removeItem("getUserAccesstoken");
    voltmx.store.removeItem("userId");
    this.preshowFunctions();
    
      var x = new voltmx.mvc.Navigation("frmDashBoard");
      x.navigate();
//     alert("isLogin :"+isUserCreated);
  },
  
  preshowFunctions: function(){
    this.mode = voltmx.store.getItem("mode") || "seller";
     if(this.mode === "seller")
      {
        this.nextSwitch = "buyer";
      }
    else{
      this.nextSwitch = "seller";
    }
    
    this.getSwitchState();
    this.getFullName();
    this.loginConfirmation();
    this.toggleFooterIcons();
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
  },
  getFullName: function(){
     var username;
      var isLogin = voltmx.store.getItem("isLogin");
      if(isLogin){
         username = voltmx.store.getItem("username");
      }
      this.view.lblUsernameMenubar.text = username;
  },
  loginConfirmation: function(){
     var isLogin =voltmx.store.getItem("isLogin");
//     alert("isLogin :"+isLogin);
    var isUserCreated = voltmx.store.getItem("isUserCreated");
//     alert("isLogin :"+isUserCreated);
    if(isLogin === true &&  isUserCreated === true){
      this.view.Footer2.imgSellCar.setVisibility(false);
      this.view.Footer2.flxProfile.setVisibility(true);
    }
    else{
      this.view.Footer2.imgSellCar.setVisibility(true);
      this.view.Footer2.flxProfile.setVisibility(false);
    }
  },
  flxSellCarOnClickAction: function(){
    var ntf = new voltmx.mvc.Navigation("frmSellCarList12");
    ntf.navigate();
  },
  Footer2flxSellCarOnClickAction: function(){
    var ntf = new voltmx.mvc.Navigation("frmDashBoard");
    ntf.navigate();
  },
  btnCompleteKYCOnClickAction: function(){
    var ntf = new voltmx.mvc.Navigation("frmUploadKYC");
    ntf.navigate();
  },
  flxLogoutOnClickAction: function(){
    voltmx.store.setItem("isLogin", false);
    var ntf = new voltmx.mvc.Navigation("frmDashBoard");
    ntf.navigate();
  },
  
  navToMyVehicles: function(){
    var x = new voltmx.mvc.Navigation("frmOpenMyVehicles");
    x.navigate();
  },
  
  toggleSwitchSellerBuyer: function()
  {
    if(this.nextSwitch === "buyer"){
      this.view.flxToggleBar.left = null; 
    this.view.flxToggleBar.right = "4dp";
    this.view.flxToggleBar.skin = "sknFlx61b35cRound100px";
      this.view.flxToggleSwitch.skin = "sknFlxFFFFFFRound30px";
      this.view.lblModeInfo1.text = "Add Security Deposit";
      this.view.lblModeInfo2.text = "In order to bid you have to add a security deposit";
      this.view.lblModeName.text = "Buyer Mode";
      this.view.flxAdd.setVisibility(true);
      this.view.flxView.setVisibility(false);
      this.view.lblModeName.skin = "sknLblDubaiffffff20pxBold";
      this.view.flxSwitchContainer.skin = "sknFlx61b35cRounded8px";
     this.nextSwitch = "seller";
      voltmx.store.setItem("mode","buyer");
    }
    else{
       this.view.flxToggleBar.right = null; 
    this.view.flxToggleBar.left = "4dp";
      this.view.flxToggleBar.skin = "sknFlxWhiteRound100px";
      this.view.flxToggleSwitch.skin = "sknFlx767676Round30px";
     this.view.lblModeInfo1.text = "My Bank Account Details";
     this.view.lblModeInfo2.text = "Payment from Emirates Transport will be credited to this account";
      this.view.lblModeName.text = "Seller Mode";
      this.view.flxAdd.setVisibility(false);
      this.view.flxView.setVisibility(true);
      this.view.lblModeName.skin = "sknLblDubai231f2020pxBold";
      this.view.flxSwitchContainer.skin = "sknFlxf1f1f1Rounded8px";
     this.nextSwitch = "buyer";
      voltmx.store.setItem("mode","seller");
    }
  },
  
  getSwitchState: function()
  {
     if(this.mode === "buyer"){
      this.view.flxToggleBar.left = null; 
    this.view.flxToggleBar.right = "4dp";
    this.view.flxToggleBar.skin = "sknFlx61b35cRound100px";
      this.view.flxToggleSwitch.skin = "sknFlxFFFFFFRound30px";
      this.view.lblModeInfo1.text = "Add Security Deposit";
      this.view.lblModeInfo2.text = "In order to bid you have to add a security deposit";
   
      this.view.lblModeName.text = "Buyer Mode";
      this.view.flxAdd.setVisibility(true);
      this.view.flxView.setVisibility(false);
      this.view.lblModeName.skin = "sknLblDubaiffffff20pxBold";
      this.view.flxSwitchContainer.skin = "sknFlx61b35cRounded8px";
     }
     else{
       this.view.flxToggleBar.right = null; 
    this.view.flxToggleBar.left = "4dp";
      this.view.flxToggleBar.skin = "sknFlxWhiteRound100px";
      this.view.flxToggleSwitch.skin = "sknFlx767676Round30px";
     this.view.lblModeInfo1.text = "My Bank Account Details";
      this.view.lblModeInfo2.text = "Payment from Emirates Transport will be credited to this account";
      this.view.lblModeName.text = "Seller Mode";
      this.view.flxAdd.setVisibility(false);
      this.view.flxView.setVisibility(true);
      this.view.lblModeName.skin = "sknLblDubai231f2020pxBold";
      this.view.flxSwitchContainer.skin = "sknFlxf1f1f1Rounded8px";
     }
  }

 });
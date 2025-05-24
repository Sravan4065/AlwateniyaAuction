define({ 

 onNavigate: function(){
   
   this.view.btnProceedToPayment.onClick=this.requestBuyerChange.bind(this);
   this.view.flxDocumentUpload.onClick=this.showUploadOptionsPopUp.bind(this);
   this.view.flxUploadPopupClose.onClick=
     this.closeUploadOptionsPopUp.bind(this);
   this.view.flxBack.onClick = this.navToChangeBuyer.bind(this);
   this.view.preShow = this.onPreShow.bind(this);
   
 },
  
    onPreShow: function()
  {
    this.toggleFooterIcons();
  },
  
  toggleFooterIcons: function()
  {
   this.view.Footer2.flxHL1.setVisibility(false);
  this.view.Footer2.flxHL2.setVisibility(false);
  this.view.Footer2.flxHL3.setVisibility(false);
  this.view.Footer2.flxHL4.setVisibility(false);
  this.view.Footer2.flxHL5.setVisibility(false);
    
  this.view.Footer2.imgHome.src = "homefooter.png";
  this.view.Footer2.lblHome.skin = "sknlblCPBoldCapt181818Font100";
  
  this.view.Footer2.imgMegaPhone.src = "auctionsfooter.png";
  this.view.Footer2.lblAuctions.skin = "sknlblCPBoldCapt181818Font100";
    
   this.view.Footer2.imgMyBids.src = "mybidsfooter.png";
   this.view.Footer2.lblMyBids.skin = "sknlblCPBoldCapt181818Font100";
    
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
  
  requestBuyerChange: function(){
     var navObj = new voltmx.mvc.Navigation("frmConfirmAndPay");
navObj.navigate();
  },
 navToChangeBuyer: function()
  {
    voltmx.mvc.Navigation("frmChangeofBuyer").navigate();
  },

  
  showUploadOptionsPopUp: function(){
   this.view.flxUpload.setVisibility(true);
   },

   closeUploadOptionsPopUp: function(){
   this.view.flxUpload.setVisibility(false);
   }
  
 });
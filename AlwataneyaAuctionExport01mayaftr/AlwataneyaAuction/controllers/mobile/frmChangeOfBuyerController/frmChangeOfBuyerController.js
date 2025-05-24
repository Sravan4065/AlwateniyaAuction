define({ 

 onNavigate: function(){
   
   this.view.btnRquestBuyerCahngeNow.onClick=this.requestBuyerChange.bind(this);
   this.view.flxBack.onClick = this.navToDashboard.bind(this);
   this.view.preShow = this.onPreShow.bind(this);
   
 },
  
  onPreShow: function()
  {
    this.toggleFooterIcons();
  },
  navToDashboard: function()
  {
    
    new voltmx.mvc.Navigation("frmDashBoard").navigate();
  },
  
  requestBuyerChange: function(){
    var nav=voltmx.mvc.Navigation("frmChangeOfBuyer02");
    nav.navigate();
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
  }

 });
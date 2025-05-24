define({ 

 onNavigate: function(){
   
//    voltmx.print("entered")
   
   this.view.flxImg.onClick=this.selectBuyerOrSeller.bind(this);
   this.view.segBuyerOrSeller.onRowClick=this.assignValue.bind(this);
   this.view.preShow = this.onPreShow.bind(this);
   this.view.flxBack.onClick = this.navToRoadSideAsst.bind(this);
   
//     voltmx.print("exit")
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
  
  navToRoadSideAsst: function()
  {
    new voltmx.mvc.Navigation("frmRoadSideAssistance").navigate();
  },
  
 selectBuyerOrSeller: function() {
//     voltmx.print("entered");

    if (this.view.flxDropDown.isVisible === true) {
        this.view.flxDropDown.setVisibility(false);
      this.view.imgDropDown.src="dropdownimg.png";
    } else {
        this.view.flxDropDown.setVisibility(true);
      this.view.imgDropDown.src="uparrow.png";
    }

//     voltmx.print("exit");
},

  
  assignValue: function(){
    
//      voltmx.print("entered");
//     alert(this.view.segBuyerOrSeller.selectedRowItems[0].lbl01);
   this.view.lblBuyerOrSeller.text=
     this.view.segBuyerOrSeller.selectedRowItems[0].lbl01;
    
    this.view.lblBuyerOrSeller.skin="sknlbl231F20Dubai20px45";
    
//      voltmx.print("exit");
  }

 });
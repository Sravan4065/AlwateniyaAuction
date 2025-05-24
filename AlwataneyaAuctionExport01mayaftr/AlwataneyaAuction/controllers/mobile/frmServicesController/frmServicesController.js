define({ 

   onNavigate: function(){
     
     this.view.preShow = this.onPreShow.bind(this);
     
     var serives=[
       {
           "lblServiceName": "Vehicle Inspection",
            "lblfare":"Fixed fare of AED300",
            "btnBook":"Book|Schedule",
            "imgService":"valueservice1.png"
        },
       
        {
           "lblServiceName": "Vehicle Delivery",
            "lblfare":"Fixed fare of AED300",
            "btnBook":"Book|Schedule",
            "imgService":"vehicledelnew.png"
        },
  
   {
           "lblServiceName": "Ownership Transfer",
            "lblfare":"Fixed fare of AED300",
            "btnBook":"Book|Schedule",
            "imgService":"valueservice3.png"
        },
       
        {
           "lblServiceName": "Polishing & Detailing",
            "lblfare":"Fixed fare of AED300",
            "btnBook":"Book|Schedule",
            "imgService":"valueservice4.png"
        },

 {
           "lblServiceName": "Maintenance & Repairs",
            "lblfare":"Fixed fare of AED300",
            "btnBook":"Book|Schedule",
            "imgService":"valueservice5.png"
        },
     ]
     
     this.view.segServices.setData(serives);
     
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
  }

 });
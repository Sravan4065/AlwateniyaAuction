define({ 

onNavigate: function(){
  this.view.preShow = this.onPreShow.bind(this);
  this.view.flxBack.onClick = () => new voltmx.mvc.Navigation("frmMyDocuments").navigate();
    
   },
  
  onPreShow: function()
  {
    this.setDataToSeg();
    this.toggleFooterIcons();
  },
  
  setDataToSeg: function()
  {
     var headerSection = {
      lblAuctionId: "Auction ID",
      img01: "uil_arrow.png",
      lblMakeModelyear: "Make & Model & Year",
      img02: "uil_arrow.png",
      lblLetters: "Sales Letter",
      img03: "uil_arrow.png",
      lblDownload: "Download",
      imgDownload: "uil_arrow.png"
    };
 
    var rowsData = [
      {
        lblauctionValue: "482916",
        lblmakeModelValue: "Nissan 2019",
        lblDownload: "Download",
        imgDownload: "material_symbols_light_download_sharp.png"
      },
          {
        lblauctionValue: "482916",
        lblmakeModelValue: "Nissan 2019",
        lblDownload: "Download",
        imgDownload: "material_symbols_light_download_sharp.png"
      },
           {
        lblauctionValue: "482916",
        lblmakeModelValue: "Nissan 2019",
        lblDownload: "Download",
        imgDownload: "material_symbols_light_download_sharp.png"
      },
            {
        lblauctionValue: "482916",
        lblmakeModelValue: "Nissan 2019",
        lblDownload: "Download",
        imgDownload: "material_symbols_light_download_sharp.png"
      },
            {
        lblauctionValue: "482916",
        lblmakeModelValue: "Nissan 2019",
        lblDownload: "Download",
        imgDownload: "material_symbols_light_download_sharp.png"
      },
            {
        lblauctionValue: "482916",
        lblmakeModelValue: "Nissan 2019",
        lblDownload: "Download",
        imgDownload: "material_symbols_light_download_sharp.png"
      },
            {
        lblauctionValue: "482916",
        lblmakeModelValue: "Nissan 2019",
        lblDownload: "Download",
        imgDownload: "material_symbols_light_download_sharp.png"
      }
    ];

 
    var sectionedData = [
      [headerSection, rowsData]
    ];

  this.view.segInspectionReport.setData(sectionedData);
   
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
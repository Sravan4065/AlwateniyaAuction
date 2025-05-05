define({ 

onNavigate: function(){
  
 var headerSection = {
      lblAuctionId: "Auction ID",
      img01: "uil_arrow.png",
      lblMakeModelyear: "Make & Model & Year",
      img02: "uil_arrow.png",
      lblLetters: "Sales Letter",
      img03: "",
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

   this.view.segPossessionSummary.setData(sectionedData);
}

 });
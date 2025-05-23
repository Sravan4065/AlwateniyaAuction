define({ 

  //Type your controller code here 
  onNavigate: function(){
    this.view.preShow = this.onPreShow;
    this.view.segDocs.onRowClick = this.segDocsOnRowClickAction.bind(this);
    this.view.flxBack.onClick    = this.flxBackOnClickAction;
    this.view.flxUploadContainer.onClick = this.flxUploadContainerOnClickAction ;
    this.view.flxUploadPopupClose.onClick = this.flxUploadPopupCloseOnClickAction;
    this.view.flxChooseFromFile.onClick = this.pdfCheck;
    this.view.flxChooseFromLibrary.onClick = this.flxChooseFromLibraryOnClickAction;
    this.view.cam.onCapture = this.camOnCaptureAction;
    this.view.flxTakeAPhoto.onClick = this.camOnCaptureAction;
    this.view.btnBack.onClick = this.btnBackOnClickAction;
    this.view.btnSubmit.onClick = this.btnSubmitOnClickAction;
    this.view.flxPlus.onClick = this.flxPlusOnClickAction;
    this.view.flxDropDown.onClick = this.flxDropDownOnClickAction;
    this.view.segTypes.onRowClick = this.segTypesOnRowClickAction;
    this.view.btnUploadBackView.onClick = this.btnUploadBackViewOnClickAction;
    this.view.flxUploadPopup.onClick = this.flxUploadPopupOnClick;
  },
  onPreShow: function(){
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
  segDocsOnRowClickAction: function() {
    var self = this;
    var selectedSegDocs = self.view.segDocs.selectedRowItems;

    if (!selectedSegDocs || selectedSegDocs.length === 0) return; 
    var selectedValue = selectedSegDocs[0].lblRowDocs;
    var x; // Declare x outside switch

    switch (selectedValue) {
      case "Government IDs":
        x = new voltmx.mvc.Navigation("frmGovtIds");
        break;
      case "Sale Letters":
        x = new voltmx.mvc.Navigation("frmSaleLetters");
        break;
      case "Possession Letters":
        x = new voltmx.mvc.Navigation("frmPossessionLetter");
        break;
      case "Inspection Reports":
        x = new voltmx.mvc.Navigation("frmInspectionReport");
        break;
      case "Trade Licenses":
      case "VAT Certificates":
      case "Payment Receipt":
        // Handle these when ready
        break;
    }

    if (x) {
      x.navigate();
    }
  },
  flxBackOnClickAction: function(){
    var ntf = new voltmx.mvc.Navigation("frmOpenMyAccount");
    ntf.navigate();
  },
  flxChooseFromLibraryOnClickAction: function(){
        var uploadOption = voltmx.store.setItem("uploadOption", "Image");

    var self = this;

    voltmx.phone.openMediaGallery(function(rawbytes) {
      if (rawbytes) {
        voltmx.print("JsonRawBytes: " + JSON.stringify(rawbytes));
        var testfilename = rawbytes.getResourcePath();
        //        alert("testfilename"+testfilename);
        var filename =  rawbytes.getResourcePath().substring(rawbytes.getResourcePath().lastIndexOf("/") + 1);
        //             this.view.flxUploadConfirmationinGsovtID.setVisibility(true);
        //            .text = filename;

        // Convert to Base64 and store based on file index
        var base64Data = voltmx.convertToBase64(rawbytes);
        var filetype =  detectFileType(base64Data);
        //        alert("type"+filetype);
        var filefullname = filename+filetype;
        //        alert("fullname"+filefullname);
        this.filename =filefullname
        this.base64MyDocsUpload = base64Data;
        voltmx.print("Base64 : "+base64Data);
        //        this.view.flxUploadedBackView
        self.view.flxUploadedFrontview.setVisibility(true);
        self.view.imgFrontView.base64 = base64Data;
        self.view.flxHowWouldYouLike.setVisibility(false);
        self.view.imgFrontView.setVisibility(true);
        self.view.flxUploaded.setVisibility(false);
        self.view.flxUploadPhotoClickArea.setVisibility(false);
        self.view.btnUploadBackView.setVisibility(true);
        self.view.btnSubmit.setEnabled(true);
        self.view.btnSubmit.skin ="sknbtnBG61B35CDubaiRegFont45pxRoundedBorder1px";
        //           self.createDamItems(type,filename,base64Data);
      }  }.bind(this), {}, {
      action: voltmx.phone.ACTION_OPEN_MEDIA_GALLERY, 
      format: voltmx.phone.MEDIA_DOCUMENT_RAW,
      mimetype: "image/*"  // Set the mime type for images
      //       mimetype: "application/*" 

    }
                                 );
  },
  camOnCaptureAction: function(){
            var uploadOption = voltmx.store.setItem("uploadOption", "Cam");

    var rawBytes = this.view.cam.rawBytes;

    if (rawBytes) {
      // Convert raw bytes to base64
       var testfilename = rawBytes.getResourcePath();
        //        alert("testfilename"+testfilename);
        var filename =  rawBytes.getResourcePath().substring(rawBytes.getResourcePath().lastIndexOf("/") + 1);

        var base64Image = voltmx.convertToBase64(rawBytes);
        var filetype =  detectFileType(base64Image);
        //        alert("type"+filetype);
        var filefullname = filename+filetype;
        //        alert("fullname"+filefullname);
        this.filenameCam =filefullname
//       var base64Image = kony.convertToBase64(rawBytes);
      this.base64CamImage = base64Image;
      // Set base64 data as the source for the image widget
      this.view.imgFrontView.base64 = this.base64CamImage;
      this.view.flxUploadedFrontview.setVisibility(true);
      this.view.flxHowWouldYouLike.setVisibility(false);
      this.view.imgFrontView.setVisibility(true);
      this.view.flxUploaded.setVisibility(false);
      this.view.flxUploadPhotoClickArea.setVisibility(false);
      this.view.btnUploadBackView.setVisibility(true);
      this.view.btnSubmit.setEnabled(true);
      this.view.btnSubmit.skin ="sknbtnBG61B35CDubaiRegFont45pxRoundedBorder1px";
      // Optional: force UI update
      //         this.view.forceLayout();
    } else {
      kony.print("No image captured from camera.");
    }
  },

  flxUploadContainerOnClickAction: function(){
    this.view.flxHowWouldYouLike.setVisibility(true);
  },
  flxUploadPopupCloseOnClickAction: function(){
    this.view.flxHowWouldYouLike.setVisibility(false);
  },

  pdfCheck: function() {
    var uploadOption = voltmx.store.setItem("uploadOption", "PDF");
    try {

      var VoltMXMain = java.import("com.konylabs.android.KonyMain"); 
      var TestPdfNfi = java.import("com.example.pdfuploadnfitest.TestPdfNfi");
      TestPdfNfi.pdfCallback = this.pdfCallback.bind(this);
      var activityContext = VoltMXMain.getActivityContext();
      var Intent  = java.import("android.content.Intent");
      var intentObj =  new Intent(activityContext, TestPdfNfi.class);
      activityContext.startActivity(intentObj);
    } catch (e) {
      alert("Error: " + e.message);
    }
  },

  pdfCallback: function ( data) {

    voltmx.print( "selcted pdf callback data:::" + data) ;
//     alert("Filename selected :::"+data);

    this.pdfData = null;

    if (data && typeof data === 'object' && Object.keys(data).length > 0) {
      try {
        const dataJsonStr = JSON.stringify(data);
        this.pdfData = JSON.parse(dataJsonStr);
        //         this.view.Label0j43261d34f8f45.text =   this.pdfData.fileName;

        //         this.view.Label0f0e3db454b3148.text =      this.pdfData.pathname;

        //       this.view.Label0ie78d6e115164c.text=  this.pdfData.base64pdf;

        this.view.flxUploadedFrontview.setVisibility(true);
        this.view.lblUploadedFileName.text =  this.pdfData.fileName;
        //        this.view.imgFrontView.base64 =this.pdfData.base64pdf;
        this.view.flxHowWouldYouLike.setVisibility(false);
        this.view.imgFrontView.setVisibility(false);
        this.view.flxUploaded.setVisibility(true);
        this.view.flxUploadPhotoClickArea.setVisibility(false);
        this.view.btnUploadBackView.setVisibility(true);
        this.view.btnSubmit.setEnabled(true);
        this.view.btnSubmit.skin ="sknbtnBG61B35CDubaiRegFont45pxRoundedBorder1px";
      } catch (error) {
        console.error("Failed to clone data:", error);
        this.pdfData = null;
      }    
    }
    //      this.btnSubmitOnClickAction();


  },
  btnSubmitOnClickAction: function() {
    var self = this;
    voltmx.application.showLoadingScreen();
    var uploadOption = voltmx.store.getItem("uploadOption");
if(uploadOption === "PDF"){

    // 🔒 Prevent error if pdfData isn't set
    if (!self.pdfData || !self.pdfData.fileName || !self.pdfData.base64pdf) {
        voltmx.application.dismissLoadingScreen();
        alert("No PDF selected or data missing. Please upload a PDF first.");
        return;
    }

    var type = voltmx.store.getItem("type");
    var moduleName = "CreateItems";
    var moduleType = "Customers";
    var is_org = 1;
    var user_token = voltmx.store.getItem("getUserAccesstoken");
    var user_id = voltmx.store.getItem("userId");

    var fileDetails = [
        {
            "is_thumbnail": "false",
            "filename": self.pdfData.fileName,
            "base64": self.pdfData.base64pdf.replaceAll('+', '/plus/'),
            "type": "Contract",
            "sub_type": type,
        }
    ];
    var create_dam_items_inputparam = {
        serviceID: "fry_collection$create-dam-items",
        httpheaders: {},
        httpconfig: {},
        collectionId: "",
        moduleType: moduleType,
        user_id: user_id,
        moduleName: moduleName,
        file_details: fileDetails,
        user_token: user_token,
        is_org: is_org
    };

    mfintegrationsecureinvokerasync(
        create_dam_items_inputparam,
        "fry_collection",
        "create-dam-items",
        function(status, response) {
            voltmx.application.dismissLoadingScreen();
            if (response.opstatus === 0 && response.message === "Success") {
                alert("Uploaded Successfully");
                alert("Response for upload : " + JSON.stringify(response));
                self.view.flxUploadPopup.setVisibility(false);
                var ntf = new voltmx.mvc.Navigation("frmGovtIds");
                ntf.navigate();
            } else {
                alert("file upload failed or backend error!");
                alert("Details: " + JSON.stringify(response));
            }
        }
    );
}
    else if(uploadOption === "Image"){
      
            var self = this;
     voltmx.application.showLoadingScreen();
      
            if (!self.filename || !self.base64MyDocsUpload) {
        voltmx.application.dismissLoadingScreen();
        alert("No Image selected or data missing. Please upload a Image first.");
        return;
    }
      
      var filename =  self.filename;
  var type = voltmx.store.getItem("type");

  var moduleName = "CreateItems";
  var moduleType = "Customers";
  var is_org = 1;
  var user_token = voltmx.store.getItem("getUserAccesstoken");
  var user_id = voltmx.store.getItem("userId");
  // alert("userId :"+user_id);
  var fileDetails = 
  [
    {"is_thumbnail": "false",  
    "filename"    : filename, 
    "base64"      : self.base64MyDocsUpload.replaceAll('+','/plus/'),
    "type"        : "Contract",
    "sub_type"    : type, 
   },

  ];
    var create_dam_items_inputparam = {};
  create_dam_items_inputparam["serviceID"] = "fry_collection$create-dam-items";
  var create_dam_items_httpheaders = {};
  create_dam_items_inputparam["httpheaders"] = create_dam_items_httpheaders;
  var create_dam_items_httpconfigs = {};
  create_dam_items_inputparam["httpconfig"] = create_dam_items_httpconfigs;
  // create_dam_items_inputparam["type"] = type;
   create_dam_items_inputparam["collectionId"] = "";
   create_dam_items_inputparam["moduleType"] = moduleType;
   create_dam_items_inputparam["user_id"] = user_id;
   create_dam_items_inputparam["moduleName"] = moduleName;
   create_dam_items_inputparam["file_details"] = fileDetails;
   create_dam_items_inputparam["user_token"] = user_token;
   create_dam_items_inputparam["is_org"] = is_org;

  fry_collection$create_dam_items = 
  mfintegrationsecureinvokerasync(
  create_dam_items_inputparam, 
  "fry_collection", 
  "create-dam-items", 
  function(status,response){
    if(response.opstatus === 0){

       if(response.message === "Success"){
            voltmx.application.dismissLoadingScreen();
         alert("Uploaded Successfully");
  //     alert("Response for upload : "+JSON.stringify(response));
         self.view.flxUploadPopup.setVisibility(false);
         var ntf = new voltmx.mvc.Navigation("frmGovtIds");
        ntf.navigate();
    }
      else{
         voltmx.application.dismissLoadingScreen();
        alert("file upload failed!!")
      }
    }
    else{
      voltmx.application.dismissLoadingScreen();
      alert("file upload response: "+JSON.stringify(response));
      alert("Backend Request Failed, Please try Again!!");
    }
  });
    }
    else{
             var self = this;
     voltmx.application.showLoadingScreen();
      
       if ( !self.filenameCam|| !self.base64CamImage) {
        voltmx.application.dismissLoadingScreen();
        alert("No captured Image selected or data missing. Please upload a Captured Image Again!.");
        return;
    }

    var type = voltmx.store.getItem("type");
    var moduleName = "CreateItems";
    var moduleType = "Customers";
    var is_org = 1;
    var user_token = voltmx.store.getItem("getUserAccesstoken");
    var user_id = voltmx.store.getItem("userId");

    var fileDetails = [
        {
            "is_thumbnail": "false",
            "filename":self.filenameCam,
            "base64": self.base64CamImage.replaceAll('+', '/plus/'),
            "type": "Contract",
            "sub_type": type,
        }
    ];

     var create_dam_items_inputparam = {};
  create_dam_items_inputparam["serviceID"] = "fry_collection$create-dam-items";
  var create_dam_items_httpheaders = {};
  create_dam_items_inputparam["httpheaders"] = create_dam_items_httpheaders;
  var create_dam_items_httpconfigs = {};
  create_dam_items_inputparam["httpconfig"] = create_dam_items_httpconfigs;
  // create_dam_items_inputparam["type"] = type;
   create_dam_items_inputparam["collectionId"] = "";
   create_dam_items_inputparam["moduleType"] = moduleType;
   create_dam_items_inputparam["user_id"] = user_id;
   create_dam_items_inputparam["moduleName"] = moduleName;
   create_dam_items_inputparam["file_details"] = fileDetails;
   create_dam_items_inputparam["user_token"] = user_token;
   create_dam_items_inputparam["is_org"] = is_org;

  fry_collection$create_dam_items = 
  mfintegrationsecureinvokerasync(
  create_dam_items_inputparam, 
  "fry_collection", 
  "create-dam-items", 
  function(status,response){
    if(response.opstatus === 0){
 
       if(response.message === "Success"){
            voltmx.application.dismissLoadingScreen();
         alert("Uploaded Successfully");
      voltmx.print("Response for upload : "+JSON.stringify(response));
         self.view.flxUploadPopup.setVisibility(false);
         var ntf = new voltmx.mvc.Navigation("frmGovtIds");
        ntf.navigate();
    }
      else{
         voltmx.application.dismissLoadingScreen();
        alert("file upload failed!!")
      }
    }
    else{
      voltmx.application.dismissLoadingScreen();
      alert("file upload response: "+JSON.stringify(response));
      alert("Backend Request Failed, Please try Again!!");
    }
  });
    }
  },
//   btnSubmitOnClickAction: function(){
//     var self = this;
//     voltmx.application.showLoadingScreen();
//     //     self.pdfCheck();
// //     alert("Service not called!!");
//     //     var filename =     this.pdfData;
//     //     var filename = "image1.png";
//     // var userObj = voltmx.store.getItem("UserObj");
//     // var base64 =  voltmx.store.getItem("base64");
//     var type = voltmx.store.getItem("type");

//     // alert("UserObj :"+userObj);
//     // alert("UserObj :"+JSON.stringify(userObj));
//     var moduleName = "CreateItems";
//     var moduleType = "Customers";
//     var is_org = 1;
//     var user_token = voltmx.store.getItem("getUserAccesstoken");
//     var user_id = voltmx.store.getItem("userId");
//     // alert("userId :"+user_id);
//     var fileDetails = 
//         [
//           {"is_thumbnail": "false",  
//            "filename"    : self.pdfData.fileName, 
//            "base64"      : self.pdfData.base64pdf.replaceAll('+','/plus/'),
//            "type"        : "Contract",
//            "sub_type"    : type, 
//           },
//         ];
//     var create_dam_items_inputparam = {};
//     create_dam_items_inputparam["serviceID"] = "fry_collection$create-dam-items";
//     var create_dam_items_httpheaders = {};
//     create_dam_items_inputparam["httpheaders"] = create_dam_items_httpheaders;
//     var create_dam_items_httpconfigs = {};
//     create_dam_items_inputparam["httpconfig"] = create_dam_items_httpconfigs;
//     // create_dam_items_inputparam["type"] = type;
//     create_dam_items_inputparam["collectionId"] = "";
//     create_dam_items_inputparam["moduleType"] = moduleType;
//     create_dam_items_inputparam["user_id"] = user_id;
//     create_dam_items_inputparam["moduleName"] = moduleName;
//     create_dam_items_inputparam["file_details"] = fileDetails;
//     create_dam_items_inputparam["user_token"] = user_token;
//     create_dam_items_inputparam["is_org"] = is_org;

//     fry_collection$create_dam_items = 
//       mfintegrationsecureinvokerasync(
//       create_dam_items_inputparam, 
//       "fry_collection", 
//       "create-dam-items", 
//       function(status,response){
//         // alert("create dam items service response :"+JSON.stringify(response));
//         // alert("status: "+status);

//         if(response.opstatus === 0){

//           if(response.message === "Success"){
//             voltmx.application.dismissLoadingScreen();
//             //     alert("Sucess"+response.message);
//             alert("Uploaded Successfully");
//                 alert("Response for upload : "+JSON.stringify(response));
//             self.view.flxUploadPopup.setVisibility(false);
//             var ntf = new voltmx.mvc.Navigation("frmGovtIds");
//             ntf.navigate({
//               "variable_base64": self.pdfData.base64pdf,
//               "_meta_": {
//                 "eventName": "onClick",
//                 "widgetId": "btnSubmit"
//               }
//             });
//             //     alert("request :"+JSON.stringify(create_dam_items_inputparam));
//             //     voltmx.print("request :"+JSON.stringify(create_dam_items_inputparam));

//           }
//           else{
//             voltmx.application.dismissLoadingScreen();
//             alert("file upload failed!!")
//           }
//         }
//         else{
//           voltmx.application.dismissLoadingScreen();
//           alert("file upload response: "+JSON.stringify(response));
//           alert("Backend Request Failed, Please try Again!!");
//         }
//         //  var x = new voltmx.mvc.Navigation("frmDashBoard");
//         //   x.navigate();
//       });
//   },

  btnBackOnClickAction: function(){

    if(this.view.imgFrontView.base64 ==="" &&  this.view.imgBackView.base64 === ""){
      this.view.flxUploadPopup.setVisibility(false);
    }
    else{
      this.view.imgFrontView.base64 ="";
      this.view.imgBackView.base64 = "";   
      this.view.btnSubmit.setEnabled(false);
      this.view.btnSubmit.skin="sknbtnBGccccccRoundedBordercccccc1pxFontDubaiReg767676Size40px";
      this.view.flxUploadPhotoClickArea.setVisibility(true);
      this.view.flxUploadedFrontview.setVisibility(false);
      this.view.flxUploadedBackView.setVisibility(false);
    }

  },
  
  flxPlusOnClickAction: function(){
    this.view.flxUploadPopup.setVisibility(true);
    this.view.btnSubmit.setEnabled(false);
    this.view.btnSubmit.skin="sknbtnBGccccccRoundedBordercccccc1pxFontDubaiReg767676Size40px";
  },
  flxDropDownOnClickAction: function(){
    if(this.view.imgUpArrow.isVisible){
      this.view.flxDocTypeDropDownList.setVisibility(false);
      this.view.imgDropDown.setVisibility(true);
      this.view.imgUpArrow.setVisibility(false);
    }
    else if(this.view.imgDropDown.isVisible){
      this.view.flxDocTypeDropDownList.setVisibility(true);
      this.view.imgUpArrow.setVisibility(true);
      this.view.imgDropDown.setVisibility(false);
    }

  },
  segTypesOnRowClickAction: function(){
    var selectedType = this.view.segTypes.selectedRowItems;
    //     alert("selectedType:"+selectedType);
    var selectedType2 = selectedType[0].lblType;
    this.view.lblSelect.text = selectedType[0].lblType;
    this.view.lblBackView.text =  selectedType[0].lblType+" Back View";
    this.view.lblFrontView.text =  selectedType[0].lblType+" Front View";
    this.view.btnUploadBackView.text ="Upload "+selectedType[0].lblType+" Back Copy";
    if(this.view.lblSelect.text!==""){
      this.view.flxDocTypeDropDownList.setVisibility(false);
      this.view.imgUpArrow.setVisibility(false);
      this.view.imgDropDown.setVisibility(true);
    }
    if(selectedType2 === "Emirates ID"){
      voltmx.store.setItem("type","GonvtId")
    }
  },
  btnUploadBackViewOnClickAction: function(){
    var self = this;

    voltmx.phone.openMediaGallery(function(rawbytes) {
      if (rawbytes) {
        voltmx.print("JsonRawBytes: " + JSON.stringify(rawbytes));
        var filename =  rawbytes.getResourcePath().substring(rawbytes.getResourcePath().lastIndexOf("/") + 1);
        //             this.view.flxUploadConfirmationinGsovtID.setVisibility(true);
        //            .text = filename;
        voltmx.store.setItem("filename",filename);
        // Convert to Base64 and store based on file index
        let base64Data = voltmx.convertToBase64(rawbytes);
        //            this.base64MyDocsUpload = base64Data;
        //             voltmx.print("Base64 : "+base64Data);
        //        this.view.flxUploadedBackView
        self.view.flxUploadedBackView.setVisibility(true);
        self.view.imgBackView.base64 = base64Data;
        self.view.flxUploadPhotoClickArea.setVisibility(false);
        self.view.btnUploadBackView.setVisibility(false);
        //           self.createDamItems(type,filename,base64Data);
      }  }.bind(this), {}, {
      action: voltmx.phone.ACTION_OPEN_MEDIA_GALLERY, 
      format: voltmx.phone.MEDIA_DOCUMENT_RAW,
      //         mimetype: "image/*"  // Set the mime type for images
      mimetype: "application/*" 

    }
                                 );
  },
  flxUploadPopupOnClick: function(){

  }
});
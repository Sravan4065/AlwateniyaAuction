define({ 

 onNavigate: function(context)
  {
    this.userid = voltmx.store.getItem("userId");
    
    if(context){
   this.context = context;
    }
    this.view.preShow = this.onPreShow.bind(this);
    this.view.postShow = this.onPostShow.bind(this);
    this.view.flxBack.onClick = () => {
      var x = new voltmx.mvc.Navigation(voltmx.application.getPreviousForm().id);
      x.navigate();
    }
    this.view.flxBackFromMultipleImages.onClick = this.hideMutlipleImagesflex.bind(this);
    this.view.flxShowMultipleImages.onClick = this.showMultipleImagesflex.bind(this);
    this.view.flxImageBackward.onClick = function() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
    this.showImage(this.currentImageIndex);
}.bind(this);
     this.view.flxImageForward.onClick = function() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.filteredImages.length;
    this.showImage(this.currentImageIndex);
}.bind(this);
   this.view.flxBackwardMultipleImages.onClick = function() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
    this.showImageMultiple(this.currentImageIndex);
}.bind(this);
   this.view.flxForwardMultipleImages.onClick = function() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.filteredImages.length;
    this.showImageMultiple(this.currentImageIndex);
}.bind(this); 
    this.view.btnBidNowLast.onClick = this.openBidAmountContainer.bind(this);
     this.view.flxCloseBidAmountSelection.onClick = this.closeBidAmountContainer.bind(this);
   
   
    this.view.flxRemoveBidSuccessPopup.onClick =  function() {
      this.view.flxBidSuccessPopup.setVisibility(false);
      this.view.flxOverLay.setVisibility(false);
    }.bind(this);
    this.view.btnCloseBidSuccessPopUp.onClick = function() {
      this.view.flxBidSuccessPopup.setVisibility(false);
      this.view.flxOverLay.setVisibility(false);
    }.bind(this);
   
   this.view.btnAutoBidCall.onClick = this.invokeAutoBidFunction.bind(this);
   this.view.flxCloseAutoBidAmountContainer.onClick = function()
    {
      this.view.flxAutoBidAmountContainer.setVisibility(false);
      this.view.flxOverLay.setVisibility(false);
    }.bind(this);
   
  },
  
  onPreShow: function()
  {
    var self = this;
     this.checkSession(function() {
        
        voltmx.print("Session is valid. Proceeding with data load.");
       self.invokeFleetDetails(); 
    });
   
   
    this.view.flxMultipleImages.setVisibility(false);
//     this.assignValuesToFieldsFromContext();
  },
  
    onPostShow: function(){
    
       this.view.btnBidNow.onClick =  this.invokeFryWfAuctionBidding.bind(this);
    this.view.btn500AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"500");
       this.view.flxCheckBox.onClick = () => {
       
      if(this.view.imgCheck.isVisible)
        {
          this.view.imgCheck.setVisibility(false);
          this.view.btnBidNow.skin = "sknBtnBidcccccc8pxradius";
        }
      else{
        this.view.imgCheck.setVisibility(true);
          this.view.btnBidNow.skin = "sknBtnBid61B35C8pxradius";
        }
      };
    this.view.btn1000AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"1000");
    this.view.btn1500AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"1500");
   
    
       
    
  },
  assignValuesToFieldsFromContext: function(data,details)
  {
    
     var item = data;
    
    this.setCarDetails(item);
    
    this.filteredImages = this.getFilteredImages(details);
  this.currentImageIndex = 0;

  if (this.filteredImages.length > 0) {
    this.loadImageCarousel();
  } else {
    this.view.imgCarousel.src = ""; // Leave blank if no images
    this.view.flxImageForward.setEnabled(false);
    this.view.flxImageBackward.setEnabled(false);
  }


  
},
  
  getFilteredImages: function(details)
  {
  
     if (details && Array.isArray(details.fleet_images)) {
    return details.fleet_images.filter(function(item) {
      return item.category === "Images";
    });
  }
  return [];
  
  },
  
  loadImageCarousel: function() {
  if (this.filteredImages.length === 0) {
    this.view.imgCarousel.src = "";
    this.view.flxImageForward.setEnabled(false);
    this.view.flxImageBackward.setEnabled(false);
    return;
  }

  // Show first image
  this.showImage(this.currentImageIndex);

  // Enable/disable buttons
  var hasMultiple = this.filteredImages.length > 1;
  this.view.flxImageForward.setEnabled(hasMultiple);
  this.view.flxImageBackward.setEnabled(hasMultiple);
},

  
  showImage: function(index) {
  if (this.filteredImages[index] && this.filteredImages[index].file_url) {
    this.view.imgCarousel.src = this.filteredImages[index].file_url;
  } else {
    this.view.imgCarousel.src = "";
  }
},
  
  showImageMultiple: function(index)
  {
     if (this.filteredImages[index] && this.filteredImages[index].file_url) {
    this.view.imgCarouselMultipleImages.src = this.filteredImages[index].file_url;
  } else {
    this.view.imgCarouselMultipleImages.src = "";
  }
  },
  
  setCarDetails: function(item) {
    this.view.lblCarName.text = item.title || "N/A";
    this.view.lblLocation.text = item.location || "N/A";
    this.view.lblLotID.text = item.lot_no || "N/A";
    this.view.lblDistance.text = item.milage || "N/A";
    this.view.lblAutomatic.text = item.transmission_type || "N/A";
    this.view.lblPetrol.text = item.fuel_type || "N/A";
    this.view.lblBidAmount.text = item.max_bid_amount || "N/A";
    this.view.lblTotalBidsAmount.text = item.total_bids || "N/A";
    this.view.lblRecoBidAmount.text = item.recommended_bid || "N/A";
    this.view.lblRetailValueBidAmount.text = item.retain_value || "N/A";
    this.view.lblBodyStyleName.text = item.body_style || "N/A";
    this.view.lblFuelTypeName.text = item.fuel_type || "N/A";
    this.view.lblLocationName.text = item.location || "N/A";
    this.view.lblyearText.text = item.year_make || "N/A";
    this.view.lblMileageAmount.text = item.milage || "N/A";
    this.view.lblTransmissionValue.text = item.transmission_type || "N/A";
    this.view.lblExteriorColor.text = item.colors || "N/A";
    this.view.lblInteriorColor.text = item.colors || "N/A"; // Adjust if you have separate fields
    this.view.lblDriveTypeValue.text = item.drive_type || "N/A";
    this.view.lblEngineType.text = item.engine_type || "N/A";
    this.view.lblVehicleNoteBodyText.text = item.vehicle || "N/A";
    this.view.lblAddressLoc.text = item.location || "N/A";
},
  
  invokeFleetDetails: function()
  {
    var self = this;

    function fleetDetailsCallBack(status, fleet_details) {
      voltmx.print(fleet_details);
      if(fleet_details.meta_data){
        self.assignValuesToFieldsFromContext(fleet_details.meta_data[0],fleet_details);
        self.metadata = fleet_details.meta_data[0];
      }
    }
    if (fleet_details_inputparam == undefined) {
        var fleet_details_inputparam = {};
    }
    var jobtitle = voltmx.store.getItem("jobTitle");
    fleet_details_inputparam["serviceID"] = "fry_wf$fleet-details";
    fleet_details_inputparam["object_id"] = this.context.selectedItem.lblObjID;
    fleet_details_inputparam["job_title"] = jobtitle;
//     fleet_details_inputparam["operation_id"] = 
//     fleet_details_inputparam["plaform"] = 
    fleet_details_inputparam["user_id"] = this.userid;
    
    var fleet_details_httpheaders = {};
    fleet_details_inputparam["httpheaders"] = fleet_details_httpheaders;
    var fleet_details_httpconfigs = {};
    fleet_details_inputparam["httpconfig"] = fleet_details_httpconfigs;
    fry_wf$fleet_details = mfintegrationsecureinvokerasync(fleet_details_inputparam, "fry_wf", "fleet-details", fleetDetailsCallBack);

  },
  
  checkSession: function(callback) {
    if (this.sessionCookie) {
        voltmx.print("Session already available.");
        callback(); // Proceed if session exists
    } else {
        voltmx.print("No session. Logging in...");
        this.loginToDam((newCookie) => {
            if (newCookie) {
                this.sessionCookie = newCookie;
                callback();
            } else {
                voltmx.print("Login failed. Cannot proceed.");
            }
        });
    }
},
  
 loginToDam: function(callback) {
    var httpClient = new voltmx.net.HttpRequest();
    httpClient.open("POST", "https://dev-hcltx.et.ae/dx/api/core/v1/auth/login", false);

    var payload = {
        username: "sai.k",
        password: "etsai191"
    };

    httpClient.setRequestHeader("Content-Type", "application/json");
    httpClient.send(JSON.stringify(payload));

    if (httpClient.status === 200) {
        var allHeaders = httpClient.getAllResponseHeaders();
        var cookie = allHeaders["Set-Cookie"] || allHeaders["set-cookie"];
        if (cookie) {
            voltmx.print("Login successful, new cookie set.");
            callback(cookie);
        } else {
            voltmx.print("Login succeeded but no cookie returned.");
            callback(null);
        }
    } else {
        voltmx.print("Login failed with status: " + httpClient.status);
        callback(null);
    }
},
  
  hideMutlipleImagesflex: function()
  {
    this.view.flxScrollMain.setVisibility(true);
    this.view.flxMultipleImages.setVisibility(false);
    this.view.flxWhatsappcomponent.setVisibility(true);
    this.view.flxBidNowButton.setVisibility(true);
  },
  showMultipleImagesflex: function()
  {
    this.showImageMultiple(this.currentImageIndex);
    this.view.flxScrollMain.setVisibility(false);
    this.view.flxMultipleImages.setVisibility(true);
    this.view.flxWhatsappcomponent.setVisibility(false);
    this.view.flxBidNowButton.setVisibility(false);
  },
  
  openBidAmountContainer: function(){
    var self = this;
    var isLogin = voltmx.store.getItem("isLogin");
    
    if(isLogin)
    {
     if(self.metadata.highest_bidder !== self.userid){
     self.aucid = self.metadata.auction_id;
    self.objid = self.metadata.object_id;
    self.currentAmount = Number(self.metadata.max_bid_amount);
 
     
    self.view.flxBidAmountSelectionContainer.setVisibility(true);
      self.view.imgCheck.setVisibility(false);
    self.view.btn500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    self.view.btn1000AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    self.view.btn1500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    self.view.tbxBidAmount.text = "";
    self.view.flxOverLay.setVisibility(true);
    }
       else{
      alert('You are already highest bidder');
    }
    }
   
     else{
      var x = new voltmx.mvc.Navigation("frmLoginScreen");
      x.navigate();
    }
  },
  
   selectBidAmountAddIntoTextBox: function(amount){
    
    if(amount === "500"){
       this.view.btn500AED.skin = "sknBtnd32437DubaiFFFFFF20px";
      this.view.btn1000AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
      this.view.btn1500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    }
    else if(amount === "1000"){
      this.view.btn500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
      this.view.btn1000AED.skin = "sknBtnd32437DubaiFFFFFF20px";
      this.view.btn1500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    }
    else 
      {
        this.view.btn500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
      this.view.btn1000AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
      this.view.btn1500AED.skin = "sknBtnd32437DubaiFFFFFF20px";
      }
    
    this.view.tbxBidAmount.text =
      this.currentAmount + 
      Number(amount) +" AED";
    this.vehicleHike = amount;
    
  },
  
   invokeFryWfAuctionBidding: function()
  {
    if(this.view.tbxBidAmount.text.trim() !== "")
      {  
          if(this.view.imgCheck.isVisible){
         var self = this;
     voltmx.application.showLoadingScreen();
    function invService(status, auction_bidding) {
     voltmx.application.dismissLoadingScreen();
        voltmx.print("Status: " + status);
        voltmx.print("Response: " + JSON.stringify(auction_bidding));
      if(auction_bidding &&
            auction_bidding.opstatus === 0 &&
            auction_bidding.httpresponse &&
            auction_bidding.httpresponse.responsecode === 200)
        {
         var msg = auction_bidding.message;
          if (msg === "Your bid is valid and accepted.") {
          if (self.view.lblSuccessMsg) {
            self.view.lblSuccessMsg.text = "Your Bid Has Been Placed Successfully";
          }
          self.view.flxBidSuccessPopup.setVisibility(true);
           self.closeBidAmountContainer();
          self.view.flxOverLay.setVisibility(true);
//           self.updateSegmentWithUpdatedBidRate(); IN place of this need to update flex
          new voltmx.mvc.Navigation("frmAllAuctions").navigate();
          }
          else if(msg){
            alert(msg);
          }
          else {
            alert("Unknown response from server.");
          }
        }
     else {
            alert("Failed to place bid. Please check your connection or try again.");
        }
    }
    if (auction_bidding_inputparam == undefined) {
        var auction_bidding_inputparam = {};
    }
     var userid = voltmx.store.getItem("userId");
    auction_bidding_inputparam["serviceID"] = "fry_wf$manual-auction-bidding";
    auction_bidding_inputparam["user_id"] = userid;
    auction_bidding_inputparam["vehicle_amount"] = this.currentAmount;
    auction_bidding_inputparam["bid_hike"] = Number(this.vehicleHike);
        auction_bidding_inputparam["auction_id"] = this.aucid;
//         auction_bidding_inputparam["bid_type"] = "";
        auction_bidding_inputparam["object_id"] = this.objid;
    var auction_bidding_httpheaders = {
      "user_token": ""
    };
    auction_bidding_inputparam["httpheaders"] = auction_bidding_httpheaders;
    var auction_bidding_httpconfigs = {};
    auction_bidding_inputparam["httpconfig"] = auction_bidding_httpconfigs;
    fry_wf$auction_bidding = mfintegrationsecureinvokerasync(auction_bidding_inputparam, "fry_wf", "manual-auction-bidding", invService);
      }
        else{
         alert('select check box..!');
       } 
      }
    else{
      alert('text box should not be empty');
    }
  },
  
  closeBidAmountContainer: function(){
    this.view.flxBidAmountSelectionContainer.setVisibility(false);
    this.view.flxOverLay.setVisibility(false);
  },
  
  invokeAutoBidFunction: function()
  {
     if(this.view.tbxAutoBidAmount.text && this.view.tbxAutoBidAmount.text.trim() !== "")
       {
      var self = this;

    function invokeServiceCallBack(status, register_auto_bidding) {
     if (register_auto_bidding && register_auto_bidding.opstatus === 0 && register_auto_bidding.records && register_auto_bidding.records.length > 0){
       self.view.flxAutoBidAmountContainer.setVisibility(false);
       
       if (self.view.lblSuccessMsg) {
         self.view.lblSuccessMsg.text = "Auto Bid Activated Successfully";
       }
       self.view.flxBidSuccessPopup.setVisibility(true);
     }
    }
    if (register_auto_bidding_inputparam == undefined) {
        var register_auto_bidding_inputparam = {};
    }
    var userid = voltmx.store.getItem("userId");
    var maxBidAmount = self.view.tbxAutoBidAmount.text;
    register_auto_bidding_inputparam["serviceID"] = "fry_int_auctions$auction-register-auto-bid";
    register_auto_bidding_inputparam["auction_id"] = this.aucIdForAutoBid;
    register_auto_bidding_inputparam["bid_by"] = userid;
    register_auto_bidding_inputparam["bid_max_amount"] = maxBidAmount;
//     register_auto_bidding_inputparam["bid_min_value"] = "200";
    register_auto_bidding_inputparam["object_id"] = this.objIdForAutoBid;
    var register_auto_bidding_httpheaders = {
       "user_token":""
    };
    register_auto_bidding_inputparam["httpheaders"] = register_auto_bidding_httpheaders;
    var register_auto_bidding_httpconfigs = {};
    register_auto_bidding_inputparam["httpconfig"] = register_auto_bidding_httpconfigs;
    fry_int_auctions$register_auto_bidding = mfintegrationsecureinvokerasync(register_auto_bidding_inputparam, "fry_int_auctions", "auction-register-auto-bid", invokeServiceCallBack);
       }
    else{
       alert('Enter Max. Bid Amount');
    }
    
  },
  
    enableAutoBid: function(params){
    var isLogin = voltmx.store.getItem("isLogin");
    if(isLogin)
      {
    this.objIdForAutoBid = params.object_id;
    this.aucIdForAutoBid = params.auction_id;
   this.view.flxOverLay.setVisibility(true);
   this.view.flxAutoBidAmountContainer.setVisibility(true);
      }  
     else{
      var x = new voltmx.mvc.Navigation("frmLoginScreen");
      x.navigate();
    }
  }

 });
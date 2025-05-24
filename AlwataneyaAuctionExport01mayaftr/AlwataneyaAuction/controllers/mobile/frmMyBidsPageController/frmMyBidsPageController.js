define({ 

 //Type your controller code here 
  onNavigate: function()
{
  this.userid = voltmx.store.getItem("userId");
  this.view.preShow = this.onPreShow.bind(this);
  this.view.postShow = this.onPostShow.bind(this);
    this.view.flxActiveBids.onClick =this.ActiveBidsToggle.bind(this);
    this.view.flxWinningBids.onClick =this.winningBidsToggle.bind(this);
    this.view.flxLostBids.onClick =this.lostBidToggle.bind(this);
  
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
  
  
  onPreShow: function(){
    this.toggleFooterIcons();
    this.invokeActiveBidsService();
    this.invokeWinningBidsService();
    this.invokeLostBidsService();
    this.closeBidAmountContainer();
    
  },
  
  onPostShow: function()
  {
    this.view.btn500AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"500");
    this.view.btn1000AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"1000");
    this.view.btn1500AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"1500");
    this.view.btnBidNow.onClick = this.invokeFryWfAuctionBidding.bind(this);
    
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
       
    },
  
   toggleFooterIcons: function()
  {
  this.view.Footer2.flxHL1.setVisibility(false);
  this.view.Footer2.flxHL2.setVisibility(false);
  this.view.Footer2.flxHL3.setVisibility(false);
  this.view.Footer2.flxHL4.setVisibility(true);
  this.view.Footer2.flxHL5.setVisibility(false);
    
  this.view.Footer2.imgHome.src = "homefooter.png";
  this.view.Footer2.lblHome.skin = "sknlblCPBoldCapt181818Font100";
  
  this.view.Footer2.imgMegaPhone.src = "auctionsfooter.png";
  this.view.Footer2.lblAuctions.skin = "sknlblCPBoldCapt181818Font100";
    
   this.view.Footer2.imgMyBids.src = "mybidsfooteractive.png";
   this.view.Footer2.lblMyBids.skin = "sknlblCPBoldDisp333333Font200";
    
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

  closeBidAmountContainer: function(){
    this.view.flxBidAmountSelectionContainer.setVisibility(false);
    this.view.flxOverLay.setVisibility(false);
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
    
    this.view.tbxBidAmount.text = this.currentAmount + Number(amount) +" AED";
    this.vehicleHike = amount;
    
  },
  
  ActiveBidsToggle: function(){
    this.view.flxActiveCarsList.setVisibility(true);
    this.view.flxWiningbidslist.setVisibility(false);
    this.view.flxlostbid.setVisibility(false);
    this.view.flxH1.setVisibility(true);
    this.view.flxH2.setVisibility(false);
    this.view.flxH3.setVisibility(false);
    this.view.lblActiveBids.skin="sknLblDubai231f2018px49";
   this.view.lblWinningBids.skin="sknLblDubai8e8e8e18px49";
    this.view.lblLostBids.skin="sknLblDubai8e8e8e18px49"
  },
  
    winningBidsToggle: function(){
    this.view.flxActiveCarsList.setVisibility(false);
    this.view.flxWiningbidslist.setVisibility(true);
    this.view.flxlostbid.setVisibility(false);
    this.view.flxH1.setVisibility(false);
    this.view.flxH2.setVisibility(true);
    this.view.flxH3.setVisibility(false);
       this.view.lblActiveBids.skin="sknLblDubai8e8e8e18px49";
   this.view.lblWinningBids.skin="sknLblDubai231f2018px49";
    this.view.lblLostBids.skin="sknLblDubai8e8e8e18px49"
  },
  
    lostBidToggle: function(){
    this.view.flxActiveCarsList.setVisibility(false);
    this.view.flxWiningbidslist.setVisibility(false);
    this.view.flxlostbid.setVisibility(true);
    this.view.flxH1.setVisibility(false);
    this.view.flxH2.setVisibility(false);
    this.view.flxH3.setVisibility(true);
        this.view.lblActiveBids.skin="sknLblDubai8e8e8e18px49";
   this.view.lblWinningBids.skin="sknLblDubai8e8e8e18px49";
    this.view.lblLostBids.skin="sknLblDubai231f2018px49"
  },
  
  
  invokeActiveBidsService: function() {
  var self = this;

  checkTokenValidatity(function() {
    // Call service after token is valid or refreshed
    var serviceCallBack = function(status, get_buyer_my_active_bids) {
      voltmx.print(get_buyer_my_active_bids);

      if (
        get_buyer_my_active_bids &&
        get_buyer_my_active_bids.opstatus === 0 &&
        get_buyer_my_active_bids.httpresponse &&
        get_buyer_my_active_bids.httpresponse.responsecode === 200 &&
        Array.isArray(get_buyer_my_active_bids.records)
      ) {
        self.insertIntoActiveBidsSegment(get_buyer_my_active_bids.records);
      } else {
        alert("Failed to fetch active bid data. Please try again.");
        voltmx.print("Invalid response structure or status.");
      }
    };

    var userid = voltmx.store.getItem("userId");
    var usertoken = voltmx.store.getItem("getUserAccesstoken");

    var inputParam = {
      serviceID: "fry_int_buyer$get-buyer-my-active-bids",
      user_id: userid,
      page: "1",
      pageSize: "10",
      httpheaders: { "user_token": usertoken },
      httpconfig: {}
    };

    mfintegrationsecureinvokerasync(inputParam, "fry_int_buyer", "get-buyer-my-active-bids", serviceCallBack);
  });
},
  
  insertIntoActiveBidsSegment: function(records)
  {
    var self = this;
    self.view.segActiveBidList.widgetDataMap = {
      "imgCardata":"imgCardata",
      "lblCarmodelname": "lblCarmodelname",
      "lblLot": "lblLot",
      "lblLotNum": "lblLotNum",
      "lblTotalbids": "lblTotalbids",
      "lblTotalBidsCount": "lblTotalBidsCount",
       "lblLocation":"lblLocation",
      "lblLocationVal":"lblLocationVal",
      "lblCurrentBid": "lblCurrentBid",
      "lblCurrentbidamount": "lblCurrentbidamount",
      "flxfav": "flxfav",
      "imgfavicon": "imgfavicon",
      "flxShare": "flxShare",
      "imgshare": "imgshare",
      "flxRebid": "flxRebid",
      "imgrebid": "imgrebid",
      "btnBidnow": "btnBidnow"
      
    };
    
     var segmentData = [];
    
    for(var i = 0; i<records.length; i++)
      {
        var activebiditem = records[i];
        var objid = activebiditem.object_id;
        var aucid = activebiditem.auction_id;
        var price = activebiditem.max_bid;
        var highestbidder = activebiditem.winning_bidder;

        var isFavouriteskin = activebiditem.is_favourite === "true" 
        ? "sknFlxd32437custom120pxround" 
        : "sknFlx231f20custom120pxround";

        var whichImage = activebiditem.is_favourite === "true" 
        ? "heartlikerecommended.png" 
        : "imgdislikenew.png";

        var bidrateSkin;
       if(activebiditem.winning_bidder === this.userid){
             bidrateSkin = "sknLblCronosProd0290512Bold22px";
          }
          else{
              bidrateSkin = "sknLblDubaid3243720pxbold";
          }
        var data = {
          "imgCardata": activebiditem.file_url || "car3.png",
          "lblCarmodelname": activebiditem.title || "N/A",
          "lblLot": "Lot #",
          "lblLotNum": activebiditem.lot_no || "N/A",
          "lblTotalbids": "Total Bids",
          "lblTotalBidsCount": activebiditem.no_of_bids || "N/A",
          "lblLocation": "Location",
          "lblLocationVal": activebiditem.location|| "N/A",
          "lblCurrentBid": "Current Bid",
          "lblCurrentbidamount": {"text": "AED "+ activebiditem.max_bid || "N/A",
                                  "skin": bidrateSkin
                                 },
          "flxfav": {
            "skin": isFavouriteskin,
            "onClick": this.addActiveToWishList.bind(this,objid,aucid)
          },
          "imgfavicon" : whichImage,
          
          "flxShare": {
            "skin": "sknflxBgFFFFFFBorder231F202px45"
          },
          "imgshare": "share.png",
          "flxRebid": {
            "skin": "slFbox",
            "onClick": this.enableAutoBid.bind(this,objid,aucid)
          },
          "imgrebid": "imgautobidnew.png",
          "btnBidnow": {
            "skin": "sknBtnBid61B35C8pxradius",
            "text": "BID NOW",
            "onClick": this.openBidAmountContainer.bind(this,objid,aucid,price,highestbidder)
          }
          
          
          
          
        }
        
        segmentData.push(data);
      }
    self.view.segActiveBidList.setData(segmentData);
    
    
    
  },
  
  addActiveToWishList: function(objid,aucid)
  {
    var self = this;
  var selectedRow = this.view.segActiveBidList.selectedRowItems;
  if (!selectedRow || selectedRow.length === 0) {
    voltmx.print("No row is selected");
    return;
  }

  var rowData = selectedRow[0];
  var rowIndex = this.view.segActiveBidList.selectedRowIndex[1];

  var isAlreadyLiked = rowData.imgfavicon === "heartlikerecommended.png";

  var callback = function(success, message) {
    if (success) {
      // Update UI based on action
      if (isAlreadyLiked) {
        rowData.imgfavicon = "imgdislikenew.png";
        rowData.flxfav.skin = "sknFlx231f20custom120pxround";
      } else {
        rowData.imgfavicon = "heartlikerecommended.png";
        rowData.flxfav.skin = "sknFlxd32437custom120pxround";
      }

      self.view.segActiveBidList.setDataAt(rowData, rowIndex);
    } else {
      alert("Favorite toggle failed: " + message);
    }
  };

  if (isAlreadyLiked) {
    self.invokeRemoveTrackedObject(objid, aucid, callback);
  } else {
    self.invokeAddTrackedObject(objid, aucid, callback);
  }
    
  },
  
   openBidAmountContainer: function(objid,aucid,price,highestbidder){
    var isLogin = voltmx.store.getItem("isLogin");
    if(isLogin)
      {
        
        if(highestbidder !== this.userid){
        
     var selectedData = this.view.segActiveBidList.selectedRowItems[0];
//     this.currentAmount = price;
    this.objid = objid;
    this.aucid = aucid;
          
    
    var amountText = selectedData.lblCurrentbidamount.text;  // "AED 23500.00"
    var amountOnly = amountText.replace("AED", "").trim();
    this.currentAmount = Number(amountOnly);
    this.view.flxBidAmountSelectionContainer.setVisibility(true);
    this.view.imgCheck.setVisibility(false);
    this.view.btn500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    this.view.btn1000AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    this.view.btn1500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    this.view.tbxBidAmount.text = "";
    this.view.flxOverLay.setVisibility(true);
      }
        else{
          alert('You are already a highest bidder');
        }
      }
        
    else{
      var x = new voltmx.mvc.Navigation("frmLoginScreen");
      x.navigate();
    }
  },
  
   enableAutoBid: function(objid,aucid){
    var isLogin = voltmx.store.getItem("isLogin");
    if(isLogin){
    this.view.tbxAutoBidAmount.text = "";
    this.objIdForAutoBid = objid;
    this.aucIdForAutoBid = aucid;
   this.view.flxOverLay.setVisibility(true);
   this.view.flxAutoBidAmountContainer.setVisibility(true);
    }
     else{
      var x = new voltmx.mvc.Navigation("frmLoginScreen");
      x.navigate();
    }
  },
  
  invokeAddTrackedObject: function(objid,aucid,callback)
  {
    
    var usertoken = voltmx.store.getItem("getUserAccesstoken");

  var inputParam = {
    serviceID: "ms_buyer$add-tracked-object",
    auction_id: aucid,
    object_id: objid,
    type: "favorites",
    httpheaders: {
      user_token: usertoken
    },
    httpconfig: {}
  };

  function addCallBack(status, response) {
    voltmx.print("Add Favorite Response: " + JSON.stringify(response));

    if (response.opstatus === 0 && response.message === "Asset added to favorites list") {
      callback(true, response.message);
    } else {
      callback(false, response.message || "Unknown error");
    }
  }

  mfintegrationsecureinvokerasync(inputParam, "ms_buyer", "add-tracked-object", addCallBack);


    
  },
  
  invokeRemoveTrackedObject: function(objid, aucid, callback) {
  var usertoken = voltmx.store.getItem("getUserAccesstoken");

  var inputParam = {
    serviceID: "ms_buyer$remove-tracked-object",
    auction_id: aucid,
    object_id: objid,
    type: "favorites",
    httpheaders: {
      user_token: usertoken
    },
    httpconfig: {}
  };

  function removeCallBack(status, response) {
    voltmx.print("Remove Favorite Response: " + JSON.stringify(response));

    if (response.opstatus === 0 && response.message === "Asset removed to favorites list") {
      callback(true, response.message);
    } else {
      callback(false, response.message || "Unknown error");
    }
  }

  mfintegrationsecureinvokerasync(inputParam, "ms_buyer", "remove-tracked-object", removeCallBack);
},
  
  invokeAutoBidFunction: function()
  {
    
     if (this.view.tbxAutoBidAmount.text && this.view.tbxAutoBidAmount.text.trim() !== "") {
       
       var self = this;

       function invokeServiceCallBack(status, register_auto_bidding) {
         if (register_auto_bidding && register_auto_bidding.opstatus === 0 && register_auto_bidding.records && register_auto_bidding.records.length > 0){
           self.view.flxAutoBidAmountContainer.setVisibility(false);
          
           self.view.lblSuccessMsg.text = "Auto Bid Activated Successfully";
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

        // Check for successful HTTP response and opstatus
        if (
            auction_bidding &&
            auction_bidding.opstatus === 0 &&
            auction_bidding.httpresponse &&
            auction_bidding.httpresponse.responsecode === 200
        ) {
            var msg = auction_bidding.message;
            
            if (msg === "Your bid is valid and accepted.") {
              if( self.view.lblSuccessMsg){
                self.view.lblSuccessMsg.text = "Your Bid Has Been Placed Successfully";
              }
                self.closeBidAmountContainer();
                self.view.flxBidSuccessPopup.setVisibility(true);
                self.updateSegmentWithUpdatedBidRate();
            } else if (msg) {
                alert(msg);  // Show server-provided message
            } else {
                alert("Unknown response from server.");
            }
        } else {
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
  
    updateSegmentWithUpdatedBidRate: function()
  {
    
    var selIndex = this.view.segActiveBidList.selectedRowIndex;
    var rowData = this.view.segActiveBidList.selectedRowItems[0];
    rowData.lblCurrentbidamount = "AED " + (this.currentAmount + Number(this.vehicleHike));
    rowData.lblCurrentbidamount = {
    "text": "AED " + (this.currentAmount + Number(this.vehicleHike)),
    "skin": "sknLblDubai02905120pxBold"
  };
//     rowData.lblTotalBidsCount = Number(rowData.lblTotalBidsCount) + 1;
    this.view.segActiveBidList.setDataAt(rowData, selIndex[1]);
  
  },
  
  invokeWinningBidsService: function()
  {
      var self = this;

    function serviceCallBack(status, get_buyer_my_winning_bids) {
      voltmx.print(get_buyer_my_winning_bids);
      
       if (
        get_buyer_my_winning_bids &&
        get_buyer_my_winning_bids.opstatus === 0 &&
        get_buyer_my_winning_bids.httpresponse &&
        get_buyer_my_winning_bids.httpresponse.responsecode === 200 &&
        Array.isArray(get_buyer_my_winning_bids.records)
    ) {
        
        if (
    self.view &&
    self.view.segWinningBidList &&
    self.view.segWinningBidList.setData
) {
    self.insertIntoWinningBidsSegment(get_buyer_my_winning_bids.records);
} else {
    voltmx.print("Segment not initialized or not visible yet.");
}
    } else {
        alert("Failed to winning bid data. Please try again.");
        voltmx.print("Invalid response structure or status.");
    }
      
    }
//     if (get_buyer_my_winning_bids_inputparam == undefined) {
        var get_buyer_my_winning_bids_inputparam = {};
//     }
    var userid = voltmx.store.getItem("userId");
    var usertoken = voltmx.store.getItem("getUserAccesstoken");
    get_buyer_my_winning_bids_inputparam["serviceID"] = "fry_int_buyer$get-buyer-my-winning-bids";
     get_buyer_my_winning_bids_inputparam["user_id"] = userid;
    get_buyer_my_winning_bids_inputparam["status"] = "";
     get_buyer_my_winning_bids_inputparam["page"] = "1";
     get_buyer_my_winning_bids_inputparam["pageSize"] = "10";
    var get_buyer_my_winning_bids_httpheaders = {
      "user_token": usertoken
    };
    get_buyer_my_winning_bids_inputparam["httpheaders"] = get_buyer_my_winning_bids_httpheaders;
    var get_buyer_my_winning_bids_httpconfigs = {};
    get_buyer_my_winning_bids_inputparam["httpconfig"] = get_buyer_my_winning_bids_httpconfigs;
    fry_int_buyer$get_buyer_my_winning_bids = mfintegrationsecureinvokerasync(get_buyer_my_winning_bids_inputparam, "fry_int_buyer", "get-buyer-my-winning-bids", serviceCallBack);

  },
  
  insertIntoWinningBidsSegment: function(records)
  {
      var self = this;
    
      self.view.segWinningBidList.widgetDataMap = {
        "imgCardata":"imgCardata",
        "lblWinningmodelname": "lblWinningmodelname",
        "lbllot": "lbllot",
        "lblLotValue": "lblLotValue",
        "lblLocationname": "lblLocationname",
        "lblLocationValue": "lblLocationValue",
        "lblApproval": "lblApproval",
        "lblStatusApproved": "lblStatusApproved",
         "lblPaymentstatus": "lblPaymentstatus",
        "lblpaymentstatusvalue": "lblpaymentstatusvalue",
        "lblWinningbid": "lblWinningbid",
        "lblwinningbidamt": "lblwinningbidamt",
        "imgRequestServices": "imgRequestServices",
        "flxRequestaccess": "flxRequestaccess",
        "lblrequestaccess": "lblrequestaccess",
        "imgdoc": "imgdoc",
        "lblDocuments": "lblDocuments",
        "btnPayNow": "btnPayNow"
      }
    
    var segData = [];
      for(var i=0;i<records.length;i++){
        
        var winningbiditem = records[i];
        
        var data = {
          "imgCardata": winningbiditem.file_url || "car3.png",
          "lblWinningmodelname": winningbiditem.title || "N/A",
          "lbllot": "Lot #",
          "lblLotValue": winningbiditem.lot_no || "N/A",
          "lblLocationname": "Location",
          "lblLocationValue": winningbiditem.location || "N/A",
          "lblApproval": "Approval Status",
          "lblStatusApproved": winningbiditem.approval_status || "N/A",
          "lblPaymentstatus": "Payment Status",
          "lblpaymentstatusvalue": winningbiditem.payment_status || "N/A",
          "lblWinningbid": "Winning Bid",
          "lblwinningbidamt": winningbiditem.max_bid || "N/A",
          "flxRequestaccess": {
            "onClick": this.navToServices.bind(this)
          },
          "imgRequestServices": "reqestservices.png",
          "lblrequestaccess": "REQUEST SERVICES",
          "imgdoc": "ep_document.png",
          "lblDocuments": "DOCUMENTS",
          "btnPayNow": {
            "skin":"sknbtnBg61B35CBoder61B35C1pxRadius8pxFontffffffDubaiReg14px45",
            "text": "PAY NOW"
          }
          
          
        }
        
        segData.push(data);

      }
    self.view.segWinningBidList.setData(segData);
    
    
  },
  
  invokeLostBidsService: function()
  {
    var self = this;

    function serviceCallBack(status, get_buyer_my_lost_bids) {
      voltmx.print(get_buyer_my_lost_bids);
      if (
        get_buyer_my_lost_bids &&
        get_buyer_my_lost_bids.opstatus === 0 &&
        get_buyer_my_lost_bids.httpresponse &&
        get_buyer_my_lost_bids.httpresponse.responsecode === 200 &&
        Array.isArray(get_buyer_my_lost_bids.records)
      ) {
        var records = get_buyer_my_lost_bids.records;
        // Now safe to pass to your segment function
        self.insertIntoLostBidsSegment(records);
      } else {
        voltmx.print("Invalid response or no records found.");
        alert("Failed to fetch lost bids. Please try again.");
      }

    }
    if (get_buyer_my_lost_bids_inputparam == undefined) {
      var get_buyer_my_lost_bids_inputparam = {};
    }
    var userid = voltmx.store.getItem("userId");
    var usertoken = voltmx.store.getItem("getUserAccesstoken");
    get_buyer_my_lost_bids_inputparam["serviceID"] = "fry_int_buyer$get-buyer-my-lost-bids";
    get_buyer_my_lost_bids_inputparam["user_id"] = userid;
     
    get_buyer_my_lost_bids_inputparam["page"] = "1";
    get_buyer_my_lost_bids_inputparam["pageSize"] = "10";
    var get_buyer_my_lost_bids_httpheaders = {
      "user_token": usertoken
    };
    get_buyer_my_lost_bids_inputparam["httpheaders"] = get_buyer_my_lost_bids_httpheaders;
    var get_buyer_my_lost_bids_httpconfigs = {};
    get_buyer_my_lost_bids_inputparam["httpconfig"] = get_buyer_my_lost_bids_httpconfigs;
    fry_int_buyer$get_buyer_my_lost_bids = mfintegrationsecureinvokerasync(get_buyer_my_lost_bids_inputparam, "fry_int_buyer", "get-buyer-my-lost-bids", serviceCallBack);

  },

  insertIntoLostBidsSegment: function(records)
  {
    var self = this;
    self.view.seglostbid.widgetDataMap = {
      "imglostbidcar": "imglostbidcar",
      "lblmodelnamecar":"lblmodelnamecar",
      "lbllot": "lbllot",
      "lblLotValue": "lblLotValue",
      "lbltotalbidsize": "lbltotalbidsize",
      "lblTotalBidValue": "lblTotalBidValue",
      "lblLocation": "lblLocation",
      "lbllocationname": "lbllocationname",
      "lblyourbid": "lblyourbid",
      "lblBidPrice": "lblBidPrice",
      "lblmanymore": "lblmanymore",
      "btnGoToAuction":"btnGoToAuction"
    }

    var segData = [];
    for (var i=0;i<records.length ; i++)
    {
      var lostbiditem = records[i];

      var data = {
        "imglostbidcar" : lostbiditem.file_url || "car3.png",
        "lblmodelnamecar": lostbiditem.title || "N/A",
        "lbllot" : "Lot #",
        "lblLotValue": lostbiditem.lot_no || "N/A",
        "lbltotalbidsize": "Total Bids",
        "lblTotalBidValue": lostbiditem.no_of_bids || "N/A",
        "lblLocation": "Location",
        "lbllocationname": lostbiditem.location || "N/A",
        "lblyourbid": "Your Bid",
        "lblBidPrice": lostbiditem.max_bid || "N/A",
        "lblmanymore": "MANY MORE TO CHOOSE FROM",
        "btnGoToAuction" :  {
          "skin" : "sknbtnBg61B35CBorder61B35CRadius8pxFont14pxDubai45",
          "text" : "GO TO AUCTIONS",
          "onClick": this.goToAuctions.bind(this)
        }
      }
        segData.push(data);
      }
       self.view.seglostbid.setData(segData);
  },
  
  goToAuctions: function()
  {
    new voltmx.mvc.Navigation("frmAllAuctionsList").navigate();
  },
  
  navToServices: function()
  {
    new voltmx.mvc.Navigation("frmServices").navigate();
  }

   

 });
define({ 

 //Type your controller code here 
  onNavigate: function()
{
  this.view.preShow = this.onPreShow.bind(this);
    this.view.flxActiveBids.onClick =this.ActiveBidsToggle.bind(this);
    this.view.flxWinningBids.onClick =this.winningBidsToggle.bind(this);
    this.view.flxLostBids.onClick =this.lostBidToggle.bind(this);
}, 
  
  
  onPreShow: function(){
    this.toggleFooterIcons();
    this.invokeActiveBidsService();
    this.invokeWinningBidsService();
    this.invokeLostBidsService();
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


  
  ActiveBidsToggle: function(){
    this.view.flxActiveCarsList.setVisibility(true);
    this.view.flxWiningbidslist.setVisibility(false);
    this.view.flxlostbid.setVisibility(false);
    this.view.flxH1.setVisibility(true);
    this.view.flxH2.setVisibility(false);
    this.view.flxH3.setVisibility(false);
    this.view.lblActiveBids.skin="sknLblCronosPro231f2018px49";
   this.view.lblWinningBids.skin="sknLblCronosPro8e8e8e18px49";
    this.view.lblLostBids.skin="sknLblCronosPro8e8e8e18px49"
  },
  
    winningBidsToggle: function(){
    this.view.flxActiveCarsList.setVisibility(false);
    this.view.flxWiningbidslist.setVisibility(true);
    this.view.flxlostbid.setVisibility(false);
    this.view.flxH1.setVisibility(false);
    this.view.flxH2.setVisibility(true);
    this.view.flxH3.setVisibility(false);
       this.view.lblActiveBids.skin="sknLblCronosPro8e8e8e18px49";
   this.view.lblWinningBids.skin="sknLblCronosPro231f2018px49";
    this.view.lblLostBids.skin="sknLblCronosPro8e8e8e18px49"
  },
  
    lostBidToggle: function(){
    this.view.flxActiveCarsList.setVisibility(false);
    this.view.flxWiningbidslist.setVisibility(false);
    this.view.flxlostbid.setVisibility(true);
    this.view.flxH1.setVisibility(false);
    this.view.flxH2.setVisibility(false);
    this.view.flxH3.setVisibility(true);
        this.view.lblActiveBids.skin="sknLblCronosPro8e8e8e18px49";
   this.view.lblWinningBids.skin="sknLblCronosPro8e8e8e18px49";
    this.view.lblLostBids.skin="sknLblCronosPro231f2018px49"
  },
  
  
   invokeActiveBidsService: function()
  {
    var self = this;

    function serviceCallBack(status, get_buyer_my_active_bids) {
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
        alert("Failed to fetch bid data. Please try again.");
        voltmx.print("Invalid response structure or status.");
    }
    }
//     if (get_buyer_my_active_bids_inputparam == undefined) {
        var get_buyer_my_active_bids_inputparam = {};
//     }
    var userid = voltmx.store.getItem("userId");
    var usertoken = voltmx.store.getItem("getUserAccesstoken");
    get_buyer_my_active_bids_inputparam["serviceID"] = "fry_int_buyer$get-buyer-my-active-bids";
    get_buyer_my_active_bids_inputparam["user_id"] = userid;
    get_buyer_my_active_bids_inputparam["page"] = "1";
    get_buyer_my_active_bids_inputparam["pageSize"] = "10";
    var get_buyer_my_active_bids_httpheaders = {
      "user_token": usertoken
    };
    get_buyer_my_active_bids_inputparam["httpheaders"] = get_buyer_my_active_bids_httpheaders;
    var get_buyer_my_active_bids_httpconfigs = {};
    get_buyer_my_active_bids_inputparam["httpconfig"] = get_buyer_my_active_bids_httpconfigs;
    fry_int_buyer$get_buyer_my_active_bids = mfintegrationsecureinvokerasync(get_buyer_my_active_bids_inputparam, "fry_int_buyer", "get-buyer-my-active-bids", serviceCallBack);
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
          "lblCurrentbidamount": "AED "+ activebiditem.max_bid || "N/A",
          "flxfav": {
            "skin": "sknFlx231f20custom120pxround",
            "onClick": this.addActiveToWishList.bind(this)
          },
          "imgfavicon" : "imgdislikenew.png",
          
          "flxShare": {
            "skin": "sknflxBgFFFFFFBorder231F202px45"
          },
          "imgshare": "share.png",
          "flxRebid": {
            "skin": "slFbox"
          },
          "imgrebid": "imgautobidnew.png",
          "btnBidnow": {
            "skin": "sknBtnBid61B35C8pxradius",
            "text": "BID NOW"
          }
          
          
          
          
        }
        
        segmentData.push(data);
      }
    self.view.segActiveBidList.setData(segmentData);
    
    
    
  },
  
  addActiveToWishList: function()
  {
    var self = this;
    var selectedRow  = this.view.segActiveBidList.selectedRowItems;
    if (!selectedRow || selectedRow.length === 0) {
      voltmx.print("No row is selected");
      return;
    }
    var rowData = selectedRow[0];
    var rowIndex = this.view.segActiveBidList.selectedRowIndex[1];

    
    if (rowData.imgfavicon === "imgdislikenew.png") {
  rowData.imgfavicon = "heartlikerecommended.png";
  rowData.flxfav = { skin: "sknFlxd32437custom120pxround",
                   zindex: "4"};
} else {
  rowData.imgfavicon = "imgdislikenew.png";
  rowData.flxfav = { skin: "sknFlx231f20custom120pxround",
                   zindex: "4"};
}
//     rowData.flxfav.skin = 
    // Update only the selected row
    self.view.segActiveBidList.setDataAt(rowData, rowIndex);
    
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
        alert("Failed to fetch bid data. Please try again.");
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
          "text" : "GO TO AUCTIONS"
        }
      }
        segData.push(data);
      }
       self.view.seglostbid.setData(segData);
  }

   

 });
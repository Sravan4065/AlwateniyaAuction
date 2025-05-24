define({

  onNavigate: function() 
  {
    this.userid = voltmx.store.getItem("userId");
  this.view.preShow = this.onPreShow.bind(this);
//   this.view.postShow = this.onPostShow.bind(this);
    
    this.view.flxApprovedBids.onClick =this.ActiveBidsToggle.bind(this);
   this.view.flxRejectedBids.onClick =this.winningBidsToggle.bind(this);
    this.view.flxPendingBids.onClick =this.lostBidToggle.bind(this);
    
      
    
    this.view.flxBack.onClick = function()
    {
      new voltmx.mvc.Navigation("frmOpenMyVehicles").navigate();
    }.bind(this);
    
  },
  
   onPreShow: function(){
    this.toggleFooterIcons();
    this.invokeWinningBidsServiceApproved();
    this.invokeWinningBidsServiceRejected();
    this.invokeWinningBidsServicePending();
    
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
  },
  
 invokeWinningBidsServiceApproved: function()
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
          var records = get_buyer_my_winning_bids.records;

    // Filter records by approval_status
//     var approvedRecords = records.filter(rec => 
//     rec.approval_status && rec.approval_status.toLowerCase() === 'approved'
// );
// var pendingRecords = records.filter(rec => 
//     rec.approval_status && rec.approval_status.toLowerCase() === 'pending'
// );
// var rejectedRecords = records.filter(rec => 
//     rec.approval_status && rec.approval_status.toLowerCase() === 'rejected'
// );
        
//         if (
//     self.view &&
//     self.view.segWinningBidList &&
//     self.view.segWinningBidList.setData
// ) {  
    self.insertIntoWinningBidsSegment(records);
//      self.insertIntoRejectedList(rejectedRecords);
//       self.insertIntoPendingList(pendingRecords);
// } else {
//     voltmx.print("Segment not initialized or not visible yet.");
// }
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
     get_buyer_my_winning_bids_inputparam["status"] = "Approved";
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
  
  invokeWinningBidsServiceRejected: function()
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
          var records = get_buyer_my_winning_bids.records;

//     // Filter records by approval_status
//     var approvedRecords = records.filter(rec => 
//     rec.approval_status && rec.approval_status.toLowerCase() === 'approved'
// );
// var pendingRecords = records.filter(rec => 
//     rec.approval_status && rec.approval_status.toLowerCase() === 'pending'
// );
// var rejectedRecords = records.filter(rec => 
//     rec.approval_status && rec.approval_status.toLowerCase() === 'rejected'
// );
        
//         if (
//     self.view &&
//     self.view.segWinningBidList &&
//     self.view.segWinningBidList.setData
// ) {  
//     self.insertIntoWinningBidsSegment(approvedRecords);
     self.insertIntoRejectedList(records);
//       self.insertIntoPendingList(pendingRecords);
// } else {
//     voltmx.print("Segment not initialized or not visible yet.");
// }
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
     get_buyer_my_winning_bids_inputparam["status"] = "Rejected";
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
  
  invokeWinningBidsServicePending: function()
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
          var records = get_buyer_my_winning_bids.records;

//     // Filter records by approval_status
//     var approvedRecords = records.filter(rec => 
//     rec.approval_status && rec.approval_status.toLowerCase() === 'approved'
// );
// var pendingRecords = records.filter(rec => 
//     rec.approval_status && rec.approval_status.toLowerCase() === 'pending'
// );
// var rejectedRecords = records.filter(rec => 
//     rec.approval_status && rec.approval_status.toLowerCase() === 'rejected'
// );
        
//         if (
//     self.view &&
//     self.view.segWinningBidList &&
//     self.view.segWinningBidList.setData
// ) {  
//     self.insertIntoWinningBidsSegment(approvedRecords);
//      self.insertIntoRejectedList(records);
      self.insertIntoPendingList(records);
// } else {
//     voltmx.print("Segment not initialized or not visible yet.");
// }
    } else {
        alert("Failed to winning bid data. Please try again.");
        voltmx.print("Invalid response structure or status.");
    }
      
    }
    if (get_buyer_my_winning_bids_inputparam == undefined) {
        var get_buyer_my_winning_bids_inputparam = {};
    }
    var userid = voltmx.store.getItem("userId");
    var usertoken = voltmx.store.getItem("getUserAccesstoken");
    get_buyer_my_winning_bids_inputparam["serviceID"] = "fry_int_buyer$get-buyer-my-winning-bids";
     get_buyer_my_winning_bids_inputparam["user_id"] = userid;
     get_buyer_my_winning_bids_inputparam["status"] = "Pending";
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
    
      self.view.segActiveBidList.widgetDataMap = {
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
        var paymentstatusskin = (winningbiditem.payment_status.toLowerCase() === "paid") ? "sknlbl029051Size16pxDubaiBold" : "sknlblD32437Size16pxDubaiBold45";
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
          "lblpaymentstatusvalue": {"text":winningbiditem.payment_status || "N/A",
                                    "skin" : paymentstatusskin},
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
    self.view.segActiveBidList.setData(segData);
    
    
  },
  
  insertIntoRejectedList: function(records)
  {
    var self = this;
    
      self.view.segRejectedList.widgetDataMap = {
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
       var paymentstatusskin = (winningbiditem.payment_status.toLowerCase() === "paid") ? "sknlbl029051Size16pxDubaiBold" : "sknlblD32437Size16pxDubaiBold45";

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
          "lblpaymentstatusvalue": {"text":winningbiditem.payment_status || "N/A",
                                    "skin" : paymentstatusskin},
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
    self.view.segRejectedList.setData(segData);
  },
  
  insertIntoPendingList: function(records)
  {
    
    var self = this;
    
      self.view.segPendingList.widgetDataMap = {
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
        var paymentstatusskin = (winningbiditem.payment_status.toLowerCase() === "paid") ? "sknlbl029051Size16pxDubaiBold" : "sknlblD32437Size16pxDubaiBold45";
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
          "lblpaymentstatusvalue":{"text":winningbiditem.payment_status || "N/A",
                                    "skin" : paymentstatusskin},
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
    self.view.segPendingList.setData(segData);
    
  },
  
  
  
    ActiveBidsToggle: function(){
    this.view.flxApprovedList.setVisibility(true);
    this.view.flxRejectedList.setVisibility(false);
    this.view.flxPendingList.setVisibility(false);
    this.view.flxH1.setVisibility(true);
    this.view.flxH2.setVisibility(false);
    this.view.flxH3.setVisibility(false);
    this.view.lblActiveBids.skin="sknLblDubai231f2018px49";
   this.view.lblWinningBids.skin="sknLblDubai8e8e8e18px49";
    this.view.lblLostBids.skin="sknLblDubai8e8e8e18px49"
  },
  
    winningBidsToggle: function(){
    this.view.flxApprovedList.setVisibility(false);
    this.view.flxRejectedList.setVisibility(true);
    this.view.flxPendingList.setVisibility(false);
    this.view.flxH1.setVisibility(false);
    this.view.flxH2.setVisibility(true);
    this.view.flxH3.setVisibility(false);
       this.view.lblActiveBids.skin="sknLblDubai8e8e8e18px49";
   this.view.lblWinningBids.skin="sknLblDubai231f2018px49";
    this.view.lblLostBids.skin="sknLblDubai8e8e8e18px49"
  },
  
    lostBidToggle: function(){
    this.view.flxApprovedList.setVisibility(false);
   this.view.flxRejectedList.setVisibility(false);
    this.view.flxPendingList.setVisibility(true);
    this.view.flxH1.setVisibility(false);
    this.view.flxH2.setVisibility(false);
    this.view.flxH3.setVisibility(true);
        this.view.lblActiveBids.skin="sknLblDubai8e8e8e18px49";
   this.view.lblWinningBids.skin="sknLblDubai8e8e8e18px49";
    this.view.lblLostBids.skin="sknLblDubai231f2018px49"
  }
});

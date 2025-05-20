

define({

  
 onNavigate: function()
  {
    this.userid = voltmx.store.getItem("userId");
   this.view.preShow = this.onPreshow.bind(this);
    this.view.postShow = this.onPostShow.bind(this);
    this.view.segCurrentAuctionList.onRowClick = this.navTofrmDetails.bind(this);
    
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
    
    this.view.btnLoadMore.onClick = this.onLoadMoreClick.bind(this);
  },

  onPreshow: function(){
   
    this.pageSize = 10;
    this.currentOffset = 0;
    this.view.segCurrentAuctionList.setData([]);
//     this.view.btnLoadMore.setVisibility(true);
    
   this.toggleFooterIcons();
   this.invokeOnlineAuctionList();
   this.updateDates();             
    this.createCalendarView();   
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
  
updateDates: function() {
  var monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];

  var weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; 

  var currentDate = new Date();
  this.calendar = []; 

  for (var i = 0; i < 8; i++) {
    var tempDate = new Date(); 
    tempDate.setDate(currentDate.getDate() + i);
    
    var dayIndex = tempDate.getDay(); 
    var day = weeks[dayIndex]; 
    var date = tempDate.getDate(); 
    var hasAuction = (i === 1 || i === 2 || i === 3); 

    this.calendar.push({
      weekday: day,
      date: date.toString(),
      hasAuction: hasAuction
    });
  }


  voltmx.print("Calendar data: " + JSON.stringify(this.calendar));
},
  
  
  onLoadMoreClick: function() {
   voltmx.application.showLoadingScreen();
  this.pageSize += 10;
  this.invokeOnlineAuctionList(); // Will bring all up to new pageSize
}, 
 invokeOnlineAuctionList: function(){
    
    var self = this;

    function invServiceCallBack(status, online_auction_list) {
      if (!online_auction_list || !online_auction_list.records) {
        voltmx.print("Error: Response is null or missing auction_list");
        return;
      }
      var records = online_auction_list.records;
      self.setDataToSegFromService(records);
    }
    if (online_auction_list_inputparam == undefined) {
        var online_auction_list_inputparam = {};
    }
    online_auction_list_inputparam["serviceID"] = "fry_int_auctions$get-buyer-all-auctions";
    online_auction_list_inputparam["body_type"] = "";
    online_auction_list_inputparam["transmission_type"] = "";
    online_auction_list_inputparam["fuel_type"] = "";
    online_auction_list_inputparam["body_condition"] = "";
    online_auction_list_inputparam["brand"] = "";
    online_auction_list_inputparam["model"] = "";
    online_auction_list_inputparam["mileage_range"] = "";
    online_auction_list_inputparam["asset_id"] = "";
    
     online_auction_list_inputparam["year_range"] = 0;
     online_auction_list_inputparam["auction_type"] = 0;
     online_auction_list_inputparam["yard_branch"] = 0;
     online_auction_list_inputparam["price_range"] = 0;
     online_auction_list_inputparam["page"] = 1;
     online_auction_list_inputparam["pageSize"] = self.pageSize;
    var online_auction_list_httpheaders = {};
    online_auction_list_inputparam["httpheaders"] = online_auction_list_httpheaders;
    var online_auction_list_httpconfigs = {};
    online_auction_list_inputparam["httpconfig"] = online_auction_list_httpconfigs;
    fry_int_auctions$online_auction_list = mfintegrationsecureinvokerasync(online_auction_list_inputparam, "fry_int_auctions", "get-buyer-all-auctions", invServiceCallBack);
  },
  setDataToSegFromService: function(records)
  {
    var self = this;
    this.view.segCurrentAuctionList.widgetDataMap = {
      "lblObjID":"lblObjID",
      "lblAuctionID":"lblAuctionID",
      "imgCarPIcture":"imgCarPIcture",
      "lblCarname":"lblCarname",
      "lblTimerCount":"lblTimerCount",
      "lblLot":"lblLot",
      "lblLotNum":"lblLotNum",
      "lblTotalBids":"lblTotalBids",
      "lblTotalBidsCount":"lblTotalBidsCount",
      "lblLocation":"lblLocation",
      "lblLocationName":"lblLocationName",
      "flxLikeHeart":"flxLikeHeart",
      "imgHeart":"imgHeart",
      "lblCurrentBid":"lblCurrentBid",
      "lblPrice": "lblPrice",
      "btnBidNow":"btnBidNow",
      "flxAutoBid":"flxAutoBid",
      "imgAutoBidicon":"imgAutoBidicon",
      "lblAutoBid":"lblAutoBid"
    }

  self.loadNextRecords(records); 

  },
  
  loadNextRecords: function(records) {
  var self = this;
  var data = [];
     var newRecords = records.slice(self.currentOffset); // Only new ones


  for (var i = 0; i < newRecords.length; i++) {
    var item = newRecords[i];
    var carimage = item.thumbnail_url && item.thumbnail_url.trim() !== "" ? item.thumbnail_url : "car3.png";
    var carname = item.sub_category_name && item.sub_category_name.trim() !== "" ? item.sub_category_name : "N/A";
    var timercount = item.time_remaining;
    var lotnum = item.ID || "N/A";
    var totalbids = item.bids || "N/A";
    var location = item.location || "N/A";
    var objid = item.object_id;
    var aucid = item.auction_id;
    var price = Number(item.max_bid_amount);
    var highestbidder = item.highest_bidder;
    var bidrateSkin = (item.highest_bidder === this.userid) ? "sknLblCronosProd0290512Bold22px" : "sknLblDubaid3243720pxbold";

    data.push({
      "imgCarPIcture": carimage,
      "lblCarname": carname,
      "lblObjID": objid,
      "lblTimerCount": timercount,
      "lblLot": "Lot #",
      "lblLotNum": lotnum,
      "lblTotalBids": "Total Bids",
      "lblTotalBidsCount": totalbids,
      "lblLocation": "Location",
      "lblLocationName": location,
      "lblAuctionID": aucid,
      "flxLikeHeart": {
        "skin": "sknFlx231f20custom120pxround",
        "onClick": this.addToWishList.bind(this)
      },
      "imgHeart": "imgdislikenew.png",
      "lblCurrentBid": "CURRENT BID",
      "lblPrice": {
        "text": "AED " + price,
        "skin": bidrateSkin
      },
      "flxAutoBid": {
        "onClick": this.enableAutoBid.bind(this, objid, aucid)
      },
      "imgAutoBidicon": "autobidnewone.png",
      "lblAutoBid": "AUTO BID",
      "btnBidNow": {
        "onClick": this.openBidAmountContainer.bind(this, objid, aucid, price, highestbidder)
      }
    });
  }

  self.view.segCurrentAuctionList.addAll(data);
  voltmx.application.dismissLoadingScreen();
    
     if (self.currentOffset >= records.length) {
    self.view.btnLoadMore.setVisibility(false);
  } else {
    self.view.btnLoadMore.setVisibility(true);
  }
      self.currentOffset += newRecords.length;
    
    

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
  setDataToSeg: function(records)
  {   
    this.view.segCurrentAuctionList.widgetDataMap = {
      "imgCarPIcture":"imgCarPIcture",
      "lblCarname":"lblCarname",
      "lblTimerCount":"lblTimerCount",
      "lblLotNum":"lblLotNum",
      "lblTotalBids":"lblTotalBids",
      "flxLikeHeart":"flxLikeHeart",
      "imgHeart":"imgHeart",
      "lblCurrentBid":"lblCurrentBid",
      "lblPrice":"lblPrice",
      "btnBidNow":"btnBidNow",
      "flxAutoBid":"flxAutoBid",
      "imgAutoBidicon":"imgAutoBidicon",
      "lblAutoBid":"lblAutoBid"
    }
    
    var data = [ 
      {
        "imgCarPIcture" : "carsample1.png",
        "lblCarname" : "Chevrolet Impala 2018",
        "lblTimerCount" : "04:59S",
        "lblLotNum" : "#Lot:69952",
        "lblTotalBids" : "Total Bids: 68",
        "flxLikeHeart" : {
          "onClick": this.addToWishList.bind(this)
        },
        "imgHeart" : "dislikeheartcurrentauctions.png",
        "lblCurrentBid" : "CURRENT BID",
        "lblPrice" : "40,000",
        "flxAutoBid": {
          "onClick": this.enableAutoBid.bind(this)
        },
        "imgAutoBidicon" : "autobidicon.png",
        "lblAutoBid" : "AUTO BID",
        "btnBidNow" : "BID NOW"
        
        
      },
      
      {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Ford Mustang 2022",
    "lblTimerCount": "03:45S",
    "lblLotNum": "#Lot:12345",
    "lblTotalBids": "Total Bids: 50",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "55,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Tesla Model S",
    "lblTimerCount": "02:30S",
    "lblLotNum": "#Lot:56789",
    "lblTotalBids": "Total Bids: 75",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "80,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "BMW M3",
    "lblTimerCount": "04:10S",
    "lblLotNum": "#Lot:23456",
    "lblTotalBids": "Total Bids: 40",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "70,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Audi R8",
    "lblTimerCount": "01:59S",
    "lblLotNum": "#Lot:98765",
    "lblTotalBids": "Total Bids: 90",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "120,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Porsche 911",
    "lblTimerCount": "05:20S",
    "lblLotNum": "#Lot:34567",
    "lblTotalBids": "Total Bids: 65",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "95,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Mercedes AMG GT",
    "lblTimerCount": "02:15S",
    "lblLotNum": "#Lot:54321",
    "lblTotalBids": "Total Bids: 55",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "85,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Chevrolet Camaro",
    "lblTimerCount": "03:00S",
    "lblLotNum": "#Lot:11122",
    "lblTotalBids": "Total Bids: 48",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "60,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Nissan GTR",
    "lblTimerCount": "01:45S",
    "lblLotNum": "#Lot:33344",
    "lblTotalBids": "Total Bids: 120",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "130,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Lamborghini Huracan",
    "lblTimerCount": "04:30S",
    "lblLotNum": "#Lot:77788",
    "lblTotalBids": "Total Bids: 150",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "250,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
    "btnBidNow" : "BID NOW"
  },
  {
    "imgCarPIcture": "carsample1.png",
    "lblCarname": "Dodge Challenger",
    "lblTimerCount": "05:00S",
    "lblLotNum": "#Lot:99900",
    "lblTotalBids": "Total Bids: 35",
    "flxLikeHeart": { "onClick": this.addToWishList.bind(this) },
    "imgHeart": "dislikeheartcurrentauctions.png",
    "lblCurrentBid": "CURRENT BID",
    "lblPrice": "58,000",
    "flxAutoBid": { "onClick": this.enableAutoBid.bind(this) },
    "imgAutoBidicon": "autobidicon.png",
    "lblAutoBid": "AUTO BID",
     "btnBidNow" : "BID NOW"
  }   
    ]
    this.view.segCurrentAuctionList.setData(data);
  },
  

addToWishList: function(widgetRef, sectionIndex, rowIndex){
    var selectedRow  = this.view.segCurrentAuctionList.selectedRowItems;
    if (!selectedRow || selectedRow.length === 0) {
      voltmx.print("No row is selected");
      return;
    }
    var rowData = selectedRow[0];
    var rowIndex = this.view.segCurrentAuctionList.selectedRowIndex[1];

//     rowData.imgHeart = rowData.imgHeart === "imgdislikenew.png" ? "heartlikerecommended.png" : "imgdislikenew.png";
    
       if (rowData.imgHeart === "imgdislikenew.png") {
  rowData.imgHeart = "heartlikerecommended.png";
  rowData.flxLikeHeart.skin =  "sknFlxd32437custom120pxround";
} else {
  rowData.imgHeart = "imgdislikenew.png";
  rowData.flxLikeHeart.skin =  "sknFlx231f20custom120pxround";
}

    // Update only the selected row
    this.view.segCurrentAuctionList.setDataAt(rowData, rowIndex);
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
  
  updateSegmentWithUpdatedBidRate: function()
  {
    var self = this;
    var selIndex = self.view.segCurrentAuctionList.selectedRowIndex;
    var rowData = self.view.segCurrentAuctionList.selectedRowItems[0];
    rowData.lblPrice = "AED " + (self.currentAmount + Number(self.vehicleHike));
    rowData.lblPrice = {
    "text": "AED " + (self.currentAmount + Number(self.vehicleHike)),
    "skin": "sknLblDubai02905120pxBold"
  };
    rowData.lblTotalBidsCount = Number(rowData.lblTotalBidsCount) + 1;
    self.view.segCurrentAuctionList.setDataAt(rowData, selIndex[1]);
  
  },
  
 openBidAmountContainer: function(objid,aucid,price,highestbidder){
    var isLogin = voltmx.store.getItem("isLogin");
    if(isLogin)
      {
        
        if(highestbidder !== this.userid){
        
     var selectedData = this.view.segCurrentAuctionList.selectedRowItems[0];
//     this.currentAmount = price;
    this.objid = objid;
    this.aucid = aucid;
          
    
    var amountText = selectedData.lblPrice.text;  // "AED 23500.00"
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
  
  createCalendarView: function()
  {
     if (!this.calendar || this.calendar.length === 0) {
    this.updateDates(); 
  }
    var self = this;
    self.view.flxCalendarShow.removeAll();
 
for (var i = 0; i < this.calendar.length; i++) {
  var item = this.calendar[i];
  var leftVal = (i === 0) ? "2%" : "0%";
 
  var flxItem = new voltmx.ui.FlexContainer({
    id: "flxItem" + i,
    layoutType: voltmx.flex.FLOW_VERTICAL,
    width: "12%",
    height: "100%",
    left: leftVal,
    isVisible: true,
    skin: "slFbox",
    onClick: this.handleCalendarItemClick.bind(this,i,this.calendar)
  }, {}, {});
  flxItem.setDefaultUnit(voltmx.flex.DP);

  var lblWeekDay = new voltmx.ui.Label({
    id: "lblWeekDay" + i,
    text: item.weekday,
    centerX: "50%",
    top: "5%",
    skin: "sknLblDubai231f2018pxMedium",
    width: voltmx.flex.USE_PREFERRED_SIZE,
    isVisible: true
  }, {
    contentAlignment: constants.CONTENT_ALIGN_CENTER
  }, {});

  var lblDate = new voltmx.ui.Label({
    id: "lblDate" + i,
    text: item.date,
    centerX: "50%",
    top: "0",
    height: "33%",
    skin: "sknLblDubai231f2022pxMedium",
    width: voltmx.flex.USE_PREFERRED_SIZE,
    isVisible: true
  }, {
    contentAlignment: constants.CONTENT_ALIGN_CENTER
  }, {});

  var flxActiveDot = new voltmx.ui.FlexContainer({
    id: "flxActiveItem" + i,
    width: "22%",
    height: "13%",
    top: "1%",
    centerX: "50%",
    isVisible: item.hasAuction,
    skin: "sknFlxd32437bgcustom120pxround",
    layoutType: voltmx.flex.FREE_FORM
  }, {}, {});
  flxActiveDot.setDefaultUnit(voltmx.flex.DP);

  flxItem.add(lblWeekDay, lblDate, flxActiveDot);
  self.view.flxCalendarShow.add(flxItem);
}
  },
  
  handleCalendarItemClick: function(selectedIndex, auctionDates) {
  for (var i = 0; i < 8; i++) {
    var itemFlex = this.view["flxItem" + i];

    if (!itemFlex) continue;

    var hasAuction = false;
    if (auctionDates[i] && auctionDates[i].hasAuction === true) {
      hasAuction = true;
    }

    if (i === selectedIndex && hasAuction) {
      itemFlex.skin = "sknFlxeae9e9";
    } else {
      itemFlex.skin = "slFbox";
    }
  }
},
  navTofrmDetails: function(){
      var selectedItem = this.view.segCurrentAuctionList.selectedRowItems[0];
    
    var navigationData = {
      selectedItem: selectedItem
    };
    var nav = new voltmx.mvc.Navigation("frmDetails");
    nav.navigate(navigationData);
  }
 });
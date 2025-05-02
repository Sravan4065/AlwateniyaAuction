

define({

  
 onNavigate: function()
  {
   this.view.preShow = this.onPreshow.bind(this);
    this.view.segCurrentAuctionList.onRowClick = this.navTofrmDetails.bind(this);
  },

  onPreshow: function(){
   
   this.toggleFooterIcons();
   this.invokeOnlineAuctionList();
   this.updateDates();             
    this.createCalendarView();   
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
  
 invokeOnlineAuctionList: function(){
    
     var self = this;

    function invServiceCallBack(status, online_auction_list) {
      var records = online_auction_list.auction_list;
      self.setDataToSegFromService(records);
    }
    if (online_auction_list_inputparam == undefined) {
        var online_auction_list_inputparam = {};
    }
    online_auction_list_inputparam["serviceID"] = "fry_int_auctions$online-auction-list";
    var online_auction_list_httpheaders = {};
    online_auction_list_inputparam["httpheaders"] = online_auction_list_httpheaders;
    var online_auction_list_httpconfigs = {};
    online_auction_list_inputparam["httpconfig"] = online_auction_list_httpconfigs;
    fry_int_auctions$online_auction_list = mfintegrationsecureinvokerasync(online_auction_list_inputparam, "fry_int_auctions", "online-auction-list", invServiceCallBack);
  },
  
  setDataToSegFromService: function(records)
  {
    var self = this;
    self.view.segCurrentAuctionList.widgetDataMap = {
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
    
    var data = [];
    for(var i=0; i<records.length; i++){
      
      var item = records[i];
      var carimage = item.thumbnail_url && item.thumbnail_url.trim() !== "" ? item.thumbnail_url : "car3.png";
      var carname = item.sub_category_name;
      var timercount = item.time_remaining;
      var lotnum = item.ID ? item.ID : "N/A";
      var totalbids = item.bids ? item.bids : "N/A";
      var location = item.location ? item.location : "N/A";
      var objid = item.object_id;
      var aucid = item.auction_id;
      var price = Number(item.max_bid_amount);
      
      data.push(
      {
        "imgCarPIcture" : carimage,
        "lblCarname" : carname,
        "lblObjID": objid,
        "lblTimerCount": timercount,
         "lblLot": "Lot #",
         "lblLotNum": lotnum,
         "lblTotalBids": "Total Bids",
         "lblTotalBidsCount": totalbids,
         "lblLocation":"Location",
        "lblLocationName": location,
        "lblAuctionID":aucid,

        "flxLikeHeart": {
          "onClick": this.addToWishList.bind(this)
        },
        "imgHeart": "imgdislikenew.png",
        "lblCurrentBid": "CURRENT BID",
        "lblPrice":  {
          "text": "AED " + price,
          "skin": "sknLblDubaid3243720pxbold"
        },
        "flxAutoBid": {
          "onClick": this.enableAutoBid.bind(this,objid,aucid)
        },
        "imgAutoBidicon": "autobidnewone.png",
        "lblAutoBid": "AUTO BID",
        "btnBidNow": {
          "onClick": this.openBidAmountContainer.bind(this,objid,aucid,price)
        }
      });
    }
    self.view.segCurrentAuctionList.setData(data);
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

    rowData.imgHeart = rowData.imgHeart === "imgdislikenew.png" ? "heartlikerecommended.png" : "imgdislikenew.png";

    // Update only the selected row
    this.view.segCurrentAuctionList.setDataAt(rowData, rowIndex);
  },
  enableAutoBid: function(){

  },
  
  openBidAmountContainer: function()
  {
    
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
    var x = new voltmx.mvc.Navigation("frmDetails");
    x.navigate();
  }
 });
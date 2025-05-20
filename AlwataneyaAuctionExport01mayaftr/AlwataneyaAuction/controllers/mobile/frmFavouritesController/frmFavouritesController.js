define({ 

 onNavigate: function()
  {
   this.userid = voltmx.store.getItem("userId");
   this.view.preShow = this.onPreShow.bind(this); 
  },
  
  onPreShow: function()
  {
    this.invokeGetTrackedObjects();
    
    
    
  },
  
  invokeGetTrackedObjects: function()
  {
     var self = this;

    function invServiceCallBack(status, get_tracked_objects) {
     voltmx.print("Service status: " + status);
  voltmx.print("Response: " + JSON.stringify(get_tracked_objects));

  // Check for server or token issues
  if (get_tracked_objects &&
    get_tracked_objects.opstatus === 0 &&
    get_tracked_objects.records
  ) {
    self.setDataToSegFavourites(get_tracked_objects.records);
  } else if (
    get_tracked_objects &&
    (get_tracked_objects.httpStatusCode === 401 || get_tracked_objects.opstatus === 1001)
  ) {
    // Token expired or unauthorized
    alert("Session expired. Please log in again.");
    // Optionally redirect to login screen here
  } else {
    // Generic error handler
    alert("Something went wrong while fetching favourites. Please try again later.");
  }
    }
    if (get_tracked_objects_inputparam == undefined) {
        var get_tracked_objects_inputparam = {};
    }
    var usertoken = voltmx.store.getItem("getUserAccesstoken");
    get_tracked_objects_inputparam["serviceID"] = "fry_int_buyer$get-tracked-objects";
    get_tracked_objects_inputparam["user_id"] = this.userid;
    get_tracked_objects_inputparam["type"] = "favorites";
    get_tracked_objects_inputparam["page"] = "1";
    get_tracked_objects_inputparam["pageSize"] = "10";
    var get_tracked_objects_httpheaders = {
      "user_token": usertoken
    };
    get_tracked_objects_inputparam["httpheaders"] = get_tracked_objects_httpheaders;
    var get_tracked_objects_httpconfigs = {};
    get_tracked_objects_inputparam["httpconfig"] = get_tracked_objects_httpconfigs;
    fry_int_buyer$get_tracked_objects = mfintegrationsecureinvokerasync(get_tracked_objects_inputparam, "fry_int_buyer", "get-tracked-objects", invServiceCallBack);

  },
  
  setDataToSegFavourites: function(records)
  {
    var self = this;
    this.view.segFavourites.widgetDataMap = {
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
    };
    
     var data = [];
    self.view.segFavourites.removeAll();
    if(records && records.length>0)
      {
        
        for(var i =0;i<records.length;i++){
            var item = records[i];
          var bidrateSkin = (item.winning_bidder === this.userid) ? "sknLblCronosProd0290512Bold22px" : "sknLblDubaid3243720pxbold";
      
        data.push({
      "imgCarPIcture": item.file_url,
      "lblCarname": item.title,
      "lblObjID": item.object_id,
      "lblTimerCount": item.bid_close_date,
      "lblLot": "Lot #",
      "lblLotNum": item.lot_no,
      "lblTotalBids": "Total Bids",
      "lblTotalBidsCount": item.no_of_bids,
      "lblLocation": "Location",
      "lblLocationName": item.location,
      "lblAuctionID": item.auction_id,
      "flxLikeHeart": {
        "skin": "sknFlxd32437custom120pxround"
       
      },
      "imgHeart": "heartlikerecommended.png",
      "lblCurrentBid": "CURRENT BID",
      "lblPrice": {
        "text": "AED " +  item.max_bid,
        "skin": bidrateSkin
      },
      "flxAutoBid": {
//         "onClick": this.enableAutoBid.bind(this, objid, aucid)
      },
      "imgAutoBidicon": "autobidnewone.png",
      "lblAutoBid": "AUTO BID",
      "btnBidNow": {
//         "onClick": this.openBidAmountContainer.bind(this, objid, aucid, price, highestbidder)
      }
    });
        } 
     self.view.segFavourites.addAll(data);
      }
    else{
      alert('no favourites');
    }
    
  }
  
 });
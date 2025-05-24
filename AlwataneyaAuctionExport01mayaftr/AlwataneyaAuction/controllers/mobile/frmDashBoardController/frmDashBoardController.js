define({ 

 onNavigate: function() {  
   
    this.view.preShow = this.onPreshow.bind(this);
   this.userid = voltmx.store.getItem("userId"); 
      if (!this.isUIInitialized) {
        this.createSegmentDynamically();
        this.isUIInitialized = true;
         }
   
   
   this.view.postShow = this.onPostShow.bind(this);
    this.view.btnRecommended.onClick = this.showRecommendedFilterFlex.bind(this,"recommended");
   this.view.btnEndingSoon.onClick = this.showRecommendedFilterFlex.bind(this,"endingsoon");
    this.view.btnRecentlyViewed.onClick = this.showRecommendedFilterFlex.bind(this,"recentlyviewed");
   this.view.btnYourFavourites.onClick = this.showRecommendedFilterFlex.bind(this,"yourfavourites");
   this.view.btnNewlyListedVehicles.onClick =  this.showRecommendedFilterFlex.bind(this,"newlylisted");
   this.view.btnHotItems.onClick = this.showRecommendedFilterFlex.bind(this,"hotitems");
   this.view.flxServiceItem1.onClick = this.navToVehicleInspection.bind(this);
   this.view.flxServiceItem2.onClick = this.navToRoadSideAsst.bind(this);
   this.view.flxAuctionCalendarItem1.onClick = this.navToAuctionCalendar.bind(this);
   this.view.flxAuctionCalendarItem2.onClick = this.navToComingSoon.bind(this);
   this.view.flxAuctionCalendarItem3.onClick = this.navToComingSoon.bind(this);
   this.view.flxAuctionCalendarItem4.onClick = this.navToComingSoon.bind(this);
   this.view.flxAuctionCalendarItem5.onClick = this.navToComingSoon.bind(this);
   this.view.flxAuctionCalendarItem6.onClick = this.navToComingSoon.bind(this);
   this.view.flxViewAll.onClick = this.navToAuctionList.bind(this);
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
  
  onPreshow: function(){
var self = this;
    this.toggleFooterIcons();
     this.checkSession(function() {
        
        voltmx.print("Session is valid. Proceeding with data load.");
//        self.invokeOnlineAuctionList(); 
       self.invokeRecommendedList();
    });
    this.view.btnRecommended.skin = "sknBtnRecommendedFilter";
    this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnHotItems.skin = "sknBtnRecommendedFilterNormal";
  },
  
  onPostShow: function(){
    
    this.view.btn500AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"500");
    this.view.btn1000AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"1000");
    this.view.btn1500AED.onClick = this.selectBidAmountAddIntoTextBox.bind(this,"1500");
    this.view.btnBidNow.onClick =  this.invokeFryWfAuctionBidding.bind(this);
    
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
    
   
    
   this.view.Footer2.flxHL1.setVisibility(true);
  this.view.Footer2.flxHL2.setVisibility(false);
  this.view.Footer2.flxHL3.setVisibility(false);
  this.view.Footer2.flxHL4.setVisibility(false);
  this.view.Footer2.flxHL5.setVisibility(false);
    
  this.view.Footer2.imgHome.src = "homefooteractive.png";
  this.view.Footer2.lblHome.skin = "sknlblCPBoldDisp333333Font200";
  
  this.view.Footer2.imgMegaPhone.src = "auctionsfooter.png";
  this.view.Footer2.lblAuctions.skin = "sknlblCPBoldCapt181818Font100";
    
     this.view.Footer2.imgMyBids.src = "mybidsfooter.png";
   this.view.Footer2.lblMyBids.skin = "sknlblCPBoldCapt181818Font100";
    
    var isLogin =voltmx.store.getItem("isLogin");

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
  
  navToComingSoon: function(){
    var x = new voltmx.mvc.Navigation("frmCominSoon");
   x.navigate();
  },
  
    invokeOnlineAuctionList: function(){
    
     var self = this;

    function invServiceCallBack(status, online_auction_list) {
    var records = online_auction_list && online_auction_list.records ? online_auction_list.records : [];
    
    if (records.length > 0) {
      self.records = records;
      self.isRecords = true;
    } else {
      self.records = [];  // fallback to empty
      self.isRecords = false;
    }

    // Always call create function after response
    self.view.flxScrollFilteredItems.removeAll(); 
    self.createsIntoFeaturedAuctions();
    }
    if (online_auction_list_inputparam == undefined) {
        var online_auction_list_inputparam = {};
    }
     var userid = voltmx.store.getItem("userId");
    online_auction_list_inputparam["serviceID"] = "fry_int_auctions$get-buyer-all-auctions";
     online_auction_list_inputparam["body_type"] = "";
    online_auction_list_inputparam["transmission_type"] = "";
    online_auction_list_inputparam["fuel_type"] = "";
    online_auction_list_inputparam["body_condition"] = "";
    online_auction_list_inputparam["brand"] = "";
    online_auction_list_inputparam["model"] = "";
    online_auction_list_inputparam["mileage_range_from"] = "";
    online_auction_list_inputparam["mileage_range_to"] = "";
    online_auction_list_inputparam["asset_id"] = "";
    online_auction_list_inputparam["user_id"] = userid ? userid : "";
//      online_auction_list_inputparam["lot_no"] = 0
     online_auction_list_inputparam["year_range_from"] = 0;
     online_auction_list_inputparam["year_range_to"] = 0;
     online_auction_list_inputparam["auction_type"] = 0;
     online_auction_list_inputparam["yard_branch"] = 0;
     online_auction_list_inputparam["price_range_from"] = 0;
     online_auction_list_inputparam["price_range_to"] = 0;
    online_auction_list_inputparam["priceSort"] = 0;
    online_auction_list_inputparam["milageSort"] = 0;
    online_auction_list_inputparam["yearSort"] = 0;
     online_auction_list_inputparam["page"] = 1;
     online_auction_list_inputparam["pageSize"] = 10;
    var online_auction_list_httpheaders = {};
    online_auction_list_inputparam["httpheaders"] = online_auction_list_httpheaders;
    var online_auction_list_httpconfigs = {};
    online_auction_list_inputparam["httpconfig"] = online_auction_list_httpconfigs;
    fry_int_auctions$online_auction_list = mfintegrationsecureinvokerasync(online_auction_list_inputparam, "fry_int_auctions", "get-buyer-all-auctions", invServiceCallBack);
    
    
    
  },
  
  createSegmentDynamically: function(){
  
   this.view.segCarouselView.widgetDataMap = {
        "imgCarousel": "imgCarousel",
        "lblCarouselSlideHeading": "lblCarouselSlideHeading",
        "lblCarouselSlideSubheading": "lblCarouselSlideSubheading",
        "btnAction": "btnAction"
    };

    // Dummy Data for Segment (Modify as Needed)
    var data = [
        {
            "imgCarousel":"dashboardcarouselnew1.jpg",
            "lblCarouselSlideHeading": "ONLINE AUCTIONS",
            "lblCarouselSlideSubheading": "180 Vehicles available",
            "btnAction": { "text": "VIEW ALL",
                          "onClick": this.navToAuctionList.bind(this)
                         }
        },
        {
             "imgCarousel":"dashboardcarouselimg2.jpg",
            "lblCarouselSlideHeading": "OUR OTHER SERVICES",
            "lblCarouselSlideSubheading": "Professional servicing, repairs and diagnostics",
            "btnAction": { "text": "VIEW ALL",
                           "onClick": this.navToServices.bind(this)
                         }
        },
       {
             "imgCarousel":"dashboardcarouselnew2.png",
            "lblCarouselSlideHeading": "FLASH AUCTIONS",
            "lblCarouselSlideSubheading": "Bid Fast, Win Big - Time's Ticking",
            "btnAction": { "text": "VIEW ALL",
                           "onClick": this.navToAuctionCalendar.bind(this)
                         }
        },
      {
             "imgCarousel":"dashboardphysicalauctions.jpg",   //dashboardcarouselnew3.png
            "lblCarouselSlideHeading": "PHYSICAL AUCTIONS",
            "lblCarouselSlideSubheading": "From the Floor to Your Hands - Secure Your Asset",
            "btnAction": { "text": "VIEW ALL",
                           "onClick": this.navToAuctionCalendar.bind(this) 
                         }
        }
      
      
    ];

    // Set data to the segment
   this.view.segCarouselView.setData(data);
  
     
    this.view.segCarouselView.pageOnDotImage = "segmentpageonimg.png"; 
    this.view.segCarouselView.pageOffDotImage = "segmentpageoffimg.png";
  },
  
  navToServices: function()
  {
    new voltmx.mvc.Navigation("frmServices").navigate();
  },

   createsIntoFeaturedAuctions: function() {
        voltmx.print("entered into function");

        var parentFlex = this.view.flxScrollFilteredItems;
//           parentFlex.removeAll();
        var records = this.isRecords ? this.records : this.getStaticCarRecords();
        
        for (var i = 0; i < 5; i++) {
          var leftval = (i === 0) ? "20dp" : "10dp";
          var bidrateSkin;
          if(records[i].highest_bidder === this.userid){
             bidrateSkin = "sknLblCronosProd0290512Bold22px";
          }
          else{
              bidrateSkin = "sknLblDubaid3243720pxbold";
          }
            // Creating the main flex container for each widget
            
            var flexFeaturedAuctionsItem = new voltmx.ui.FlexContainer({
                id: "flexFeaturedAuctionsItem" + i,
                left: leftval,
               right: (i === 4) ? "15dp" : "", 
                width: "275dp", 
                height: "95%",
                zIndex: 1,
                isVisible: true,
//                 skin: "flxContainer45",
//                 top: (i * 330) + "dp",
                skin: "sknFlxFFFFFFBorderCCCCCC2px",
                clipBounds: true
                
            }, {}, {});
          
          
            var flxFeaturedAuctionsItemTop = new voltmx.ui.FlexContainer({
              
             id: "flxFeaturedAuctionsItemTop" + i,
             centerX: "50%",
             height: "45%",
             width: "100%",
             zIndex:1,
             isVisible: true,
             top: "0%",
             skin: "sknFlxWhiteRoundedCorner",
             clipBounds: true  
            },{},{});
          
          var imgFeaturedAuctions = new voltmx.ui.Image2({
                id: "imgFeaturedAuctions" + i,
                isVisible: true,
               src : records[i].thumbnail_url ? records[i].thumbnail_url : "car3.png",
//               src: "car3.png",
              width: "100%", 
                height: "100%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });


          var flxFeaturedAuctionsItemBottom  = new voltmx.ui.FlexContainer({
            
              id: "flxFeaturedAuctionsItemBottom" + i,
             centerX: "50%",
             height: "55%",
             width: "100%",
             zIndex: 2,
             isVisible: true,
             top: "45%",
             skin: "sknFlxBasic",
             clipBounds: true,
             layoutType: voltmx.flex.FLOW_VERTICAL
            
            
          },{},{});
          
//           var lblCarname = new voltmx.ui.Label(
//            {
//                 id: "lblCarname" + i,
//                 text: records[i].sub_category_name ? records[i].sub_category_name : "N/A", 
//                 isVisible: true,
//                 width: "preferred",
//                 left: "5%",
//                 top: "10%",
//                 height: "15%",
//                 skin: "sknLblCronosPro231f2022pxbold"
//           }
//           );
          
          var lblCarname = new voltmx.ui.Label({
    id: "lblCarname" + i,
    isVisible: true,
    left: "4%",
    top: "2%",
    height: "14%",
    width: voltmx.flex.USE_PREFERRED_SIZE,
    skin: "sknLblDubai00000020pxBold",
    text: records[i].sub_category_name ? records[i].sub_category_name : "N/A",
}, { contentAlignment: constants.CONTENT_ALIGN_MIDDLE_LEFT }, {});
          
   var lblCountDown = new voltmx.ui.Label({
    id: "lblCountDown" + i,
    isVisible: true,
    left: "4%",
    top: "2dp",
    width: voltmx.flex.USE_PREFERRED_SIZE,
    skin: "sknLblDubaid3243714px",
    text: records[i].time_remaining ? records[i].time_remaining : "N/A", 
}, { contentAlignment: constants.CONTENT_ALIGN_MIDDLE_LEFT }, {});
          
  var flxLot = new voltmx.ui.FlexContainer({
    id: "flxLot" +  i,
    isVisible: true,
    top: "2dp",
    height: "22dp",
    width: "100%",
    layoutType: voltmx.flex.FREE_FORM,
    skin: "slFbox"
}, {}, {});
flxLot.setDefaultUnit(voltmx.flex.DP);
          
var lblLot = new voltmx.ui.Label({
    id: "lblLot" + i,
    isVisible: true,
    left: "4%",
    centerY: "50%",
    skin: "sknLblDubai231f20",
    text: "Lot #"
}, { contentAlignment: constants.CONTENT_ALIGN_MIDDLE_LEFT }, {});
          
  var lblLotNum = new voltmx.ui.Label({
    id: "lblLotNum" + i,
    isVisible: true,
    right: "8%",
    centerY: "50%",
    skin: "sknLblDubai231f20",
    text: records[i].ID ? records[i].ID : "N/A"
}, { contentAlignment: constants.CONTENT_ALIGN_MIDDLE_RIGHT }, {});
          
//           var lblLot = new voltmx.ui.Label({
            
//                 id: "lblLot" + i,
//                 text: "Lot #:"+(records[i].ID ? records[i].ID : "N/A"),
//                 isVisible: true,
//                 width: "preferred",
//                 left: "5%",
//                 top: "30%",
//                 height: "15%",
//                 skin: "sknLblCronosPro231f2016px"
            
//           });
          flxLot.add(lblLot, lblLotNum);
          
          var flxTotalBids = new voltmx.ui.FlexContainer({
    id: "flxTotalBids" + i,
    isVisible: true,
    top: "2dp",
    height: "22dp",
    width: "100%",
    layoutType: voltmx.flex.FREE_FORM,
    skin: "slFbox"
}, {}, {});
          
          
var lblTotalBidsText = new voltmx.ui.Label({
    id: "lblTotalBidsText" + i,
    isVisible: true,
    left: "4%",
    centerY: "50%",
    skin: "sknLblDubai231f20",
    text: "Total Bids"
}, {}, {});

var lblTotalBids = new voltmx.ui.Label({
    id: "lblTotalBids" + i,
    isVisible: true,
    right: "8%",
    centerY: "50%",
    skin: "sknLblDubai231f20",
    text: records[i].bids ? records[i].bids: "N/A"
}, {}, {});
flxTotalBids.add(lblTotalBidsText,lblTotalBids);
          

          
          var flxLocation = new voltmx.ui.FlexContainer({
    id: "flxLocation" + i,
    isVisible: true,
    top: "2dp",
    height: "22dp",
    width: "100%",
    layoutType: voltmx.flex.FREE_FORM,
    skin: "slFbox"
}, {}, {});
flxLocation.setDefaultUnit(voltmx.flex.DP);

var lblLocation = new voltmx.ui.Label({
    id: "lblLocation" + i,
    isVisible: true,
    left: "4%",
    centerY: "50%",
    skin: "sknLblDubai231f20",
    text: "Location"
}, {}, {});

var lblLocationName = new voltmx.ui.Label({
    id: "lblLocationName" + i,
    isVisible: true,
    right: "8%",
    centerY: "50%",
    skin: "sknLblDubai231f20",
    text: records[i].location ? records[i].location : "N/A"
}, {}, {});
flxLocation.add(lblLocation, lblLocationName);
          

          
          var lblBidRate = new voltmx.ui.Label({
    id: "lblBidRate" + i,
    isVisible: true,
    right: "8%",
    top: "2dp",
    skin: bidrateSkin, // sknLblCronosProd0290512Bold22px
    text: "AED "+ (records[i].max_bid_amount ? records[i].max_bid_amount : "N/A")
}, { contentAlignment: constants.CONTENT_ALIGN_MIDDLE_RIGHT }, {});

          
          var flxLikeBid = new voltmx.ui.FlexContainer({
    id: "flxLikeBid" + i,
    isVisible: true,
    top: "2dp",
    height: "45dp",
    width: "100%",
    layoutType: voltmx.flex.FREE_FORM,
    skin: "slFbox"
}, {}, {});
flxLikeBid.setDefaultUnit(voltmx.flex.DP);
          
     var flxLikeFromRecommendedFilter = new voltmx.ui.FlexContainer({
    id: "flxLikeFromRecommendedFilter" + i,
    isVisible: true,
    height: "34dp",
    width: "34dp",
    left: "4%",
    centerY: "50%",
    skin: "sknFlx231f20custom120pxround",
    onClick: this.toggleHeartStatusFromRecommended.bind(this,i),
    layoutType: voltmx.flex.FREE_FORM
}, {}, {});
          
         var imgHeartIconFromRecommended = new voltmx.ui.Image2({
    id: "imgHeartIconFromRecommended" + i,
    isVisible: true,
    centerX: "50%",
    centerY: "50%",
    height: "55%",
    width: "55%",
    src: "imgdislikenew.png"
}, { imageScaleMode: constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO }, {});
flxLikeFromRecommendedFilter.add(imgHeartIconFromRecommended); 
          

          
          var flxBidEnable = new voltmx.ui.FlexContainer({
            id: "flxBidEnable" + i,
            isVisible: true,
            height: "35dp",
            width: "42dp",
            centerY: "50%",
            right: "45%",
            skin: "sknFlxBasic",
            layoutType: voltmx.flex.FREE_FORM,
            zIndex: 2,
            onClick: this.enableAutoBid.bind(this,{
              auction_id: records[i].auction_id,
              object_id: records[i].object_id})
          }, {}, {});

          var imgAutoBid = new voltmx.ui.Image2({
            id: "imgAutoBid" + i,
            isVisible: true,
            centerX: "50%",
            centerY: "50%",
            height: "75%",
            width: "75%",
            src: "autobidnewone.png"
          }, { imageScaleMode: constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO }, {});
          flxBidEnable.add(imgAutoBid);


          
          var btnBidNow = new voltmx.ui.Button({
    id: "btnBidNow"+i,
    isVisible: true,
    height:"40dp",
    width: "35%",
    centerY: "50%",
    right: "8%",
    skin: "sknBtn61b35c20pxbold",
    text: "BID NOW",
     onClick: this.openBidAmountContainer.bind(this, {
              auction_id: records[i].auction_id,
              object_id: records[i].object_id,
              max_bid_amount: records[i].max_bid_amount,
              highest_bidder: records[i].highest_bidder,
              ID: records[i].ID,
              currentIndex: i
            })  
}, { contentAlignment: constants.CONTENT_ALIGN_CENTER }, {});
flxLikeBid.add(flxLikeFromRecommendedFilter, flxBidEnable, btnBidNow);

       
          
             
//           var btnTest = new voltmx.ui.Button({
//              id: "btnTest"+ i,
//              right: "5%",
//             top: "69%",
//             text: "BID NOW",
//             height: "preferred",
//             width: "30%",
//             skin: "sknBtnBidNow",
           
//             onClick: this.openBidAmountContainer.bind(this, {
//               auction_id: records[i].auction_id,
//               object_id: records[i].object_id,
//               max_bid_amount: records[i].max_bid_amount,
//               ID: records[i].ID,
//               currentIndex: i
//             })  
            
//           })
          
     

          flxFeaturedAuctionsItemTop.add(imgFeaturedAuctions);
//           if (records[i].thumbnail_url) {
//             this.checkSessionAndAssignImage(
//               imgFeaturedAuctions,
//               records[i].thumbnail_url   // password
//             );
//           }
          

          flexFeaturedAuctionsItem.add(flxFeaturedAuctionsItemTop); 
          flxFeaturedAuctionsItemBottom.add(lblCarname);
          
           flxFeaturedAuctionsItemBottom.add(lblCountDown);
          flxFeaturedAuctionsItemBottom.add(flxLot);
          flxFeaturedAuctionsItemBottom.add(flxTotalBids);
         
          flxFeaturedAuctionsItemBottom.add(flxLocation);
          flxFeaturedAuctionsItemBottom.add(lblBidRate);
          flxFeaturedAuctionsItemBottom.add(flxLikeBid);
         
          
         
//           flxFeaturedAuctionsItemBottom.add(btnBidNow);
          
          flexFeaturedAuctionsItem.add(flxFeaturedAuctionsItemBottom);
          parentFlex.add(flexFeaturedAuctionsItem);
        }

        voltmx.print("exit from function");
    },
  
 createsIntoFeaturedAuctions1: function() {
        voltmx.print("entered into function");

        var parentFlex = this.view.flxScrollFilteredItems;
//           parentFlex.removeAll();
        var records = this.isRecords ? this.records : this.getStaticCarRecords();
        
        for (var i = 0; i < 5; i++) {
          var leftval = (i === 0) ? "20dp" : "10dp";
          var bidrateSkin;
          if(records[i].highest_bidder === this.userid){
             bidrateSkin = "sknLblCronosProd0290512Bold22px";
          }
          else{
              bidrateSkin = "sknLblDubaid3243720pxbold";
          }
          var objid = records[i].object_id;
          var aucid = records[i].auction_id;
          var flexskin;
          var imgheartset;
          if(records[i].is_favourite === "true"){
            flexskin = "sknFlxd32437custom120pxround";
            imgheartset = "heartlikerecommended.png";
          }
          else{
            flexskin = "sknFlx231f20custom120pxround";
            imgheartset = "imgdislikenew.png";
          }
            // Creating the main flex container for each widget
            
            var flexFeaturedAuctionsItem = new voltmx.ui.FlexContainer({
                id: "flexFeaturedAuctionsItem" + i,
                left: leftval,
               right: (i === 4) ? "15dp" : "", 
                width: "275dp", 
                height: "95%",
                zIndex: 1,
                isVisible: true,
//                 skin: "flxContainer45",
//                 top: (i * 330) + "dp",
                skin: "sknFlxFFFFFFBorderCCCCCC2px",
                clipBounds: true
                
            }, {}, {});
          
          
            var flxFeaturedAuctionsItemTop = new voltmx.ui.FlexContainer({
              
             id: "flxFeaturedAuctionsItemTop" + i,
             centerX: "50%",
             height: "45%",
             width: "100%",
             zIndex:1,
             isVisible: true,
             top: "0%",
             skin: "sknFlxWhiteRoundedCorner",
             onClick : this.navToFleetPage.bind(this,objid,aucid),
             clipBounds: true  
            },{},{});
          
          var imgFeaturedAuctions = new voltmx.ui.Image2({
                id: "imgFeaturedAuctions" + i,
                isVisible: true,
               src : records[i].file_url ? records[i].file_url : "car3.png",
//               src: "car3.png",
              width: "100%", 
                height: "100%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });


          var flxFeaturedAuctionsItemBottom  = new voltmx.ui.FlexContainer({
            
              id: "flxFeaturedAuctionsItemBottom" + i,
             centerX: "50%",
             height: "55%",
             width: "100%",
             zIndex: 2,
             isVisible: true,
             top: "45%",
             skin: "sknFlxBasic",
             clipBounds: true,
             layoutType: voltmx.flex.FLOW_VERTICAL
            
            
          },{},{});
          
//           var lblCarname = new voltmx.ui.Label(
//            {
//                 id: "lblCarname" + i,
//                 text: records[i].sub_category_name ? records[i].sub_category_name : "N/A", 
//                 isVisible: true,
//                 width: "preferred",
//                 left: "5%",
//                 top: "10%",
//                 height: "15%",
//                 skin: "sknLblCronosPro231f2022pxbold"
//           }
//           );
          
          var lblCarname = new voltmx.ui.Label({
    id: "lblCarname" + i,
    isVisible: true,
    left: "4%",
    top: "2%",
    height: "14%",
    width: voltmx.flex.USE_PREFERRED_SIZE,
    skin: "sknLblDubai00000020pxBold",
    text: records[i].title ? records[i].title : "N/A",
}, { contentAlignment: constants.CONTENT_ALIGN_MIDDLE_LEFT }, {});
          
   var lblCountDown = new voltmx.ui.Label({
    id: "lblCountDown" + i,
    isVisible: true,
    left: "4%",
    top: "2dp",
    width: voltmx.flex.USE_PREFERRED_SIZE,
    skin: "sknLblDubaid3243714px",
    text: records[i].bid_close_date ? records[i].bid_close_date : "N/A", 
}, { contentAlignment: constants.CONTENT_ALIGN_MIDDLE_LEFT }, {});
          
  var flxLot = new voltmx.ui.FlexContainer({
    id: "flxLot" +  i,
    isVisible: true,
    top: "2dp",
    height: "22dp",
    width: "100%",
    layoutType: voltmx.flex.FREE_FORM,
    skin: "slFbox"
}, {}, {});
flxLot.setDefaultUnit(voltmx.flex.DP);
          
var lblLot = new voltmx.ui.Label({
    id: "lblLot" + i,
    isVisible: true,
    left: "4%",
    centerY: "50%",
    skin: "sknLblDubai231f20",
    text: "Lot #"
}, { contentAlignment: constants.CONTENT_ALIGN_MIDDLE_LEFT }, {});
          
  var lblLotNum = new voltmx.ui.Label({
    id: "lblLotNum" + i,
    isVisible: true,
    right: "8%",
    centerY: "50%",
    skin: "sknLblDubai231f20",
    text: records[i].lot_no ? records[i].lot_no : "N/A"
}, { contentAlignment: constants.CONTENT_ALIGN_MIDDLE_RIGHT }, {});
          
//           var lblLot = new voltmx.ui.Label({
            
//                 id: "lblLot" + i,
//                 text: "Lot #:"+(records[i].ID ? records[i].ID : "N/A"),
//                 isVisible: true,
//                 width: "preferred",
//                 left: "5%",
//                 top: "30%",
//                 height: "15%",
//                 skin: "sknLblCronosPro231f2016px"
            
//           });
          flxLot.add(lblLot, lblLotNum);
          
          var flxTotalBids = new voltmx.ui.FlexContainer({
    id: "flxTotalBids" + i,
    isVisible: true,
    top: "2dp",
    height: "22dp",
    width: "100%",
    layoutType: voltmx.flex.FREE_FORM,
    skin: "slFbox"
}, {}, {});
          
          
var lblTotalBidsText = new voltmx.ui.Label({
    id: "lblTotalBidsText" + i,
    isVisible: true,
    left: "4%",
    centerY: "50%",
    skin: "sknLblDubai231f20",
    text: "Total Bids"
}, {}, {});

var lblTotalBids = new voltmx.ui.Label({
    id: "lblTotalBids" + i,
    isVisible: true,
    right: "8%",
    centerY: "50%",
    skin: "sknLblDubai231f20",
    text: records[i].no_of_bids ? records[i].no_of_bids : "N/A"
}, {}, {});
flxTotalBids.add(lblTotalBidsText,lblTotalBids);
          

          
          var flxLocation = new voltmx.ui.FlexContainer({
    id: "flxLocation" + i,
    isVisible: true,
    top: "2dp",
    height: "22dp",
    width: "100%",
    layoutType: voltmx.flex.FREE_FORM,
    skin: "slFbox"
}, {}, {});
flxLocation.setDefaultUnit(voltmx.flex.DP);

var lblLocation = new voltmx.ui.Label({
    id: "lblLocation" + i,
    isVisible: true,
    left: "4%",
    centerY: "50%",
    skin: "sknLblDubai231f20",
    text: "Location"
}, {}, {});

var lblLocationName = new voltmx.ui.Label({
    id: "lblLocationName" + i,
    isVisible: true,
    right: "8%",
    centerY: "50%",
    skin: "sknLblDubai231f20",
    text: records[i].location ? records[i].location : "N/A"
}, {}, {});
flxLocation.add(lblLocation, lblLocationName);
          

          
          var lblBidRate = new voltmx.ui.Label({
    id: "lblBidRate" + i,
    isVisible: true,
    right: "8%",
    top: "2dp",
    skin: bidrateSkin, // sknLblCronosProd0290512Bold22px
    text: "AED "+ (records[i].max_bid_amount ? records[i].max_bid_amount : "N/A")
}, { contentAlignment: constants.CONTENT_ALIGN_MIDDLE_RIGHT }, {});

          
          var flxLikeBid = new voltmx.ui.FlexContainer({
    id: "flxLikeBid" + i,
    isVisible: true,
    top: "2dp",
    height: "45dp",
    width: "100%",
    layoutType: voltmx.flex.FREE_FORM,
    skin: "slFbox"
}, {}, {});
flxLikeBid.setDefaultUnit(voltmx.flex.DP);
          
     var flxLikeFromRecommendedFilter = new voltmx.ui.FlexContainer({
    id: "flxLikeFromRecommendedFilter" + i,
    isVisible: true,
    height: "34dp",
    width: "34dp",
    left: "4%",
    centerY: "50%",
    skin: flexskin,
    onClick: this.toggleHeartStatusFromRecommended.bind(this,objid,aucid,i),
    layoutType: voltmx.flex.FREE_FORM
}, {}, {});
          
         var imgHeartIconFromRecommended = new voltmx.ui.Image2({
    id: "imgHeartIconFromRecommended" + i,
    isVisible: true,
    centerX: "50%",
    centerY: "50%",
    height: "55%",
    width: "55%",
    src: imgheartset
}, { imageScaleMode: constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO }, {});
flxLikeFromRecommendedFilter.add(imgHeartIconFromRecommended); 
          

          
          var flxBidEnable = new voltmx.ui.FlexContainer({
            id: "flxBidEnable" + i,
            isVisible: true,
            height: "35dp",
            width: "42dp",
            centerY: "50%",
            right: "45%",
            skin: "sknFlxBasic",
            layoutType: voltmx.flex.FREE_FORM,
            zIndex: 2,
            onClick: this.enableAutoBid.bind(this,{
              auction_id: records[i].auction_id,
              object_id: records[i].object_id})
          }, {}, {});

          var imgAutoBid = new voltmx.ui.Image2({
            id: "imgAutoBid" + i,
            isVisible: true,
            centerX: "50%",
            centerY: "50%",
            height: "75%",
            width: "75%",
            src: "autobidnewone.png"
          }, { imageScaleMode: constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO }, {});
          flxBidEnable.add(imgAutoBid);


          
          var btnBidNow = new voltmx.ui.Button({
    id: "btnBidNow"+i,
    isVisible: true,
    height:"40dp",
    width: "35%",
    centerY: "50%",
    right: "8%",
    skin: "sknBtn61b35c20pxbold",
    text: "BID NOW",
     onClick: this.openBidAmountContainer.bind(this, {
              auction_id: records[i].auction_id,
              object_id: records[i].object_id,
              max_bid_amount: records[i].max_bid_amount,
              highest_bidder: records[i].highest_bidder,
              ID: records[i].lot_no,
              currentIndex: i
            })  
}, { contentAlignment: constants.CONTENT_ALIGN_CENTER }, {});
flxLikeBid.add(flxLikeFromRecommendedFilter, flxBidEnable, btnBidNow);

       
          
             
//           var btnTest = new voltmx.ui.Button({
//              id: "btnTest"+ i,
//              right: "5%",
//             top: "69%",
//             text: "BID NOW",
//             height: "preferred",
//             width: "30%",
//             skin: "sknBtnBidNow",
           
//             onClick: this.openBidAmountContainer.bind(this, {
//               auction_id: records[i].auction_id,
//               object_id: records[i].object_id,
//               max_bid_amount: records[i].max_bid_amount,
//               ID: records[i].ID,
//               currentIndex: i
//             })  
            
//           })
          
     

          flxFeaturedAuctionsItemTop.add(imgFeaturedAuctions);
//           if (records[i].thumbnail_url) {
//             this.checkSessionAndAssignImage(
//               imgFeaturedAuctions,
//               records[i].thumbnail_url   // password
//             );
//           }
          

          flexFeaturedAuctionsItem.add(flxFeaturedAuctionsItemTop); 
          flxFeaturedAuctionsItemBottom.add(lblCarname);
          
           flxFeaturedAuctionsItemBottom.add(lblCountDown);
          flxFeaturedAuctionsItemBottom.add(flxLot);
          flxFeaturedAuctionsItemBottom.add(flxTotalBids);
         
          flxFeaturedAuctionsItemBottom.add(flxLocation);
          flxFeaturedAuctionsItemBottom.add(lblBidRate);
          flxFeaturedAuctionsItemBottom.add(flxLikeBid);
         
          
         
//           flxFeaturedAuctionsItemBottom.add(btnBidNow);
          
          flexFeaturedAuctionsItem.add(flxFeaturedAuctionsItemBottom);
          parentFlex.add(flexFeaturedAuctionsItem);
        }

        voltmx.print("exit from function");
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
  
  navToFleetPage: function(objid,aucid)
  {
    var context = {
      "objid":objid,
      "aucid":aucid
    }
    new voltmx.mvc.Navigation("frmDetails").navigate(context);
    
  },

  openBidAmountContainer: function(params){
    
    var isLogin = voltmx.store.getItem("isLogin");
    
    if(isLogin)
    {
     if(params.highest_bidder !== this.userid){
     this.aucid = params.auction_id;
    this.objid = params.object_id;
    this.currentAmount = Number(params.max_bid_amount);
    this.selectedID = params.ID;
    this.currentIndex = params.currentIndex;
     
     

    // amount changes every time when bid,so wrote like this to get amount+hike (updated one) every time.
    var lblId = "lblBidRate" + this.currentIndex;
    if (this.view[lblId]) {
      var amountText = this.view[lblId].text;   // "AED 23500.00" for understanding 
      var amountOnly = amountText.replace("AED", "").trim();  // "23500.00"
      this.currentAmount = Number(amountOnly); 
    }

    this.view.flxBidAmountSelectionContainer.setVisibility(true);
      this.view.imgCheck.setVisibility(false);
    this.view.btn500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    this.view.btn1000AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    this.view.btn1500AED.skin = "sknBtnCCCCCCBorderDubai75778620px";
    this.view.tbxBidAmount.text = "";
    this.view.flxOverLay.setVisibility(true);
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
          
          var bidAmount = self.view.tbxBidAmount.text.trim();
          var lblId = "lblBidRate" + self.currentIndex;
          if (self.view[lblId]) {
            self.view[lblId].text = bidAmount;
             self.view[lblId].skin = "sknLblCronosProd0290512Bold22px";
          }
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
  
  getStaticCarRecords: function() {
  return [
    {
      thumbnail_url: "car3.png",
      sub_category_name: "Nissan Sunny 2023",
      ID: "69952",
      bids: "68",
      time_remaining: "11D 7H 02M",
      location: "Sharjah",
      max_bid_amount: "15,000"
    },
    {
      thumbnail_url: "car3.png",
      sub_category_name: "Toyota Corolla 2022",
      ID: "70123",
      bids: "54",
      time_remaining: "5D 2H 10M",
      location: "Dubai",
      max_bid_amount: "18,500"
    },
    {
      thumbnail_url: "car3.png",
      sub_category_name: "Hyundai Elantra 2021",
      ID: "69342",
      bids: "41",
      time_remaining: "2D 11H 45M",
      location: "Ajman",
      max_bid_amount: "12,000"
    },
    {
      thumbnail_url: "car3.png",
      sub_category_name: "Kia Sportage 2020",
      ID: "68201",
      bids: "77",
      time_remaining: "1D 4H 05M",
      location: "Abu Dhabi",
      max_bid_amount: "22,000"
    },
    {
      thumbnail_url: "car3.png",
      sub_category_name: "Ford EcoSport 2022",
      ID: "70588",
      bids: "33",
      time_remaining: "3D 6H 30M",
      location: "Fujairah",
      max_bid_amount: "16,750"
    }
  ];
},
  
  toggleHeartStatus: function(index){
   var imgHeart = this.view["imgHeartIcon" + index]; // Get the image by ID

    if (imgHeart.src === "heartdislikefeaturedauctions.png") {
        imgHeart.src = "heartlikexx.png"; // Change to liked state
    } else {
        imgHeart.src = "heartdislikefeaturedauctions.png"; // Change back to unliked state
    }
  },
  
//   toggleHeartStatusFromRecommended: function(objid,aucid,index){
    
//      var imgHeart = this.view["imgHeartIconFromRecommended" + index]; // Get the image by ID
//      var flxHeart = this.view["flxLikeFromRecommendedFilter" + index];
//     if (imgHeart.src === "imgdislikenew.png") {
//         flxHeart.skin = "sknFlxd32437custom120pxround";
//         imgHeart.src = "heartlikerecommended.png"; // Change to liked state
//     } else {
//         flxHeart.skin = "sknFlx231f20custom120pxround";
//         imgHeart.src = "imgdislikenew.png"; // Change back to unliked state
//     }
//   },
  
  toggleHeartStatusFromRecommended: function(objid, aucid, index) {
  var self = this;

  var isLogin = voltmx.store.getItem("isLogin");
  if (!isLogin) {
    new voltmx.mvc.Navigation("frmLoginScreen").navigate();
    return;
  }

  var imgHeart = self.view["imgHeartIconFromRecommended" + index];
  var flxHeart = self.view["flxLikeFromRecommendedFilter" + index];

  // Determine current status
  var isAlreadyLiked = imgHeart.src === "heartlikerecommended.png";

  // Define callback to update UI after API response
  var callback = function(success, message) {
    if (success) {
      if (isAlreadyLiked) {
        flxHeart.skin = "sknFlx231f20custom120pxround";
        imgHeart.src = "imgdislikenew.png";
      } else {
        flxHeart.skin = "sknFlxd32437custom120pxround";
        imgHeart.src = "heartlikerecommended.png";
      }
    } else {
      alert("Favorite toggle failed: " + message);
    }
  };

  // Call backend to add/remove
  if (isAlreadyLiked) {
    self.invokeRemoveTrackedObject(objid, aucid, callback);
  } else {
    self.invokeAddTrackedObject(objid, aucid, callback);
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
  },

  showRecommendedFilterFlex: function(filter){
    switch(filter){
      case "recommended":
        this.view.btnRecommended.skin = "sknBtnRecommendedFilter";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnHotItems.skin = "sknBtnRecommendedFilterNormal";
        this.invokeRecommendedList();
        break;
      case "endingsoon":
        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilter";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnHotItems.skin = "sknBtnRecommendedFilterNormal";
        this.invokeEndingSoonList();
        break;
      case "recentlyviewed":

        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilter";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnHotItems.skin = "sknBtnRecommendedFilterNormal";
        this.invokeRecentlyList();
        break;

      case "yourfavourites":

        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilter";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnHotItems.skin = "sknBtnRecommendedFilterNormal";
        break;

      case "newlylisted":

        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilter";
        this.view.btnHotItems.skin = "sknBtnRecommendedFilterNormal";
        this.invokeNewlyList();
        break;
        
         case "hotitems":

        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnHotItems.skin = "sknBtnRecommendedFilter";
        this.invokeHotItems();
        break;

    }
  },
  
  invokeEndingSoonList: function()
  {
        var self = this;
    voltmx.application.showLoadingScreen();
    var usertoken = voltmx.store.getItem("getUserAccesstoken");
    var userid = voltmx.store.getItem("userId");
    function invokeEndingList(status, get_buyer_ending_soon) {
      voltmx.application.dismissLoadingScreen();
      var records = get_buyer_ending_soon && get_buyer_ending_soon.records ? get_buyer_ending_soon.records : [];
      if (records.length > 0) {
      self.records = records;
      self.isRecords = true;
    } else {
      self.records = [];  // fallback to empty
      self.isRecords = false;
    }

    // Always call create function after response
    self.view.flxScrollFilteredItems.removeAll(); 
    self.createsIntoFeaturedAuctions1();
    }
    if (get_buyer_ending_soon_inputparam == undefined) {
        var get_buyer_ending_soon_inputparam = {};
    }
    
    
    get_buyer_ending_soon_inputparam["serviceID"] = "fry_int_buyer$get-buyer-ending-soon";
     get_buyer_ending_soon_inputparam["user_id"] = userid;
     get_buyer_ending_soon_inputparam["page"] = "1";
     get_buyer_ending_soon_inputparam["pageSize"] = "10";
    
    
    var get_buyer_ending_soon_httpheaders = {
      "user_token": usertoken
    };
    get_buyer_ending_soon_inputparam["httpheaders"] = get_buyer_ending_soon_httpheaders;
    var get_buyer_ending_soon_httpconfigs = {};
    get_buyer_ending_soon_inputparam["httpconfig"] = get_buyer_ending_soon_httpconfigs;
    fry_int_buyer$get_buyer_ending_soon = mfintegrationsecureinvokerasync(get_buyer_ending_soon_inputparam, "fry_int_buyer", "get-buyer-ending-soon", invokeEndingList);
  },
  
  invokeRecentlyList: function()
  {
    
      var self = this;
    voltmx.application.showLoadingScreen();
     var usertoken = voltmx.store.getItem("getUserAccesstoken");
    var userid = voltmx.store.getItem("userId");

    function invokeRecentlyViewList(status, get_buyer_recently_viewed_vehicles) {
      voltmx.application.dismissLoadingScreen();
      var records = get_buyer_recently_viewed_vehicles && get_buyer_recently_viewed_vehicles.records ? get_buyer_recently_viewed_vehicles.records : [];
      if (records.length > 0) {
      self.records = records;
      self.isRecords = true;
    } else {
      self.records = [];  // fallback to empty
      self.isRecords = false;
    }

    // Always call create function after response
    self.view.flxScrollFilteredItems.removeAll(); 
    self.createsIntoFeaturedAuctions1();
    }
    if (get_buyer_recently_viewed_vehicles_inputparam == undefined) {
        var get_buyer_recently_viewed_vehicles_inputparam = {};
    }
    get_buyer_recently_viewed_vehicles_inputparam["serviceID"] = "fry_int_buyer$get-buyer-recently-viewed-vehicles";
     get_buyer_recently_viewed_vehicles_inputparam["user_id"] = userid;
     get_buyer_recently_viewed_vehicles_inputparam["page"] = "1";
     get_buyer_recently_viewed_vehicles_inputparam["pageSize"] = "10";
    var get_buyer_recently_viewed_vehicles_httpheaders = {
      "user_token": usertoken
    };
    get_buyer_recently_viewed_vehicles_inputparam["httpheaders"] = get_buyer_recently_viewed_vehicles_httpheaders;
    var get_buyer_recently_viewed_vehicles_httpconfigs = {};
    get_buyer_recently_viewed_vehicles_inputparam["httpconfig"] = get_buyer_recently_viewed_vehicles_httpconfigs;
    fry_int_buyer$get_buyer_recently_viewed_vehicles = mfintegrationsecureinvokerasync(get_buyer_recently_viewed_vehicles_inputparam, "fry_int_buyer", "get-buyer-recently-viewed-vehicles", invokeRecentlyViewList);
    
    
  },
  
  invokeRecommendedList: function()
  {
     var self = this;
    voltmx.application.showLoadingScreen();
    var usertoken = voltmx.store.getItem("getUserAccesstoken");
    var userid = voltmx.store.getItem("userId");
    function invokeRecommendListCallBack(status, get_buyer_recommended_vehicles) {
      voltmx.application.dismissLoadingScreen();
      var records = get_buyer_recommended_vehicles && get_buyer_recommended_vehicles.records ? get_buyer_recommended_vehicles.records : [];
      if (records.length > 0) {
      self.records = records;
      self.isRecords = true;
    } else {
      self.records = [];  // fallback to empty
      self.isRecords = false;
    }

    // Always call create function after response
    self.view.flxScrollFilteredItems.removeAll(); 
    self.createsIntoFeaturedAuctions1();
    }
    if (get_buyer_recommended_vehicles_inputparam == undefined) {
        var get_buyer_recommended_vehicles_inputparam = {};
    }
    get_buyer_recommended_vehicles_inputparam["serviceID"] = "fry_int_buyer$get-buyer-recommended-vehicles";
    get_buyer_recommended_vehicles_inputparam["user_id"] = userid;
     get_buyer_recommended_vehicles_inputparam["page"] = "1";
     get_buyer_recommended_vehicles_inputparam["pageSize"] = "10";
    var get_buyer_recommended_vehicles_httpheaders = {
      "user_token": usertoken
    };
    get_buyer_recommended_vehicles_inputparam["httpheaders"] = get_buyer_recommended_vehicles_httpheaders;
    var get_buyer_recommended_vehicles_httpconfigs = {};
    get_buyer_recommended_vehicles_inputparam["httpconfig"] = get_buyer_recommended_vehicles_httpconfigs;
    fry_int_buyer$get_buyer_recommended_vehicles = mfintegrationsecureinvokerasync(get_buyer_recommended_vehicles_inputparam, "fry_int_buyer", "get-buyer-recommended-vehicles", invokeRecommendListCallBack);
  },
  
  invokeNewlyList: function()
  {
       var self = this;
    voltmx.application.showLoadingScreen();
    var usertoken = voltmx.store.getItem("getUserAccesstoken");
    var userid = voltmx.store.getItem("userId");
    function newlyListedCallBack(status, get_buyer_newly_listed_fleets) {
      voltmx.application.dismissLoadingScreen();
      var records = get_buyer_newly_listed_fleets && get_buyer_newly_listed_fleets.records ? get_buyer_newly_listed_fleets.records : [];
      if (records.length > 0) {
      self.records = records;
      self.isRecords = true;
    } else {
      self.records = [];  // fallback to empty
      self.isRecords = false;
    }

    // Always call create function after response
    self.view.flxScrollFilteredItems.removeAll(); 
    self.createsIntoFeaturedAuctions1();
    }
    if (get_buyer_newly_listed_fleets_inputparam == undefined) {
        var get_buyer_newly_listed_fleets_inputparam = {};
    }
    get_buyer_newly_listed_fleets_inputparam["serviceID"] = "fry_int_buyer$get-buyer-newly-listed-fleets";
    get_buyer_newly_listed_fleets_inputparam["user_id"] = userid;
     get_buyer_newly_listed_fleets_inputparam["page"] = "1";
     get_buyer_newly_listed_fleets_inputparam["pageSize"] = "10";
    var get_buyer_newly_listed_fleets_httpheaders = {
      "user_token": usertoken
    };
    get_buyer_newly_listed_fleets_inputparam["httpheaders"] = get_buyer_newly_listed_fleets_httpheaders;
    var get_buyer_newly_listed_fleets_httpconfigs = {};
    get_buyer_newly_listed_fleets_inputparam["httpconfig"] = get_buyer_newly_listed_fleets_httpconfigs;
    fry_int_buyer$get_buyer_newly_listed_fleets = mfintegrationsecureinvokerasync(get_buyer_newly_listed_fleets_inputparam, "fry_int_buyer", "get-buyer-newly-listed-fleets", newlyListedCallBack);

  },
  
  invokeHotItems: function()
  {
    var self = this;
    voltmx.application.showLoadingScreen();
    var usertoken = voltmx.store.getItem("getUserAccesstoken");
    var userid = voltmx.store.getItem("userId");
    function invokeHotItemsCallBack(status, get_buyer_hot_items) {
      voltmx.application.dismissLoadingScreen();
       var records = get_buyer_hot_items && get_buyer_hot_items.records ? get_buyer_hot_items.records : [];
      if (records.length > 0) {
      self.records = records;
      self.isRecords = true;
    } else {
      self.records = [];  // fallback to empty
      self.isRecords = false;
    }

    // Always call create function after response
    self.view.flxScrollFilteredItems.removeAll(); 
    self.createsIntoFeaturedAuctions1();
    }
    if (get_buyer_hot_items_inputparam == undefined) {
        var get_buyer_hot_items_inputparam = {};
    }
    get_buyer_hot_items_inputparam["serviceID"] = "fry_int_buyer$get-buyer-hot-items";
    get_buyer_hot_items_inputparam["user_id"] = userid;
     get_buyer_hot_items_inputparam["page"] = "1";
     get_buyer_hot_items_inputparam["pageSize"] = "10";
    var get_buyer_hot_items_httpheaders = {
      "user_token": usertoken
    };
    get_buyer_hot_items_inputparam["httpheaders"] = get_buyer_hot_items_httpheaders;
    var get_buyer_hot_items_httpconfigs = {};
    get_buyer_hot_items_inputparam["httpconfig"] = get_buyer_hot_items_httpconfigs;
    fry_int_buyer$get_buyer_hot_items = mfintegrationsecureinvokerasync(get_buyer_hot_items_inputparam, "fry_int_buyer", "get-buyer-hot-items", invokeHotItemsCallBack);

  },
  
  
  navToVehicleInspection: function(){
    var x = new voltmx.mvc.Navigation("frmVehicleInspection");
    x.navigate();
  },
  
  navToRoadSideAsst: function()
  {
   new voltmx.mvc.Navigation("frmRoadSideAssistance").navigate();
  },
  
  navToAuctionCalendar: function(){
    var x = new voltmx.mvc.Navigation("frmAuctionCalendar");
    x.navigate();
  },
  
  navToAuctionList: function(){
    var x = new voltmx.mvc.Navigation("frmAllAuctionsList");
    x.navigate();
  }

 });
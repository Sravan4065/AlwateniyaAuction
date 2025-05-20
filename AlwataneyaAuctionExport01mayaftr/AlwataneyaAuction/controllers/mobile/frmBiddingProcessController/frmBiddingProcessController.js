define({

  onNavigate: function() {
    this.vehicleDetails();
    this.view.flxBack.onClick = this.navToFAQ.bind(this);
  },

  vehicleDetails: function() {
    var vehicleDetail = [
      { 
        "lbl1"        : "1.What must participants do before bidding on vehicles or commodities in the auction?",
        "imgDownArrow": "downarrowfromvehicleinsp.png",
        "lbl2"        : "Participants must inspect and verify that the vehicles or commodities match the provided specifications, as items are sold as-is, with no responsibility on Al Wataneya Auctions.",
        "flxButton"   : 
        {
          "onClick": this.dropDownOnClick.bind(this)
        },
        "flx02": {
          isVisible: false 
        }
      },
      { 
        "lbl1"        : "2.Is there a limit to the number of vehicles a participant can own from the auction?",
        "imgDownArrow": "downarrowfromvehicleinsp.png",
        "lbl2"        : "Participants can own an unlimited number of vehicles offered in the auction, subject to applicable legal provisions.",
        "flxButton"   : 
        {
          "onClick": this.dropDownOnClick.bind(this)
        },
        "flx02": {
          isVisible: false 
        }
      },
      { 
        "lbl1"        : "3.How is bidding time managed at the close of an auction?",
        "imgDownArrow": "downarrowfromvehicleinsp.png",
        "lbl2"        : "Bidding is extended by two minutes if bids are placed in the last two minutes of the closing time to allow more bidding opportunities.",
        "flxButton"   : 
        {
          "onClick": this.dropDownOnClick.bind(this)
        },
        "flx02": {
          isVisible: false 
        }
      },
      { 
        "lbl1"        : "4.What are the bidding categories based on vehicle price ranges?",
        "imgDownArrow": "downarrowfromvehicleinsp.png",
        "lbl2"        : "For vehicles priced 100-20,000 AED, all bid categories (100, 200, 500, 1000, 3000, 5000) are available; for 20,000-50,000 AED, categories above 100 AED apply; for 50,000 AED and above, all categories except 100 and 200 AED are available.",
        "flxButton"   : 
        {
          "onClick": this.dropDownOnClick.bind(this)
        },
        "flx02": {
          isVisible: false 
        }
      },
      { 
        "lbl1"        : "5.How can bidders track their bids and purchases?",
        "imgDownArrow": "downarrowfromvehicleinsp.png",
        "lbl2"        : "Bidders can follow bids on the “My Bids” page, view purchased vehicles on the “My Purchases” page, and receive text/email notifications after sale approval.",
        "flxButton"   : 
        {
          "onClick": this.dropDownOnClick.bind(this)
        },
        "flx02": {
          isVisible: false 
        }
      },
      { 
        "lbl1"        : "6.What are the procedures for participating in an electronic auction?",
        "imgDownArrow": "downarrowfromvehicleinsp.png",
        "lbl2"        : "Participants read the vehicle list, bid during the auction period, and note that two minutes are added if bidding continues in the last two minutes; results are subject to acquiring party approval.",
        "flxButton"   : 
        {
          "onClick": this.dropDownOnClick.bind(this)
        },
        "flx02": {
          isVisible: false 
        }
      },
      { 
        "lbl1"        : "7.How does the auto bid feature work on the Al Wataneya Auctions site?",
        "imgDownArrow": "downarrowfromvehicleinsp.png",
        "lbl2"        : "Select a vehicle, set the highest bid value, ensure the bidding icon is green (highest bidder) or white (not highest), and cancel by clicking “Back”; bidders are responsible for the maximum bid set.",
        "flxButton"   : 
        {
          "onClick": this.dropDownOnClick.bind(this)
        },
        "flx02": {
          isVisible: false 
        }
      },
      { 
        "lbl1"        : "8.What responsibilities does the buyer have regarding vehicle inspection before bidding?",
        "imgDownArrow": "downarrowfromvehicleinsp.png",
        "lbl2"        : "Buyers must thoroughly inspect the vehicle, acknowledge it is sold as-is without guarantee, and cannot cancel the sale due to defects, as Al Wataneya Auctions acts only as a broker.",
        "flxButton"   : 
        {
          "onClick": this.dropDownOnClick.bind(this)
        },
        "flx02": {
          isVisible: false 
        }
      },
      { 
        "lbl1"        : "9.What happens if a bidder opts not to purchase a court vehicle after winning?",
        "imgDownArrow": "downarrowfromvehicleinsp.png",
        "lbl2"        : "A 5% fine in favor of the court is imposed if the bidder chooses not to purchase a court vehicle.",
        "flxButton"   : 
        {
          "onClick": this.dropDownOnClick.bind(this)
        },
        "flx02": {
          isVisible: false 
        }
      },
    ];

    this.view.segBiddingProcess.setData(vehicleDetail);
  },

  dropDownOnClick: function () {
  var self = this;
  var selectedRow = self.view.segBiddingProcess.selectedRowItems;

  if (!selectedRow || selectedRow.length === 0) {
    voltmx.print("No row is selected");
    return;
  }

  var rowData = selectedRow[0];
  var rowIndex = self.view.segBiddingProcess.selectedRowIndex[1];

  // Toggle visibility of flx02
  var isNowVisible = !rowData.flx02.isVisible;
  rowData.flx02.isVisible = isNowVisible;

  // Create rotation transform
  var rotateTransform = voltmx.ui.makeAffineTransform();
  if (isNowVisible) {
    rotateTransform.rotate(180);  // expanded
  } else {
    rotateTransform.rotate(0);    // collapsed
  }

  // Animate the image rotation
  rowData.imgDownArrow = {
    "src"      : "downarrowfromvehicleinsp.png",
    "transform": rotateTransform
  };

  // Update the row
  self.view.segBiddingProcess.setDataAt(rowData, rowIndex);
},
  
  navToFAQ: function()
  {
    new voltmx.mvc.Navigation("frmFAQs").navigate();
  }



});

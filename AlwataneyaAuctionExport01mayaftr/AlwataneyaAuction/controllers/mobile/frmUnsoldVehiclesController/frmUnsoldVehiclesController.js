define({

  onNavigate: function() 
  {
    this.vehicleDetails();
    this.view.flxLoadMore.onClick = this.loadMoreOnClick.bind(this);
  },

  vehicleDetails: function() 
  {
    var vehicleDetail = [
      { 
        "imgCardata"       : "dashboardcarouselnew1.jpg",
        "lblCarmodelname"  : "Kia Carnival 2019",
        "lblLot"           : "Lot #",
        "lblLotNum"        : "69952",
        "lblLocation"      : "Location",
        "lblLocationVal"   : "Abu Dhabi",
        "lblHighestBid"    : "Highest Bid",
        "lblHighestBidVal" : "10,000",
        "lblContactSupport": "Contact Support",   
        "imgContactSupport": "contactnew.png",
        "btnEdit"          : 
        {
          "text"   : "EDIT",
          "skin"   : "sknbtnBgfffffflblBlack",
          "onClick": this.btnEditOnClick.bind(this)
        },
        "btnReList":
        {
          "text"   : "RELIST",
          "skin"   : "sknBtnBid61B35C8pxradius",
          "onClick": this.btnReListOnClick.bind(this)
        },
        "btnArchive":
        {
          "text"   : "ARCHIVE",
          "skin"   : "sknbtnBgfffffflblBlack",
          "onClick": this.btnArchiveOnClick.bind(this)
        },
        "btnReCall":
        {
          "text"   : "RECALL",
          "skin"   : "sknbtnBgfffffflblBlack",
          "onClick": this.btnRecallOnClick.bind(this)
        }
      },
      { 
        "imgCardata"       : "dashboardcarouselnew1.jpg",
        "lblCarmodelname"  : "Kia Carnival 2019",
        "lblLot"           : "Lot #",
        "lblLotNum"        : "69952",
        "lblLocation"      : "Location",
        "lblLocationVal"   : "Abu Dhabi",
        "lblHighestBid"    : "Highest Bid",
        "lblHighestBidVal" : "10,000",
        "lblContactSupport": "Contact Support",   
        "imgContactSupport": "contactnew.png",
        "btnEdit"          : 
        {
          "text"   : "EDIT",
          "skin"   : "sknbtnBgfffffflblBlack",
          "onClick": this.btnEditOnClick.bind(this)
        },
        "btnReList":
        {
          "text"   : "RELIST",
          "skin"   : "sknBtnBid61B35C8pxradius",
          "onClick": this.btnReListOnClick.bind(this)
        },
        "btnArchive":
        {
          "text"   : "ARCHIVE",
          "skin"   : "sknbtnBgfffffflblBlack",
          "onClick": this.btnArchiveOnClick.bind(this)
        },
        "btnReCall":
        {
          "text"   : "RECALL",
          "skin"   : "sknbtnBgfffffflblBlack",
          "onClick": this.btnRecallOnClick.bind(this)
        }
      },
      { 
        "imgCardata"       : "dashboardcarouselnew1.jpg",
        "lblCarmodelname"  : "Kia Carnival 2019",
        "lblLot"           : "Lot #",
        "lblLotNum"        : "69952",
        "lblLocation"      : "Location",
        "lblLocationVal"   : "Abu Dhabi",
        "lblHighestBid"    : "Highest Bid",
        "lblHighestBidVal" : "10,000",
        "lblContactSupport": "Contact Support",   
        "imgContactSupport": "contactnew.png",
        "btnEdit"          : 
        {
          "text"   : "EDIT",
          "skin"   : "sknbtnBgfffffflblBlack",
          "onClick": this.btnEditOnClick.bind(this)
        },
        "btnReList":
        {
          "text"   : "RELIST",
          "skin"   : "sknBtnBid61B35C8pxradius",
          "onClick": this.btnReListOnClick.bind(this)
        },
        "btnArchive":
        {
          "text"   : "ARCHIVE",
          "skin"   : "sknbtnBgfffffflblBlack",
          "onClick": this.btnArchiveOnClick.bind(this)
        },
        "btnReCall":
        {
          "text"   : "RECALL",
          "skin"   : "sknbtnBgfffffflblBlack",
          "onClick": this.btnRecallOnClick.bind(this)
        }
      },
      { 
        "imgCardata"       : "dashboardcarouselnew1.jpg",
        "lblCarmodelname"  : "Kia Carnival 2019",
        "lblLot"           : "Lot #",
        "lblLotNum"        : "69952",
        "lblLocation"      : "Location",
        "lblLocationVal"   : "Abu Dhabi",
        "lblHighestBid"    : "Highest Bid",
        "lblHighestBidVal" : "10,000",
        "lblContactSupport": "Contact Support",   
        "imgContactSupport": "contactnew.png",
        "btnEdit"          : 
        {
          "text"   : "EDIT",
          "skin"   : "sknbtnBgfffffflblBlack",
          "onClick": this.btnEditOnClick.bind(this)
        },
        "btnReList":
        {
          "text"   : "RELIST",
          "skin"   : "sknBtnBid61B35C8pxradius",
          "onClick": this.btnReListOnClick.bind(this)
        },
        "btnArchive":
        {
          "text"   : "ARCHIVE",
          "skin"   : "sknbtnBgfffffflblBlack",
          "onClick": this.btnArchiveOnClick.bind(this)
        },
        "btnReCall":
        {
          "text"   : "RECALL",
          "skin"   : "sknbtnBgfffffflblBlack",
          "onClick": this.btnRecallOnClick.bind(this)
        }
      }
    ];

    this.view.segUnsoldVehicles.setData(vehicleDetail);
  },
  btnEditOnClick: function()
  {
    alert("btnEdit Clicked..!!");
  },
  btnReListOnClick: function()
  {
    alert("btnReList Clicked..!!");
  },
  btnRecallOnClick: function()
  {
    alert("btnRecall Clicked..!!");
  },
  btnArchiveOnClick: function()
  {
    alert("btnArchive Clicked..!!");
  },
  loadMoreOnClick: function()
  {
    alert("Load More Button is Clicked..!!");
  }


});

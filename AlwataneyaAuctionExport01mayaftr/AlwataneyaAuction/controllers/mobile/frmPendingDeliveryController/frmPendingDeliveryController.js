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
        "imgCardata"          : "dashboardcarouselnew1.jpg",
        "lblCarmodelname"     : "Kia Carnival 2019",
        "lblLot"              : "Lot #",
        "lblLotNum"           : "69952",
        "lblLocation"         : "Location",
        "lblApprovalStatus"   : "APPROVAL STATUS",
        "lblPendingStatus"    : "PAYMENT STATUS",
        "lblWinningBid"       : "WINNING BID",
        "lblLocationVal"      : "Abu Dhabi",
        "lblPaymentStatusVal" : "UNPAID",
        "lblWinningBidVal"    : "10,000",
        "lblApprovalStatusVal": "APPROVED",
        "lblRequestServices"  : "REQUEST SERVICES",
        "lblDocuments"        : "DOCUMENTS",   
        "imgRequestAccess"    : "reqestservices.png",
        "imgDocument"         : "ep_document.png",
        "btnPayNow"           : 
          {
            "text"   : "PAY NOW",
            "skin"   : "sknBtnBid61B35C8pxradius",
            "onClick": this.btnBidnowOnClick.bind(this)
          },
         "btnRequestDelivery":
          {
            "text"   : "REQUEST DELIVERY",
            "skin"   : "sknBtnBid61B35C8pxradius",
            "onClick": this.btnRequestDeliveryOnClick.bind(this)
          }
         },
      { 
        "imgCardata"          : "dashboardcarouselnew1.jpg",
        "lblCarmodelname"     : "Kia Carnival 2019",
        "lblLot"              : "Lot #",
        "lblLotNum"           : "69952",
        "lblLocation"         : "Location",
        "lblApprovalStatus"   : "APPROVAL STATUS",
        "lblPendingStatus"    : "PAYMENT STATUS",
        "lblWinningBid"       : "WINNING BID",
        "lblLocationVal"      : "Abu Dhabi",
        "lblPaymentStatusVal" : "UNPAID",
        "lblWinningBidVal"    : "10,000",
        "lblApprovalStatusVal": "APPROVED",
        "lblRequestServices"  : "REQUEST SERVICES",
        "lblDocuments"        : "DOCUMENTS",   
        "imgRequestAccess"    : "reqestservices.png",
        "imgDocument"         : "ep_document.png",
        "btnPayNow"           : 
          {
            "text"   : "PAY NOW",
            "skin"   : "sknBtnBid61B35C8pxradius",
            "onClick": this.btnBidnowOnClick.bind(this)
          },
         "btnRequestDelivery":
          {
            "text"   : "REQUEST DELIVERY",
            "skin"   : "sknBtnBid61B35C8pxradius",
            "onClick": this.btnRequestDeliveryOnClick.bind(this)
          }
         },
      { 
        "imgCardata"          : "dashboardcarouselnew1.jpg",
        "lblCarmodelname"     : "Kia Carnival 2019",
        "lblLot"              : "Lot #",
        "lblLotNum"           : "69952",
        "lblLocation"         : "Location",
        "lblApprovalStatus"   : "APPROVAL STATUS",
        "lblPendingStatus"    : "PAYMENT STATUS",
        "lblWinningBid"       : "WINNING BID",
        "lblLocationVal"      : "Abu Dhabi",
        "lblPaymentStatusVal" : "UNPAID",
        "lblWinningBidVal"    : "10,001",
        "lblApprovalStatusVal": "APPROVED",
        "lblRequestServices"  : "REQUEST SERVICES",
        "lblDocuments"        : "DOCUMENTS",   
        "imgRequestAccess"    : "reqestservices.png",
        "imgDocument"         : "ep_document.png",
        "btnPayNow"           : 
          {
            "text"   : "PAY NOW",
            "skin"   : "sknBtnBid61B35C8pxradius",
            "onClick": this.btnBidnowOnClick.bind(this)
          },
         "btnRequestDelivery":
          {
            "text"   : "REQUEST DELIVERY",
            "skin"   : "sknBtnBid61B35C8pxradius",
            "onClick": this.btnRequestDeliveryOnClick.bind(this)
          }
         },
      { 
        "imgCardata"          : "dashboardcarouselnew1.jpg",
        "lblCarmodelname"     : "Kia Carnival 2019",
        "lblLot"              : "Lot #",
        "lblLotNum"           : "69952",
        "lblLocation"         : "Location",
        "lblApprovalStatus"   : "APPROVAL STATUS",
        "lblPendingStatus"    : "PAYMENT STATUS",
        "lblWinningBid"       : "WINNING BID",
        "lblLocationVal"      : "Abu Dhabi",
        "lblPaymentStatusVal" : "UNPAID",
        "lblWinningBidVal"    : "10,001",
        "lblApprovalStatusVal": "APPROVED",
        "lblRequestServices"  : "REQUEST SERVICES",
        "lblDocuments"        : "DOCUMENTS",   
        "imgRequestAccess"    : "reqestservices.png",
        "imgDocument"         : "ep_document.png",
        "btnPayNow"           : 
          {
            "text"   : "PAY NOW",
            "skin"   : "sknBtnBid61B35C8pxradius",
            "onClick": this.btnBidnowOnClick.bind(this)
          },
         "btnRequestDelivery":
          {
            "text"   : "REQUEST DELIVERY",
            "skin"   : "sknBtnBid61B35C8pxradius",
            "onClick": this.btnRequestDeliveryOnClick.bind(this)
          }
         }
    ];

    this.view.segPendingDelivery.setData(vehicleDetail);
  },
  btnBidnowOnClick: function()
  {
    alert("btnPayNow Clicked..!!");
  },
  btnRequestDeliveryOnClick: function()
  {
    alert("btnRequestDelivery Clicked..!!");
  },
  loadMoreOnClick: function()
  {
    alert("Load More Button is Clicked..!!");
  }
  

});

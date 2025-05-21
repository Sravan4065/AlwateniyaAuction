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
        "imgCardata"              : "dashboardcarouselnew1.jpg",
        "lblCarmodelname"         : "Kia Carnival 2019",
        "lblLot"                  : "Lot #",
        "lblLocationVal"          : "Abu Dhabi",
        "lblLotNum"               : "69952",
        "lblLocation"             : "Location",
        "lblHighestBid"           : "Highest Bid",
        "lblBuyerPaymentStatus"   : "Buyer Payment Status",
        "lblETPaymentStatus"      : "ET Payment Status",
        "lblVehicleStatus"        : "Vehicle status",
        "lblHighestBidVal"        : "10,000",
        "lblBuyerPaymentStatusVal": "Paid",
        "lblETPaymentStatusVal"   : "Paid",
        "lblVehicleStatusVal"     : "Received by buyer",
        "imgContactSupport"       : "contactnew.png",
        "imgViewInvoice"          : "ep_document.png",
        "lblViewInvoice"          : "View Invoice",
        "lblContactSupport"       : "Contact Support",
         },
      { 
        "imgCardata"              : "dashboardcarouselnew1.jpg",
        "lblCarmodelname"         : "Kia Carnival 2019",
        "lblLot"                  : "Lot #",
        "lblLocationVal"          : "Abu Dhabi",
        "lblLotNum"               : "69952",
        "lblLocation"             : "Location",
        "lblHighestBid"           : "Highest Bid",
        "lblBuyerPaymentStatus"   : "Buyer Payment Status",
        "lblETPaymentStatus"      : "ET Payment Status",
        "lblVehicleStatus"        : "Vehicle status",
        "lblHighestBidVal"        : "10,000",
        "lblBuyerPaymentStatusVal": "Paid",
        "lblETPaymentStatusVal"   : "Paid",
        "lblVehicleStatusVal"     : "Received by buyer",
        "imgContactSupport"       : "contactnew.png",
        "imgViewInvoice"          : "ep_document.png",
        "lblViewInvoice"          : "View Invoice",
        "lblContactSupport"       : "Contact Support",
         },
      { 
        "imgCardata"              : "dashboardcarouselnew1.jpg",
        "lblCarmodelname"         : "Kia Carnival 2019",
        "lblLot"                  : "Lot #",
        "lblLocationVal"          : "Abu Dhabi",
        "lblLotNum"               : "69952",
        "lblLocation"             : "Location",
        "lblHighestBid"           : "Highest Bid",
        "lblBuyerPaymentStatus"   : "Buyer Payment Status",
        "lblETPaymentStatus"      : "ET Payment Status",
        "lblVehicleStatus"        : "Vehicle status",
        "lblHighestBidVal"        : "10,000",
        "lblBuyerPaymentStatusVal": "Paid",
        "lblETPaymentStatusVal"   : "Paid",
        "lblVehicleStatusVal"     : "Received by buyer",
        "imgContactSupport"       : "contactnew.png",
        "imgViewInvoice"          : "ep_document.png",
        "lblViewInvoice"          : "View Invoice",
        "lblContactSupport"       : "Contact Support",
         },
      
    ];

    this.view.segDeliveredVehicles.setData(vehicleDetail);
  },
  loadMoreOnClick: function()
  {
    alert("Load More Button is Clicked..!!");
  }

});

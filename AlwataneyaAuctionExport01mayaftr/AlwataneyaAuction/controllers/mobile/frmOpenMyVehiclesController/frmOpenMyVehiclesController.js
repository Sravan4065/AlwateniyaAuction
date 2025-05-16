define({ 

  onNavigate: function(){
   this.view.preShow = this.onPreShow.bind(this);
   this.view.flxBackNavigateIcon.onClick = this.backToPreviousForm.bind(this);
    if(this.view.segVehicleItemsBuyer){
   this.view.segVehicleItemsBuyer.onRowClick  = this.segMyVehicleItemsBuyerOnRowClickAction.bind(this);
   }
   if(this.view.segVehicleItemsSeller)
     {
       this.view.segVehicleItemsSeller.onRowClick = this.segMyVehicleItemsSellerOnRowClickAction.bind(this);
     }
 },
  
 onPreShow: function()
  {
    this.mode = voltmx.store.getItem("mode") || "seller";
    if(this.mode === "buyer")
      {
        this.view.segVehicleItemsBuyer.setVisibility(true);
        this.view.segVehicleItemsSeller.setVisibility(false);
      }
    else{
      this.view.segVehicleItemsBuyer.setVisibility(false);
      this.view.segVehicleItemsSeller.setVisibility(true);
    }  
  },
  
  backToPreviousForm: function() {

     new voltmx.mvc.Navigation("frmProfile").navigate();
  
},
  
  segMyVehicleItemsBuyerOnRowClickAction: function()
  {
    var selectedProfileItems = this.view.segVehicleItemsBuyer.selectedRowItems;
      var selectedValue = selectedProfileItems[0].lblItemName;
    var x;
    switch(selectedValue){
        case "Active Bids"      :   {
                                         x = new voltmx.mvc.Navigation("frmMyBidsPage");
                                           
                                       }
                                       break;
        case "Won Bids"      :   {
                                      x = new voltmx.mvc.Navigation("frmMyBidsPage");
                                       }
                                       break;
        case "Lost Bids"    :   {
                                    x = new voltmx.mvc.Navigation("frmMyBidsPage");
                                       }
                                       break; 
        case "Vehicle Payments"     : {
                                  x = new voltmx.mvc.Navigation("frmSummaryOfVehiclePayments");
                                      }
                                      break;
        case "Other Services Payments"        :  {
                                  x = new voltmx.mvc.Navigation("frmSummaryOfOtherServicePayments");
                                      }
                                      break;
    }
    if(x){
         x.navigate();
    }
  },
  
  segMyVehicleItemsSellerOnRowClickAction: function()
  {
     var selectedProfileItems = this.view.segVehicleItemsSeller.selectedRowItems;
      var selectedValue = selectedProfileItems[0].lblItemName;
    var x;
    switch(selectedValue){
        case "Under Review"      :   {
                                         x = new voltmx.mvc.Navigation("frmMyVehicleNew");
                                           
                                       }
                                       break;
        case "WatchList"      :   {
        
                                       }
                                       break;
        case "Security Deposits"    :   {
                                     x = new voltmx.mvc.Navigation("frmSecurityDeposits");
                                       }
                                       break; 
        case "Vehicle Payments"     : {
                                  x = new voltmx.mvc.Navigation("frmSummaryOfVehiclePayments");
                                      }
                                      break;
        case "Other Services Payments"        :  {
                                  x = new voltmx.mvc.Navigation("frmSummaryOfOtherServicePayments");
                                      }
                                      break;
    }
    if(x){
         x.navigate();
    }
    
  }
  
 });
define({ 

 onNavigate: function(){
   this.view.preShow = this.onPreShow.bind(this);
   this.view.flxBackNavigateIcon.onClick = this.backToPreviousForm.bind(this);
   if(this.view.segMyAccountItemsBuyer){
   this.view.segMyAccountItemsBuyer.onRowClick  = this.segMyAccountItemsBuyerOnRowClickAction.bind(this);
   }
   if(this.view.segMyAccountItemsSeller)
     {
       this.view.segMyAccountItemsSeller.onRowClick = this.segMyAccountItemsSellerOnRowClickAction.bind(this);
     }
   
 },
  
  onPreShow: function()
  {
    this.mode = voltmx.store.getItem("mode") || "seller";
    if(this.mode === "buyer")
      {
        this.view.segMyAccountItemsBuyer.setVisibility(true);
        this.view.segMyAccountItemsSeller.setVisibility(false);
      }
    else{
      this.view.segMyAccountItemsBuyer.setVisibility(false);
        this.view.segMyAccountItemsSeller.setVisibility(true);
    }  
  },
  
  backToPreviousForm: function() {
  
    var x = new voltmx.mvc.Navigation("frmProfile");
    x.navigate();
  
},
  segMyAccountItemsBuyerOnRowClickAction: function(){
    var selectedProfileItems = this.view.segMyAccountItemsBuyer.selectedRowItems;
      var selectedValue = selectedProfileItems[0].lblItemName;
    var x;
    switch(selectedValue){
        case "My Documents"      :   {
                                         x = new voltmx.mvc.Navigation("frmMyDocuments");
                                           
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
  },
  
  segMyAccountItemsSellerOnRowClickAction: function()
  {
    var selectedProfileItems = this.view.segMyAccountItemsSeller.selectedRowItems;
      var selectedValue = selectedProfileItems[0].lblItemName;
    var x;
    switch(selectedValue){
        case "My Documents"      :   {
                                         x = new voltmx.mvc.Navigation("frmMyDocuments");
                                           
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
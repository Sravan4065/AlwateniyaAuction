define({ 

 onNavigate: function(){
   
   this.view.flxBackNavigateIcon.onClick = this.backToPreviousForm.bind(this);
   this.view.segProfileItems.onRowClick  = this.segProfileItemsOnRowClickAction.bind(this);
 },
  
  backToPreviousForm: function() {
  
    var x = new voltmx.mvc.Navigation("frmProfile");
    x.navigate();
  
},
  segProfileItemsOnRowClickAction: function(){
    var selectedProfileItems = this.view.segProfileItems.selectedRowItems;
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
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
    switch(selectedValue){
        case "My Documents"      :   {
                                         var ntf = new voltmx.mvc.Navigation("frmMyDocuments");
                                           ntf.navigate();
                                       }
                                       break;
        case "WatchList"      :   {
        
                                       }
                                       break;
        case "Saved Searches"    :   {
        
                                       }
                                       break; 
        case "Payments"     : {
        
                                      }
                                      break;
        case "Payment History"        :  {
        
                                      }
                                      break;
        case "Deposits"  : {
        
                                      }
                                      break;
       
    }
  }
  

 });
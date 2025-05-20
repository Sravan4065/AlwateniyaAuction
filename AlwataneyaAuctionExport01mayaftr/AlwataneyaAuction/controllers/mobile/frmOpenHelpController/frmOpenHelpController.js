define({ 

 onNavigate: function(){
   
   this.view.flxBackNavigateIcon.onClick = this.backToPreviousForm.bind(this);
   this.view.segHelpItems.onRowClick = this.segHelpOnRowClickAction.bind(this);
 },
  
  backToPreviousForm: function() {
 
    var x = new voltmx.mvc.Navigation("frmProfile");
    x.navigate();
  
},
  
  segHelpOnRowClickAction: function()
  {
    
    var selectedProfileItems = this.view.segHelpItems.selectedRowItems;
      var selectedValue = selectedProfileItems[0].lblItemName;
    var x;
    switch(selectedValue){
        case "Find Branches"      :   {
                                         x = new voltmx.mvc.Navigation("frmFindBranch");
                                           
                                       }
                                       break;
        case "FAQs"      :   {
                                      x = new voltmx.mvc.Navigation("frmFAQs");
                                       }
                                       break;
        case "Security Deposits"    :   {
                                     x = new voltmx.mvc.Navigation("frmSecurityDeposits");
                                       }
                                       break; 
        case "About Us"     : {
                                  x = new voltmx.mvc.Navigation("frmAboutUs");
                                      }
                                      break;
        case "Contact Us"        :  {
                                  x = new voltmx.mvc.Navigation("frmContactUS");
                                      }
                                      break;
    }
    if(x){
         x.navigate();
    }
  }
  
 });
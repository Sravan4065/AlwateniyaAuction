define({ 

  onNavigate: function(){
   this.view.preShow = this.onPreShow.bind(this);
   this.view.flxBackNavigateIcon.onClick = this.backToPreviousForm.bind(this);
   
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
  var previousForm = voltmx.application.getPreviousForm();
  if (previousForm && previousForm.id) {
    var x = new voltmx.mvc.Navigation(previousForm.id);
    x.navigate();
  } else {
    voltmx.print("No previous form found!");
  }
}
  
 });
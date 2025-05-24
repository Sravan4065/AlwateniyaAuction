define({ 


  onNavigate: function() 
  {
    this.view.flxBack.onClick = this.navigateToRequestYourInspectionReport.bind(this);
    this.view.btnCancel.onClick =this.navigateToRequestYourInspectionReport.bind(this);
    this.view.btnProceedPayment.onClick = this.proceedPayment.bind(this);
  },

  navigateToRequestYourInspectionReport: function()
  {
    new voltmx.mvc.Navigation("frmRequestYourInspectionReport").navigate();
  },
  proceedPayment: function()
  {
    alert("Proceed Payment Clicked..!!!");
  }
});
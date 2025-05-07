define({ 

 //Type your controller code here 
  onNavigate: function(){
    this.view.btnSkip.onClick= this.btnSkipOnClickAction;
//     this.view.flxBackAarrow.onClick = () => new voltmx.mvc.Navigation(voltmx.application.getPreviousForm().id).navigate();
  },
  
  btnSkipOnClickAction: function(){
    var ntf = new voltmx.mvc.Navigation("frmDashBoard");
    ntf.navigate();
  }
 });
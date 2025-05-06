define({ 

 //Type your controller code here 
  onNavigate: function(){
    this.view.btnSkip.onClick= this.btnSkipOnClickAction;
  },
  
  btnSkipOnClickAction: function(){
    var ntf = new voltmx.mvc.Navigation("frmDashBoard");
    ntf.navigate();
  }
 });
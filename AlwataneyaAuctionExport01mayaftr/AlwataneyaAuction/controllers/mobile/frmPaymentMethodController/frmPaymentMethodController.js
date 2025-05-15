define({ 

 //Type your controller code here 
  onNavigate: function(){
    this.view.btnSkip.onClick= this.btnSkipOnClickAction;
    this.view.preShow = this.onPreShow.bind(this);
//     this.view.flxBackAarrow.onClick = () => new voltmx.mvc.Navigation(voltmx.application.getPreviousForm().id).navigate();
  },
  
  btnSkipOnClickAction: function(){
    var ntf = new voltmx.mvc.Navigation("frmDashBoard");
    ntf.navigate();
  },
  onPreShow: function(){
    var previousForm = voltmx.application.getPreviousForm();
    if(previousForm){
      var id = previousForm.id;
      if(id === "frmRegister2"){
        voltmx.application.destroyForm("frmRegister2");
      }
    }
  },
  
 });
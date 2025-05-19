define(function() {
  
	return {
       onNavigate: function(){
         this.view.flxLogin.onClick = this.flxLoginOnClickAction;
       },
      flxLoginOnClickAction: function(){
        var ntf = new voltmx.mvc.Navigation("frmLoginScreen");
        ntf.navigate();      
      }
	};
  
});
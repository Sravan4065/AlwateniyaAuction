define({ 

  onNavigate: function()
  {
    this.view.flxBack.onClick = this.navToOpenHelp.bind(this);
  },
  
  navToOpenHelp: function()
  {
    new voltmx.mvc.Navigation("frmOpenHelp").navigate();
  }

 });
define({ 

 onNavigate: function()
  {
    this.view.flx02.onClick = this.navToBiddingProcess.bind(this);
    this.view.flxViewAllQuestion02.onClick = this.navToBiddingProcess.bind(this);
    this.view.flxBack.onClick = this.navToOpenHelp.bind(this);
  },
  
  navToBiddingProcess: function()
  {
    new voltmx.mvc.Navigation("frmBiddingProcess").navigate();
  },
  
  navToOpenHelp: function()
  {
    new voltmx.mvc.Navigation("frmOpenHelp").navigate();
  }
 });
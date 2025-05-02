define("com/hcl/voltmx/alwataneya1/Footer2/userFooter2Controller", function() {
    return {
        onNavigate: function() {
            this.view.flxSellCar.onClick = this.SellCarNavigation.bind(this);
            this.view.flxHome.onClick = this.navigateToDashboard.bind(this);
            this.view.flxAuctions.onClick = this.navigateToAllAuctions.bind(this);
            this.view.flxProfile.onClick = this.flxProfileOnClickAction.bind(this);
        },
        SellCarNavigation: function() {
            //If User Exists Navigate to sell Car List Page or Login Page!!x
            //            alert(this.view.flxProfile.isVisible+"flxProfileIsVisisblre");
            if (this.view.flxProfile.isVisible) {
                var ntf = new voltmx.mvc.Navigation("frmProfile");
                ntf.navigate();
            } else if (this.view.imgSellCar.isVisible) {
                var ntf2 = new voltmx.mvc.Navigation("frmLoginScreen");
                ntf2.navigate();
            }
        },
        navigateToDashboard: function() {
            var x = new voltmx.mvc.Navigation("frmDashBoard");
            x.navigate();
        },
        navigateToAllAuctions: function() {
            var x = new voltmx.mvc.Navigation("frmAuctionCategories");
            x.navigate();
        },
        navigateToMyBidsPage: function() {
                var x = new voltmx.mvc.Navigation("frmMyBidsPage");
                x.navigate();
            }
            //       flxProfileOnClickAction: function(){
            //          var ntf3= new voltmx.mvc.Navigation("frmMenuBar");
            //            ntf3.navigate();
            //       }
    };
});
define("com/hcl/voltmx/alwataneya1/Footer2/Footer2ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_d22c255a1f934e37bbaca766416e2a6d: function AS_FlexContainer_d22c255a1f934e37bbaca766416e2a6d(eventobject) {
        var self = this;
        var currentForm = voltmx.application.getCurrentForm();
        // if (currentForm.id === "frmAllAuctionsList" || currentForm.id === "frmAuctionCategories"){
        //   this.view.flxHL1.setVisibility(false);
        //   this.view.flxHL2.setVisibility(true);
        //   this.view.flxHL3.setVisibility(false);
        //   this.view.flxHL4.setVisibility(false);
        //   this.view.flxHL5.setVisibility(false);
        //    this.view.imgMegaPhone.src = "auctionsfooteractive.png";
        //   this.view.imgHome.src = "homefooter.png";
        //   this.view.lblHome.skin = "sknlblCPBoldCapt181818Font100";
        //   this.view.lblAuctions.skin = "sknlblCPBoldDisp333333Font200";
        // }
        var x = new voltmx.mvc.Navigation("frmAuctionCategories");
        x.navigate();
    },
    AS_FlexContainer_a37c16fa84644dc28f6fcee5b30ca546: function AS_FlexContainer_a37c16fa84644dc28f6fcee5b30ca546(eventobject) {
        var self = this;
        return self.navigateToDashboard.call(this);
    },
    AS_FlexContainer_b57beac7ca6940c2a9d17543c723053a: function AS_FlexContainer_b57beac7ca6940c2a9d17543c723053a(eventobject) {
        var self = this;
        return self.navigateToMyBidsPage.call(this);
    },
    AS_FlexContainer_a822db0177a2476286ad5fee56aef334: function AS_FlexContainer_a822db0177a2476286ad5fee56aef334(eventobject) {
        var self = this;
        return self.SellCarNavigation.call(this);
    }
});
define("com/hcl/voltmx/alwataneya1/Footer2/Footer2Controller", ["com/hcl/voltmx/alwataneya1/Footer2/userFooter2Controller", "com/hcl/voltmx/alwataneya1/Footer2/Footer2ControllerActions"], function() {
    var controller = require("com/hcl/voltmx/alwataneya1/Footer2/userFooter2Controller");
    var actions = require("com/hcl/voltmx/alwataneya1/Footer2/Footer2ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

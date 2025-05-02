define("userfrmProfileController", {
    //Type your controller code here 
    onNavigate: function() {
        this.view.flxSellCar.onClick = this.flxSellCarOnClickAction;
        this.view.preShow = this.preshowFunctions;
        //     this.view.Footer2.flxSellCar.onClick = this.Footer2flxSellCarOnClickAction;
        this.view.flxLogout.onClick = this.logoutSession.bind(this);
        //    this.view.btnCompleteKYC.onClick = this.btnCompleteKYCOnClickAction;
        this.view.flxMyVehicles.onClick = this.navToMyVehicles.bind(this);
        //    this.view.flxLogout.onClick = this.flxLogoutOnClickAction;
    },
    logoutSession: function() {
        voltmx.store.setItem("isLogin", false);
        voltmx.store.removeItem("refreshtoken");
        voltmx.store.removeItem("expon");
        voltmx.store.removeItem("userAccessTokenExp");
        voltmx.store.setItem("isUserCreated", false);
        voltmx.store.removeItem("accesstoken");
        voltmx.store.removeItem("userObject");
        voltmx.store.removeItem("getUserAccesstoken");
        voltmx.store.removeItem("userId");
        this.preshowFunctions();
        var x = new voltmx.mvc.Navigation("frmDashBoard");
        x.navigate();
        //     alert("isLogin :"+isUserCreated);
    },
    preshowFunctions: function() {
        this.getFullName();
        this.loginConfirmation();
        this.toggleFooterIcons();
    },
    toggleFooterIcons: function() {
        this.view.Footer2.flxHL1.setVisibility(false);
        this.view.Footer2.flxHL2.setVisibility(false);
        this.view.Footer2.flxHL3.setVisibility(false);
        this.view.Footer2.flxHL4.setVisibility(false);
        this.view.Footer2.flxHL5.setVisibility(true);
        this.view.Footer2.imgHome.src = "homefooter.png";
        this.view.Footer2.lblHome.skin = "sknlblCPBoldCapt181818Font100";
        this.view.Footer2.imgMegaPhone.src = "auctionsfooter.png";
        this.view.Footer2.lblAuctions.skin = "sknlblCPBoldCapt181818Font100";
        this.view.Footer2.lblSellCar.skin = "sknlblCPBoldCapt181818Font100";
        var isLogin = voltmx.store.getItem("isLogin");
        //     alert("isLogin :"+isLogin);
        var isUserCreated = voltmx.store.getItem("isUserCreated");
        if (isLogin === true && isUserCreated === true) {
            this.view.Footer2.imgSellCar.setVisibility(false);
            this.view.Footer2.flxProfile.setVisibility(true);
        } else {
            this.view.Footer2.imgSellCar.setVisibility(true);
            this.view.Footer2.flxProfile.setVisibility(false);
        }
    },
    getFullName: function() {
        var username;
        var isLogin = voltmx.store.getItem("isLogin");
        if (isLogin) {
            username = voltmx.store.getItem("username");
        }
        this.view.lblUsernameMenubar.text = username;
    },
    loginConfirmation: function() {
        var isLogin = voltmx.store.getItem("isLogin");
        //     alert("isLogin :"+isLogin);
        var isUserCreated = voltmx.store.getItem("isUserCreated");
        //     alert("isLogin :"+isUserCreated);
        if (isLogin === true && isUserCreated === true) {
            this.view.Footer2.imgSellCar.setVisibility(false);
            this.view.Footer2.flxProfile.setVisibility(true);
        } else {
            this.view.Footer2.imgSellCar.setVisibility(true);
            this.view.Footer2.flxProfile.setVisibility(false);
        }
    },
    flxSellCarOnClickAction: function() {
        var ntf = new voltmx.mvc.Navigation("frmSellCarList12");
        ntf.navigate();
    },
    Footer2flxSellCarOnClickAction: function() {
        var ntf = new voltmx.mvc.Navigation("frmDashBoard");
        ntf.navigate();
    },
    btnCompleteKYCOnClickAction: function() {
        var ntf = new voltmx.mvc.Navigation("frmUploadKYC");
        ntf.navigate();
    },
    flxLogoutOnClickAction: function() {
        voltmx.store.setItem("isLogin", false);
        var ntf = new voltmx.mvc.Navigation("frmDashBoard");
        ntf.navigate();
    },
    navToMyVehicles: function() {
        var x = new voltmx.mvc.Navigation("frmMyVehicles");
        x.navigate();
    }
});
define("frmProfileControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_d653236f19dc4a449358f03f30bc9970: function AS_Button_d653236f19dc4a449358f03f30bc9970(eventobject) {
        var self = this;
        this.view.flxOpacity.setVisibility(false);
        this.view.flxOpacity.zIndex = "1";
        this.view.flxContactPopup.setVisibility(false);
    },
    AS_Button_adbcc0ffde2743c3a79810f6d72a97e4: function AS_Button_adbcc0ffde2743c3a79810f6d72a97e4(eventobject) {
        var self = this;

        function INVOKE_ASYNC_SERVICE_ide_onClick_e5d15d65a0794dc1a7394841c5d5e73b_Callback(status, Contact_us) {
            voltmx.print('saved');
            this.view.flxOpacity.setVisibility(false);
            this.view.flxOpacity.zIndex = "1";
            this.view.flxContactPopup.setVisibility(false);
            alert(status);
            alert(Contact_us);
        }
        if (Contact_us_inputparam == undefined) {
            var Contact_us_inputparam = {};
        }
        Contact_us_inputparam["serviceID"] = "salesforce_contact_us$Contact_us";
        Contact_us_inputparam["firstName"] = self.view.tbxFirstname.text;
        Contact_us_inputparam["lastName"] = self.view.tbxLastname.text;
        Contact_us_inputparam["email"] = self.view.tbxEmail.text;
        Contact_us_inputparam["mobile"] = self.view.tbxPhone.text;
        Contact_us_inputparam["subject"] = self.view.tbAreaMessage.text;
        Contact_us_inputparam["contactMethod"] = self.view.tbAreaMessage.text;
        Contact_us_inputparam["description"] = self.view.tbAreaMessage.text;
        Contact_us_inputparam["serviceType"] = self.view.tbAreaMessage.text;
        var Contact_us_httpheaders = {
            "Authorization": "Basic QXVjdGlvbjpBdWN0aW9uMTIz"
        };
        Contact_us_inputparam["httpheaders"] = Contact_us_httpheaders;
        var Contact_us_httpconfigs = {};
        Contact_us_inputparam["httpconfig"] = Contact_us_httpconfigs;
        salesforce_contact_us$Contact_us = mfintegrationsecureinvokerasync(Contact_us_inputparam, "salesforce_contact_us", "Contact_us", INVOKE_ASYNC_SERVICE_ide_onClick_e5d15d65a0794dc1a7394841c5d5e73b_Callback);
    },
    AS_FlexContainer_ff6039d8fa9d43118c06efd2c728d8af: function AS_FlexContainer_ff6039d8fa9d43118c06efd2c728d8af(eventobject) {
        var self = this;
        this.view.flxOpacity.setVisibility(true);
        this.view.flxOpacity.zIndex = "6";
        this.view.flxContactPopup.setVisibility(true);
    },
    AS_FlexContainer_hcfaf4152e2c4e8c93932c6a1eacb728: function AS_FlexContainer_hcfaf4152e2c4e8c93932c6a1eacb728(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenMyAccount");
        x.navigate();
    },
    AS_FlexContainer_d8a73ca7e9de42aa954f8887a6d0d6d8: function AS_FlexContainer_d8a73ca7e9de42aa954f8887a6d0d6d8(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenBidStatus");
        x.navigate();
    },
    AS_FlexContainer_ee49e0c99e4747deb42b4959ddaeab39: function AS_FlexContainer_ee49e0c99e4747deb42b4959ddaeab39(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenAuctions");
        x.navigate();
    },
    AS_FlexContainer_eb87f8419d0449c081c0e7136f9252f1: function AS_FlexContainer_eb87f8419d0449c081c0e7136f9252f1(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenHelp");
        x.navigate();
    },
    AS_FlexContainer_f22804aef939469bb2aac079d8ec64b5: function AS_FlexContainer_f22804aef939469bb2aac079d8ec64b5(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenSettings");
        x.navigate();
    },
    AS_FlexContainer_gf38a9ac525c4fff92500494f47c0717: function AS_FlexContainer_gf38a9ac525c4fff92500494f47c0717(eventobject) {
        var self = this;

        function INVOKE_SERVICE_d73b3f2287bb4024a662512d6e5a91f1_Success(response) {
            alert(response);
        }

        function INVOKE_SERVICE_d73b3f2287bb4024a662512d6e5a91f1_Failure(error) {}
        if (logout_inputparam == undefined) {
            var logout_inputparam = {};
        }
        logout_inputparam["serviceID"] = "DevAzureB2C$logout";
        logout_inputparam["operation"] = "logout";
        logout_inputparam["UseDeviceBrowser"] = true;
        logout_inputparam['success_url'] = encodeURIComponent("intent://com.orgname.Alwataneya2/#Intent;scheme=alwataneya2;package=com.orgname.Alwataneya2;end");
        DevAzureB2C$logout = mfidentityserviceinvoker("DevAzureB2C", logout_inputparam, INVOKE_SERVICE_d73b3f2287bb4024a662512d6e5a91f1_Success, INVOKE_SERVICE_d73b3f2287bb4024a662512d6e5a91f1_Failure);
    }
});
define("frmProfileController", ["userfrmProfileController", "frmProfileControllerActions"], function() {
    var controller = require("userfrmProfileController");
    var controllerActions = ["frmProfileControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("com/hcl/voltmx/Alwataneya/Header2Copy2/userHeader2Copy2Controller", function() {
    return {
        //         init: function() {
        // 			this.view.postShow = this.onComponentPostShow;
        // 		},
        //        onComponentPostShow: function() {
        // 			this.view.flxImgArrowToggle1.onClick = this.openMyAccount;
        // 		},
        //        openMyAccount: function(){
        //          this.view.flxOpenMyAccount.setVisibility(true);
        //        }
    };
});
define("com/hcl/voltmx/Alwataneya/Header2Copy2/Header2Copy2ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ad088e61aca24fca97b51761abbdcef0: function AS_Button_ad088e61aca24fca97b51761abbdcef0(eventobject) {
        var self = this;
        this.view.flxOpacity.setVisibility(false);
        this.view.flxContactPopup.setVisibility(false);
    },
    AS_FlexContainer_a5e8b54a036741cd901d69a79cdfb2f1: function AS_FlexContainer_a5e8b54a036741cd901d69a79cdfb2f1(eventobject) {
        var self = this;
        this.view.flxOpacity.setVisibility(true);
        this.view.flxContactPopup.setVisibility(true);
    },
    AS_FlexContainer_f19131c95c87465bb5186476e739b341: function AS_FlexContainer_f19131c95c87465bb5186476e739b341(eventobject) {
        var self = this;
        if (this.view.flxOpenMyAccount.isVisible) {
            this.view.flxOpenMyAccount.setVisibility(false);
        } else {
            this.view.flxOpenMyAccount.setVisibility(true);
        }
    },
    AS_FlexContainer_b37d95cd3a1b460da52b57211e0124c3: function AS_FlexContainer_b37d95cd3a1b460da52b57211e0124c3(eventobject) {
        var self = this;
        if (this.view.flxOpenBidStatus.isVisible) {
            this.view.flxOpenBidStatus.setVisibility(false);
        } else {
            this.view.flxOpenBidStatus.setVisibility(true);
        }
    },
    AS_FlexContainer_eb476b78f8f147afa1a80349deec0412: function AS_FlexContainer_eb476b78f8f147afa1a80349deec0412(eventobject) {
        var self = this;
        if (this.view.flxOpenAuctions.isVisible) {
            this.view.flxOpenAuctions.setVisibility(false);
        } else {
            this.view.flxOpenAuctions.setVisibility(true);
        }
    },
    AS_FlexContainer_ie6a222af7584d7b9179e352c507dff9: function AS_FlexContainer_ie6a222af7584d7b9179e352c507dff9(eventobject) {
        var self = this;
        if (this.view.flxOpenHelp.isVisible) {
            this.view.flxOpenHelp.setVisibility(false);
        } else {
            this.view.flxOpenHelp.setVisibility(true);
        }
    },
    AS_FlexContainer_bd47f76d2bb24b4cae1c5aaea00c1413: function AS_FlexContainer_bd47f76d2bb24b4cae1c5aaea00c1413(eventobject) {
        var self = this;
        if (this.view.flxOpenAppSettings.isVisible) {
            this.view.flxOpenAppSettings.setVisibility(false);
        } else {
            this.view.flxOpenAppSettings.setVisibility(true);
        }
    },
    AS_FlexContainer_a5fd681ebc1f45529787db970ba40a59: function AS_FlexContainer_a5fd681ebc1f45529787db970ba40a59(eventobject) {
        var self = this;
        this.view.flxMenuBarMain.setVisibility(true);
        var currentForm = kony.application.getCurrentForm();
        if (currentForm) {
            currentForm.flxHeader.zIndex = 6; // Update zIndex of flex in form
        }
    },
    AS_FlexContainer_afed16d9f7cd4c69ba588388d142a168: function AS_FlexContainer_afed16d9f7cd4c69ba588388d142a168(eventobject) {
        var self = this;
        this.view.flxMenuBarMain.setVisibility(false);
        var currentForm = kony.application.getCurrentForm();
        if (currentForm) {
            currentForm.flxHeader.zIndex = 3; // Update zIndex of flex in form
        }
    }
});
define("com/hcl/voltmx/Alwataneya/Header2Copy2/Header2Copy2Controller", ["com/hcl/voltmx/Alwataneya/Header2Copy2/userHeader2Copy2Controller", "com/hcl/voltmx/Alwataneya/Header2Copy2/Header2Copy2ControllerActions"], function() {
    var controller = require("com/hcl/voltmx/Alwataneya/Header2Copy2/userHeader2Copy2Controller");
    var actions = require("com/hcl/voltmx/Alwataneya/Header2Copy2/Header2Copy2ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

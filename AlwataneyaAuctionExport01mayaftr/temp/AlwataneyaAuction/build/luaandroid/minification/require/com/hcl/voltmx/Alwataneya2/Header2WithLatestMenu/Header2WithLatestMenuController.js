define("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenu/userHeader2WithLatestMenuController", function() {
    return {
        isPlaceholderTimerActive: false, // Flag to track timer status
        updatePlaceholder: function() {
            var self = this; // Preserve `this` context
            // Prevent multiple timers by stopping the existing one
            if (self.isPlaceholderTimerActive) {
                voltmx.timer.cancel("placeholderTimer");
                self.isPlaceholderTimerActive = false;
            }
            // Define the array of placeholder texts
            self.placeholders = ["Brand", "Model", "Category", "Vehicle Type", "Body Type"];
            self.index = 0;
            self.view.tbxSearchByCategory.placeholder = "Search by " + self.placeholders[self.index];
            // Function to update placeholder text
            function updatePlaceholdercall() {
                self.index = (self.index + 1) % self.placeholders.length;
                self.view.tbxSearchByCategory.placeholder = "Search by " + self.placeholders[self.index];
            }
            // Start a timer to change placeholder every second
            voltmx.timer.schedule("placeholderTimer", updatePlaceholdercall, 1, true);
            // Mark timer as active
            self.isPlaceholderTimerActive = true;
        },
        stopPlaceholderTimer: function() {
            var self = this;
            // Stop the timer if it's running
            if (self.isPlaceholderTimerActive) {
                voltmx.timer.cancel("placeholderTimer");
                self.isPlaceholderTimerActive = false;
            }
        }
    };
});
define("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenu/Header2WithLatestMenuControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_fb97040d84c040fdbfbc60397ce47db1: function AS_FlexContainer_fb97040d84c040fdbfbc60397ce47db1(eventobject) {
        var self = this;
    },
    AS_Button_he20778206274fd78493d012fd9b7523: function AS_Button_he20778206274fd78493d012fd9b7523(eventobject) {
        var self = this;
        this.view.flxOpacity.setVisibility(false);
        this.view.flxOpacity.zIndex = "1";
        this.view.flxContactPopup.setVisibility(false);
    },
    AS_Button_eddae78cbf4d4748b88675960b05e563: function AS_Button_eddae78cbf4d4748b88675960b05e563(eventobject) {
        var self = this;

        function INVOKE_SERVICE_d8912afa0a7349c3aa05e10b6519b0fa_Callback(status, Contact_us) {
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
        salesforce_contact_us$Contact_us = mfintegrationsecureinvokerasync(Contact_us_inputparam, "salesforce_contact_us", "Contact_us", INVOKE_SERVICE_d8912afa0a7349c3aa05e10b6519b0fa_Callback);
    },
    AS_FlexContainer_c90e5df2ac734d33a6f04daeeadc837d: function AS_FlexContainer_c90e5df2ac734d33a6f04daeeadc837d(eventobject) {
        var self = this;
        this.view.flxOpacity.setVisibility(true);
        this.view.flxOpacity.zIndex = "6";
        this.view.flxContactPopup.setVisibility(true);
    },
    AS_FlexContainer_d964331b7b9c4dfaa19cdc4cbcf2aea6: function AS_FlexContainer_d964331b7b9c4dfaa19cdc4cbcf2aea6(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenMyAccount");
        x.navigate();
    },
    AS_FlexContainer_f0d6acf4fcf044c6ae3a5bf0f3cdfb72: function AS_FlexContainer_f0d6acf4fcf044c6ae3a5bf0f3cdfb72(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenBidStatus");
        x.navigate();
    },
    AS_FlexContainer_dcb8069ad13a4e269cf6593e337106a0: function AS_FlexContainer_dcb8069ad13a4e269cf6593e337106a0(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenAuctions");
        x.navigate();
    },
    AS_FlexContainer_aabd68aae39f43e4b721a2f4b53949c6: function AS_FlexContainer_aabd68aae39f43e4b721a2f4b53949c6(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenHelp");
        x.navigate();
    },
    AS_FlexContainer_c3190839c869405f8fd480dd90f3f5f3: function AS_FlexContainer_c3190839c869405f8fd480dd90f3f5f3(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenSettings");
        x.navigate();
    },
    AS_FlexContainer_fb881cbd70824895adf377e621a838fb: function AS_FlexContainer_fb881cbd70824895adf377e621a838fb(eventobject) {
        var self = this;
        this.view.flxMenuBarMain.setVisibility(true);
        var currentForm = voltmx.application.getCurrentForm();
        if (currentForm) {
            currentForm.flxHeader.zIndex = 6; // Update zIndex of flex in form
        }
    }
});
define("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenu/Header2WithLatestMenuController", ["com/hcl/voltmx/Alwataneya2/Header2WithLatestMenu/userHeader2WithLatestMenuController", "com/hcl/voltmx/Alwataneya2/Header2WithLatestMenu/Header2WithLatestMenuControllerActions"], function() {
    var controller = require("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenu/userHeader2WithLatestMenuController");
    var actions = require("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenu/Header2WithLatestMenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

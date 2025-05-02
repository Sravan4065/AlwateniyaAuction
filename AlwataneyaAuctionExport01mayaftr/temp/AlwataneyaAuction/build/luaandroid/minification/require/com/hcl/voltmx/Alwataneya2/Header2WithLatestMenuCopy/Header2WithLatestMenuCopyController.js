define("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy/userHeader2WithLatestMenuCopyController", function() {
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
define("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy/Header2WithLatestMenuCopyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_hd1bd43fcfe642e48862a10f3a4048d9: function AS_FlexContainer_hd1bd43fcfe642e48862a10f3a4048d9(eventobject) {
        var self = this;
    },
    AS_Button_a77cd81191774517b632829568c238d6: function AS_Button_a77cd81191774517b632829568c238d6(eventobject) {
        var self = this;
        this.view.flxOpacity.setVisibility(false);
        this.view.flxOpacity.zIndex = "1";
        this.view.flxContactPopup.setVisibility(false);
    },
    AS_Button_i0fe6fcff22b4d72b82b285f9a65259d: function AS_Button_i0fe6fcff22b4d72b82b285f9a65259d(eventobject) {
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
        Contact_us_inputparam["subject"] = self.view.tbAreaMessage.text;
        Contact_us_inputparam["contactMethod"] = self.view.tbAreaMessage.text;
        Contact_us_inputparam["serviceType"] = self.view.tbAreaMessage.text;
        Contact_us_inputparam["email"] = self.view.tbxEmail.text;
        Contact_us_inputparam["mobile"] = self.view.tbxPhone.text;
        Contact_us_inputparam["lastName"] = self.view.tbxLastname.text;
        Contact_us_inputparam["description"] = self.view.tbAreaMessage.text;
        var Contact_us_httpheaders = {
            "Authorization": "Basic QXVjdGlvbjpBdWN0aW9uMTIz"
        };
        Contact_us_inputparam["httpheaders"] = Contact_us_httpheaders;
        var Contact_us_httpconfigs = {};
        Contact_us_inputparam["httpconfig"] = Contact_us_httpconfigs;
        salesforce_contact_us$Contact_us = mfintegrationsecureinvokerasync(Contact_us_inputparam, "salesforce_contact_us", "Contact_us", INVOKE_SERVICE_d8912afa0a7349c3aa05e10b6519b0fa_Callback);
    },
    AS_FlexContainer_c6e9d049aa1f49d7972cce3dee9831d9: function AS_FlexContainer_c6e9d049aa1f49d7972cce3dee9831d9(eventobject) {
        var self = this;
        this.view.flxOpacity.setVisibility(true);
        this.view.flxOpacity.zIndex = "6";
        this.view.flxContactPopup.setVisibility(true);
    },
    AS_FlexContainer_je0019c3382b48ef8d12e3dbff3ec94b: function AS_FlexContainer_je0019c3382b48ef8d12e3dbff3ec94b(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenMyAccount");
        x.navigate();
    },
    AS_FlexContainer_ef9248baf349452aa28ab2d6fa8ce2ed: function AS_FlexContainer_ef9248baf349452aa28ab2d6fa8ce2ed(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenBidStatus");
        x.navigate();
    },
    AS_FlexContainer_de96ad8f501a4207b46bbdc6fbc1ffad: function AS_FlexContainer_de96ad8f501a4207b46bbdc6fbc1ffad(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenAuctions");
        x.navigate();
    },
    AS_FlexContainer_af4537bb8677494c9c37e4dc3202c194: function AS_FlexContainer_af4537bb8677494c9c37e4dc3202c194(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenHelp");
        x.navigate();
    },
    AS_FlexContainer_feab14e08ea74380bd9bf47417227c7d: function AS_FlexContainer_feab14e08ea74380bd9bf47417227c7d(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenSettings");
        x.navigate();
    },
    AS_FlexContainer_aa690d9ea8ab4f8ba8d1ba250596fe10: function AS_FlexContainer_aa690d9ea8ab4f8ba8d1ba250596fe10(eventobject) {
        var self = this;
        this.view.flxMenuBarMain.setVisibility(true);
        var currentForm = voltmx.application.getCurrentForm();
        if (currentForm) {
            currentForm.flxHeader.zIndex = 6; // Update zIndex of flex in form
        }
    }
});
define("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy/Header2WithLatestMenuCopyController", ["com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy/userHeader2WithLatestMenuCopyController", "com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy/Header2WithLatestMenuCopyControllerActions"], function() {
    var controller = require("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy/userHeader2WithLatestMenuCopyController");
    var actions = require("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy/Header2WithLatestMenuCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

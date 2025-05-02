define("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy1/userHeader2WithLatestMenuCopy1Controller", function() {
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
define("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy1/Header2WithLatestMenuCopy1ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_g9aebe1eeb8b4d2e81b10a79838f6f06: function AS_FlexContainer_g9aebe1eeb8b4d2e81b10a79838f6f06(eventobject) {
        var self = this;
    },
    AS_Button_h70b64ee19bc49cfbe070628dff32fa6: function AS_Button_h70b64ee19bc49cfbe070628dff32fa6(eventobject) {
        var self = this;
        this.view.flxOpacity.setVisibility(false);
        this.view.flxOpacity.zIndex = "1";
        this.view.flxContactPopup.setVisibility(false);
    },
    AS_Button_e5650d4ba44141c898090e4329ec569d: function AS_Button_e5650d4ba44141c898090e4329ec569d(eventobject) {
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
    AS_FlexContainer_i5f33cd0a8bb4037a35b6f706e9b5610: function AS_FlexContainer_i5f33cd0a8bb4037a35b6f706e9b5610(eventobject) {
        var self = this;
        this.view.flxOpacity.setVisibility(true);
        this.view.flxOpacity.zIndex = "6";
        this.view.flxContactPopup.setVisibility(true);
    },
    AS_FlexContainer_b1dfc98107534a9c80664c23358117f3: function AS_FlexContainer_b1dfc98107534a9c80664c23358117f3(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenMyAccount");
        x.navigate();
    },
    AS_FlexContainer_d843585cd682483bbd308d9a2c6f90c1: function AS_FlexContainer_d843585cd682483bbd308d9a2c6f90c1(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenBidStatus");
        x.navigate();
    },
    AS_FlexContainer_c094a517715f42fca78c23eefae9123f: function AS_FlexContainer_c094a517715f42fca78c23eefae9123f(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenAuctions");
        x.navigate();
    },
    AS_FlexContainer_a065ccfa09304b868e9223e9f47e8592: function AS_FlexContainer_a065ccfa09304b868e9223e9f47e8592(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenHelp");
        x.navigate();
    },
    AS_FlexContainer_bd1a3df5ed7541a5a160fed15183803d: function AS_FlexContainer_bd1a3df5ed7541a5a160fed15183803d(eventobject) {
        var self = this;
        var x = new voltmx.mvc.Navigation("frmOpenSettings");
        x.navigate();
    },
    AS_FlexContainer_i33dad2ed4724ca5ae260997c3dc04fc: function AS_FlexContainer_i33dad2ed4724ca5ae260997c3dc04fc(eventobject) {
        var self = this;
        this.view.flxMenuBarMain.setVisibility(true);
        var currentForm = voltmx.application.getCurrentForm();
        if (currentForm) {
            currentForm.flxHeader.zIndex = 6; // Update zIndex of flex in form
        }
    }
});
define("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy1/Header2WithLatestMenuCopy1Controller", ["com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy1/userHeader2WithLatestMenuCopy1Controller", "com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy1/Header2WithLatestMenuCopy1ControllerActions"], function() {
    var controller = require("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy1/userHeader2WithLatestMenuCopy1Controller");
    var actions = require("com/hcl/voltmx/Alwataneya2/Header2WithLatestMenuCopy1/Header2WithLatestMenuCopy1ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

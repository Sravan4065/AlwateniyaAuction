define("userfrmGovtIdsController", {
    //Type your controller code here 
    onNavigate: function() {
        this.view.flxBackNav.onClick = this.flxBackNavOnClickAction;
        // Capture the data passed during navigation and store it temporarily
        //         if (data && data.base64) {
        //             this.base64Data = data.base64;  // Store base64 data in a local variable
        //         }
        this.view.preShow = this.onPreShow;
    },
    flxBackNavOnClickAction: function() {
        if (this.view.flxShowUploadedImg.isVisible) {
            this.view.flxShowUploadedImg.setVisibility(false);
            this.view.flxSegment.setVisibility(true);
        } else {
            var ntf = new voltmx.mvc.Navigation("frmMyDocuments");
            ntf.navigate();
        }
    },
    onPreShow: function() {
        this.toggleFooterIcons();
        this.createDynamicGovtSeg();
        this.getBase64Data();
    },
    //   getBase64Data: function(){
    //   // Check if base64 data exists and set the image source
    // //       var self = this;
    //     if ((this.getPreviousForm() === "frmMyDocuments") && this.navigationContext && this.navigationContext._meta_ && (this.navigationContext._meta_.widgetId === "btnSubmit") && (this.navigationContext._meta_.eventName === "onClick")) {
    // this.view.imgUploaded.base64 = this.navigationContext.variable_base64;
    //     }
    // //         if (this.base64Data) {
    // //            this.view.imgUploaded.src = "data:image/png;base64," + this.base64Data;
    // //         }
    //   },
    getBase64Data: function() {
        if (this.getPreviousForm() === "frmMyDocuments" && this.navigationContext && this.navigationContext._meta_ && this.navigationContext._meta_.widgetId === "btnSubmit" && this.navigationContext._meta_.eventName === "onClick") {
            this.view.imgUploaded.base64 = this.navigationContext.variable_base64;
            //     this.view.flxShowUploadedImg.setVisibility(true);
            //     this.view.flxSegment.setVisibility(false);
        }
    },
    toggleFooterIcons: function() {
        this.view.Footer2.flxHL1.setVisibility(false);
        this.view.Footer2.flxHL2.setVisibility(false);
        this.view.Footer2.flxHL3.setVisibility(false);
        this.view.Footer2.flxHL4.setVisibility(false);
        this.view.Footer2.flxHL5.setVisibility(false);
        this.view.Footer2.imgHome.src = "homefooter.png";
        this.view.Footer2.lblHome.skin = "sknlblCPBoldCapt181818Font100";
        this.view.Footer2.imgMegaPhone.src = "auctionsfooter.png";
        this.view.Footer2.lblAuctions.skin = "sknlblCPBoldCapt181818Font100";
        this.view.Footer2.imgMyBids.src = "mybidsfooter.png";
        this.view.Footer2.lblMyBids.skin = "sknlblCPBoldCapt181818Font100";
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
    onEyeOpenClick: function() {
        //     alert("clikced eye open!!");
        this.view.flxSegment.setVisibility(false);
        this.view.flxShowUploadedImg.setVisibility(true);
    },
    createDynamicGovtSeg: function() {
        this.view.segGovtIds.widgetDataMap = {
            "lblIdName": "lblIdName",
            "btnStatus": "btnStatus",
            "imgUpload": "imgUpload",
            "imgEyeOpen": "imgEyeOpen",
            "flxUpload": "flxUpload",
            "flxEyeOpen": "flxEyeOpen"
        };
        // Dummy Data for Segment (Modify as Needed)
        var data = [{
            "imgUpload": "material_symbols_light_upload.png",
            "imgEyeOpen": "lsicon_view_outline.png",
            "lblIdName": "Passport",
            "btnStatus": {
                "text": "Under Review",
                "skin": "sknbtnBG61B35CDubaiRegFont45pxRoundedBorder1px",
            },
            "flxEyeOpen": {
                "onClick": this.onEyeOpenClick.bind(this)
            },
        }, {
            "imgUpload": "material_symbols_light_upload.png",
            "imgEyeOpen": "lsicon_view_outline.png",
            "lblIdName": "UAE Pass",
            "btnStatus": {
                "text": "Verified",
                "skin": "sknbtnBGd32437Fontffffff45pxRoundedBorder1px"
            },
            "flxEyeOpen": {},
        }, {
            "imgUpload": "material_symbols_light_upload.png",
            "imgEyeOpen": "lsicon_view_outline.png",
            "lblIdName": "Driving License",
            "btnStatus": {
                "text": "Not Uploaded",
                "skin": "sknbtnBG767676Fontffffff45pxRoundedBorder1px"
            },
            "flxEyeOpen": {
                "onClick": {}
            },
        }];
        // Set data to the segment
        this.view.segGovtIds.setData(data);
    }
});
define("frmGovtIdsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmGovtIdsController", ["userfrmGovtIdsController", "frmGovtIdsControllerActions"], function() {
    var controller = require("userfrmGovtIdsController");
    var controllerActions = ["frmGovtIdsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

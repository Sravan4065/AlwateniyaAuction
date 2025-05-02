define({
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("com.hcl.alwataneya.Calender", {
            "viewName": "Calender",
            "controllerName": "CalenderController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.alwataneya",
            "classname": "Calender",
            "name": "com.hcl.alwataneya.Calender"
        });
        voltmx.mvc.registry.add("com.hcl.alwataneya.CalenderCopy", {
            "viewName": "CalenderCopy",
            "controllerName": "CalenderCopyController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.alwataneya",
            "classname": "CalenderCopy",
            "name": "com.hcl.alwataneya.CalenderCopy"
        });
        voltmx.mvc.registry.add("com.hcl.alwataneya.CalenderCopy1", {
            "viewName": "CalenderCopy1",
            "controllerName": "CalenderCopy1Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.alwataneya",
            "classname": "CalenderCopy1",
            "name": "com.hcl.alwataneya.CalenderCopy1"
        });
        voltmx.mvc.registry.add("com.hcl.Alwataneya2.headernewfigma.flxHeaderNew", {
            "viewName": "flxHeaderNew",
            "controllerName": "flxHeaderNewController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.Alwataneya2.headernewfigma",
            "classname": "flxHeaderNew",
            "name": "com.hcl.Alwataneya2.headernewfigma.flxHeaderNew"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.Alwataneya.Header2", {
            "viewName": "Header2",
            "controllerName": "Header2Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.Alwataneya",
            "classname": "Header2",
            "name": "com.hcl.voltmx.Alwataneya.Header2"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.Alwataneya.Header2Copy", {
            "viewName": "Header2Copy",
            "controllerName": "Header2CopyController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.Alwataneya",
            "classname": "Header2Copy",
            "name": "com.hcl.voltmx.Alwataneya.Header2Copy"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.Alwataneya.Header2Copy1", {
            "viewName": "Header2Copy1",
            "controllerName": "Header2Copy1Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.Alwataneya",
            "classname": "Header2Copy1",
            "name": "com.hcl.voltmx.Alwataneya.Header2Copy1"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.Alwataneya.Header2Copy1Copy", {
            "viewName": "Header2Copy1Copy",
            "controllerName": "Header2Copy1CopyController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.Alwataneya",
            "classname": "Header2Copy1Copy",
            "name": "com.hcl.voltmx.Alwataneya.Header2Copy1Copy"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.Alwataneya.Header2Copy1Copy1", {
            "viewName": "Header2Copy1Copy1",
            "controllerName": "Header2Copy1Copy1Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.Alwataneya",
            "classname": "Header2Copy1Copy1",
            "name": "com.hcl.voltmx.Alwataneya.Header2Copy1Copy1"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.Alwataneya.Header2Copy2", {
            "viewName": "Header2Copy2",
            "controllerName": "Header2Copy2Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.Alwataneya",
            "classname": "Header2Copy2",
            "name": "com.hcl.voltmx.Alwataneya.Header2Copy2"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.Alwataneya.Header2Copy3", {
            "viewName": "Header2Copy3",
            "controllerName": "Header2Copy3Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.Alwataneya",
            "classname": "Header2Copy3",
            "name": "com.hcl.voltmx.Alwataneya.Header2Copy3"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.alwataneya1.Footer2", {
            "viewName": "Footer2",
            "controllerName": "Footer2Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.alwataneya1",
            "classname": "Footer2",
            "name": "com.hcl.voltmx.alwataneya1.Footer2"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.alwataneya1.Footer2Copy", {
            "viewName": "Footer2Copy",
            "controllerName": "Footer2CopyController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.alwataneya1",
            "classname": "Footer2Copy",
            "name": "com.hcl.voltmx.alwataneya1.Footer2Copy"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.alwataneya1.Footer2Copy1", {
            "viewName": "Footer2Copy1",
            "controllerName": "Footer2Copy1Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.alwataneya1",
            "classname": "Footer2Copy1",
            "name": "com.hcl.voltmx.alwataneya1.Footer2Copy1"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.alwataneya1.HeaderRegister", {
            "viewName": "HeaderRegister",
            "controllerName": "HeaderRegisterController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.alwataneya1",
            "classname": "HeaderRegister",
            "name": "com.hcl.voltmx.alwataneya1.HeaderRegister"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.alwataneya1.HeaderRegisterCopy", {
            "viewName": "HeaderRegisterCopy",
            "controllerName": "HeaderRegisterCopyController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.alwataneya1",
            "classname": "HeaderRegisterCopy",
            "name": "com.hcl.voltmx.alwataneya1.HeaderRegisterCopy"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.alwataneya1.HeaderRegisterCopy1", {
            "viewName": "HeaderRegisterCopy1",
            "controllerName": "HeaderRegisterCopy1Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.alwataneya1",
            "classname": "HeaderRegisterCopy1",
            "name": "com.hcl.voltmx.alwataneya1.HeaderRegisterCopy1"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.alwataneya1.HeaderWithProfile", {
            "viewName": "HeaderWithProfile",
            "controllerName": "HeaderWithProfileController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.alwataneya1",
            "classname": "HeaderWithProfile",
            "name": "com.hcl.voltmx.alwataneya1.HeaderWithProfile"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.alwataneya1.HeaderWithProfileCopy", {
            "viewName": "HeaderWithProfileCopy",
            "controllerName": "HeaderWithProfileCopyController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.alwataneya1",
            "classname": "HeaderWithProfileCopy",
            "name": "com.hcl.voltmx.alwataneya1.HeaderWithProfileCopy"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.Alwataneya2.Header2WithLatestMenu", {
            "viewName": "Header2WithLatestMenu",
            "controllerName": "Header2WithLatestMenuController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.Alwataneya2",
            "classname": "Header2WithLatestMenu",
            "name": "com.hcl.voltmx.Alwataneya2.Header2WithLatestMenu"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.Alwataneya2.Header2WithLatestMenuCopy", {
            "viewName": "Header2WithLatestMenuCopy",
            "controllerName": "Header2WithLatestMenuCopyController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.Alwataneya2",
            "classname": "Header2WithLatestMenuCopy",
            "name": "com.hcl.voltmx.Alwataneya2.Header2WithLatestMenuCopy"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.Alwataneya2.Header2WithLatestMenuCopy1", {
            "viewName": "Header2WithLatestMenuCopy1",
            "controllerName": "Header2WithLatestMenuCopy1Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.Alwataneya2",
            "classname": "Header2WithLatestMenuCopy1",
            "name": "com.hcl.voltmx.Alwataneya2.Header2WithLatestMenuCopy1"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.Whatsapp.flxWhatsappcomponent", {
            "viewName": "flxWhatsappcomponent",
            "controllerName": "flxWhatsappcomponentController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.Whatsapp",
            "classname": "flxWhatsappcomponent",
            "name": "com.hcl.voltmx.Whatsapp.flxWhatsappcomponent"
        });
        voltmx.mvc.registry.add("com.voltmxmp.browsefile", {
            "viewName": "browsefile",
            "controllerName": "browsefileController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.voltmxmp",
            "classname": "browsefile",
            "name": "com.voltmxmp.browsefile"
        });
        voltmx.mvc.registry.add("com.voltmxmp.browsefileCopy", {
            "viewName": "browsefileCopy",
            "controllerName": "browsefileCopyController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.voltmxmp",
            "classname": "browsefileCopy",
            "name": "com.voltmxmp.browsefileCopy"
        });
        voltmx.mvc.registry.add("com.voltmxmp.browsefileCopy1", {
            "viewName": "browsefileCopy1",
            "controllerName": "browsefileCopy1Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.voltmxmp",
            "classname": "browsefileCopy1",
            "name": "com.voltmxmp.browsefileCopy1"
        });
        voltmx.mvc.registry.add("com.hcl.voltmx.alwataneya1.HeaderRegister1", {
            "viewName": "HeaderRegister1",
            "controllerName": "HeaderRegister1Controller"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.voltmx.alwataneya1",
            "classname": "HeaderRegister1",
            "name": "com.hcl.voltmx.alwataneya1.HeaderRegister1"
        });
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController"
        });
        voltmx.mvc.registry.add("flxMainbrnachlist", {
            "viewName": "flxMainbrnachlist",
            "controllerName": "flxMainbrnachlistController"
        });
        voltmx.mvc.registry.add("flxMain", {
            "viewName": "flxMain",
            "controllerName": "flxMainController"
        });
        voltmx.mvc.registry.add("flxKeyslis", {
            "viewName": "flxKeyslis",
            "controllerName": "flxKeyslisController"
        });
        voltmx.mvc.registry.add("flxMainSubcatageory", {
            "viewName": "flxMainSubcatageory",
            "controllerName": "flxMainSubcatageoryController"
        });
        voltmx.mvc.registry.add("flxwinningbids", {
            "viewName": "flxwinningbids",
            "controllerName": "flxwinningbidsController"
        });
        voltmx.mvc.registry.add("flxBidlist", {
            "viewName": "flxBidlist",
            "controllerName": "flxBidlistController"
        });
        voltmx.mvc.registry.add("flxlostbid", {
            "viewName": "flxlostbid",
            "controllerName": "flxlostbidController"
        });
        voltmx.mvc.registry.add("flxSegNotification", {
            "viewName": "flxSegNotification",
            "controllerName": "flxSegNotificationController"
        });
        voltmx.mvc.registry.add("flxCurrentAuctions", {
            "viewName": "flxCurrentAuctions",
            "controllerName": "flxCurrentAuctionsController"
        });
        voltmx.mvc.registry.add("flxDashboardCarousel", {
            "viewName": "flxDashboardCarousel",
            "controllerName": "flxDashboardCarouselController"
        });
        voltmx.mvc.registry.add("flxDashboardCarouselNew", {
            "viewName": "flxDashboardCarouselNew",
            "controllerName": "flxDashboardCarouselNewController"
        });
        voltmx.mvc.registry.add("flxFilterSegRow", {
            "viewName": "flxFilterSegRow",
            "controllerName": "flxFilterSegRowController"
        });
        voltmx.mvc.registry.add("flxMenuBarItems", {
            "viewName": "flxMenuBarItems",
            "controllerName": "flxMenuBarItemsController"
        });
        voltmx.mvc.registry.add("flxMyVehicles", {
            "viewName": "flxMyVehicles",
            "controllerName": "flxMyVehiclesController"
        });
        voltmx.mvc.registry.add("flxSegRow1", {
            "viewName": "flxSegRow1",
            "controllerName": "flxSegRow1Controller"
        });
        voltmx.mvc.registry.add("flxSegRow12", {
            "viewName": "flxSegRow12",
            "controllerName": "flxSegRow12Controller"
        });
        voltmx.mvc.registry.add("flxSegRowCars", {
            "viewName": "flxSegRowCars",
            "controllerName": "flxSegRowCarsController"
        });
        voltmx.mvc.registry.add("segRowDocs", {
            "viewName": "segRowDocs",
            "controllerName": "segRowDocsController"
        });
        voltmx.mvc.registry.add("segRowGovtIds", {
            "viewName": "segRowGovtIds",
            "controllerName": "segRowGovtIdsController"
        });
        voltmx.mvc.registry.add("flxSegRowOptions", {
            "viewName": "flxSegRowOptions",
            "controllerName": "flxSegRowOptionsController"
        });
        voltmx.mvc.registry.add("flxRowData", {
            "viewName": "flxRowData",
            "controllerName": "flxRowDataController"
        });
        voltmx.mvc.registry.add("segRowTypes", {
            "viewName": "segRowTypes",
            "controllerName": "segRowTypesController"
        });
        voltmx.mvc.registry.add("flxSegRowYearMake", {
            "viewName": "flxSegRowYearMake",
            "controllerName": "flxSegRowYearMakeController"
        });
        voltmx.mvc.registry.add("Form1", {
            "viewName": "Form1",
            "controllerName": "Form1Controller"
        });
        voltmx.mvc.registry.add("frmAddRequest", {
            "viewName": "frmAddRequest",
            "controllerName": "frmAddRequestController"
        });
        voltmx.mvc.registry.add("frmAllAuctionsList", {
            "viewName": "frmAllAuctionsList",
            "controllerName": "frmAllAuctionsListController"
        });
        voltmx.mvc.registry.add("frmAuctionCalendar", {
            "viewName": "frmAuctionCalendar",
            "controllerName": "frmAuctionCalendarController"
        });
        voltmx.mvc.registry.add("frmAuctionCategories", {
            "viewName": "frmAuctionCategories",
            "controllerName": "frmAuctionCategoriesController"
        });
        voltmx.mvc.registry.add("frmCominSoon", {
            "viewName": "frmCominSoon",
            "controllerName": "frmCominSoonController"
        });
        voltmx.mvc.registry.add("frmCompleteAutoBid", {
            "viewName": "frmCompleteAutoBid",
            "controllerName": "frmCompleteAutoBidController"
        });
        voltmx.mvc.registry.add("frmDashBoard", {
            "viewName": "frmDashBoard",
            "controllerName": "frmDashBoardController"
        });
        voltmx.mvc.registry.add("frmDetails", {
            "viewName": "frmDetails",
            "controllerName": "frmDetailsController"
        });
        voltmx.mvc.registry.add("frmFilter", {
            "viewName": "frmFilter",
            "controllerName": "frmFilterController"
        });
        voltmx.mvc.registry.add("frmGovtIds", {
            "viewName": "frmGovtIds",
            "controllerName": "frmGovtIdsController"
        });
        voltmx.mvc.registry.add("frmLandingPage", {
            "viewName": "frmLandingPage",
            "controllerName": "frmLandingPageController"
        });
        voltmx.mvc.registry.add("frmLogin1", {
            "viewName": "frmLogin1",
            "controllerName": "frmLogin1Controller"
        });
        voltmx.mvc.registry.add("frmLoginScreen", {
            "viewName": "frmLoginScreen",
            "controllerName": "frmLoginScreenController"
        });
        voltmx.mvc.registry.add("frmMyBidsPage", {
            "viewName": "frmMyBidsPage",
            "controllerName": "frmMyBidsPageController"
        });
        voltmx.mvc.registry.add("frmMyDocuments", {
            "viewName": "frmMyDocuments",
            "controllerName": "frmMyDocumentsController"
        });
        voltmx.mvc.registry.add("frmMyVehicles", {
            "viewName": "frmMyVehicles",
            "controllerName": "frmMyVehiclesController"
        });
        voltmx.mvc.registry.add("frmNotifications", {
            "viewName": "frmNotifications",
            "controllerName": "frmNotificationsController"
        });
        voltmx.mvc.registry.add("frmOnlineAuction", {
            "viewName": "frmOnlineAuction",
            "controllerName": "frmOnlineAuctionController"
        });
        voltmx.mvc.registry.add("frmOpenAuctions", {
            "viewName": "frmOpenAuctions",
            "controllerName": "frmOpenAuctionsController"
        });
        voltmx.mvc.registry.add("frmOpenBidStatus", {
            "viewName": "frmOpenBidStatus",
            "controllerName": "frmOpenBidStatusController"
        });
        voltmx.mvc.registry.add("frmOpenHelp", {
            "viewName": "frmOpenHelp",
            "controllerName": "frmOpenHelpController"
        });
        voltmx.mvc.registry.add("frmOpenMyAccount", {
            "viewName": "frmOpenMyAccount",
            "controllerName": "frmOpenMyAccountController"
        });
        voltmx.mvc.registry.add("frmOpenSettings", {
            "viewName": "frmOpenSettings",
            "controllerName": "frmOpenSettingsController"
        });
        voltmx.mvc.registry.add("frmPaymentMethod", {
            "viewName": "frmPaymentMethod",
            "controllerName": "frmPaymentMethodController"
        });
        voltmx.mvc.registry.add("frmPaymentMethod2", {
            "viewName": "frmPaymentMethod2",
            "controllerName": "frmPaymentMethod2Controller"
        });
        voltmx.mvc.registry.add("frmPaymentProcess", {
            "viewName": "frmPaymentProcess",
            "controllerName": "frmPaymentProcessController"
        });
        voltmx.mvc.registry.add("frmProfile", {
            "viewName": "frmProfile",
            "controllerName": "frmProfileController"
        });
        voltmx.mvc.registry.add("frmRegister1", {
            "viewName": "frmRegister1",
            "controllerName": "frmRegister1Controller"
        });
        voltmx.mvc.registry.add("frmRegister2", {
            "viewName": "frmRegister2",
            "controllerName": "frmRegister2Controller"
        });
        voltmx.mvc.registry.add("frmScreen2Login", {
            "viewName": "frmScreen2Login",
            "controllerName": "frmScreen2LoginController"
        });
        voltmx.mvc.registry.add("frmScreen3OTP1", {
            "viewName": "frmScreen3OTP1",
            "controllerName": "frmScreen3OTP1Controller"
        });
        voltmx.mvc.registry.add("frmScreen4SignUp", {
            "viewName": "frmScreen4SignUp",
            "controllerName": "frmScreen4SignUpController"
        });
        voltmx.mvc.registry.add("frmSellCarList12", {
            "viewName": "frmSellCarList12",
            "controllerName": "frmSellCarList12Controller"
        });
        voltmx.mvc.registry.add("frmTest", {
            "viewName": "frmTest",
            "controllerName": "frmTestController"
        });
        voltmx.mvc.registry.add("frmUploadKYC", {
            "viewName": "frmUploadKYC",
            "controllerName": "frmUploadKYCController"
        });
        voltmx.mvc.registry.add("frmVehicleInspection", {
            "viewName": "frmVehicleInspection",
            "controllerName": "frmVehicleInspectionController"
        });
        voltmx.mvc.registry.add("Identity", {
            "viewName": "Identity",
            "controllerName": "IdentityController"
        });
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("frmDashBoard").navigate();
    }
});
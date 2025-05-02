//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "AlwataneyaAuc",
    appName: "AlwataneyaAuction",
    appVersion: "1.0.0",
    isturlbase: "https://dev-hcltx.et.ae/services",
    isDebug: true,
    isMFApp: true,
    appKey: "ce32e49ba29297308ab46949e52a985d",
    appSecret: "e38660d2dc31b4413b4c5c0c35fcfcae",
    serviceUrl: "https://dev-hcltx.et.ae/authService/100000002/appconfig",
    svcDoc: {
        "identity_meta": {
            "CopyDevAzureB2C": {
                "success_url": "allow_any"
            },
            "DevAzureB2C": {
                "success_url": "allow_any"
            },
            "CopyCopyDevAzureB2C": {
                "success_url": "allow_any"
            },
            "CustomAzureB2C": {
                "success_url": "allow_any"
            }
        },
        "app_version": "1.0",
        "baseId": "fae48f70-b65d-4b19-8ad4-3568f77ef4b3",
        "app_default_version": "1.0",
        "login": [{
            "provider_type": "oauth2",
            "enable_identity_pkce": true,
            "alias": "CopyCopyDevAzureB2C",
            "type": "oauth2",
            "prov": "CopyCopyDevAzureB2C",
            "url": "https://dev-hcltx.et.ae/authService/100000002"
        }, {
            "provider_type": "oauth2",
            "enable_identity_pkce": true,
            "alias": "CustomAzureB2C",
            "type": "oauth2",
            "prov": "CustomAzureB2C",
            "url": "https://dev-hcltx.et.ae/authService/100000002"
        }, {
            "provider_type": "oauth2",
            "enable_identity_pkce": true,
            "alias": "DevAzureB2C",
            "type": "oauth2",
            "prov": "DevAzureB2C",
            "url": "https://dev-hcltx.et.ae/authService/100000002"
        }, {
            "provider_type": "oauth2",
            "enable_identity_pkce": true,
            "alias": "CopyDevAzureB2C",
            "type": "oauth2",
            "prov": "CopyDevAzureB2C",
            "url": "https://dev-hcltx.et.ae/authService/100000002"
        }],
        "services_meta": {
            "ms_config": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/ms_config"
            },
            "fry_int_common": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_common"
            },
            "fry_int_user": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_user"
            },
            "ms_fleet": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/ms_fleet"
            },
            "add_a_dam_item": {
                "type": "integsvc",
                "version": "1.0",
                "url": "n/a"
            },
            "fry_int_buyer": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_buyer"
            },
            "fry_int_auctions": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_auctions"
            },
            "test1_N_R": {
                "type": "integsvc",
                "version": "1.0",
                "url": "n/a"
            },
            "ms_management": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/ms_management"
            },
            "fry_int_post_auction": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_post_auction"
            },
            "fry_int_fleet": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_fleet"
            },
            "ms_admin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/ms_admin"
            },
            "ms_auctions": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/ms_auctions"
            },
            "fry_int_admin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_admin"
            },
            "test_N_R": {
                "type": "integsvc",
                "version": "1.0",
                "url": "n/a"
            },
            "fry_int_management": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_management"
            },
            "fry_int_accountant": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_accountant"
            },
            "add_items_dam": {
                "type": "integsvc",
                "version": "1.0",
                "url": "n/a"
            },
            "SQLServerLocal": {
                "offline": false,
                "metadata_url": "https://dev-hcltx.et.ae/services/metadata/v1/SQLServerLocal",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/data/v1/SQLServerLocal"
            },
            "ms_user_token": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/ms_user_token"
            },
            "fry_int_seller": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_seller"
            },
            "fry_wf": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_wf"
            },
            "fry_int_operation": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_operation"
            },
            "proxy": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/proxy"
            },
            "ms_user": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/ms_user"
            },
            "fry_int_logs": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_logs"
            },
            "fry_collection": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_collection"
            },
            "add-fleet-record": {
                "type": "integsvc",
                "version": "1.0",
                "url": "n/a"
            },
            "ms_post_auction": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/ms_post_auction"
            },
            "fry_int_asset": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/fry_int_asset"
            },
            "auction-bidding": {
                "type": "integsvc",
                "version": "1.0",
                "url": "n/a"
            },
            "ms_test": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/ms_test"
            },
            "ms_user_reg": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://dev-hcltx.et.ae/services/ms_user_reg"
            }
        },
        "selflink": "https://dev-hcltx.et.ae/authService/100000002/appconfig",
        "integsvc": {
            "ms_config": "https://dev-hcltx.et.ae/services/ms_config",
            "fry_int_common": "https://dev-hcltx.et.ae/services/fry_int_common",
            "fry_int_user": "https://dev-hcltx.et.ae/services/fry_int_user",
            "ms_fleet": "https://dev-hcltx.et.ae/services/ms_fleet",
            "add_a_dam_item": "n/a",
            "fry_int_buyer": "https://dev-hcltx.et.ae/services/fry_int_buyer",
            "fry_int_auctions": "https://dev-hcltx.et.ae/services/fry_int_auctions",
            "test1_N_R": "n/a",
            "ms_management": "https://dev-hcltx.et.ae/services/ms_management",
            "fry_int_post_auction": "https://dev-hcltx.et.ae/services/fry_int_post_auction",
            "fry_int_fleet": "https://dev-hcltx.et.ae/services/fry_int_fleet",
            "ms_admin": "https://dev-hcltx.et.ae/services/ms_admin",
            "ms_auctions": "https://dev-hcltx.et.ae/services/ms_auctions",
            "fry_int_admin": "https://dev-hcltx.et.ae/services/fry_int_admin",
            "test_N_R": "n/a",
            "fry_int_management": "https://dev-hcltx.et.ae/services/fry_int_management",
            "fry_int_accountant": "https://dev-hcltx.et.ae/services/fry_int_accountant",
            "add_items_dam": "n/a",
            "ms_user_token": "https://dev-hcltx.et.ae/services/ms_user_token",
            "fry_int_seller": "https://dev-hcltx.et.ae/services/fry_int_seller",
            "fry_wf": "https://dev-hcltx.et.ae/services/fry_wf",
            "fry_int_operation": "https://dev-hcltx.et.ae/services/fry_int_operation",
            "_internal_logout": "https://dev-hcltx.et.ae/services/IST",
            "proxy": "https://dev-hcltx.et.ae/services/proxy",
            "ms_user": "https://dev-hcltx.et.ae/services/ms_user",
            "fry_int_logs": "https://dev-hcltx.et.ae/services/fry_int_logs",
            "fry_collection": "https://dev-hcltx.et.ae/services/fry_collection",
            "add-fleet-record": "n/a",
            "ms_post_auction": "https://dev-hcltx.et.ae/services/ms_post_auction",
            "fry_int_asset": "https://dev-hcltx.et.ae/services/fry_int_asset",
            "auction-bidding": "n/a",
            "ms_test": "https://dev-hcltx.et.ae/services/ms_test",
            "ms_user_reg": "https://dev-hcltx.et.ae/services/ms_user_reg"
        },
        "service_doc_etag": "00000196913D2268",
        "appId": "9e1153d9-1955-40a7-ab6f-6fd2d56347b6",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "alwataneya_development_v2",
        "reportingsvc": {
            "session": "https://dev-hcltx.et.ae/services/IST",
            "custom": "https://dev-hcltx.et.ae/services/CMS"
        },
        "Webapp": {
            "url": "https://dev-hcltx.et.ae/apps/app2"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    voltmx.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 9500,
        isCompositeApp: false
    });
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    voltmx.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        appservice: function(eventObject) {
            handleDeeplinkCallback(eventObject);
        },
        postappinit: function(eventObj) {
            return applicationController.postAppInitCallBack(eventObj);
        },
        showstartupform: function() {
            new voltmx.mvc.Navigation("frmDashBoard").navigate();
        }
    });
};

function loadResources() {
    _kony.mvc.initCompositeApp(false);
    globalhttpheaders = {};
    voltmx.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    voltmx.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    voltmx.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    voltmx.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
voltmx.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();
debugger;
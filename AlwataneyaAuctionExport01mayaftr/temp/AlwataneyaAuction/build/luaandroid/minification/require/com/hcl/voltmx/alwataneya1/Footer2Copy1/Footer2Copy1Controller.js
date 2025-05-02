define("com/hcl/voltmx/alwataneya1/Footer2Copy1/userFooter2Copy1Controller", function() {
    return {
        onNavigate: function() {
            if (this.view.flxSellCar) {
                this.view.flxSellCar.onClick = this.SellCarNavigation.bind(this);
            }
            //             if (this.view.flxHome) {
            //                 this.view.flxHome.onClick = this.dashBoardNavigation.bind(this);
            //             }
            return this.dashBoardNavigation.call(this);
        },
        SellCarNavigation: function() {
            // If User Exists Navigate to Sell Car List Page or Login Page
            var isLogin = voltmx.store.getItem("isLogin");
            alert("IsLogin :" + isLogin);
            if (isLogin === true) {
                var ntf1 = new voltmx.mvc.Navigation("frmSellCarList12");
                ntf1.navigate();
            } else {
                var ntf2 = new voltmx.mvc.Navigation("frmScreen2Login");
                ntf2.navigate();
            }
        },
        dashBoardNavigation: function() {
            var ntf = new voltmx.mvc.Navigation("frmDashBoard");
            ntf.navigate();
        }
    };
});
// function AS_FlexContainer_cf02184a4ef0446d9c75882b067988a6(eventobject) {
//     var self = this;
//     return self.dashBoardNavigation.call(this);
// }
define("com/hcl/voltmx/alwataneya1/Footer2Copy1/Footer2Copy1ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_e296fd3b620d475e80bf4b45a9a33285: function AS_FlexContainer_e296fd3b620d475e80bf4b45a9a33285(eventobject) {
        var self = this;
        return self.dashBoardNavigation.call(this);
    },
    AS_FlexContainer_f58dd5ddf45b49dd8def926fc6a5edca: function AS_FlexContainer_f58dd5ddf45b49dd8def926fc6a5edca(eventobject) {
        var self = this;
        return self.SellCarNavigation.call(this);
    }
});
define("com/hcl/voltmx/alwataneya1/Footer2Copy1/Footer2Copy1Controller", ["com/hcl/voltmx/alwataneya1/Footer2Copy1/userFooter2Copy1Controller", "com/hcl/voltmx/alwataneya1/Footer2Copy1/Footer2Copy1ControllerActions"], function() {
    var controller = require("com/hcl/voltmx/alwataneya1/Footer2Copy1/userFooter2Copy1Controller");
    var actions = require("com/hcl/voltmx/alwataneya1/Footer2Copy1/Footer2Copy1ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

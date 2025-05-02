define("com/hcl/voltmx/alwataneya1/HeaderWithProfile/userHeaderWithProfileController", function() {
    return {};
});
define("com/hcl/voltmx/alwataneya1/HeaderWithProfile/HeaderWithProfileControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/voltmx/alwataneya1/HeaderWithProfile/HeaderWithProfileController", ["com/hcl/voltmx/alwataneya1/HeaderWithProfile/userHeaderWithProfileController", "com/hcl/voltmx/alwataneya1/HeaderWithProfile/HeaderWithProfileControllerActions"], function() {
    var controller = require("com/hcl/voltmx/alwataneya1/HeaderWithProfile/userHeaderWithProfileController");
    var actions = require("com/hcl/voltmx/alwataneya1/HeaderWithProfile/HeaderWithProfileControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

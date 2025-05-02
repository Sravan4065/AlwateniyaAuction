define("com/hcl/voltmx/alwataneya1/HeaderWithProfileCopy/userHeaderWithProfileCopyController", function() {
    return {};
});
define("com/hcl/voltmx/alwataneya1/HeaderWithProfileCopy/HeaderWithProfileCopyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/voltmx/alwataneya1/HeaderWithProfileCopy/HeaderWithProfileCopyController", ["com/hcl/voltmx/alwataneya1/HeaderWithProfileCopy/userHeaderWithProfileCopyController", "com/hcl/voltmx/alwataneya1/HeaderWithProfileCopy/HeaderWithProfileCopyControllerActions"], function() {
    var controller = require("com/hcl/voltmx/alwataneya1/HeaderWithProfileCopy/userHeaderWithProfileCopyController");
    var actions = require("com/hcl/voltmx/alwataneya1/HeaderWithProfileCopy/HeaderWithProfileCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

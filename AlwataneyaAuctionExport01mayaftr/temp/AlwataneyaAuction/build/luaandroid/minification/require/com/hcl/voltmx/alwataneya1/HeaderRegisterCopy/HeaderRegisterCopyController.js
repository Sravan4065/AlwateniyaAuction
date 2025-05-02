define("com/hcl/voltmx/alwataneya1/HeaderRegisterCopy/userHeaderRegisterCopyController", function() {
    return {};
});
define("com/hcl/voltmx/alwataneya1/HeaderRegisterCopy/HeaderRegisterCopyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/voltmx/alwataneya1/HeaderRegisterCopy/HeaderRegisterCopyController", ["com/hcl/voltmx/alwataneya1/HeaderRegisterCopy/userHeaderRegisterCopyController", "com/hcl/voltmx/alwataneya1/HeaderRegisterCopy/HeaderRegisterCopyControllerActions"], function() {
    var controller = require("com/hcl/voltmx/alwataneya1/HeaderRegisterCopy/userHeaderRegisterCopyController");
    var actions = require("com/hcl/voltmx/alwataneya1/HeaderRegisterCopy/HeaderRegisterCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

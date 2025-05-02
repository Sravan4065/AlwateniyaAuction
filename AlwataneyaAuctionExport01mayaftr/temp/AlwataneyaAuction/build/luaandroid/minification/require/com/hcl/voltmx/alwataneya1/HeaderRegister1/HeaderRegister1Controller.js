define("com/hcl/voltmx/alwataneya1/HeaderRegister1/userHeaderRegister1Controller", function() {
    return {};
});
define("com/hcl/voltmx/alwataneya1/HeaderRegister1/HeaderRegister1ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/voltmx/alwataneya1/HeaderRegister1/HeaderRegister1Controller", ["com/hcl/voltmx/alwataneya1/HeaderRegister1/userHeaderRegister1Controller", "com/hcl/voltmx/alwataneya1/HeaderRegister1/HeaderRegister1ControllerActions"], function() {
    var controller = require("com/hcl/voltmx/alwataneya1/HeaderRegister1/userHeaderRegister1Controller");
    var actions = require("com/hcl/voltmx/alwataneya1/HeaderRegister1/HeaderRegister1ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

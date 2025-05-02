define("com/hcl/voltmx/alwataneya1/HeaderRegister/userHeaderRegisterController", function() {
    return {};
});
define("com/hcl/voltmx/alwataneya1/HeaderRegister/HeaderRegisterControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/voltmx/alwataneya1/HeaderRegister/HeaderRegisterController", ["com/hcl/voltmx/alwataneya1/HeaderRegister/userHeaderRegisterController", "com/hcl/voltmx/alwataneya1/HeaderRegister/HeaderRegisterControllerActions"], function() {
    var controller = require("com/hcl/voltmx/alwataneya1/HeaderRegister/userHeaderRegisterController");
    var actions = require("com/hcl/voltmx/alwataneya1/HeaderRegister/HeaderRegisterControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

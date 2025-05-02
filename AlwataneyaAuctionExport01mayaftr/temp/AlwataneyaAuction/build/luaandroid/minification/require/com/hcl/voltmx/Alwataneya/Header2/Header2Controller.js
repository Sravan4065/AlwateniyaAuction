define("com/hcl/voltmx/Alwataneya/Header2/userHeader2Controller", function() {
    return {};
});
define("com/hcl/voltmx/Alwataneya/Header2/Header2ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/voltmx/Alwataneya/Header2/Header2Controller", ["com/hcl/voltmx/Alwataneya/Header2/userHeader2Controller", "com/hcl/voltmx/Alwataneya/Header2/Header2ControllerActions"], function() {
    var controller = require("com/hcl/voltmx/Alwataneya/Header2/userHeader2Controller");
    var actions = require("com/hcl/voltmx/Alwataneya/Header2/Header2ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define("com/hcl/alwataneya/CalenderCopy1/userCalenderCopy1Controller", function() {
    return {};
});
define("com/hcl/alwataneya/CalenderCopy1/CalenderCopy1ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/alwataneya/CalenderCopy1/CalenderCopy1Controller", ["com/hcl/alwataneya/CalenderCopy1/userCalenderCopy1Controller", "com/hcl/alwataneya/CalenderCopy1/CalenderCopy1ControllerActions"], function() {
    var controller = require("com/hcl/alwataneya/CalenderCopy1/userCalenderCopy1Controller");
    var actions = require("com/hcl/alwataneya/CalenderCopy1/CalenderCopy1ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define("com/hcl/alwataneya/CalenderCopy/userCalenderCopyController", function() {
    return {};
});
define("com/hcl/alwataneya/CalenderCopy/CalenderCopyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/alwataneya/CalenderCopy/CalenderCopyController", ["com/hcl/alwataneya/CalenderCopy/userCalenderCopyController", "com/hcl/alwataneya/CalenderCopy/CalenderCopyControllerActions"], function() {
    var controller = require("com/hcl/alwataneya/CalenderCopy/userCalenderCopyController");
    var actions = require("com/hcl/alwataneya/CalenderCopy/CalenderCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define("com/hcl/alwataneya/Calender/userCalenderController", function() {
    return {};
});
define("com/hcl/alwataneya/Calender/CalenderControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/alwataneya/Calender/CalenderController", ["com/hcl/alwataneya/Calender/userCalenderController", "com/hcl/alwataneya/Calender/CalenderControllerActions"], function() {
    var controller = require("com/hcl/alwataneya/Calender/userCalenderController");
    var actions = require("com/hcl/alwataneya/Calender/CalenderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

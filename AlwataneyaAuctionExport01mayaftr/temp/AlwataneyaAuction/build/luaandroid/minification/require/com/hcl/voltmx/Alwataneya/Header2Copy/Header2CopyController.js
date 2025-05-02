define("com/hcl/voltmx/Alwataneya/Header2Copy/userHeader2CopyController", function() {
    return {};
});
define("com/hcl/voltmx/Alwataneya/Header2Copy/Header2CopyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/voltmx/Alwataneya/Header2Copy/Header2CopyController", ["com/hcl/voltmx/Alwataneya/Header2Copy/userHeader2CopyController", "com/hcl/voltmx/Alwataneya/Header2Copy/Header2CopyControllerActions"], function() {
    var controller = require("com/hcl/voltmx/Alwataneya/Header2Copy/userHeader2CopyController");
    var actions = require("com/hcl/voltmx/Alwataneya/Header2Copy/Header2CopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

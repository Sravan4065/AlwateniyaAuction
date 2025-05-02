define("com/hcl/Alwataneya2/headernewfigma/flxHeaderNew/userflxHeaderNewController", function() {
    return {};
});
define("com/hcl/Alwataneya2/headernewfigma/flxHeaderNew/flxHeaderNewControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/Alwataneya2/headernewfigma/flxHeaderNew/flxHeaderNewController", ["com/hcl/Alwataneya2/headernewfigma/flxHeaderNew/userflxHeaderNewController", "com/hcl/Alwataneya2/headernewfigma/flxHeaderNew/flxHeaderNewControllerActions"], function() {
    var controller = require("com/hcl/Alwataneya2/headernewfigma/flxHeaderNew/userflxHeaderNewController");
    var actions = require("com/hcl/Alwataneya2/headernewfigma/flxHeaderNew/flxHeaderNewControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

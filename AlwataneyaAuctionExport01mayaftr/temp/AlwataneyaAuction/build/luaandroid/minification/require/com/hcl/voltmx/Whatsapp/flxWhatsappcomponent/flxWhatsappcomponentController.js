define("com/hcl/voltmx/Whatsapp/flxWhatsappcomponent/userflxWhatsappcomponentController", function() {
    return {};
});
define("com/hcl/voltmx/Whatsapp/flxWhatsappcomponent/flxWhatsappcomponentControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/voltmx/Whatsapp/flxWhatsappcomponent/flxWhatsappcomponentController", ["com/hcl/voltmx/Whatsapp/flxWhatsappcomponent/userflxWhatsappcomponentController", "com/hcl/voltmx/Whatsapp/flxWhatsappcomponent/flxWhatsappcomponentControllerActions"], function() {
    var controller = require("com/hcl/voltmx/Whatsapp/flxWhatsappcomponent/userflxWhatsappcomponentController");
    var actions = require("com/hcl/voltmx/Whatsapp/flxWhatsappcomponent/flxWhatsappcomponentControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

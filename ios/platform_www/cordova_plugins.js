cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-padmenu.PadMenu",
      "file": "plugins/cordova-plugin-padmenu/www/PadMenu.js",
      "pluginId": "cordova-plugin-padmenu",
      "clobbers": [
        "PadMenu"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-padmenu": "1.0.0"
  };
});
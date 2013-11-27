
var scripts = [
  'transition',
  'alert',
  'button',
  'carousel',
  'collapse',
  'dropdown',
  'modal',
  'tooltip',
  'popover',
  'scrollspy',
  'tab',
  'affix'
]

util = require("util");
module.exports = function () {};
module.exports.pitch = function (configPath) {
  console.log(util.inspect(configPath));
  this.cacheable(true);

  var config = require(configPath);
  return scripts.filter(function (script) {
    return config.scripts[script];
  }).map(function (script) {
    return "require(" + JSON.stringify("bootstrap/js/" + script) + ");";
  }).join("\n");
}

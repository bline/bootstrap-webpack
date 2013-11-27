
var styles = [
  "mixins.less",

  "normalize.less",
  "print.less",

  "scaffolding.less",
  "type.less",
  "code.less",
  "grid.less",
  "tables.less",
  "forms.less",
  "buttons.less",

  "component-animations.less",
  "glyphicons.less",
  "dropdowns.less",
  "button-groups.less",
  "input-groups.less",
  "navs.less",
  "navbar.less",
  "breadcrumbs.less",
  "pagination.less",
  "pager.less",
  "labels.less",
  "badges.less",
  "jumbotron.less",
  "thumbnails.less",
  "alerts.less",
  "progress-bars.less",
  "media.less",
  "list-group.less",
  "panels.less",
  "wells.less",
  "close.less",

  "modals.less",
  "tooltip.less",
  "popovers.less",
  "carousel.less",

  "utilities.less",
  "responsive-utilities.less"
];

module.exports = function (content) {
  this.cacheable(true);
  var config = this.exec(content, this.resourcePath);
  var start =
      "@import          \"~bootstrap/less/variables.less\";\n"
    + "@icon-font-path: \"~bootstrap/fonts/\";\n"
    + "@import          \"bootstrap.config.less\";\n";
  source = start + styles.filter(function (style) {
    return config.styles[style];
  }).map(function (style) {
    return "@import \"~bootstrap/less/" + style + ".less\";";
  }).join("\n");
  console.log("Source: ", source);
  return source;
}

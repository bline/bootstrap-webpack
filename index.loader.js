module.exports = function () {};
module.exports.pitch = function (remainingRequest) {
  this.cacheable(true);
  return [
    'require(' + JSON.stringify("-!" + require.resolve("style-loader") + '!' + require.resolve("css-loader") +
      '!' + require.resolve("less-loader") + '!' + require.resolve("./bootstrap-styles.loader.js") + '!' + remainingRequest) + ');',
    'require(' + JSON.stringify("-!" + require.resolve("./bootstrap-scripts.loader.js") + "!" + remainingRequest) + ');'
  ].join("\n");
};

module.exports = function() {
};

module.exports.pitch = function (remainingRequest) {

  // Webpack 1.7.3 uses this.resourcePath. Leaving in remaining request for possibly older versions
  // of Webpack
  var configFilePath = this.resourcePath || remainingRequest;
  this.cacheable(true);

  if (!configFilePath || configFilePath.trim() === '') {
    var msg = 'You specified the bootstrap-webpack with no configuration file. Please specify' +
      ' the configuration file, like: \'bootstrap-webpack!./bootstrap.config.js\' or use' +
      ' require(\'bootstrap-webpack\').';
    console.error('ERROR: ' + msg);
    throw new Error(msg);
  }
  
  var config = require(configFilePath);
  var styleLoader = config.styleLoader || 'style-loader!css-loader!less-loader';

  var styleLoaderCommand = 'require(' + JSON.stringify('-!' + styleLoader + '!' +
      require.resolve('./bootstrap-styles.loader.js') + '!' + configFilePath) + ');';
  var jsLoaderCommand = 'require(' + JSON.stringify('-!' +
      require.resolve('./bootstrap-scripts.loader.js') + '!' + configFilePath) + ');';
  var result = [styleLoaderCommand, jsLoaderCommand].join('\n');
  return result;

};

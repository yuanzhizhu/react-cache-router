// const { override, fixBabelImports } = require('customize-cra');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.output.publicPath = '/react-cache-router/build';
  }
  return config;
};

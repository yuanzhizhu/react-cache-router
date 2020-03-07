// const { override, fixBabelImports } = require('customize-cra');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.output.publicPath = '/build';
  }
  return config;
};

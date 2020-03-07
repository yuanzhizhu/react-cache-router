const { override, fixBabelImports } = require('customize-cra');

const modifyBabelFn = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);

module.exports = function override(config, env) {
  if (env === "production") {
    config.output.publicPath = "/react-cache-router/build";
  }
  return modifyBabelFn(config, env);
};

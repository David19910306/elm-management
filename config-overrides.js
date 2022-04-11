const {override, addLessLoader, fixBabelImports, addWebpackAlias} = require('customize-cra')
const path = require("path")

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // addLessLoader({
  //   lessOptions: {
  //     paths: [path.resolve(__dirname, "src")],
  //     javascriptEnabled: true,
  //     sourceMap: true
  //   }
  // }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, "./src")
  }),
  config => config
)

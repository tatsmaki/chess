const {
  override,
  removeModuleScopePlugin,
  addWebpackAlias
} = require('customize-cra')
const path = require('path')

module.exports = override(
  removeModuleScopePlugin(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
)

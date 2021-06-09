const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: 'http://localhost:8083/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'card1',
        filename: 'card1.js',
        remotes: {},
        exposes: {
          './Card1': './src/views/Card1.vue'
        },
        shared: require('./package.json').dependencies,
      })
    ],
    devServer: {
      port: 8083
    }
  }
}

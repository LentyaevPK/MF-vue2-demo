const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: 'http://localhost:8082/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'card2',
        filename: 'card2.js',
        remotes: {},
        exposes: {
          './Card2': './src/views/Card2.vue'
        },
        shared: require('./package.json').dependencies,
      })
    ],
    devServer: {
      port: 8082
    }
  }
}

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'main',
        filename: 'host.js',
        remotes: {
          card1: 'card1@http://localhost:8083/card1.js',
          card2: 'card2@http://localhost:8082/card2.js',
        },
        exposes: {},
        shared: require('./package.json').dependencies,
      })
    ],
    devServer: {
      port: 8081
    }
  }
}

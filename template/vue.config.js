const path = require( 'path' )

module.exports = {
  outputDir: 'dist',
  configureWebpack(webpackConfig) {
    webpackConfig.entry = {
      'app': resolve( 'src/index.js' ),
      'pages/home/index': resolve( 'src/pages/home/index.js' ),
    }
  },
  parallel: false,
  css: {
    extract: true
  },
  pluginOptions: {
    megalo: {
      platform: '<%= platform %>',
      useVhtml: true
    }
  }
}

function resolve (...args) {
  return path.resolve( __dirname, './', ...args)
}
module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      serve: 'vue-cli-service dev',
      build: 'vue-cli-service build'
    },
    dependencies: {
      megalo: '*',
    },
    devDependencies: {
      // '@megalo/target': '^0.1.0',
      // '@megalo/template-compiler': '^0.1.2',
      // '@vue/cli-service': '^3.0.5',
      // "webpack": "^4.23.1"
      // 'babel-core': '^6.26.3',
      // 'babel-loader': '^7.1.5',
      // 'babel-preset-env': '^1.7.0',
      // 'copy-webpack-plugin': '^4.5.2',
      // 'mini-css-extract-plugin': '^0.4.1'
    }
  })

  const {
    platform = 'wechat',
    useVhtml = true,
  } = options

  api.render('./template', {
    platform,
    useVhtml
  })
}
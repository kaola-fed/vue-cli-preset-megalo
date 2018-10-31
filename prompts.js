module.exports = [
  {
    name: 'platform',
    type: 'list',
    message: '选择小程序平台',
    choices: [
      { name: '微信小程序', value: 'wechat' },
      { name: '支付宝小程序', value: 'alipay' },
    ],
    default: 0
  },
  {
    name: 'useVhtml',
    type: 'confirm',
    message: '是否使用 v-html 指令（依赖 @meglao/vhtml-plugin 和 octoparse）',
    default: true
  }
]
import Vue from 'vue'

if (process.env.NODE_ENV !== 'production') {
  const VueAxe = require('vue-axe')
  const AXE_LOCALE_JA = require('axe-core/locales/ja.json')

  Vue.use(VueAxe, {
    config: {
      locale: AXE_LOCALE_JA,
      rules: [
        {
          // 色コントラストの検査を無効化する。
          // Node数の多い環境で検査コストが高いため。
          id: 'color-contrast',
          enabled: false
        }
      ]
    },
    clearConsoleOnUpdate: false
  })
}

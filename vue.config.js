process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  transpileDependencies: ['vuetify'],
  pwa: {
    name: 'nanoAPPs',
    themeColor: '#137bbd',
    'apple-mobile-web-app-capable': 'yes', // ESTO NO FUNCIONA!!!!
  },
}

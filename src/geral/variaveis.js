const globalVars = {
    /* eslint-disable */
    install(Vue) {
      Vue.prototype.$siteUrl  = 'https://www.ortope.com.br',
      Vue.prototype.$requestUrl  = 'https://www.ortope.com.br/api',
      Vue.prototype.$screen      = {
        width: window.screen.width,
        height: window.screen.height,
      }
    }
  }
  
  export default globalVars;
  
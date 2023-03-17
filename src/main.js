import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import variaveis from '@/geral/variaveis.js'

Vue.config.productionTip = false

Vue.use(variaveis);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

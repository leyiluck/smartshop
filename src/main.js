import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 配置路由器
  router: router,
}).$mount('#app')

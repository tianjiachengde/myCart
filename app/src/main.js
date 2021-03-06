import Vue from 'vue'
import App from './App.vue'
import './base.css'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

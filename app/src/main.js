import Vue from 'vue'
import App from './App.vue'
import './base.css'
import router from './router'
import store from './store'
import Input from 'ant-design-vue/lib/checkbox'
import "ant-design-vue/dist/antd.css"

Vue.component(Input.name,Input)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

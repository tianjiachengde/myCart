import Vue from 'vue'
import App from './App.vue'
import './base.css'
import { createRouter } from './router'
import { createStore } from './store'

Vue.config.productionTip = false

export async function createApp ({
          beforeApp = () => {},
          afterApp = () => {}
        } = {}) {
          const router = createRouter()
          const store = createStore()
          

          await beforeApp({
            router,
            store,
            
          })

          const app = new Vue({
  router,
  store,
  render: function (h) { return h(App) }
})

          const result = {
            app,
            router,
            store,
            
          }

          await afterApp(result)

          return result
        }

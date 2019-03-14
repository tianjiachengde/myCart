import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import counter from './modules/counter'
import router from "../router";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart,
    counter,
  },
})
export const createStore = () => store
export default store

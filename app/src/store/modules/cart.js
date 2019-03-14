const state = {
  cartProducts: [],
}

export const getters = {
  cartTotalPrice: state => state.cartProducts.reduce((prev, item) => {
    return prev + item.price * item.amount
  }, 0),
}

export const actions = {
  cartAddProduct({ commit, state }, product){
  },
  cartChangeCount({commit}, payload){
  }
}

export const mutations = {
  cart_product_count(state, { code, amount }) {
  },
  cart_product_add(state, product) {
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}

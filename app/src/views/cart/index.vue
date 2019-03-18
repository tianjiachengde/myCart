<template>
  <div class="page-cart">
    <div class="title">
        <span style="margin-right: 20px">已选择商品:{{totalCount}}</span>
        <span>总价:{{totalPrice}}</span>
      </div>
    <div class="list">
      <cart-item
        v-for="(product, index) in cartProducts"
        :key="index"
        :product="product"
        @checked="handleChecked(index,arguments)"
        @amount-change="handleAmountChange(product, arguments)"
      />
    </div>
    <add-product @add="handleAddProduct" />
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import cartItem from './components/cartItem'
  import addProduct from './components/addProduct'

  const generateProduct = code => ({
    code,
    amount: 1,
    price: 100,
    isCheck:true
  })
  export default {
    name: 'cart',
    components: {
      cartItem,
      addProduct,
    },
    computed: {
      ...mapState({
        cartProducts: state => state.cart.cartProducts,
      }),
      ...mapGetters({
        totalPrice: 'cartTotalPrice',
        totalCount:'cartTotalAmount'
      }),
    },
    methods: {
      ...mapActions([
        'cartAddProduct',
        'cartChangeCount',
        "cartChecked"
      ]),
      handleChecked(index,args){
          this.cartChecked(index,args[0])
      },
      handleAmountChange(product, agrs) {
        const amount = agrs[0]
        this.cartChangeCount({
          code: product.code,
          amount,
        })
      },
      handleAddProduct: function(code) {
        this.cartAddProduct(generateProduct(code))
      },
    },
  }
</script>

<style src="./cart.css"></style>

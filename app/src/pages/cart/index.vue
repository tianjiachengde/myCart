<template>
  <div class="page-cart">
    <div class="title">总价 {{totalPrice}}</div>
    <div class="list">
      <div v-for="(product, index) in cartProducts" class="product">
        <h3 class="code">商品编号: {{product.code}}</h3>
        <div class="actions">
          <button @click="minusCount(index)">-</button>
          <span>数量 {{product.amount}}</span>
          <button @click="plusCount(index)">+</button>
        </div>
      </div>
    </div>
    <div class="bottom-action">
      <button class="btn" @click="toggleCart">添加商品</button>
    </div>
    <div class="popup" v-show="shouldShowCart">
      <div class="backdrop" @click="toggleCart"></div>
      <form class="popup-content" @submit.prevent="confirm">
        <h3>添加商品</h3>
        <input type="text" v-model="code" autofocus placeholder="请输入商品编号">
        <button class="btn" type="submit">确定</button>
      </form>
    </div>
  </div>
</template>

<script>
  const generateProduct = code => ({
    code,
    amount: 1,
    price: 100,
  })
  export default {
    name: 'cart',
    data: function() {
      return {
        code: '',
        shouldShowCart: false,
        cartProducts: [],
      }
    },
    computed: {
      totalPrice() {
        return this.cartProducts.reduce((prev, item) => {
          return prev + item.price * item.amount
        }, 0)
      },
    },
    methods: {
      toggleCart: function() {
        this.shouldShowCart = !this.shouldShowCart
      },
      minusCount: function(index) {
        if (this.cartProducts[index].amount > 1) {
          this.cartProducts[index].amount -= 1
        }
      },
      plusCount: function(index) {
        this.cartProducts[index].amount += 1
      },
      confirm: function($event) {
        if (this.code) {
          const index = this.cartProducts.findIndex(product => product.code === this.code)
          if (index >= 0) {
            this.cartProducts[index].amount += 1
          } else {
            this.cartProducts.push(generateProduct(this.code))
          }
          this.code = ''
          this.shouldShowCart = false
        }
        $event.preventDefault()
      },
    },
  }
</script>

<style src="./cart.css">

</style>

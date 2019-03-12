<template>
  <div class="page-cart">
    <div class="title">总价 {{totalPrice}}</div>
    <div class="list">
      <item
        v-for="(product, index) in cartProducts"
        :key="index"
        :product="product"
        @amount-change="handleAmountChange(index, arguments)"
      />
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
  import item from './components/cartItem'

  const generateProduct = code => ({
    code,
    amount: 1,
    price: 100,
  })
  export default {
    name: 'cart',
    components: {
      item,
    },
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
      handleAmountChange(index, agrs) {
        const amount = agrs[0]
        this.cartProducts[index].amount = amount
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

<style>
  .title {
    padding: 5px 10px;
    background-color: #000;
    text-align: right;
    color: #fff;
  }

  .list {
    margin: 10px 10px 50px;
  }

  .product {
    border-bottom: 1px dashed #000;
    margin-bottom: 5px;
    padding: 5px;
    line-height: 1.6;
    display: flex;
    font-size: 12px;
  }

  .product .code {
    flex: 1;
  }

  .product .actions button {
    background: #000;
    color: #fff;
    border: 0 none;
    padding: 3px 5px;
    vertical-align: middle;
  }

  .bottom-action {
    position: fixed;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .popup {
  }

  .popup .popup-content {
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px;
    z-index: 10;
    animation: fadeUp .4s ease both;
  }

  .popup .popup-content input {
    margin: 10px 0;
  }

  .backdrop {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, .6);
  }
</style>

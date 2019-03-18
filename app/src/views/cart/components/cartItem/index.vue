<template>
  <div class="product">
    <h3 class="code">
      <input type="checkbox" v-model="product.isCheck">
      <!--<Checkbox default-checked ></Checkbox>-->
      <router-link :to="`/products/${product.code}`">
        商品编号: {{product.code}}
      </router-link>
    </h3>
    <div class="actions">
      <button @click="minusCount">-</button>
      <span>数量 {{product.amount}}</span>
      <button @click="plusCount">+</button>
    </div>
  </div>
</template>
<script>
  import Checkbox from "ant-design-vue/es/vc-checkbox/src/Checkbox";
  export default{
    components: {Checkbox},
    props: {
      product: {
        type: Object,
      },
    },
    computed: {
      isCheck:function () {
        console.log("check:"  + this.product.isCheck)
        let arg = !this.product.isCheck;
        this.$emit('checked',arg);
      }
    },
    methods: {
      minusCount(){
        if (this.product.amount > 1) {
          this.$emit('amount-change', this.product.amount - 1)
        }
      },
      plusCount(){
        this.$emit('amount-change', this.product.amount + 1)
      }
    },
  }
</script>

<style scoped src="./styles.css" />

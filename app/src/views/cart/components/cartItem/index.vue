<template>
  <div class="product">
    <h3 class="code">
      <!--<input type="checkbox" v-model="product.isCheck">-->
      <!--<Checkbox default-checked ></Checkbox>-->
      <a-checkbox default-checked  @change="checked"></a-checkbox>
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
  import  Button  from 'ant-design-vue/es/button/button'
  import  Checkbox from  'ant-design-vue/es/checkbox'
  export default{
    components: {AButton:Button,ACheckbox:Checkbox},
    props: {
      product: {
        type: Object,
      },
    },
    computed: {

    },
    methods: {
      checked(e){
        console.log(e);
        let curChecking = e.target.checked;
        this.$emit('checked',curChecking);
      },
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

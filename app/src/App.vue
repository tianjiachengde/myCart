<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link> |-->
      <!--<router-link to="/counter">Counter</router-link>-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<style>
</style>
<script>
  import  Button  from 'ant-design-vue/es/button/button'
  export default {
    components: {AButton:Button}
  }
</script>
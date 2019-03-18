<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/counter">Counter</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>
<script>
  import Checkbox from "ant-design-vue/es/vc-checkbox/src/Checkbox";
  export default {
    components: {Checkbox}
  }
</script>
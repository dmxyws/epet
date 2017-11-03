<template>
  <div>
    <epet-header></epet-header>
    <div class="nav">
      <div class="nav-item">
        <router-link to="/test">hello</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  export default{
    components: {
      'epet-header': header
    }
  }
</script>

<style>

</style>

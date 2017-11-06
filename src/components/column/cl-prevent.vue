<template>
  <div class="column-wrap">
    <div class="wrap" v-for="good in pregoods"><a :href="good.param"><img :src="good.image"></a></div>
    <!--<div class="wrap"><img src="./img/pre-1.jpg"></div>-->
  </div>
</template>

<script>
  export default{
    props: {
      pregoods: Array
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .column-wrap
    width 100%
    .wrap
      width 100%
      font-size 0
      a
        display block
        img
          width 100%
</style>

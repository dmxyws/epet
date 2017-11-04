<template>
  <div class="footer-wrap">
    <ul class="nav-list">
      <li class="nav-item"><a href="javascript:;" class="index-a"></a></li>
      <li class="nav-item"><a href="javascript:;" class="type-a"></a></li>
      <li class="nav-item"><a href="javascript:;" class="cart-a"></a></li>
      <li class="nav-item"><a href="javascript:;" class="myepet-a"></a></li>
    </ul>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .footer-wrap
    width: 100%
    .nav-list
      overflow hidden
      width 100%
      .nav-item
        position relative
        float left
        width: 25%
        height 55px
        .index-a
          vertical()
          ft-bg-image("./img/img.png",0,0)
        .type-a
          vertical()
          ft-bg-image("./img/img.png",-85px,-40px)
        .cart-a
          vertical()
          ft-bg-image("./img/img.png",-85px,-80px)
        .myepet-a
          vertical()
          ft-bg-image("./img/img.png",-85px,-120px)
</style>

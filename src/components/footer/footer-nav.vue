<template>
  <div class="footer-wrap">
    <ul class="nav-list">
      <li class="nav-item"><router-link to="/main" class="index-a"></router-link></li>
      <li class="nav-item"><router-link to="/type" class="type-a"></router-link></li>
      <li class="nav-item"><a href="javascript:;" class="cart-a"></a></li>
      <li class="nav-item"><router-link to="/login" class="type-a"></router-link></li>
    </ul>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .footer-wrap
    position absolute
    left 0
    bottom 0
    z-index 2
    width: 100%
    .nav-list
      overflow hidden
      width 100%
      background: #fff
      .nav-item
        position relative
        float left
        width: 25%
        height 45px
        .index-a
          vertical()
          ft-bg-image("./img/img.png",-85px,0)
        .type-a
          vertical()
          ft-bg-image("./img/img.png",-85px,-40px)
        .cart-a
          vertical()
          ft-bg-image("./img/img.png",-85px,-80px)
        .myepet-a
          vertical()
          ft-bg-image("./img/img.png",-85px,-120px)
        .router-link-active
          background-position-x: 0
</style>

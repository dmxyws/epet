<template>
  <div class="main-wraper">
    <div class="all-double">
      <div class="db-schedule">
        <img src="./img/double-schedule.jpg">
      </div>
      <div class="db-banner">
        <ul class="banner-list">
          <li class="banner-item">
            <a href="javascript:;"><img src="./img/banner1.jpg"></a>
          </li>
          <li class="banner-item">
            <a href="javascript:;"><img src="./img/banner2.jpg"></a>
          </li>
          <li class="banner-item">
            <a href="javascript:;"><img src="./img/banner3.jpg"></a>
          </li>
          <li class="banner-item">
            <a href="javascript:;"><img src="./img/banner4.jpg"></a>
          </li>
        </ul>
      </div>
      <div class="db-wallpaper">
        <a href="javascript:;"><img src="./img/wallpaper.jpg"></a>
      </div>
      <div class="db-column-nav">
        <ul class="nav-list">
          <li class="fl">
            <a href="javascript:;"><img src="./img/column-nav1.jpg"></a></li>
          <li class="fl">
            <a href="javascript:;"><img src="./img/column-nav2.jpg"></a></li>
          <li class="fl">
            <a href="javascript:;"><img src="./img/column-nav3.jpg"></a></li>
          <li class="fl">
            <a href="javascript:;"><img src="./img/column-nav4.jpg"></a></li>
        </ul>
        <ul class="nav-list">
          <li class="fl">
            <a href="javascript:;"><img src="./img/column-nav5.jpg"></a></li>
          <li class="fl">
            <a href="javascript:;"><img src="./img/column-nav6.jpg"></a></li>
          <li class="fl">
            <a href="javascript:;"><img src="./img/column-nav7.jpg"></a></li>
          <li class="fl">
            <a href="javascript:;"><img src="./img/column-nav8.jpg"></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    mounted () {
      let main = document.querySelector('.main-wraper')
      main.addEventListener('touchstart', function () {
        console.log('hello world')
      })
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  px2rem($num)
    $num/ (750 / 16) rem

  .main-wraper
    position relative
    overflow hidden
    height 100%
    .all-double
      margin-top 86px
      margin-bottom 45px
      /*background: purple*/
      .db-schedule
        font-size 0
        img
          width 100%
      .db-banner
        width: 100%
        overflow hidden
        .banner-list
          white-space nowrap
          float left
          font-size 0
          .banner-item
            display inline-block
            a
              display block
              img
                width px2rem(750);
      .db-wallpaper
        font-size 0
        a
          display: block
          width 100%
          img
            width: 100%
      .db-column-nav
        width 100%
        .nav-list
          width 100%
          font-size 0
          display -webkit-box
          .fl
            width 25%
            a
              display block
              width 100%
              img
                width 100%


</style>

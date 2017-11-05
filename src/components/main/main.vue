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
      <div class="db-swiper">
        <a href="javascript:;" class="swiper-slide"><img src="./img/swiper.jpg"></a>
      </div>
      <div class="db-discount db-swiper">
        <a href="javascript:;" class="swiper-slide"><img src="./img/db-discount.jpg"></a>
      </div>
      <div class="db-daily-crazy">
        <div class="surprise">
          <div class="surprise-tit">
            <div class="titimg fl"><img src="./img/sp-title.png"></div>
            <div class="prompt fl">距本场结束</div>
            <div class="time fl">
              <span class="time1-1">00</span>
              <span class="time-zi">:</span>
              <span class="time1-1">00</span>
              <span class="time-zi">:</span>
              <span class="time1-1">00</span>
            </div>
            <div class="more"><a href="javascript:;"><img src="./img/sp-more.png"></a></div>
          </div>
          <div class="surprise-pro">
            <ul class="swiper-container">
              <li class="swiper-slide">
                <div class="pro-block">
                  <a href="javascript:;">
                    <div class="pro-img"><img src="./img/sp-goods.jpg"></div>
                    <div class="price">
                      <span class="f12">￥</span>
                      <span class="f14">1.98</span>
                    </div>
                    <p class="save">省￥17.82</p>
                  </a>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="pro-block">
                  <a href="javascript:;">
                    <div class="pro-img"><img src="./img/sp-goods.jpg"></div>
                    <div class="price">
                      <span class="f12">￥</span>
                      <span class="f14">1.98</span>
                    </div>
                    <p class="save">省￥17.82</p>
                  </a>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="pro-block">
                  <a href="javascript:;">
                    <div class="pro-img"><img src="./img/sp-goods.jpg"></div>
                    <div class="price">
                      <span class="f12">￥</span>
                      <span class="f14">1.98</span>
                    </div>
                    <p class="save">省￥17.82</p>
                  </a>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="pro-block">
                  <a href="javascript:;">
                    <div class="pro-img"><img src="./img/sp-goods.jpg"></div>
                    <div class="price">
                      <span class="f12">￥</span>
                      <span class="f14">1.98</span>
                    </div>
                    <p class="save">省￥17.82</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
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
      .db-swiper
        width 100%
        font-size 0
        .swiper-slide
          display block
          width 100%
          img
            width 100%
      .db-daily-crazy
        width 100%
        .surprise
          width 100%
          .surprise-tit
            position relative
            width 100%
            height 60px
            padding 10px
            .titimg
              img
                height 24px
                margin-left -20px
            .prompt
              font-size 13px
              margin-top 4px
              margin-left 10px
            .time
              margin-left 5px
              font-size: 12px
              text-align: center
              margin-top 4px
              .time1-1
                border 1px solid #ddd
                padding 1px 2px
                font-size 13px
              .time-zi
                font-weight 700
            .more
              position absolute
              top 2px
              right -75.5px
              a
                display block
                img
                  width 50%
            .fl
              float: left
          .surprise-pro
            padding-left 5px
            margin-bottom 10px
            overflow hidden
            .swiper-container
              width 100%
              white-space nowrap
              float left
              font-size 0
              .swiper-slide
                display inline-block
                width: 29%
                .pro-block
                  padding: 0 7px
                  a
                    display block
                    width 100%
                    text-align center
                    line-height 1.6
                    padding 0 4px
                    .pro-img
                      width 100%
                      line-height 1
                      img
                        width 100%
                    .price
                      margin-top 5px
                      color red
                      font-size 14px
                      .f12
                        font-size 12px
                      .f14
                        font-size 14px
                    .save
                      font-size 12px
</style>

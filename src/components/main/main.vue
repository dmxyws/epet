<template>
  <div class="main-wraper">
    <main-header :location="location" :menu="menu"></main-header>
    <div class="double_wraper" ref="doubleWraper">
      <div class="all-double">
        <div class="db-schedule" v-if="double11.schedule">
          <img :src="double11.schedule.image">
        </div>
        <div class="db-banner">
          <mt-swipe :auto="2000" v-if="double11.banner">
            <mt-swipe-item :key="index" v-for="(item, index) in double11.banner">
              <a :class="'blo'" :href="item.param"><img :src="item.image"></a>
            </mt-swipe-item>
          </mt-swipe>
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
        <div class="db-column-wrap">
          <div class="cl-title cl-pre"><img src="./img/tit-prevent.jpg"></div>
          <prevent></prevent>
          <div class="cl-title cl-etem"><img src="./img/tit-eteam.jpg"></div>
          <div class="cl-title cl-spe"><img src="./img/tit-brand.jpg"></div>
          <brand></brand>
          <div class="cl-title cl-spe"><img src="./img/tit-special.jpg"></div>
          <special></special>
          <div class="cl-title cl-cra">
            <img src="./img/tit-crazy.jpg">
          </div>
          <div class="video-wraper">
            <div class="video-img">
              <a href="javascript:;"><img src="./img/video.jpg"></a>
              <div class="video-bt"><img src="./img/video-bot.jpg"></div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="ft-about">
            <span><a href="javascript:;" class="on">触屏版</a></span>
            <span><a href="javascript:;">手机客户端</a></span>
            <span><a href="javascript:;">关于我们</a></span>
            <span><a href="javascript:;">联系我们</a></span>
          </div>
          <div class="ft-copy">© wap.epet.com 版权：重庆易宠科技有限公司</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import header from '../header/header.vue'
  import prevent from '../column/cl-prevent.vue'
  import brand from '../column/cl-brand.vue'
  import special from '../column/cl-special.vue'
  export default{
    data () {
      return {
        location: {},
        menu: [],
        double11: {}
      }
    },
    mounted () {
      axios.get('/api/main')
        .then(response => {
          const result = response.data
          if (result.code === 0) {
            const mainData = result.data
            this.location = mainData.location
            this.menu = mainData.menu
            this.double11 = mainData.data
            this.$nextTick(() => {
              /* eslint-disable no-new */
              new BScroll(this.$refs.doubleWraper, {
                bounce: false,
                click: true
              })
            })
          }
        })
    },
    components: {
      'main-header': header,
      prevent,
      brand,
      special
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
    .double_wraper
      height 100%
      overflow hidden
      .all-double
        padding-top 86px
        padding-bottom 45px
        /*background: purple*/
        .db-schedule
          font-size 0
          img
            width 100%
        .db-banner
          width: 100%
          height: px2rem(320)
          .blo
            display block
            img
              width 100%
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
        .db-column-wrap
          width 100%
          .cl-title
            width 100%
            font-size 0
            img
              width 100%
        .footer
          margin-top 14px
          width 100%
          height 86px
          line-height 1.6
          .ft-about
            font-size 14px
            padding 15px 0 5px
            text-align center
            span
              padding-right 10px
              a
                color #333
                &.on
                  color red
          .ft-copy
            font-size 12px
            text-align center
            padding-bottom 25px
        .video-wraper
          width 100%
          .video-img
            width 100%
            a
              display block
              img
                display block
                width 100%
            .video-bt
              img
                width 100%
</style>

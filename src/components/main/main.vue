<template>
  <div class="main-wraper">
    <main-header :location="location" :menu="menu"></main-header>
    <div class="double_wraper" ref="doubleWraper">
      <div class="all-double">
        <div class="db-schedule" v-if="double11.schedule">
          <img :src="double11.schedule.image">
        </div>
        <div class="db-banner" :class="{'hei-banner': double11.banner}">
          <mt-swipe :auto="2000" v-if="double11.banner">
            <mt-swipe-item :key="index" v-for="(item, index) in double11.banner">
              <a :class="'blo'" :href="item.param"><img :src="item.image"></a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="db-wallpaper" v-if="double11.banner_wallpaper">
          <a href="javascript:;"><img :src="double11.banner_wallpaper.image"></a>
        </div>
        <div class="db-column-nav">
          <ul class="nav-list" v-for="row in double11.menu_column">
            <li class="fl" v-for="col in row">
              <a :href="col.param"><img :src="col.image"></a></li>
          </ul>
        </div>
        <div class="db-swiper" v-if="double11.double11_1">
          <a :href="double11.double11_1.param" class="swiper-slide"><img :src="double11.double11_1.image"></a>
        </div>
        <div class="db-discount db-swiper" v-if="double11.double11_2">
          <a :href="double11.double11_2.param" class="swiper-slide"><img :src="double11.double11_2.image"></a>
        </div>
        <div class="db-daily-crazy">
          <div class="surprise">
            <div class="surprise-tit" v-if="double11.daily_crazy">
              <div class="titimg fl"><img :src="double11.daily_crazy.surprise_tit.titimg"></div>
              <div class="prompt fl">{{double11.daily_crazy.surprise_tit.warning}}</div>
              <div class="time fl">
                <span class="time1-1">00</span>
                <span class="time-zi">:</span>
                <span class="time1-1">00</span>
                <span class="time-zi">:</span>
                <span class="time1-1">00</span>
              </div>
              <div class="more">
                <a :href="double11.daily_crazy.surprise_tit.more.param">
                  <img :src="double11.daily_crazy.surprise_tit.more.image"></a>
              </div>
            </div>
            <div class="surprise-pro" ref="surpriseWrap">
              <ul class="swiper-container" v-if="double11.daily_crazy">
                <li class="swiper-slide" v-for="pro in double11.daily_crazy.surprise_pro">
                  <div class="pro-block">
                    <a href="javascript:;">
                      <div class="pro-img"><img :src="pro.proimg"></div>
                      <div class="price">
                        <span class="f12">￥</span>
                        <span class="f14">{{pro.price}}</span>
                      </div>
                      <p class="save">{{pro.save}}</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="db-column-wrap">
          <div class="cl-title cl-pre" v-if="double11.prevent"><img :src="double11.prevent.image"></div>
          <prevent :pregoods="double11.prevent_goods"></prevent>
          <div class="cl-title cl-etem" v-if="double11.eteam"><img :src="double11.eteam.image"></div>
          <div class="cl-title cl-bra" v-if="double11.brand"><img :src="double11.brand.image"></div>
          <brand :bragroup="double11.brand_group"></brand>
          <div class="cl-title cl-spe" v-if="double11.special"><img :src="double11.special.image"></div>
          <special :specolumn="double11.special_column"></special>
          <div class="cl-title cl-cra" v-if="double11.ecrazy">
            <img :src="double11.ecrazy.image">
          </div>
          <div class="video-wraper">
            <div class="video-img">
              <div class="play" @click.once="play" ref="play" v-if="double11.video"><img :src="double11.video.first_img"></div>
              <div class="video-bt" v-if="double11.video_bottom"><img :src="double11.video_bottom.image"></div>
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
              this._initialScroll()
            })
          }
        })
    },
    methods: {
      _initialScroll () {
        /* eslint-disable no-new */
        new BScroll(this.$refs.doubleWraper, {
          bounce: false,
          click: true
        })
        new BScroll(this.$refs.surpriseWrap, {
          scrollX: true,
          click: true
        })
      },
      play () {
        let video = document.createElement('video')
        video.controls = 'controls'
        video.innerHTML = '<source src="http://player.epetbar.com/1dd374ad065140699de0ab399057e981/13e66b24c35c49599ac6b793153e1baf-5287d2089db37e62345123a1be272f8b.mp4" type="video/ogg">' +
          '<source src="http://player.epetbar.com/1dd374ad065140699de0ab399057e981/13e66b24c35c49599ac6b793153e1baf-5287d2089db37e62345123a1be272f8b.mp4" type="video/mp4">'
        this.$refs.play.appendChild(video)
      }
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
          &.hei-banner
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
                white-space nowrap
                float left
                font-size 0
                .swiper-slide
                  display inline-block
                  width: 4.64rem
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
            .play
              position relative
              width 100%
              img
                display block
                width 100%
              video
                position absolute
                top 0
                left 0
                width 100%
                height: 100%
            .video-bt
              img
                width 100%
</style>

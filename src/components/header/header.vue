<template>
  <div class="header-wraper">
    <div class="h-main">
      <div class="h-inner">
        <div class="h-location">
          <a href="javascript:;">
            <span>狗狗站</span>
            <span>|</span>
            <span  class="s3">重庆</span>
            <i></i>
          </a>
        </div>
        <p class="h-search">
          <a href="javascript:;">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
            <span class="serach-ico"></span>
          </a>
        </p>
        <a href="javascript:;" class="h-msg"><img src="./img/mydope.png"></a>
      </div>
    </div>
    <div class="nav-wrap">
      <ul class="nav-list">
        <li class="nav-item on">
          <a href="javascript:;">
            <span class="rela">
              <span>首页</span>
              <i></i>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:;">
            <span class="rela">
              <span>服饰城</span>
              <i></i>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:;">
            <span class="rela">
              <span>狗狗主粮</span>
              <i></i>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:;">
            <span class="rela">
              <span>医疗保健</span>
              <i></i>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:;">
            <span class="rela">
              <span>零食玩具</span>
              <i></i>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:;">
            <span class="rela">
              <span>日用外出</span>
              <i></i>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:;">
            <span class="rela">
              <span>美容香波</span>
              <i></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    mounted () {
      function preNavWidth () {
        let width = document.documentElement.clientWidth
        let navItem = document.querySelectorAll('.header-wraper .nav-wrap .nav-list .nav-item')
        console.log(navItem.length, width)
        if (width === 414) {
          for (let i = 0; i < navItem.length; i++) {
            navItem[i].style.width = width / 5 - 0.46 + 'px'
          }
        } else {
          for (let i = 0; i < navItem.length; i++) {
            navItem[i].style.width = width / 5 - 0.5 + 'px'
          }
        }
      }
      preNavWidth()
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .header-wraper
    .h-main
      height: 51px
      padding: 5px 10px
      .h-inner
        height: 41px
        padding: 8px 0;
        background: #fff;
        text-align: center;
        display: -webkit-box;
        -webkit-box-align: center;
        display: -moz-box;
        -moz-box-align: center;
        width: 100%;
        .h-location
          margin-right: 20px;
          position: relative;
          font-size: 14px;
          line-height 1.6
          a
            color: #898989;
            text-decoration: none;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            .s3
              font-size: 13px
          i
            position: absolute;
            top: 10px;
            right: -11px;
            border-width: 4px;
            font-size: 0;
            line-height: 0;
            border-style: solid dotted dotted;
            border-color: #898989 transparent transparent;
        .h-search
          position: relative;
          -webkit-box-flex: 1;
          margin 0
          a
            input
              width: 100%;
              border: 0;
              height: 25px;
              background: #e9e9e9;
              border-radius: 4px;
              color: #bcbcbc;
              text-indent: 10px;
              font-size: 13px;
              outline: 0;
            .serach-ico
              width: 11px;
              height: 11px;
              position: absolute;
              right: 5px;
              top: 0;
              bottom: 0;
              margin: auto 0;
              background: url("./img/search.png") no-repeat
              background-size 100% auto
        .h-msg
          display: block;
          color: #333;
          text-decoration: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          img
            width: 25px;
            margin-left: 10px;
            border: 0;
            vertical-align: middle;
    .nav-wrap
      width 100%
      overflow hidden
      .nav-list
        float left
        white-space nowrap
        font-size 0
        .nav-item
          height: 36px
          display inline-block
          &.on
            span
              display inline-block
              color #459d36
            i
              background: #459d36
          a
            display: block
            height: 100%
            width: 100%
            line-height: 36px
            text-align center
            font-size 14px
            color: #666
            .rela
              position relative
              i
                position: absolute
                left -10%
                bottom 1px
                width 120%
                height: 2px
</style>

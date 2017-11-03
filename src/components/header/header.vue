<template>
  <div class="header-wraper">
    <div class="h-main">
      <div class="h-inner">
        <div class="h-location">
          <a href="javascript:;">
            <span>狗狗站</span>
            <span>|</span>
            <span>重庆</span>
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
  </div>
</template>

<script>
  export default{}
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
          float: left;
          line-height 1.6
          a
            font-size: 13px;
            color: #898989;
            text-decoration: none;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
        .h-search
          position: relative;
          -webkit-box-flex: 1;
          display: block;
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
              background-size 100% 100%
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
</style>

<template>
  <div class="wraper">
    <div class="login_wrap">
      <div class="login_bg">
        <div class="head_top">
          <a href="javascript:;" @click="back" class="back"></a>
          <a href="javascript:;" class="register">注册</a>
        </div>
        <div class="middle">
          <a class="amd" href="javascript:;"></a>
        </div>
        <div class="tag_wrap">
          <div class="normal" :class="{selected: isNormal}">
            <a @click="toggleLogin(1)" href="javascript:;">普通登录</a>
            <i></i>
          </div>
          <div class="active" :class="{selected: !isNormal}">
            <a @click="toggleLogin(0)" href="javascript:;">手机动态密码登录</a>
            <i></i>
          </div>
        </div>
      </div>
      <div class="bgfff">
        <div class="formBox" v-if="isNormal">
          <div class="username input">
            <span class="nameIcon"></span>
            <input type="text" placeholder="手机号/邮箱/用户名">
          </div>
          <div class="password input">
            <span class="pwdIcon"></span>
            <input type="text" placeholder="输入密码">
          </div>
        </div>
        <div class="formBox" v-if="!isNormal">
          <div class="username input">
            <span class="phoneIcon"></span>
            <input type="text" placeholder="已注册的手机号">
          </div>
          <div class="password input">
            <span class="pwdIcon"></span>
            <input type="text" placeholder="动态密码">
          </div>
        </div>
        <div class="forgotPwd">
          <a href="https://wap.epet.com/login.html?do=findpassword">忘记密码？</a>
        </div>
        <div class="login">
          <a href="javascript:;" class="login_btn">登 录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        isNormal: true
      }
    },
    methods: {
      toggleLogin (type) {
        this.isNormal = type
      },
      back () {
        history.back()
      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  icon()
    float: left
    margin-top 1px
    margin-left -25px
    width 17px
    height 21px
    background-size: contain
    background-repeat no-repeat
  inputCss()
    display block
    height 21px
    width 100%
    font-size 15px
    font-family: "Microsoft Yahei",tahoma,arial;
    outline none
    &::-webkit-input-placeholder
      color: #BBB
  .wraper
    height 100%
    overflow hidden
    .login_wrap
      .login_bg
        background: url(./login_bg.jpg) no-repeat
        background-size: 100% 100%
        .head_top
          position: relative
          height 50px
          padding 0 12px
          line-height 50px
          .back
            position absolute
            width 22px
            height 20px
            margin-top 16px
            background: url("https://static.epetbar.com/mpet/images/personal-bico3.png") no-repeat
            background-size: 12px 17px
          .register
            float right
            color #fff
            font-size 16px
        .middle
          height 50px
          margin: 12px 0 24px
        .tag_wrap
          height 44px
          display flex
          color: #fff
          text-align center
          line-height 44px
          font-size 15px
          background: rgba(255,255,255,.3)
          .normal
            position relative
            flex: 1
            a
              display: block
              color white
          .active
            position relative
            flex: 1
            a
              display: block
              color white
          .selected
            i
              position absolute
              left 0
              right 0
              bottom 0
              width 0
              height 0
              margin auto
              display block
              border-width 10px
              border-style dashed dashed solid
              border-color transparent transparent white;
      .bgfff
        width 100%
        background: white
        .formBox
          margin 0 15px 12px
          padding 0 6px
          .input
            padding 12px 0 12px 30px
            border-bottom #e2e2e2 solid 1px
            .nameIcon
              icon()
              background-image: url("https://static.epetbar.com/mpet/images/ico3.png")
            input
              inputCss()
            .pwdIcon
              icon()
              height 20px
              margin-top 0
              background-image: url("https://static.epetbar.com/mpet/images/ico4.png")
            .phoneIcon
              icon()
              width 17px
              height 17px
              margin-top 2px
              background-image: url('https://static.epetbar.com/mpet/images/ico1.png')
        .forgotPwd
          overflow hidden
          padding 0 25px
          line-height 20px
          font-size 14px
          a
            float right
        .login
          width: 100%
          margin-top 6px
          .login_btn
            display block
            margin 0 15px
            padding  9px 0
            background: #2ec975
            font-size 15px
            border-radius 5px
            text-align center
            letter-spacing 5px
            line-height 20px
            color white
</style>

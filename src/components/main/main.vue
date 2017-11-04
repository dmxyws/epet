<template>
    <div class="main-wraper">
      <div class="all-double">
        <div class="db-schedule">
          <img src="./img/double-schedule.jpg">
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
    $num/(750/16)rem
  .main-wraper
    position relative
    overflow hidden
    height 100%
    .all-double
      margin-top 86px
      margin-bottom 45px
      background: purple
      .db-schedule
        font-size 0
        img
          width 100%
</style>

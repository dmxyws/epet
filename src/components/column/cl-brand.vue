<template>
  <div class="column-wrap">
    <div class="divboximg flex">
      <div class="divimg">
        <a href="javascript:;"><img src="./img/out-1.jpg"></a>
        <a href="javascript:;"><img src="./img/out-2.jpg"></a>
      </div>
      <div class="divimg">
        <a href="javascript:;"><img src="./img/out-3.jpg"></a>
        <a href="javascript:;"><img src="./img/out-4.jpg"></a>
      </div>
      <div class="divimg">
        <a href="javascript:;"><img src="./img/out-5.jpg"></a>
        <a href="javascript:;"><img src="./img/out-6.jpg"></a>
      </div>
      <div class="divimg">
        <a href="javascript:;"><img src="./img/out-brand.jpg"></a>
      </div>
    </div>
    <div class="bot-row">
      <div class="bot w50">
        <a href="javascript:;"><img src="./img/row-1.jpg"></a>
        <a href="javascript:;"><img src="./img/row-2.jpg"></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .column-wrap
    width 100%
    .divboximg
      display: -webkit-box;
      .divimg
        width 25%
        a
          display block
          img
            display block
            width 100%
    .bot-row
      width 100%
      .bot
        display -webkit-box
        a
          display: block
          width 50%
          img
            width 100%
            display block
</style>

<template>
  <div class="column-wrap">
    <div class="flex">
      <div class="fl-item">
        <a href="javascript:;"><img src="./img/spe-1.jpg"></a>
        <a href="javascript:;"><img src="./img/spe-2.jpg"></a>
        <a href="javascript:;"><img src="./img/spe-3.jpg"></a>
      </div>
      <div class="fl-item">
        <a href="javascript:;"><img src="./img/spe-4.jpg"></a>
        <a href="javascript:;"><img src="./img/spe-5.jpg"></a>
        <a href="javascript:;"><img src="./img/spe-6.jpg"></a>
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
    font-size 0
    .flex
      display -webkit-box
      width 100%
      .fl-item
        width 50%
        a
          display block
          width 100%
          img
            width 100%
</style>

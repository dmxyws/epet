<template>
  <div class="column-wrap">
    <div class="flex">
      <div class="fl-item" v-for="column in specolumn">
        <a :href="col.param" v-for="col in column"><img :src="col.image"></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      specolumn: Array
    }
  }
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

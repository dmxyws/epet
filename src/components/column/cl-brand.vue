<template>
  <div class="wraper">
    <div class="column-wrap" v-for="gro in bragroup">
      <div class="divboximg flex">
        <div class="divimg" v-for="bra in gro.brands">
          <a :href="b.param" v-for="b in bra"><img :src="b.image"></a>
        </div>
      </div>
      <div class="bot-row">
        <div class="bot w50">
          <a :href="disb.param" v-for="disb in gro.dis_brands"><img :src="disb.image"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      bragroup: Array
    }
  }
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

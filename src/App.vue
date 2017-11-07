<template>
  <div id="wrap">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <epet-footer></epet-footer>
  </div>
</template>

<script>
  import footer from './components/footer/footer-nav.vue'
  export default{
    mounted () {
      (function () {
        let width = document.documentElement.clientWidth
        let styleNode = document.createElement('style')
        styleNode.innerHTML = 'html{font-size: ' + width / 16 + 'px !important;}'
        document.head.appendChild(styleNode)
      })()
    },
    components: {
      'epet-footer': footer
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  #wrap
    height: 100%
    overflow: hidden
</style>

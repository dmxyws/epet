<template>
  <div id="wrap">
    <epet-header></epet-header>
    <epet-main></epet-main>
    <epet-footer></epet-footer>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer-nav.vue'
  import main from './components/main/main.vue'
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
      'epet-header': header,
      'epet-footer': footer,
      'epet-main': main
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  #wrap
    /*height: 100%*/
    overflow: hidden
</style>

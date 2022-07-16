<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuideVue v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuideVue from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {
    FooterGuideVue, 
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app 
    width: 100%
    height: 100%
    background-color: #f3f3f3
</style>
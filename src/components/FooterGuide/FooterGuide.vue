<template>
  <div class="footer_guide">
    <span @click="goTo('/msite')" class="guide_item" :class="{on:'/msite'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-U"></i>
      </span>
      <span>外卖</span>
    </span>
    <span @click="goTo('/search')" class="guide_item" :class="{on:'/search'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>收索</span>
    </span>
    <span @click="goTo('/order')" class="guide_item" :class="{on:'/order'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-dingdan1"></i>
      </span>
      <span>订单</span>
    </span>
    <span @click="goTo('/profile')" class="guide_item" :class="{on:'/profile'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </span>
  </div>
</template>
<script>
export default {
  name:"FooterGuide", 
  methods: {
    goTo(path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position: fixed
    z-index 100
    left: 0
    bottom: 0
    background: #f0f0f0
    width 100%
    height: 50px
    display: flex
    .guide_item
      display: flex
      flex: 1
      text-align: center
      flex-direction: column
      align-items: center
      margin 3px
      color: #666666
      &.on
        color #F28705
      span
        font-size: 12px
        margin-top: 2px
        margin-bottom: 2px
        .iconfont
          font-size: 22px
</style>
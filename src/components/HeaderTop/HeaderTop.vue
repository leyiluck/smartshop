<template>
<header class="header">
    <!-- <div class="header_search">
        <span class="iconfont icon-search_light" ></span>
    </div> -->
    <slot name="left"></slot>
    <div class="header_title">{{title}}</div>
    <!-- <div class="header_login">注册|登陆</div> -->
    <slot name="right"></slot>
</header>
</template>
<script>
export default {
  name:'HeaderTop',
  props: {
      title:String
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header
    background-color #F28705
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      margin-left -5%
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
</style>
<template>
  <div class="msite">
    <!-- 头部部分 -->
    <HeaderTop title="淮海东路999号"/>
    <!-- 首页导航 -->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
            <a href="#" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>香甜饮品</span>
            </a>
          </div>
          <!-- page2 -->
        </div>
        <!-- 添加分页器 -->
        <div class="swiper-pagination">99999</div>
        <!-- 导航按钮 -->
        <!-- <div class="swiper-button-per"></div> -->
        <!-- <div class="swiper-button-next"></div> -->
        <!-- 滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->

      </div>
      <!-- <img src="./images/msite_back.svg" alt="backimg"> -->
    </nav>
    <!-- 首页附近商家 -->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-dingdan"></i>
        <span class="shop_header_title">附近商家</span>
        <!-- 商家列表组件 -->
        <ShopList />
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
  
export default {
  name: 'Msite', 
  components: {
    HeaderTop, 
    ShopList, 
  }, 
  mounted() {
    // 创建一个swiper对象以实现轮播
    new Swiper('.swiper-container', {
      loop: true, 
      //分页器
      pagination: {
        el:'.swiper-pagination'
      }
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite
    width: 100%
    .msite_nav
      top-border-1px(#e4e4e4)
      margin-top: 45px
      height: 200px
      background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
</style>
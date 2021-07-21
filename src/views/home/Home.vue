<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control v-show="tabShow" :titles="['流行', '新款', '精选']" class="tab" @TabControlClick="Change" ref="tabControl1"/>
    <scroll class="content" ref="homeScroll" :probe-type="3" @isShow="isShow" :pull-up-load="true" @pullingUp="loadMore">
      <my-swiper class="homeswiper" :bannerData="banners" @imgLoad="bannerLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature/>
      <tab-control :titles="['流行', '新款', '精选']"  @TabControlClick="Change" ref="tabControl2"/>
      <goods-list :goods="goods[curretType].list"/>
    </scroll>
    
    <back-top @click.native="BackTop" v-show="show"/>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backTop/BackTop'

import GoodsList from '@/components/content/goods/GoodsList'
import RecommendView from './childComps/RecommendView.vue'
import Feature from './childComps/FeatureView.vue'
import {getHomeMultiData, getHomeGoods} from '../../network/home'
import MySwiper from '../../components/common/swiper/MySwiper.vue'


export default {
  name: 'Home',
  components: {
    NavBar,
    Scroll,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    BackTop,
    MySwiper,
  },
  data(){
    return{
      banners: [],
      recommends: [],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      curretType: 'pop',
      show: false,
      tabShow: false,
    }
  },
  computed: {
    popChange(){
      return this.goods.pop.list
    }
  },
  created() {
    getHomeMultiData().then(res => {
      // console.log(res);
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // const refresh = this.debounce(this.$refs.homeScroll.refresh, 500)
    this.$bus.$on('loadAllright',() => {
      this.$refs.homeScroll.refresh()
      // refresh()
    })
    
  },
  activated() {
    this.$refs.homeScroll.refresh()
    this.$refs.homeScroll.scroll.scrollTo(0, this.$store.state.positionY, 0)
  },
  deactivated() {
    this.$store.commit('updatePositionY', this.$refs.homeScroll.scroll.y)
  },
  methods: {
    bannerLoad(){
      this.$refs.homeScroll.refresh()
    },
    getHomeGoods(type){
      getHomeGoods(type, this.goods[type].page + 1).then(rev => {
        this.goods[type].list.push(...rev.data.data.list)
        this.goods[type].page += 1
      })
    },
    Change(index){
      if(index == 1){
        this.curretType = 'new'
      }else if(index == 2){
        this.curretType = 'sell'
      }else{
        this.curretType = 'pop'
      }
      this.$refs.tabControl1.activeIndex = index
      this.$refs.tabControl2.activeIndex = index
    },
    BackTop(){
      this.$refs.homeScroll.backTop(0,0)
    },
    isShow(position){
      this.show = -position.y > 1000
      this.tabShow = -position.y > 703
      this.oldPosition = position.y
    },
    loadMore(){
      this.getHomeGoods(this.curretType)
      this.$refs.homeScroll.finish()
    }
  },
}
</script>

<style scoped>
.homeswiper{
  position: relative;
}
#home{
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
 
}
.tab{
  position: absolute;
  z-index: 999;
  top: 32px;
}
.content{ 
  position: absolute;
  top: 43px;
  left: 0;
  right: 0;
  bottom: 48px;
  overflow: hidden;
  /* height: 300px;
  overflow: hidden; */
}
</style>
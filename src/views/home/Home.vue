<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.sort">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
    <recommend-view :recommends="recommends"/>
    <feature/>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @TabControlClick="Change"/>
    <goods-list :goods="goods[curretType].list"/>
    <ul>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
      <li>wenzikang</li>
    </ul>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import {Swiper, SwiperItem} from '../../components/common/swiper/index.js'
import TabControl from '@/components/content/tabControl/TabControl'
import RecommendView from './childComps/RecommendView.vue'
import GoodsList from '@/components/content/goods/GoodsList'
import Feature from './childComps/FeatureView.vue'
import {getHomeMultiData, getHomeGoods} from '../../network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    SwiperItem,
    Swiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList
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
      curretType: 'pop'
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
  methods: {
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
    }
  },
}
</script>

<style>
#home{
  margin-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
}
.tab-control{
  position: sticky;
  top: 44px
}
</style>
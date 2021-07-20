<template>
  <div class="category">
    <nav-bar class="categoryNav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="mainWrapper">
      <side-navigation class="sidenav" :listData="sideList" v-if="sideList" @itemClick="getMessages"/>
      <div class="right">
        <scroll class="right-wrapper" ref="categoryScroll" :probeType="3" @isShow="getPosition">
          <sub-category :subData="subList" @subImageLoad="subRefresh"/>
          <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @TabControlClick="changeTab"/>
          <goods-list class="categoods" :goods="detailList" v-if="detailList" @passImageLoad="refresh"/>
        </scroll>
      </div>
    </div>
    <back-top v-show="isShow" @click.native="backTop"/>
  </div>
</template>

<script>
import {getCategoryData, getSubcategory, getCategoryDetail} from '@/network/category.js'
import NavBar from '../../components/common/navbar/NavBar.vue'
import SideNavigation from './childComps/SideNavigation.vue'
import SubCategory from './childComps/SubCategory.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'
export default {
  name: 'Category',
  components: {
    NavBar, 
    SideNavigation,
    SubCategory,
    Scroll,
    TabControl,
    GoodsList,
    BackTop
  },
  data(){
    return{
      sideList: [],
      maitKey: 3627,
      miniWallkey: 10062603,
      subList: [],
      detailList: [],
      tabType: 'pop',
      remTop: 0,
    }
  },
  computed:{
    isShow(){
      return -this.remTop>1200?true:false
    }
  },
  created() {
    getCategoryData().then(res => {
      this.sideList = res.data.data.category.list
    }),
    getSubcategory(this.maitKey).then(res => {
      this.subList = res.data.data.list
    }),
    this.getDetail(this.miniWallkey, this.tabType)
  },
  methods: {
    getMessages({index, maitKey, miniWallkey}){
      if(this.maitKey == maitKey) return
      this.maitKey = maitKey
      this.miniWallkey = miniWallkey 
      getSubcategory(this.maitKey).then(res => {
        this.subList = res.data.data.list
      })
      this.getDetail(this.miniWallkey, this.tabType)
    },
    changeTab(index){
      const tabList = ['pop', 'new', 'sell']
      this.getDetail(this.miniWallkey, tabList[index])
      this.tabType = tabList[index]
    },
    //获取detail数据
    getDetail(miniWallkey, type){
      getCategoryDetail(miniWallkey, type).then(res => {
        this.detailList = res.data
      })
    },
    //刷新BScroll
    subRefresh(){
      this.$refs.categoryScroll.refresh()
    },
    refresh(){
      this.$refs.categoryScroll.refresh()
    },
    //记录当前滚动位置
    getPosition(position){
      this.remTop = position.y
      // console.log(this.remTop)
    },
    //回到顶部
    backTop(){
      this.$refs.categoryScroll.backTop(0, 0, 300)
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
  .category{
    height: 100vh;
    position: relative;
  }
  .categoryNav{
    background-color: var(--color-tint);
    color: white;
  }
  .mainWrapper{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    height: auto;
    top: 44px;
    bottom: 48px;
  }
  .right{
    flex: 1;
    width: 200px;
    height: 100%;
  }
  .right-wrapper{
    height: 100%;
    overflow: hidden;
  }
  .tab-control{
    width: 100%;
    height: 40px;
  }
  .sidenav{
    height: 100%;
    background-color: #F6F6F6;
  }
  .categoods{
    width: 100%;
  }
</style>
<template>
  <div id="detail">
    <detail-bar ref="bar" @passIndex="getIndex"/>
    <scroll :probe-type="3" ref="detailScroll" class="content" v-if="Object.keys(goodsParams) != 0" @isShow="contentScroll">
      <detail-swiper :bannerImageData="bannerData"></detail-swiper>
      <detail-base-info :baseData="detailBaseData"></detail-base-info>
      <detail-store-info :storeInfo="storeInfo"></detail-store-info>
      <detail-goods-info :goodsInfo="goodsInfo" @imageLoad="detailRefresh"/>
      <detail-goods-params :goodsParams="goodsParams" ref="params"/>
      <detail-comment-info :rate="commentInfo" ref="comment"/>
      <goods-list :goods="recommendList" ref="recommend"/>
    </scroll>
    <back-top @click.native="back" v-show="isShow"/>
    <detail-bottom @buyItem="buy"/>
  </div>
</template>

<script>
import DetailBar from './childComps/DetailBar.vue'
import {getRecommend, getDetailData, DetailBaseData, storeInfo, goodsParams} from '@/network/detail.js'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailStoreInfo from './childComps/DetailStoreInfo.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailGoodsParams from './childComps/DetailGoodsParams.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import {debounce} from '@/common/util.js'
import DetailBottom from './childComps/DetailBottom.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'


export default {
  name: 'Detail',
  components: {
    DetailBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailStoreInfo,
    Scroll,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottom,
    BackTop
  },
  data(){
    return {
      iid: null,
      bannerData: [],
      detailBaseData: {},
      storeInfo: {},
      goodsInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommendList: [],
      itemOffsetTop: [],
      getItemY: null,
      currentIndex: 0,
      isShow: false,
      lowNowPrice: 0,
      passData: {}
    }
  },
  methods: {
    buy(){
      this.passData.img = this.bannerData[0]
      this.passData.title = this.detailBaseData.title
      this.passData.price = this.lowNowPrice
      this.passData.iid = this.iid
      console.log(this.passData)
    },
    back(){
      this.$refs.detailScroll.backTop(0, 0, 200)
    },
    detailRefresh(){
      this.$refs.detailScroll.refresh()
      this.getItemY()
    },
    contentScroll(position){
      // if(-position.y >= this.itemOffsetTop[3]) this.$refs.bar.activeIndex = 3
      // else if(-position.y >= this.itemOffsetTop[2]) this.$refs.bar.activeIndex = 2
      // else if(-position.y >= this.itemOffsetTop[1]) this.$refs.bar.activeIndex = 1
      // else this.$refs.bar.activeIndex = 0
      if(-position.y>=1000) this.isShow = true
      let length = this.itemOffsetTop.length
      for(let i=length-1; i>=0; i--){
        if((this.currentIndex != i)&&(this.itemOffsetTop[i]>-position.y)&&(-position.y>this.itemOffsetTop[i-1])){
          this.currentIndex = i
          this.$refs.bar.activeIndex = i-1
        }
      }
    },
    getIndex(index){
      this.$refs.detailScroll.backTop(0, -this.itemOffsetTop[index], 200)
    }
  },
  created(){
    this.iid = this.$route.query.iid
    // this.$bus.$emit('holdActive')
    // this.iid = this.$route.params.iid
    // console.log('params',this.$route.params.iid)
    getDetailData(this.iid).then(res => {
      //保存轮播图数据
      this.lowNowPrice = res.data.result.itemInfo.lowNowPrice
      this.bannerData = res.data.result.itemInfo.topImages
      //保存baseData
      this.detailBaseData = new DetailBaseData(res.data.result.itemInfo, res.data.result.columns, res.data.result.shopInfo.services)
      //保存storeInfo
      this.storeInfo = new storeInfo(res.data.result.shopInfo, res.data.result.shopInfo.score)
      //保存商品详情数据
      this.goodsInfo.detailImages = res.data.result.detailInfo.detailImage
      this.goodsInfo.desc = res.data.result.detailInfo.desc
      //保存goodsParams
      this.goodsParams = new goodsParams(res.data.result.itemParams.info, res.data.result.itemParams.rule)
      //保存评论数据
      if(res.data.result.rate.cRate != 0){
        this.commentInfo = res.data.result.rate
      }
      // else this.commentInfo.message.cRate = 0
    })
    //保存推荐商品的数据
    getRecommend().then(res => {
      this.recommendList = res.data.data.list
    })
    this.$bus.$on('loadAllright',() => {
      console.log('ok')
      this.$refs.detailScroll.refresh()
    })
  },
  mounted() {
    this.getItemY = debounce(() => {
      this.itemOffsetTop = []
      this.itemOffsetTop.push(0)
      this.itemOffsetTop.push(this.$refs.params.$el.offsetTop)
      this.itemOffsetTop.push(this.$refs.comment.$el.offsetTop)
      this.itemOffsetTop.push(this.$refs.recommend.$el.offsetTop)
      this.itemOffsetTop.push(Number.MAX_VALUE)
    }, 200)
  },

}
</script>

<style scoped>
  #detail{
    height: 4000px;
    height: 100vh;
    position: relative;
    z-index: 9999;
    background-color: #fff;
  }
  .content{
    z-index: 99999;
    position: absolute;
    bottom: 49px;
    top: 44px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
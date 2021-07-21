<template>
  <div class="swiper-list">
    <van-swipe :autoplay="2000" indicator-color="red" class="my-swipe">
      <van-swipe-item v-for="(item, index) in bannerData" :key="index">
        <img :src="item.image || item" alt="" @load="imgLoad">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'MySwiper',
  props: {
    bannerData: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    imgLoad(){
      this.$emit('imgLoad')
    },
  },
}
</script>

<style scoped>
  .swiper-list /deep/ .van-swipe__track{
    display: flex;
  }
  .swiper-list /deep/ .van-swipe__indicators {
    z-index: 9999;
    display: flex;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  .swiper-list /deep/ .van-swipe__indicator {
    margin: 0 3px;
    width: 8px;
    height: 8px;
    opacity: 0.8;
    border-radius: 100%;
    background-color: white;
  }
  img{
    width: 100%;
    margin: 0;
    padding: 0;
    vertical-align: bottom;
  }
</style>
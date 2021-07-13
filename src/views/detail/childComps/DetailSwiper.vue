<template>
  <swiper class="swiper">
    <swiper-item v-for="(item, index) in bannerImageData" :key=index>
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index.js'

export default {
  name: 'DetailSwiper',
  props: {
    bannerImageData: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.swiper{
  height: 300px;
  overflow: hidden;
}
</style>
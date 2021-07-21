<template>
  <my-swiper @imgLoad="detailImgLoad" :bannerData="bannerImageData" class="detailswiper"/>
</template>

<script>
import MySwiper from '../../../components/common/swiper/MySwiper.vue'

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
  components: { MySwiper },
  methods: {
    detailImgLoad(){
      // console.log('ok');
    }
  },
}
</script>

<style scoped>
.detailswiper{
  position: relative;
  height: 300px;
  overflow: hidden;
}
</style>
<template>
  <div id="swiper">
    <div class="swiper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props:{

  },
  data(){
    return{
      slideCount: 0, // 元素个数
      swiperStyle: {}, // swiper样式
      totalWidth: 0, //swiper的总宽度
      currentIndex: 1, // 当前的index
    }
  },
  mounted: function () {
    // 1.操作DOM, 在前后添加Slide
    setTimeout(() => {
      //开启定时器
      this.startTimer();
    }, 200)
  },
  methods: {
    startTimer(){
      this.playTimer = setInterval(() => {
        // console.log("right")
      },2000)
    },
    stopTimer(){
      clearInterval(this.playTimer)
    }
  },
}
</script>

<style>
#swiper{
  overflow: hidden;
  position: relative;
}
.swiper{
  display: flex;
}
</style>
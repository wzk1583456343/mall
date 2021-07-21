<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data(){
    return{
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  methods: {
  //   scrollBegin(){
  //     this.scroll = new BScroll(this.$refs.wrapper,{
  //       click: true
  //     })
  //     console.log('scrollBegin')
  //   },
    backTop(x, y, time=300){
      this.scroll.scrollTo(x, y, time)
    },
    finish(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll.refresh()
    }
  },
  mounted() {
    // setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: true,
        mouseWheel: true,//开启鼠标滚轮
        disableMouse: false,//启用鼠标拖动
        disableTouch: false//启用手指触摸 
      })
      this.scroll.refresh()
      this.scroll.on('scroll', (position) => {
        this.$emit("isShow",position)
      })
      this.scroll.on('pullingUp',() => {
        this.$emit("pullingUp")
      })
    // }, 500);
    
  },
}
</script>

<style scoped>
</style>

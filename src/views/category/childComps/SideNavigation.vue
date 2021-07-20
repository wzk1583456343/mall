<template>
  <div class="left">
    <scroll class="leftcontent" ref="leftScroll" v-if="listData">
      <div class="item" v-for="(item, index) in listData"
         :key="index"
         @click="itemClick(index)"
         :class="{activecolor: activeIndex == index}">
         {{item.title}}
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue'
export default {
  components: { Scroll },
  name: 'SideNavigation',
  data() {
    return {
      activeIndex: 0
    }
  },
  props:{
    listData: {
      type: Array,
      default(){
        return []
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.leftScroll.refresh()
    }, 500);
  },
  methods: {
    itemClick(index){
      const obj = {
        index,
        maitKey: this.listData[index].maitKey,
        miniWallkey: this.listData[index].miniWallkey
      }
      this.activeIndex = index
      this.$emit('itemClick', obj)
    },
  },
}
</script>

<style scoped>
  .left{
    width: 30vw;
    position: relative;
    height: 100%;
  }
  .leftcontent{
    overflow: hidden;
    height: 100%;
  }
  .item{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .activecolor{
    color: var(--color-high-text);
    border-left: 3px solid var(--color-high-text);
    background-color: #fff;
  }
  
</style>
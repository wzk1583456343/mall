<template>
  <div class="detail-bar">
    <nav-bar>
      <div slot="left" class="left-wrapper" @click="back"><img src="~/assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="center-wrapper">
        <div v-for="(item, index) in titles" :key="index" :class="{active: activeIndex == index}" @click="isActive(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
// import NavBar from '@asset/components/common/navbar/NavBar.vue'
import NavBar from '../../../components/common/navbar/NavBar.vue'

export default {
  name: 'DetailBar',
  components: {
    NavBar
  },
  data(){
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      activeIndex: 0
    }
  },
  methods: {
    isActive(index){
      this.activeIndex = index
      this.$emit('passIndex',this.activeIndex)
    },
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.center-wrapper{
  display: flex;
  justify-content: center;
}
.center-wrapper div{
  padding: 0 8px;
}
.left-wrapper{
  text-align: center;
  margin-top: 7px;
}
.active{
  color: var(--color-tint);
}
</style>
<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="DetailGoodsInfo">
    <div class="desc">
      <p class="lineA">
        <span class="spanA"></span>
        <span class="spanB"></span>
      </p>
      <p>{{goodsInfo.desc}}</p>
      <p class="lineB">
        <span class="spanB"></span>
        <span class="spanA"></span>
      </p>
    </div>
    <div v-for="(item, index) in goodsInfo.detailImages" :key="index" class="infoItem">
      <div class="title">{{item.key}}</div>
      <div class="img" v-for="adr in item.list" :key="adr"><img :src="adr" alt="" @load="imgLoad"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    goodsInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      this.$emit('imageLoad')
    }
  },
}
</script>

<style scoped>
  .DetailGoodsInfo{
    margin-top: 20px;
    width: 100%;
    padding-bottom: 12px;
    border-bottom: solid 8px #eee;
  }
  /* .infoItem{
    width: 100%;
  } */
  .DetailGoodsInfo img{
    margin: 0;
    padding: 0;
    width: 100%;
    vertical-align: bottom;
  }
  .desc{
    padding: 0 12px;
    margin-bottom: 20px;
  }
  .desc p:nth-child(2){
    margin: 8px 0;
    /* text-align: center; */
  }
  span{
    display: inline-block;
  }
  .lineA{
    display: flex;
    align-items: flex-start;
  }
  .lineB{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .spanA{
    width: 6px;
    height: 6px;
    background-color: #333;
  }
  .spanB{
    height: 1px;
    width: 120px;
    background-color: #333;
  }
  .title{
    font-size: 18px;
    padding: 12px 12px 4px;
  }
</style>
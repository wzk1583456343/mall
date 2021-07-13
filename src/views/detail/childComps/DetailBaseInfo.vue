<template>
  <div class="baseInfo" v-if="Object.keys(baseData) != 0">
    <p class="title">{{baseData.title}}</p>
    <div class="price">
      <span class="nowPrice">{{baseData.price}}</span>
      <span class="oldPrice">{{baseData.oldPrice}}</span>
      <span class="discountDesc" :style="{backgroundColor: baseData.discountBgColor}">{{baseData.discountDesc}}</span>
    </div>
    <div class="other-info">
      <span>{{baseData.columns[0]}}</span>
      <span>{{baseData.columns[1]}}</span>
      <span>{{baseData.services[baseData.services.length-1].name}}</span>
    </div>
    <div class="shop-serve">
      <div v-for="(item, index) in baseData.columns.length-1" :key="index" class="item">
        <span><img :src="baseData.services[item-1].icon" alt="">{{baseData.services[item-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    baseData: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .baseInfo{
    padding: 8px 12px 18px;
    border-bottom: solid 8px #eee;
  }
  .title{
    font-size: 16px;
    color: #333;
    font-weight: 400;
  }
  .price{
    position: relative;
    margin: 10px 0 20px;
  }
  .nowPrice{
    font-size: 20px;
  }
  .oldPrice{
    margin: 0 8px;
    font-size: 14px;
    color: var(--color-text);
  }
  .discountDesc{
    position: absolute;
    top: 3px;
    padding: 2px 4px;
    border-radius: 12px;
    color: #fff;
    font-size: 12px;
  }
  .other-info{
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: var(--color-text);
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(153, 153, 153, 0.199);
  }
  .shop-serve{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 18px;
  }
  .item{
    text-align: center;
  }
  .shop-serve img{
    width: 12px;
    height: 12px;
    margin: 0;
    margin: 0 2px 2px 0;
  }
</style>
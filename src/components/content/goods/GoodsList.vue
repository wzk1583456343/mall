<template>
  <div id="goods">
    <goods-list-item v-for="item in goods" :key="item.shopID" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name: 'GoodsList',
  components:{
    GoodsListItem
  },
  props: {
    goods:{
      type: Array,
      defualt(){
        return []
      }
    }
  }
}
</script>
<style>
  #goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 5px;
  }
</style>
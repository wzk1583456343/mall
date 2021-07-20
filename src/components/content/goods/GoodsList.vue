<template>
  <div id="goods">
    <goods-list-item v-for="item in goods" :key="item.shopID" :goodsItem="item" @passGoodsList="passMessage"/>
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
  },
  computed: {
    showKey(){
      return this.goods.shopID || this.goods.shop_id
    }
  },
  methods: {
    passMessage(){
      this.$emit('passImageLoad')
    }
  },
}
</script>
<style scoped>
  #goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 5px;
  }
</style>
<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imgLoad">
    <div class="item-info">
      <p class="item-title">{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem:{
      type: Object,
      defualt(){
        return {}
      }
    }
  },
  computed: {
    showImage(){
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad(){
      this.$bus.$emit('loadAllright')
      this.$emit('passGoodsList')
    },
    itemClick(){
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goodsItem.iid
        }
      })
      // this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goods-list-item{
  margin-bottom: 10px;
  position: relative;
  width: 47%;
}
.goods-list-item img{
  width: 100%;
  border-radius: 5px;
}
.item-title{
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.price{
  color: var(--color-high-text);
  font-size: 15px;
}
.cfav{
  position: absolute;
  right: 0;
  bottom: 0;
}
.cfav::before{
  content: '';
  display: inline-block;
  /* background-image: url(../../../assets/img/common/collect.svg); */
  background: url("~assets/img/common/collect.svg");
  width: 17px;
  height: 17px;
  background-size: contain;
  position: absolute;
  left: -20px;
  top: -1px;
}

</style>
<template>
  <div id="detail-bottom">
    <div class="icon">
      <div>
        <div class="serve"></div>
        <p>客服</p>
      </div>
      <div>
        <div class="store"></div>
        <p>店铺</p>
      </div>
      <div>
        <div class="collect"></div>
        <p>收藏</p>
      </div>
    </div>
    <div class="text">
      <div  @click="buy">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottom',
  methods: {
    buy(){
      this.$emit('buyItem')
    }
  },
}
</script>

<style scoped>
  #detail-bottom{
    height: 54px;
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    box-shadow: 0 -1px 5px rgba(73, 73, 73, 0.15);
  }
  #detail-bottom>div{
    width: 50%;
  }
  .icon>div{
    padding-top: 4px;
    flex: 1;
    text-align: center;
  }
  .icon>div>div{
    margin: 0 auto;
    background: url('~assets/img/detail/detail_bottom.png');
    width: 30px;
    height: 30px;
    background-size: 100% auto;
  }
  .icon>div>.serve{
    background-position-y: -72px;
  }
  .icon>div>.store{
    background-position-y: -135px;
  }
  .text,.icon{
    display: flex;
  }
  .text div{
    font-size: 17px;
    text-align: center;
    line-height: 54px;
    width: 50%;
    color: #fff;
  }
  .text div:first-child{
    background-color: #FFDD0B;
  }
  .text div:last-child{
    background-color: var(--color-tint);
  }
</style>
<template>
  <div id="otheritem">
    <p><img src="@/assets/img/profile/message.svg" alt=""><span>我的消息</span></p>
    <p><img src="@/assets/img/profile/pointer.svg" alt=""><span>积分商城</span></p>
    <p><img src="@/assets/img/profile/vip.svg" alt=""><span>会员卡</span></p>
    <p @click="goCart"><img src="@/assets/img/profile/cart.svg" alt=""><span>我的购物车</span></p>
    <p><img src="@/assets/img/profile/shopping.svg" alt=""><span>购物街app</span></p>
  </div>
</template>

<script>
export default {
  name: 'otherItem',
  methods: {
    goCart(){
      this.$router.push('/cart')
    }
  },
}
</script>

<style scoped>
  #otheritem p{
    display: flex;
    margin: 0 10px;
    padding: 15px 0;
    align-items: center;
    font-size: 17px;
    border-bottom: 1px solid rgb(226, 226, 226);
  }
  #otheritem p:last-child{
    border: none;
  }
  img{
    padding: 0;
    margin: 0;
    margin-right: 5px;
  }
</style>
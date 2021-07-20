<template>
  <div>
    <div class="personal">
      <div class="avatar"><img :src="userPic" alt=""></div>
      <div class="tel">
        <span class="load">登录</span><span class="line">/</span><span class="register">注册</span>
        <p><img src="@/assets/img/profile/phone.svg" alt="">暂未绑定手机号</p>
      </div>
      <div class="go"><img src="@/assets/img/common/arrow-left.svg" alt=""></div>
    </div>
    <div class="balance">
      <div class="money">
        <p class="num">{{myBalance}}<span>元</span></p>
        <p>我的余额</p>
      </div>
      <div class="discount">
        <p class="num">{{discount}}<span>个</span></p>
        <p>我的优惠</p>
      </div>
      <div class="integral">
        <p class="num">{{integral}}<span>分</span></p>
        <p>我的积分</p>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Personal',
  data(){
    return{
      userPic: require('@/assets/img/profile/avatar.svg'),
      balance: 0,
      discount: 0,
      integral: 0
    }
  },
  computed:{
    myBalance(){
      return this.balance.toFixed(2)
    }
  }
}
</script>

<style scoped>
  .personal{
    width: 100%;
    display: flex;
    padding: 10px;
    background-color: var(--color-tint);
    height: 15vh;
    align-items: center;
    color: #fff;
    
  }
  .avatar{
    width: 20%;
    margin-right: 7px;
  }
  .avatar img{
    width: 100%;
  }
  .load{
    margin-left: 5px;
  }
  .tel{
    flex: 1;
    font-size: 17px;
  }
  .line{
    margin: 0 3px;
  }
  .personal p{
    font-size: 17px;
    margin-top: 3px;
    display: flex;
    vertical-align: text-bottom;
    align-items: center;
  }
  .balance{
    display: flex;
    background-color: #fff;
    border-bottom: 11px solid #eee;
  }
  .balance>div{
    padding: 20px 0;
    flex: 1;
    border-right: 1px solid rgb(226, 226, 226);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .num{
    margin-bottom: 5px;
    font-size: 21px;
    color: var(--color-high-text);
  }
  .num span{
    font-size: 16px;
    margin-left: 2px;
  }
</style>
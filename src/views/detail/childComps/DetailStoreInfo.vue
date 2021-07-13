<template>
  <div class="storeInfo">
    <div class="store">
      <div class="logo"><img :src="storeInfo.logo" alt=""></div>
      <div class="name">{{storeInfo.name}}</div>
    </div>
    <div class="otherInfo">
      <div class="num">
        <div class="wrapper">
          {{numUtil}}
          <p>总销量</p>
        </div>
        <div class="wrapper">
          {{storeInfo.AllGoods}}
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="score">
        <p v-for="(item, index) in storeInfo.score" :key="index">
          <span>{{item.name}} </span>
          <span :class="{fontColor: item.isBetter}">{{item.score}} </span>
          <span :class="{bgColor: item.isBetter}">{{item.isBetter?'高':'低'}}</span>
        </p>
      </div>
    </div>
    <div class="goStore">
      <span>进入店铺</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailStoreInfo',
  props: {
    storeInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    numUtil(){
      return (this.storeInfo.Allsales / 10000).toFixed(1) + ' 万'
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
  .storeInfo{
    padding: 10px 12px;
    border-bottom: solid 8px #eee;
  }
  .store{
    display: flex;
    align-items:center;
  }
  .logo{
    border-radius: 50%;
    border: 1px solid rgb(172, 172, 172);
    overflow: hidden;
    height: 40px;
    text-align: center;
    width: 40px;
  }
  .logo img{
    width: 70%;
  }
  .name{
    margin-left: 10px;
    font-size: 18px;
    text-align: center;
  }
  .otherInfo{
    display: flex;
    margin-top: 30px;
    align-items: center;
  }
  .num{
    width: 50%;
    display: flex;
    text-align: center;
    justify-content: space-around;
    border-right: 1px solid rgb(172, 172, 172);
  }
  .num .wrapper{
    vertical-align: text-bottom;
    font-size: 20px;
  }
  .num p{
    margin-top: 6px;
    font-size: 14px;
  }
  .score{
    width: 50%;
    margin-left: 50px;
  }
  .score p{
    width: 100%;
    text-align: left;
    font-size: 14px;
    margin: 8px 0;
  }
  .score p span:last-child{
    color: #fff;
    background-color: green;
  }
  .score p span:nth-child(2){
    display: inline-block;
    color: green;
    width: 32px;
    margin: 0 5px;
  }
  .score p span.bgColor{
    background-color: red;
  }
  .score p span.fontColor{
    color: red;
  }
  .goStore{
    margin-top: 20px;
    text-align: center;
    width: 100%;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .goStore span{
    padding: 6px 20px;
    border-radius: 5px;
    background-color: rgb(216, 216, 216);
  }
</style>
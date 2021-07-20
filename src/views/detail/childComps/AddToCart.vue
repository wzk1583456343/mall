<template>
  <transition name="fade">
    <div id="addcart" v-if="isShow">
      <div class="head">
        <div class="decs">
          <div class="img"><img :src="itemData.img" alt=""></div>
          <div>
            <p class="title">{{itemData.title}}}</p>
            <p class="price">￥{{itemData.price}}</p>
          </div>
        </div>
        <div class="exit" @click="exit">×</div>
      </div>
      <div class="main">
        <p>购买数量</p>
        <p>
          <button @click="decrease">-</button>
          <span>{{itemData.count}}</span>
          <button @click="increase">+</button>
        </p>
      </div>
      <div class="end" @click="add">添加至购物车</div>
    </div>
  </transition> 
</template>

<script>
export default {
  name: 'AddToCart',
  data(){
    return {
      isShow: false,
      itemData: this.passData,
    }
  },
  props: {
    passData: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    exit(){
      console.log()
      this.isShow = false
    },
    add(){
      this.isShow = false
      console.log(this.itemData)
      this.$store.commit('getCartData', this.itemData)
    },
    increase(){
      this.$forceUpdate()
      this.itemData.count++
    },
    decrease(){
      if(this.itemData.count<=0){
        this.itemData.count == 0
      } else {
        this.itemData.count--
      }
      this.$forceUpdate()
    }
  },
}
</script>

<style scoped>
  #addcart{
    position: absolute;
    bottom: 0;
    z-index: 999999;
    border-radius: 10px 10px 0 0;
    background-color: #fff;
    width: 100%;
    height: 80%;
    bottom: 0;
    padding: 25px 15px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
  }
  .fade-enter {
    transform: translateY(100vh);
  }
  .fade-enter-active {
    transition: transform 0.5s;
  }
  .fade-leave-to {
    transform: translateY(100vh);
  }      
  .fade-leave-active {
    transition: transform 0.5s;
  }
  .head{
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(226, 226, 226);
    /* margin-top: 20px; */
  }
  .head .decs{
    display: flex;
  }
  .decs>div:last-child{
    margin-left: 10px;
    width: 60vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .price{
    font-size: 17px;
    color: var(--color-tint);
  }
  .img{
    display: inline-block;
    width: 20vw;
    /* border: 1px #333 solid; */
  }
  .img img{
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: 4px;
  }
  .exit{
    font-size: 18px;
    color: rgb(173, 173, 173);
    width: 18px;
    height: 18px;
    border: 2px rgb(173, 173, 173) solid;
    border-radius: 50%;
    text-align: center;
    line-height: 18px;
  }
  .end{
    width: 100%;
    line-height: 40px;
    border-radius: 20px;
    text-align: center;
    /* background-color: rgba(255, 166, 0, 0.801); */
    background-color: var(--color-high-text);
    color: #fff;
  }
  .main{
    display: flex;
    justify-content: space-between;
    flex: 1;
    margin-top: 20px;
  }
  .main p:last-child{
    display: flex;
  }
  .main p:last-child span{
    width: 23px;
    height: 18px;
    line-height: 18px;
    background-color: rgba(51, 51, 51, 0.096);
    text-align: center;
    margin: 0 4px;
  }
  .main p:last-child button{
    width: 18px;
    height: 18px;
    line-height: 18px;
    border: none;
  }
</style>
<template>
  <div id="cartBottom">
    <div>
      <div class="check-button"
         :class="{buttonactive: isSelectAll}"
         @click="checkBottom">
        <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
      <span>全选</span>
    </div>
    <div class="buy">
      <span class="totallPrice">{{totallPrice}}</span>
      <span class="pay">支付({{checkedNum}})</span>
    </div>
  </div>
</template>

<script>
// import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
export default {
  components: {
    // CheckButton
  },
  name: 'CartBottom',
  methods: {
    checkBottom(){
      console.log('bottom right');
      this.$store.commit('checkedAll')
      this.$forceUpdate()
    }
  },
  computed: {
    checkedNum(){
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preV, item) => {
        return preV + item.count
      },0)
    },
    totallPrice(){
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preV, item) => { 
        return preV + item.price * item.count
      }, 0).toFixed(2)
    },
    isSelectAll(){
      if(this.$store.state.cartList.length == 0) return false
      return !(this.$store.state.cartList.find( item => !item.checked))
    }
  },
}
</script>

<style scoped>
  #cartBottom{
    width: 100%;
    height: 40px;
    background-color: rgb(236, 236, 236);
    position: absolute;
    bottom: 49px;
    z-index: 99999;
    display: flex;
    justify-content: space-between;
    padding: 0 0 0 10px;
  }
  #cartBottom>div:first-child{
    display: flex;
    align-items: center;
  }
  .buy{
    display: flex;
    align-items: center;
  }
  span{
    margin-left: 8px;
  }
  .check-button{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid rgba(51, 51, 51, 0.295);
    margin: auto 0;
  }
  .buttonactive{
    background-color: var(--color-tint);
    border-color: var(--color-tint);
  }
  img{
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .pay{
    font-size: 14px;
    line-height: 40px;
    padding: 0 10px;
    height: 100%;
    color: #fff;
    background-color: var(--color-high-text);
  }
</style>
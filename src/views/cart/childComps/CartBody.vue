<template>
  <div class="cartbody">
    <scroll class="cart-scroll" ref="cartscroll">
      <div v-for="(item, index) in cartList" :key="item.iid">
        <div id="cart-item" v-if="cartList">
          <div class="check-button"
               :class="{buttonactive: item.checked}"
               @click="itemClick(index)">
          <!-- <van-checkbox checked-color="red" v-model="item.checked" @click="itemClick(index)"> -->
            <img src="~/assets/img/cart/tick.svg" alt="">
          <!-- </van-checkbox> -->
          </div>
          <img class="ad" :src="item.img" alt="" @load="cartImageLoad">
          <div class="other-info">
            <div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
            <div class="price">
              <span>￥{{item.price}}</span>
              <span>×{{item.count}}</span>
            </div>
          </div>
        </div>
      </div>
    </scroll>
    <div id="cartBottom">
      <div>
        <div class="check-button"
          :class="{buttonactive: !isAllChecked}"
          @click="allClick">
          <img src="~/assets/img/cart/tick.svg" alt="">
        </div>
        <span>全选</span>
      </div>
      <div class="buy">
        <span class="totallPrice">合计 ￥：{{totallPrice.toFixed(2)}}元</span>
        <span class="pay">支付({{totallCount}})</span>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'CartBody',
  components: { Scroll },
  computed: {
    ...mapGetters([
      'cartList', 'totallCount', 'totallPrice', 'isAllChecked'
    ])
  },
  methods: {
    cartImageLoad(){
      this.$refs.cartscroll.refresh()
    },
    itemClick(index){
      this.$store.commit('changeChecked', index)
    },
    allClick(){
      this.$store.commit('checkedAll')
    }
  },
}
</script>

<style scoped>
  /* .van-checkbox{
    width: 50px;
    height: 50px;
    background-color: red;
  }
  .van-checkbox>div{
    height: 100%;
    border: 1px black solid;
  } */
  .cart-scroll{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 40px;
    width: 100%;
    overflow: hidden;
  }
  /* 购物车商品样式 */
  #cart-item{
    width: 100%;
    background-color: #fff;
    display: flex;
    height: 23vh;
    border-bottom: 1px solid rgba(51, 51, 51, 0.171);
    padding: 10px 5px;
  }
  img.ad{
    margin: 0;
    padding: 0;
    /* width: 100%; */
    height: 100%;
    width: auto;
    vertical-align: top;
    border-radius: 8px;
    flex: 0;
    margin: 0 10px 0 8px;
  }
  .other-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    width: 50%;
  }
  .title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    font-size: 20px;
    margin-bottom: 15px;
    font-size: 18px;
  }
  .desc{
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
  }
  .price{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price span:first-child{
    font-size: 19px;
    color: orange;
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
  /* 购物车底部样式 */
  #cartBottom{
    width: 100%;
    height: 40px;
    background-color: rgb(243, 243, 243);
    position: absolute;
    bottom: 0;
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
    text-align: center;
    font-size: 14px;
    line-height: 40px;
    width: 100px;
    height: 100%;
    color: #fff;
    background-color: var(--color-high-text);
  }
</style>
<template>
  <div id="cart-item" v-if="cartItem">
    <!-- <check-button ref="checkButton" 
                  class="check" 
                  :iactive="cartItem.checked" 
                  @click.native="checkClick"/> -->
    <div class="check-button"
         :class="{buttonactive: cartItem.checked}"
         @click="checkClick">
      <img src="~/assets/img/cart/tick.svg" alt="">
    </div>

    <img class="ad" :src="cartItem.img" alt="">
    <div class="other-info">
      <div>
        <div class="title">{{cartItem.title}}</div>
        <div class="desc">{{cartItem.desc}}</div>
      </div>
      <div class="price">
        <span>￥{{cartItem.price}}</span>
        <span>×{{cartItem.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
export default {
  components: {
    // CheckButton
  },
  name: 'CartListItem',
  data(){
    return{
    }
  },
  props: {
    cartItem: {
      type: Object,
      default(){
        return {}
      }
    },
    itemIndex: {
      type: Number,
      default: null
    }
  },
  watch: {
    cartItem: {
      handler(newV, oldV){
        console.log('newV', newV)
        console.log('oldV', oldV)
      },
      deep: true,
    }
  },
  methods: {
    checkClick(){
      this.$store.commit('changeChecked', this.itemIndex)
      this.$forceUpdate()
    }
  },
  // watch: {
  //   cartItem: {
  //     handler: function(){
  //       console.log('get')
  //     },
  //     deep: true
  //   }
  // }
}
</script>

<style scoped>
  #cart-item{
    width: 100%;
    background-color: #fff;
    display: flex;
    height: 25vh;
    border-bottom: 1px solid rgba(51, 51, 51, 0.171);
    padding: 10px 10px;
  }
  /* .img-wrapper{
    width: 30%;
    height: auto;
    overflow: hidden;
  } */
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
  }
  .desc{
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
</style>
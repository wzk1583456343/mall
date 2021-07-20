<template>
  <div class="cart-list">
    <scroll class="cart-scroll" ref="cartScroll">
      <cart-list-item v-for="(item, index) in cartData" 
                      :key="item.iid"
                      :cartItem="item"
                      :itemIndex="index"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    Scroll, 
    CartListItem 
  },
  name: 'CartList',
  data(){
    return{
      cartData: this.cartList
    }
  },
  created() {
    this.cartData = this.$store.state.cartList
  },
  activated() {
    this.$refs.cartScroll.refresh()
  },
}
</script>

<style scoped>
  .cart-list{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 79px;
    width: 100%;
  }
  .cart-scroll{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
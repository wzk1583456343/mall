<template>
  <div id="cart">
    <div class="top-bar">
      <nav-bar>
        <div slot="center">购物车({{$store.state.cartList.length}})</div>
      </nav-bar>
    </div>
    <cart-list/>
    <cart-bottom @click.native="passChange"/>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartBottom from './childComps/CartBottom.vue'
import CartList from './childComps/CartList.vue'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottom
  },
  methods: {
    passChange(){
      // console.log('getPass');
    }
  },
}
</script>

<style scoped>
  #cart{
    position: relative;
    height: 100vh;
    background-color: #fff;
  }
  .top-bar{
    color: #fff;
    background-color: var(--color-tint);
  }

</style>
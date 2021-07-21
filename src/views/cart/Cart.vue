<template>
  <div id="cart">
    <div class="top-bar">
      <nav-bar>
        <div slot="center">购物车(<span>{{cartLength}}</span>)</div>
      </nav-bar>
    </div>
    <cart-body ref="refresh" class="cart-body"></cart-body>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartBody from './childComps/CartBody.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartBody,
  },
  computed: {
    ...mapGetters([
      'cartLength',
    ])
  },
  activated() {
    this.$refs.refresh.cartImageLoad()
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
  .cart-body{
    top: 44px;
    height: auto;
    bottom: 49px;
    left: 0;
    right: 0;
    position: absolute;
  }
</style>
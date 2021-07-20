<template>
  <div id="profile">
    <nav-bar class="nav"><div slot="center">我的</div></nav-bar>
    <personal/>
    <other-item/>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import OtherItem from './childComps/otherItem.vue'
import Personal from './childComps/Personal.vue'
export default {
  components: {
    NavBar,
    Personal,
    OtherItem
  },
  name: 'Profile'
}
</script>

<style scoped>
  #profile{
    width: 100vw;
  }
  .nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
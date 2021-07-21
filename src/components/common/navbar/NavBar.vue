<template>
  <div class="nav-bar">
    <div class="navbar-left"><slot name="left"></slot></div>
    <div class="navbar-center"><slot name="center"></slot></div>
    <div class="navbar-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
}
.navbar-left,
.navbar-center,
.navbar-right{
  width: 60px;
}
div.navbar-center{
  flex: 1;
  text-align: center;
  line-height: 44px;
}
</style>
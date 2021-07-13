<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
  .back-top{
    position: fixed;
    z-index: 99999;
    right: 12px;
    bottom: 55px;
  }
  img{
    width: 50px;
    height: 50px;
  }
</style>
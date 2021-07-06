<template>
  <div id="swiperItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem'
}
</script>

<style>
#swiperItem{
  width: 100%;
  flex-shrink: 0;
}
#swiperItem img{
  vertical-align: top;
  width: 100%;
  margin: 0;
}
</style>
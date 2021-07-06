<template>
   <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
#tab-bar{
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  bottom: -2px;
  left: 0;
  right: 0;
  text-align: center;
  box-shadow: 0 -1px 5px rgba(73, 73, 73, 0.15);
}
</style>
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div><slot name="itemText"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  computed: {
    isActive(){
      return this.$route.path == this.path
    }
  },
  methods: {
    itemClick(){
      if(this.$route.path != this.path)
        this.$router.push(this.path)
    }
  },
  props: {
    path: String
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  height: 49px;
}
img{
  width: 22px;
  vertical-align: bottom;
  margin-top: 5px;
  margin-bottom: 3px;
}
</style>
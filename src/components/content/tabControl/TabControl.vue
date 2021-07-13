<template>
  <div class="tab-control">
    <div class="tab-control-item"
    v-for="(item, index) in titles" :key="index"
    :class="{active: index==activeIndex}"
    @click="itemClick(index)">
      <span>
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
    titles:{
      type: [],
      defualt(){
        return []
      }
    }
  },
  data(){
    return{
      activeIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.activeIndex = index
      this.$emit('TabControlClick', index)
    }
  },
}
</script>

<style scoped>
  .tab-control{
    z-index: 99;
    display: flex;
    width: 100%;
    text-align: center;
    margin: 10px 0 20px;
    line-height: 45px;
    font-size: 16px;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-high-text);
    padding: 5px;
  }
  
</style>
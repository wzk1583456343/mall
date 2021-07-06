<template>
  <div id="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props:{
    recommends:{
      type: Array,
      defualt(){
        return []
      }
    }
  }
}
</script>

<style>
  #recommend{
    width: 100%;
    display: flex;
    padding: 8px 8px 20px 8px;
    border-bottom: 10px solid #eee;
    text-align: center;
  }
  #recommend img{
    width: 90px;
    height: 90px;
    margin-bottom: 14px;
  }
  .recommend-item{
    flex: 1;
  }
</style>
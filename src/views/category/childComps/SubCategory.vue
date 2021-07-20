<template>
  <div class="subcategory" v-if="subData">
    <div class="item" v-for="(item, index) in subData" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="subImageLoad" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubCategory',
  props: {
    subData: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    subImageLoad(){
      this.$emit('subImageLoad')
    }
  },
}
</script>

<style scoped>
  .subcategory{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .item{
    width: 33.3%;
    margin: 10px 0;
  }
  .item img{
    width: 80%;
    margin-bottom: 5px;
  }
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
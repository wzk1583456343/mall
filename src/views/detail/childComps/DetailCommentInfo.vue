<template>
  <div class="wrapper" v-if="Object.keys(rate).length !== 0">
    <div class="commentLnfo" v-if="rate.cRate != 0">
      <div class="totall">
        <span>用户评价</span>
        <span>更多</span>
      </div>
      <div class="cust-info">
        <div class="img"><img :src="rate.list[0].user.avatar" alt=""></div>
        <div class="uname">{{rate.list[0].user.uname}}</div>
      </div>
      <p>{{rate.list[0].content}}</p>
      <div class="otherInfo">
        <span>{{rate.list[0].created | showDate}}</span>
        <span>{{rate.list[0].style}}</span>
      </div>
      <div class="images">
        <img v-for="(item, index) in rate.list[0].images" :key="index" :src="item" alt="">
      </div>
    </div>
    <div v-else>
      <div class="totall">
        <span>用户评价: 0</span>
        <span>更多</span>
      </div>
    </div>
  </div>
</template>

<script>
import {format} from '@/common/util.js'
export default {
  name: 'DetailCommentInfo',
  props: {
    rate: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    showDate(value){
      const date = new Date(value * 1000)
      return format(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
  .wrapper{
    background-color: #fff;
    padding: 16px 12px;
  }
  .totall{
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 3px solid #eee;
    padding-bottom: 12px;
  }
  .cust-info{
    display: flex;
    align-items: center;
    margin: 12px 0;
  }
  .cust-info .img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    margin-right: 10px;
    overflow: hidden;
  }
  .cust-info .img img{
    width: 100%;
    margin: 0;
  }
  .otherInfo{
    color: rgb(214, 214, 214);
    margin: 6px 0;
  }
  .otherInfo span:nth-child(1){
    margin-right: 5px;
  }
  .images{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .images img{
    width: 33.3%;
    height: 33.3%;
  }
</style>
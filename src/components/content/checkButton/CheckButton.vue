<template>
  <div id="check-button" :class="{buttonactive: onActive}">
    <img src="~/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  data(){
    return {
      onActive: this.active
    }
  },
  props: {
    iactive: {
      type: Boolean,
      default: false
    }
  },
  created() {
    // console.log(this.active)
  },
  methods: {
    changeState(){
      // this.onActive = !this.onActive
    },
  },
}
</script>

<style scoped>
  #check-button{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid rgba(51, 51, 51, 0.295);
    margin: auto 0;
  }
  .buttonactive{
    background-color: var(--color-tint);
    border-color: var(--color-tint);
  }
  img{
    margin: 0;
    padding: 0;
    width: 100%;
  }
</style>
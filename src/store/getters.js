export default{
  cartLength(state){
    return state.cartList.length
  },
  cartList(state){
    return state.cartList
  },
  totallCount(state){
    return state.cartList.filter(item => {
      return item.checked
    }).reduce((preV, item) => {
      return preV + item.count
    }, 0)
  },
  totallPrice(state){
    return state.cartList.filter(item => {
      return item.checked
    }).reduce((preV, item) => {
      return preV + item.price * item.count
    }, 0)
  },
  isAllChecked(state){
    return state.cartList.length ? state.cartList.find(item => !item.checked) : true
  }
}
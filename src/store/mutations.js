export default {
    updatePositionY(state, newPositionY){
      state.positionY = newPositionY
    },
    getCartData(state, cartData){
      let oldProduct = state.cartList.find(item => item.iid === cartData.iid)
      if(oldProduct){
        oldProduct.count += cartData.count
      } else {
        cartData.checked = false
        state.cartList.push(cartData)
      }
    },
    changeChecked(state, index){
      state.cartList[index].checked = !state.cartList[index].checked
    },
    checkedAll(state){
      let flag = state.cartList.find(item => !item.checked)
      if(flag){
        state.cartList.forEach(element => {element.checked = true});
      } else {
        state.cartList.forEach(element => {element.checked = false})
      }
    }
    // checkedAll(state){
    //   state.cartList.forEach(element => {element.checked = true})
    // }
}
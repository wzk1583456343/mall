import Vue from "vue"

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
      let newObj = state.cartList[index]
      newObj.checked = !newObj.checked
      state.cartList.splice(index, 1, newObj)
    },
    checkedAll(state){
      let flag = state.cartList.find(item => !item.checked)
      if(flag){
        for(let i=0; i<state.cartList.length; i++){
          let obj1 = state.cartList[i]
          obj1.checked = true
          state.cartList.splice(i, 1, obj1)
        }
      } else {
        for(let i=0; i<state.cartList.length; i++){
          let obj1 = state.cartList[i]
          obj1.checked = false
          state.cartList.splice(i, 1, obj1)
        }
      }
    }
}
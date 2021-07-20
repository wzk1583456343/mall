import Toast from './Toast'
let obj = {}
obj.install = function(Vue){
  //1.创建组件构造器
  const tosatContrustor = Vue.extend(Toast)
  //2.创建一个组件对象
  const toast = new tosatContrustor()
  //3.将组建挂载到某个元素
  toast.$mount(document.createElement('div'))
  //4.将div加入body中
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}

export default obj
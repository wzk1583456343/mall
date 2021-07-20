import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueLazyLoad from 'vue-lazyload'
// import toast from './components/common/toast/toast'

// Vue.use(toast)
Vue.use(VueLazyLoad, {
  loading: require('@/assets/img/common/placeholder.png')
})
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/cart/Cart.vue'
import Category from '../views/category/Category.vue'
import Home from '../views/home/Home.vue'
import Profile from '../views/profile/Profile.vue'
// import Detail from '../views/detail/Detail.vue'
const Detail = () => import('../views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Cart from '../views/cart/Cart.vue'
import Category from '../views/category/Category.vue'
const Home = () => import('../views/home/Home.vue')
// import Home from '../views/home/Home.vue'
import Profile from '../views/profile/Profile.vue'
// import Detail from '../views/detail/Detail.vue'
const Detail = () => import('../views/detail/Detail.vue')
const Cart = () => import('../views/cart/Cart.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {keepAlive: true}
  },
  {
    path: '/cart',
    component: Cart,
    meta: {keepAlive: false}
  },
  {
    path: '/category',
    component: Category,
    meta: {keepAlive: true}
  },
  {
    path: '/profile',
    component: Profile,
    meta: {keepAlive: true}
  },
  {
    path: '/detail',
    component: Detail,
    meta: {keepAlive: false}
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

//导航守卫

export default router
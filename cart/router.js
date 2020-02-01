import Vue from 'vue'
import Router from 'vue-router'
import index from './pages/index'
import cart from './pages/cart'

Vue.use(Router)
const routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/cart',
    component: cart
  }
]

export default new Router({
  routes
})
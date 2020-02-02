import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import List from '../views/List'
import PlayList from '../views/PlayList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/playlist',
    component: PlayList
  },
  {
    path: '/list',
    component: List
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.B、ASE_URL,
  routes
})

export default router

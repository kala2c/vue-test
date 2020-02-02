import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import FormSimple from '../views/form/Simple'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/form/simple',
    name: 'form-simple',
    component: FormSimple
  },
  // {
  //   path: '/form/simple',
  //   name: 'form-simple',
  //   component: FormSimple
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

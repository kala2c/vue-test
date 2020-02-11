import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {title: '登录'}
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    component: Layout,
    children: [
      { 
        path: '/about',
        component: () => import('../views/About.vue') 
      }, {
        path: '/dashboard/welcome',
        component: () => import('../views/dashboard/Welcome.vue')
      }, {
        path: '/dashboard/console',
        component: () => import('../views/dashboard/Console.vue')
      }, { 
        path: '/form/simple',
        component: () => import('../views/form/Simple.vue') 
      }, {
        path: '/form/step',
        component: () => import('../views/form/Step.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

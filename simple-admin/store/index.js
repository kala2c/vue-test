import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [
      {
        id: 1,
        title: 'welcome',
        link: [
          {
            id: 1,
            name: '欢迎页面',
            path: '/welcome/welcome'
          },
          {
            id: 2,
            name: '关于页面',
            path: '/welcome/about'
          }
        ]
      },
      {
        id: 2,
        title: '表单',
        link: [
          {
            id: 1,
            name: '普通表单',
            path: '/form/simple'
          },
          {
            id: 2,
            name: '高级表单',
            path: '/form/step'
          }
        ]
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

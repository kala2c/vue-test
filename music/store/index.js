import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPlay: false,
    playType: 'random',
    musicSelectedIndex: 0,
    playList: [
      // {
      //   id: 1,
      //   name: "告白气球",
      //   singer: "周杰伦",
      //   url: "http://static.c2wei.cn/1.mp3"
      // },
      {
        id: 2,
        name: "睡公主",
        singer: "邓紫棋",
        url: "http://qn.clw-music.c2wei.cn/22.mp3"
      },
      // {
      //   id: 3,
      //   name: "北京北京",
      //   singer: "邓紫棋",
      //   url: "http://static.c2wei.cn/3.mp3"
      // },
      // {
      //   id: 4,
      //   name: "爱过那张脸",
      //   singer: "李代沫",
      //   url: "http://qn.clw-music.c2wei.cn/4.mp3"
      // }
    ]
  },
  mutations: {
    pushMusic(state, { music, play }) {
      let currentIndex = -1
      state.playList.forEach((item, index) => {
        if (item.id === music.id) {
          currentIndex = index
        }
      })
      if (currentIndex === -1) {
        state.playList.push(music)
        if (play) {
          state.musicSelectedIndex = state.playList.length-1
          state.isPlay = true
        }
      } else {
        if (play) {
          state.musicSelectedIndex = currentIndex
          state.isPlay = true
        }
      }
    },
    selectMusic(state, {music}) {
      let currentIndex = -1
      state.playList.forEach((item, index) => {
        if (item.id === music.id) {
          currentIndex = index
        }
      })
      if (currentIndex === -1) {
        return
      }
      state.musicSelectedIndex = currentIndex
    },
    deleteMusic(state, { music }) {
      let currentIndex = -1
      state.playList.forEach((item, index) => {
        if (item.id === music.id) {
          currentIndex = index
        }
      })
      if (currentIndex === -1) {
        return
      }
      state.playList.splice(currentIndex, 1)
      if (currentIndex < state.musicSelectedIndex) {
        state.musicSelectedIndex --
      }
      if (state.musicSelectedIndex === currentIndex) {
        this.commit("nextMusic")
      }
    },
    switchPlayType(state, {playType}) {
      let playTypeList = ['sequence', 'random', 'single']
      if (playTypeList.indexOf(playType) > -1) {
        state.playType = playType
      }
    },
    nextMusic(state) {
      if (state.playList.length < 1) return
      switch (state.playType) {
        case 'sequence':
          state.musicSelectedIndex ++ 
          if (state.musicSelectedIndex > state.playList.length-1) {
            state.musicSelectedIndex = 0
          }
          break
        case 'random':
          let oldIndex = state.musicSelectedIndex
          let newIndex = Math.floor(Math.random()*state.playList.length)
          while (oldIndex === newIndex && state.playList.length > 1) {
            newIndex = Math.floor(Math.random()*state.playList.length)
          }
          state.musicSelectedIndex = newIndex
          break
        case 'single':
          return
          break
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

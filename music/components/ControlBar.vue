<template>
  <div class="control-bar">
    <div class="progress" id="progress" @click="changeProcess">
      <span class="vernier" :style="{left: vernierLeft+'px'}"></span>
    </div>
    <div class="disk"></div>
    <div v-if="musicSelected" class="content">
      <p>{{musicSelected.name}}-{{musicSelected.singer}}</p>
    </div>
    <div v-else class="content">
      <p>未选择歌曲</p>
    </div>
    <div class="right">
      <span @click="play">
        <i class="fa" :class="{'fa-play-circle-o': !isPlay, 'fa-pause-circle-o': isPlay}"></i>
      </span>
      <span class="next" @click="next">
        <i class="fa fa-play"></i>
      </span>
      <span @click="toPlayList">
        <i class="fa fa-bars"></i>
      </span>
    </div>
    <audio id="player" style="display: none" :src="musicUrl" controls="controls"></audio>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import { setInterval } from 'timers'
let _ = require('lodash')
export default {
  components: {
  },
  data() {
    return {
      player: null,
      currentTime: 0,
      duration: 0,
      progressWidth: 375
    }
  },
  computed: {
    ...mapState(['isPlay', 'playType', 'playList', 'musicSelectedIndex']),
    musicSelected() {
      return this.playList[this.musicSelectedIndex] || null
    },
    musicUrl() {
      return this.musicSelected ? this.musicSelected.url : ''
    },
    process() {
      let process = this.currentTime / this.duration
      return process.toFixed(2)
    },
    vernierLeft() {
      return Math.round(this.progressWidth*this.process)-15
    }
  },
  watch: {
    musicUrl(val) {
      this.init()
    }
  },
  methods: {
    ...mapMutations(['nextMusic']),
    play() {
      if (!this.musicSelected) return
      this.$store.state.isPlay = !this.$store.state.isPlay
      if (this.$store.state.isPlay) {
        this.player.play()
      } else {
        this.player.pause()
      }
    },
    // 下一曲
    next() {
      // 如果是单曲循环或列表只有一首歌 只重置进度
      if (this.playType == 'single' || this.playList.length < 2) {
        this.player.currentTime = 0 
      }
      this.nextMusic();
    },
    toPlayList() {
      let path = '/playlist'
      if (this.$route.path === path) {
        this.$router.go(-1)
      } else {
        this.$router.push({
          path
        })
      }
    },
    changeProcess() {
      let rate = event.clientX / this.progressWidth
      rate = rate.toFixed(2)
      this.currentTime = this.duration * rate
      this.player.currentTime = this.currentTime
    },
    init() {
      // 获取播放器的已播放时长和总时长
      this.currentTime = 0
      this.duration = parseInt(this.player.duration) || 300  //往往歌曲载入完成时才能拿到该属性 因此下面还会获取
      // 歌曲开始载入时
      this.player.addEventListener('loadstart', e => {
        // console.log(e)
      })
      // 歌曲载入完成时
      this.player.addEventListener('canplaythrough', e => {
        // 当前播放时间
        this.currentTime = this.player.currentTime
        // 获取歌曲总时长
        this.duration = parseInt(this.player.duration)
        if (this.isPlay) {
          this.player.play()
        }
      })
    }
  },
  mounted() {
    // 进度条宽度
    // this.progressWidth = window.innerWidth
    let progress = document.querySelector('#progress')
    this.progressWidth = parseInt(getComputedStyle(progress, null)['width'])
    // 获取播放器的dom对象
    this.player = document.querySelector('#player') 
    // 初始化
    this.init()
    // 监听已播放时长变化
    this.player.addEventListener('timeupdate', _.throttle((e) => {
      this.currentTime = parseInt(this.player.currentTime)
      console.log(this.player.ended, this.currentTime, this.duration)
      console.log(this.process, this.vernierLeft, this.progressWidth)
      if (this.player.ended) {
        this.next()
      }
    }, 1000))
  }
}
</script>

<style scoped lang="scss">
.control-bar {
  position: absolute;
  z-index: 20;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee; 
  background-color: #fff;
  .progress {
    position: absolute;
    top: -5px;
    width: 100%;
    height: 5px;
    background-color: #1e9fff;
    .vernier {
      position: absolute;
      z-index: 30;
      top: -5px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .disk {
    position: absolute;
    top: -5px;
    left: 5px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-image: radial-gradient(circle, #444 0%, #333 100%);
    background-size: cover;
    background-position: center;
    animation: roll 5s infinite linear;
  }
  .disk::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-image: linear-gradient(45deg, white, #dabad1);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    transform: translate3d(-50%, -50%, 0)
  }
  @keyframes roll {
    0% {
      transform: rotate(0deg);
    } 
    100% {
      transform: rotate(360deg);
    }
  }
  .content {
    display: flex;
    flex: 1;
    padding-left: 70px;
  }
  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5em;
    span {
      padding-right: 20px;
    }
    span.next {
      font-size: .7em;
    }
  }
}
</style>

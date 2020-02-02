<template>
  <div class="list">
    <head-bar class="head-bar" :title="pageTitle" :right="''" @left="$router.go(-1)"></head-bar>
    <ul class="list-group">
      <li 
        class="list-group-item"
        v-for="(music, index) in musicList" 
        :key="music.id">
        <!-- :class="{active: music.id === musicSelectedIndex}"  -->
        <div class="index">{{index+1}}</div>
        <div class="content">
          <p>{{music.name}}</p>
          <p><small>{{music.singer}}</small></p>
        </div>
        <div class="right">
          <span @click="pushMusic({ music, play: true })">
            <i class="fa fa-play-circle"></i>
          </span>
          <span @click="pushMusic({ music, play: false })">
            <i class="fa fa-plus"></i>
          </span>
        </div>
      </li>
    </ul>
    <div class="tip" v-show="isTipShow" @click="hideTip">
      点击+号添加的歌曲在这
      <div class="triangle">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import HeadBar from '../components/HeadBar'
import global from '../utils/global'
let host = global.API_HOST
export default {
  components: {
    HeadBar
  },
  data() {
    return {
      pageTitle: '',
      musicList: [],
      isTipShow: true
    }
  },
  // computed: {
  // },
  methods: {
    ...mapMutations(['pushMusic']),
    hideTip() {
      this.isTipShow = false
    }
  },
  mounted() {
    this.pageTitle = this.$route.query.groupName
    let id = this.$route.query.id
    this.axios.get(host+"music/list.json?id="+id).then(res => {
      this.musicList = res.data
    }).then(err => {
      console.log(err)
    })
    setTimeout(() => {
      this.isTipShow = false
    }, 100*10*10)
  }
}
</script>

<style scoped lang="scss">
.list {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .list-group {
    box-sizing: border-box;
    height: 100%;
    overflow: auto;
    padding-bottom: 50px;
    .list-group-item {
      display: flex;
      align-items: center;
      height: 70px;
      border-bottom: 1px solid #ebebeb;
      .index {
        width: 60px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content {
        flex: 1;
      }
      .right {
        padding: 0 10px;
        font-size: 1.5em;
        span {
          padding-right: 20px; 
        }
      }
    }
    .active {
      background-color: #ebebeb;
    }
  }
  .tip {
    position: absolute;
    right: 10px;
    bottom: 60px;
    z-index: 30;
    width: 90px;
    padding: 10px 15px;
    font-size: .9em;
    background-color: #2f4056;
    opacity: .7;
    color: #fff;
    .triangle {
      position: absolute;
      right: 10px;
      bottom: -10px;
      z-index: 40;
      width: 0;
      height: 0;
      border: 10px solid #2f4056;
      border-top-color: #2f4056;
      border-bottom: none;
      border-left-color: transparent;
      border-right-color: transparent;
    }
  }
}
</style>

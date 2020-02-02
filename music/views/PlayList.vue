<template>
  <div class="play-list">
    <head-bar :title="'播放队列'" :left="''" :right="'times'" @right="$router.go(-1)"></head-bar>
    <div class="list-header" @click="switchHandle">
      <img :src="`/play-icon/${playType}.png`" alt="">
      <h2 class="switch">
        {{playTypeMsg}}
      </h2>
      <p>
        <small>点击切换</small>
      </p>
    </div>
    <ul class="list-group" v-if="playList.length">
      <li 
        class="list-group-item" 
        :class="{active: index === musicSelectedIndex}"
        v-for="(music, index) in playList" :key="music.id">
        <div class="content" @click="selectMusic({ music })">
          <p>{{music.name}}-<i>{{music.singer}}</i></p>
        </div>
        <div class="right" @click="deleteMusic({ music })">
          <span>
            &times;
          </span>
        </div>
      </li>
    </ul>
    <ul class="list-group" v-else>
      <p class="blank-text">列表为空</p>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import HeadBar from '../components/HeadBar' 
export default {
  components: {
    HeadBar
  },
  data() {
    return {
      playTypeMsgMap: {
        sequence: '顺序播放',
        random: '随机播放',
        single: '单曲循环'
      }
    }
  },
  computed: {
    ...mapState(['playList', 'musicSelectedIndex', 'playType']),
    playTypeMsg() {
      return this.playTypeMsgMap[this.playType]
    }
  },
  methods: {
    ...mapMutations(['selectMusic', 'deleteMusic','switchPlayType']),
    switchHandle() {
      let playTypeList = ['sequence', 'random', 'single']
      let playTypeIndex = (playTypeList.indexOf(this.playType)+1)%playTypeList.length
      let playType = playTypeList[playTypeIndex]
      this.switchPlayType({ playType })
    }
  }
}
</script>

<style lang="scss" scoped>
.play-list {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: auto;
  border: 1px solid #eee;
  background-color: #fff;
  .list-header {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    opacity: 1;
    img {
      width: 25px;
      height: 25px;
    }
    .switch {
      flex: 1;
    }
    span {
      padding: 0 5px;
    }
  }
  .list-group {
    .blank-text {
      padding: 30px 0;
      color: #666;
      text-align: center;
    }
    .list-group-item {
      display: flex;
      align-items: center;
      height: 40px;
      padding-left: 20px;
      border-bottom: 1px solid #ebebeb;
      .content {
        flex: 1;
      }
      .right {
        font-size: 1em;
        padding: 0 25px;
        color: #666;
        font-weight: 200;
      }
    }
    .active {
      color: #1e9fff;
    }
  }
}
</style>




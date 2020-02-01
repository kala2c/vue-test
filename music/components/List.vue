<template>
  <div class="list">
    <head-bar class="head-bar" :title="title" :right="''" @left="$emit('close')"></head-bar>
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
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import HeadBar from './HeadBar'
export default {
  props: {
    musicList: {
      type: Array,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    HeadBar
  },
  data() {
    return {
    }
  },
  // computed: {
  // },
  methods: {
    ...mapMutations(['pushMusic'])
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.list {
  position: absolute;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .head-bar {
    background-color: #fff;
  }
  .list-group {
    box-sizing: border-box;
    height: 100%;
    padding-bottom: 110px;
    overflow: auto;
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
}
</style>

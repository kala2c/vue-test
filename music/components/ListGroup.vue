<template>
  <div class="list">
    <ul class="list-group" v-show="!listShow">
      <li class="list-group-item" v-for="group in musicGroups" :key="group.id" @click="openList(group)">
        <div class="logo">
          <img :src="group.logo" alt="">
        </div>
        <div class="content">
          <p>{{group.name}}</p>
          <p><small>共{{group.count}}首</small></p>
        </div>
        <div class="right">
          <span>
            <i class="fa fa-chevron-right"></i>
          </span>
        </div>
      </li>
    </ul>
    <list :musicList="musicList" :title="listTitle" v-show="listShow" @close="closeList"></list>
  </div>
</template>

<script>
import List from './List'
import { setInterval } from 'timers'
// let host = "http://localhost:6001/"
let host = "/"
export default {
  props: {
  },
  components: {
    List
  },
  data() {
    return {
      listShow: false,
      listTitle: '',
      musicGroups: [],
      musicList: []
    }
  },
  methods: {
    openList(group) {
      let id = group.id
      this.axios.get(host+"music/list.json?id="+id).then(res => {
        this.musicList = res.data
        this.listShow = true
        this.listTitle = group.name
      }).then(err => {
        console.log(err)
      })
    },
    closeList() {
      this.listShow = false
    }
  },
  mounted() {
    this.axios.get(host+"music/listgroup.json").then(res => {
      this.musicGroups = res.data
    }).catch(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped lang="scss">
.list {
  height: 100%;
.list-group {
  box-sizing: border-box;
  height: 100%;
  padding-bottom: 110px;
  overflow: auto;
  .list-group-item {
    display: flex;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid #ebebeb;
    .logo {
      width: 100px;
      height: 100%;
      img {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 15px;
      }
    }
    .content {
      flex: 1;
    }
    .right {
      padding: 0 20px;
    }
  }
}
}
</style>

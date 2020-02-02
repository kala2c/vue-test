<template>
  <div class="home">
    <head-bar :title="pageTitle" :left="pageLeft" :right="'search'" @right="toSearch"></head-bar>
    <ul class="list-group">
      <li class="list-group-item" v-for="group in musicGroups" :key="group.id" @click="toList(group)">
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
  </div>
</template>

<script>
import HeadBar from '../components/HeadBar.vue'
import global from '../utils/global'
let host = global.API_HOST
export default {
  components: {
    HeadBar
  },
  data() {
    return {
      pageTitle: '全部列表',
      pageLeft: '',
      musicGroups: [],
      musicList: []
      // searchBarShow: false,
    }
  },
  methods: {
    toList(group) {
      let id = group.id
      let groupName = group.name
      this.$router.push({
        path: 'list',
        query: {
          id,
          groupName
        }
      })
    },
    toSearch() {
      //跳转到搜索页
      // alert('') 
    }
  },
  mounted() {
    this.axios.get(host+"music/listgroup.json").then(res => {
      this.musicGroups = res.data
    }).catch(res => {
      console.log(res)
    })  }
}
</script>

<style scoped lang="scss">
.home {
  height: 100%;
  .list-group {
    box-sizing: border-box;
    height: 100%;
    padding-bottom: 50px;
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

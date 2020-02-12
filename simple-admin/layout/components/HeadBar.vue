<template>
  <div class="head-bar">
    <el-menu
      class="nav-menu"
      mode="horizontal"
      @select="handleSelect"
      >
      <div class="nav-menu-btn" @click="$emit('toggleSideBar')">
        <i :class="`el-icon-s-${ sideBarFold ? `fold` : `unfold`}`"></i>
      </div>
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item
          v-for="(item, index) in linkList"
          :key="index"
        >{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="search">
          <el-input
            placeholder="请输入关键字"
            suffix-icon="el-icon-search"
            v-model="key">
          </el-input>
      </div>
      <div class="nav-menu-btn" @click="fullScreen()">
        <i v-show="!isFullScreen" class="el-icon-full-screen"></i>
        <i v-show="isFullScreen" class="el-icon-switch-button"></i>
      </div>
      <el-submenu index="3">
        <template slot="title">admin</template>
        <el-menu-item index="4-1">个人资料</el-menu-item>
        <el-menu-item index="4-2">设置</el-menu-item>
        <el-menu-item index="4-3">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    sideBarFold: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      key: '',
      linkList: [
        { name: '首页', path: '' }
      ],
      isFullScreen: false,
    }
  },
  computed: {
    ...mapState(['routes'])
  },
  watch: {
    '$route'(val) {
      this.changeLinkList(val.path)
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    },
    changeLinkList(path) {
      this.routes.forEach(submenu => {
        let title = submenu.title
        submenu.link.forEach(menuItem => {
          if (menuItem.path === path) {
            if (this.linkList.length > 2) {
              this.linkList.pop()
              this.linkList.pop()
            }
            this.linkList.push({ name: title, path: '' })
            this.linkList.push({ name: menuItem.name, path: '' })
          }
        })
      })
    },
    fullScreen() {
      this.isFullScreen = !this.isFullScreen
      if (this.isFullScreen) {
        if(document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if(document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if(document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else if(document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      } else {
        if(document.exitFullscreen) {
          document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    }
  },
  created() {
    this.changeLinkList(this.$route.path)
  }
}
</script>

<style lang="scss" scoped>
.nav-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #cbcbcb;
  .el-menu-item,
  .el-submenu {
    border: none!important;
  }
  .nav-menu-btn {
    padding: 0 10px;
    outline: none;
    cursor: pointer;
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
    padding-left: 15px;
    outline: none;
  }
  .search {
    margin: 0 10px;
  }
}
</style>

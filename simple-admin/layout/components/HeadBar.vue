<template>
  <div class="head-bar">
    <el-menu
      :default-active="activeIndex"
      class="nav-menu"
      mode="horizontal"
      @select="handleSelect"
      >
      <el-menu-item index="1" @click="$emit('toggleSideBar')">
        <i :class="`el-icon-s-${ sideBarFold ? `fold` : `unfold`}`"></i>
      </el-menu-item>
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="search">
          <el-input
            placeholder="请输入关键字"
            suffix-icon="el-icon-search"
            v-model="key">
          </el-input>
      </div>
      <el-menu-item index="2">
        <i class="el-icon-full-screen"></i>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">admin</template>
        <el-menu-item index="2-1">个人资料</el-menu-item>
        <el-menu-item index="2-2">设置</el-menu-item>
        <el-menu-item index="2-3">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
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
      activeIndex: "1"
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #cbcbcb;
  .el-menu-item,
  .el-submenu {
    height: 100%;
    line-height: 50px;
    border: none!important;
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
    padding-left: 20px;
    outline: none;
  }
  .search {
    margin: 0 20px;
  }
}
</style>

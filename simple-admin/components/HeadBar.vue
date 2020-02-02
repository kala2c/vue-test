<template>
  <div class="head-bar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="2">
        <template slot="title">控制台</template>
        <el-menu-item index="2-1">没有东西</el-menu-item>
        <el-menu-item index="2-2">做个样子</el-menu-item>
        <el-menu-item index="2-3">嘿嘿</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">下拉</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">前台</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .head-bar {

} */
</style>

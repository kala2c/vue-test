<template>
  <div class="side-bar">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo menu"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#393d49"
        text-color="#fff"
        >
        <el-submenu 
          v-for="(submenu, index) in routes"
          :key="submenu.id"
          :index="`${index}`"
        >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ submenu.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item 
              class="menu-item"
              v-for="(menuitem, itemIndex) in submenu.link"
              :key="menuitem.id"
              :index="`${index}-${itemIndex}`"
              @click="changeActive(`${index}-${itemIndex}`, menuitem.path)">
              {{ menuitem.name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeIndex: ''
    }
  },
  computed: {
    ...mapState(['routes'])
  },
  methods: {
    changeActive(activeIndex, path) {
      this.activeIndex = activeIndex
      localStorage.setItem('active-index', activeIndex)
      if (this.$route.path != path) {
        this.$router.push({ path })
      }
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    }
  },
  mounted() {
    this.activeIndex = localStorage.getItem('active-index')
  }
}
</script>

<style scoped>
.el-menu {
  border: none;
  min-width: 200px;
}
.el-menu--collapse {
  min-width: 0;
}
.menu-item {
  width: 100%;
  background-color: rgba(0, 0, 0, .3);
}
.side-bar {
  height: 100%;
  overflow: auto;
}
.side-bar .menu {
  min-height: 100%;
}
/* .link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
} */
</style>



<template>
  <div class="side-bar">
    <el-menu
      default-active="2"
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
              :index="`${index}-${itemIndex}`">
              <router-link class="link" :to="menuitem.path">
                {{ menuitem.name }}
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      routes: [
        {
          id: 1,
          title: '报表实例',
          link: [
            {
              id: 1,
              name: '概览',
              path: '/'
            },
            {
              id: 2,
              name: '关于',
              path: '/about'
            }
          ]
        },
        {
          id: 2,
          title: '表单实例',
          link: [
            {
              id: 1,
              name: '普通表单',
              path: '/form/simple'
            },
            {
              id: 2,
              name: '高级表单',
              path: '/form/----'
            }
          ]
        },
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
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
.side-bar {
  height: 100%;
  overflow: auto;
}
.side-bar .menu {
  min-height: 100%;
}
.link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}
.menu-item {
  width: 100%;
  background-color: rgba(0, 0, 0, .3);
}
</style>



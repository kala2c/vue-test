<template>
  <div class="side-bar">
    <el-menu
      default-active="2"
        class="el-menu-vertical-demo menu"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
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
        }
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
.side-bar {
  height: 100%;
}
.side-bar .menu {
  height: 100%;
}
.link {
  text-decoration: none;
  color: inherit;
}
.menu-item {
  width: 100%;
}
</style>



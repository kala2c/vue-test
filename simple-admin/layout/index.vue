<template>
  <div class="layout">
    <div class="side-bar">
        <side-bar :isCollapse="sideBarFold"></side-bar>
    </div>
    <div class="content">
      <head-bar @toggleSideBar="toggleSideBar" :sideBarFold="sideBarFold"></head-bar>
      <div class="container">
        <router-view></router-view>
      </div>
      <foot-bar class="foot-bar"></foot-bar>
    </div>
  </div>
</template>

<script>
import HeadBar from './components/HeadBar'
import SideBar from './components/SideBar'
import FootBar from './components/FootBar' 
export default {
  components: {
    HeadBar,
    SideBar,
    FootBar
  },
  data() {
    return {
      sideBarFold: false
    }
  },
  methods: {
    toggleSideBar() {
      this.sideBarFold = !this.sideBarFold
    }
  },
  created() {
    if (localStorage.getItem('token') === null) {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="scss">
.layout {
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  .content {
    flex: 1;
    .container {
      padding: 10px 15px;
    }
  }
}

</style>
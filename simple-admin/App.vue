<template>
  <div id="app">
    <div class="header">
      <div class="left">
        admin
      </div>
      <div class="right">
        <head-bar></head-bar>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <side-bar></side-bar>
      </div>
      <div class="right">
        <div class="container">
          <router-view/>
          <foot-bar class="foot-bar"></foot-bar>
        </div>
      </div>
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
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header {
  height: 61px;
  background-color: #393d49;
}
.content {
  box-sizing: border-box;
  height: 100%;
  padding-bottom: 62px;
}
.left {
  float: left;
  width: 200px;
  height: 100%;
}
.right {
  margin-left: 200px;
  height: 100%;
}
.header .left {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;  
}
.content .right {
  height: 100%;
  overflow: auto;
}
.content .right .container {
  position: relative;
  box-sizing: border-box;
  min-height: 100%;
  padding: 10px 15px;
  padding-bottom: 90px;
}
.content .right .container .foot-bar {
  position: absolute;
  bottom: 0;
}
</style>

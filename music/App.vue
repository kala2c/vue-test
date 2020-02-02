<template>
  <div id="app">
    <router-view/>
    <control-bar></control-bar>
  </div>
</template>

<script>
import ControlBar from './components/ControlBar'
export default {
  components: {
    ControlBar
  }
}
</script>

<style lang="scss">
@import url('./assets/font-awesome-4.7.0/css/font-awesome.min.css');

* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: inherit;
}
ul,
ol {
  list-style: none;
}
h1,
h2,
h3,
h4 {
  font: inherit;
}
input,
select,
button {
  font: inherit;
}
html,
body {
  height: 100%;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
// control-bar高60px 因此app底部留出60px;
// control-bar绝对定位在底部
#app {
  box-sizing: border-box;
  height: 100%;
  padding-bottom: 60px;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

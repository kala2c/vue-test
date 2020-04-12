<template>
  <div class="home">
    <map3d class="map"></map3d>
  </div>
</template>

<script>
// @ is an alias to /src
import Map3d from '../components/Map3d.vue'

export default {
  name: 'home',
  components: {
    Map3d
  }
}
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  height: 100%;
  // padding-top: 50px;
  .map {
    height: 100%;
  }
}
</style>

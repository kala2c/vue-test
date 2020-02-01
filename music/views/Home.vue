<template>
  <div class="home">
    <head-bar :title="pageTitle" :left="pageLeft" :right="'search'" @right="showSearchBar"></head-bar>
    <search-bar v-show="searchBarShow" @close="closeSearchBar"></search-bar>
    <list-group></list-group>
    <play-list v-show="playListShow" @close="closePlayList"></play-list>
    <player @showPlayList="playListShow = true"></player>
  </div>
</template>

<script>
import HeadBar from '../components/HeadBar.vue'
import SearchBar from '../components/SearchBar.vue'
import ListGroup from '../components/ListGroup.vue'
import PlayList from '../components/PlayList'
import Player from '../components/Player.vue'
export default {
  components: {
    HeadBar,
    SearchBar,
    ListGroup,
    PlayList,
    Player
  },
  data() {
    return {
      pageTitle: '全部列表',
      pageLeft: '',
      searchBarShow: false,
      playListShow: false,
      listShow: false
    }
  },
  methods: {
    showSearchBar() {
      this.searchBarShow = true
    },
    closeSearchBar() {
      this.searchBarShow = false
    },
    closePlayList() {
      this.playListShow = false
    }
  },
  mounted() {
    // console.log(this.axios)
  }
}
</script>

<style scoped lang="scss">
.home {
  height: 100%;
}
</style>

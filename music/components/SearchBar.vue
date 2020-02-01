<template>
  <div class="search-bar">
    <span class="left" @click="$emit('close')">
      <i :class="['fa', `fa-close`]"></i>
    </span>
    <div class="input-control">
      <input type="text" placeholder="输入歌名或歌手搜索" v-model="key">
    </div>
    <span class="right" @click="search">
      <i :class="['fa', `fa-search`]"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      key: "",
    }
  },
  methods: {
    search() {
      console.log(this.key)
    }
  }
}
</script>

<style scoped lang="scss">
.search-bar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #EEE;
  background-color: #fff;
}
.input-control {
  display: flex;
  justify-content: center;
  flex: 1;
}
.input-control input {
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  text-align: center
}

span {
  padding: 0 20px;
}
</style>

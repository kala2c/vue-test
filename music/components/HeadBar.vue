<template>
  <div class="head-bar">
    <span class="left" @click="$emit('left')">
      <i :class="['fa', `fa-${left}`]"></i>
    </span>
    <h1>{{title}}</h1>
    <span class="right" @click="$emit('right')">
      <i :class="['fa', `fa-${right}`]"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      Type: String,
      default: ''
    },
    left: {
      type: String,
      default: 'chevron-left'
    },
    right: {
      type: String,
      default: 'ellipsis-v'
    }
  }
}
</script>

<style scoped lang="scss">
.head-bar {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #ddd;
  // box-shadow: 
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
h1 {
  display: flex;
  justify-content: center;
  flex: 1;
}
span {
  padding: 0 20px;
}
</style>

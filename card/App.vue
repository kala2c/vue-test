<template>
  <div id="app">
    <card-list></card-list>
  </div>
</template>

<script>
import CardList from './components/CardList.vue'
export default {
  components: {
    CardList
  }
}
</script>

<style>
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
    html,
    body {
      height: 100%;
      overflow: hidden;
    }
</style>


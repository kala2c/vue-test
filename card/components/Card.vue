<style scoped>
  .card {
    position: absolute;
    top: 0;
    left: 10px;
    right: 10px;
    height: 100%;
    margin: 0 auto;
    transition: transform 0.5s ease;
  }
  .front,
  .back {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: transform 1s ease;
    backface-visibility: hidden;
    background-size: cover;
  }
  /* .front {
    background-color: #1E9FFF;
  } */
  .front::before {
    content: '';
    position: absolute;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    /* 阴影 */
    /* background-image: linear-gradient(
      to bottom,
      rgba(99, 94, 86, 0.5),
      rgba(99, 94, 86, 0) 30%,
      rgba(64, 65, 66, 0) 70%,
      rgba(33, 34, 35, 0.9)
    ); */
  }
  .back {
    background-color: #1e9fff;
  }
  .front-face {
    transform: rotateY(0deg);
  }
  .back-face {
    transform: rotateY(180deg);
  }
</style>

<template>
  <div class="card" @click="reverse" :style="`transform: scale(${scale});`">
    <div 
      class="front" 
      :class="{
        'front-face': isFront,
        'back-face': !isFront
      }"
      :style="`backgroundImage: url(${card.frontPic})`"
      >{{ card.frontMsg }}</div>
    <div 
      class="back" 
      :class="{'front-face': !isFront, 'back-face': isFront}">{{ card.backMsg }}</div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object
    }
  },
  data() {
    return {
      scale: 1,
      isFront: this.card.face == 'front'
    }
  },
  methods: {
    reverse() {
      this.scale = 0.9
      setTimeout(() => {
        this.scale = 1
      }, 500)
      this.card.face = this.card.face == 'front' ? 'back' : 'front'
      this.isFront = !this.isFront
    }
  }
}
</script>

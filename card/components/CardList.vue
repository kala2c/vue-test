<style scoped>
  .card-list {
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 30px;
    height: 600px;
  }
  .card-list ul {
    display: flex;
    width: 300%;
    height: 100%;
  }
  .card-list li {
    position: relative;
    transform: translate3d(0%, 0, 0);
    flex: 1;
    transition: all .6s ease;
  }
</style>

<template>
  <div class="card-list">
    <ul>
      <li 
        v-for="card in cards" 
        :key="card.id" 
        :style="`transform: translate3d(-${currentIndex*100}%, 0, 0)`">
        <card :card="card"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      currentIndex: 0,
      cards: [
        {
          id: 0,
          frontMsg: '',
          backMsg: '小樱',
          frontPic: '/cards/0.jpg',
          face: 'back'
        },
        {
          id: 1,
          frontMsg: '',
          backMsg: '大蛇丸',
          frontPic: '/cards/1.jpg',
          face: 'back'
        },
        {
          id: 2,
          frontMsg: '',
          backMsg: '长门',
          frontPic: '/cards/2.jpg',
          face: 'front'
        },
      ]
    }
  },
  methods: {
    nextCard() {
      if (this.currentIndex >= this.cards.length-1) return
      this.currentIndex ++
    },
    prevCard() {
      if (this.currentIndex <= 0) return
      this.currentIndex --
    }
  },
  mounted() {
    let app = this.$el
    // 左右滑动效果
    let touch = {}
    app.addEventListener('touchstart', evt => {
      touch.startX = evt.touches[0].clientX
      touch.endX = 0
    })
    app.addEventListener('touchmove', evt => {
      touch.endX = evt.touches[0].clientX
    })
    app.addEventListener('touchend', () => {
      if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
        return
      }
      if (touch.endX < touch.startX) {
        this.nextCard()
      } else {
        this.prevCard()
      }
    })
  }
}
</script>
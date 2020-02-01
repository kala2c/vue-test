<style scoped>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.6;
  }
  .modal {
    position: absolute;
    top: 180px;
    left: 50%;
    transform: translateX(-250px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 500px;
    height: 300px;
    padding: 30px;
    background-color: #fff;
  }
  /* .messsage {

  } */
  .md-none {
    display: none;
  }
  .btn-box {
    margin-top: 30px;
  }
  .btn-box button {
    margin: 10px;
    width: 100px;
    height: 30px;
  }
</style>

<template>
  <div class="container" :class="{'md-none': !mdShow}">
    <div class="back"></div>
    <div class="modal">
      <span @click="close">关闭</span>
      <div class="message">
        <slot name="message"></slot>
      </div>
      <div class="btn-box">
        <slot name="btnGroup">
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    'mdShow': Boolean
  },
  // data() {
  //   return {
  //     mdShow: false
  //   }
  // },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>


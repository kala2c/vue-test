<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  ul,li {
    list-style: none;
  }
  div.list-group-item {
    display: flex;
    justify-content: flex-start;
  }
  .list-group-item .block {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    padding: 20px;
  }
  span.role {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid #2e2e2e;
    border-radius: 5px;
  }
  span.role.checked {
    background-color: coral;
  }
  .picture img {
    width: 100%;
    height: 100%;
  }
  .number .number-handle {
    display: inline-block;
    /* box-sizing: border-box; */
    padding: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    background-color: #9d9d9d;
    cursor: pointer;
  }
  .number .number-text {
    display: inline-block;
    /* box-sizing: border-box; */
    padding: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
  }
  .cart-foot {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 100px;
  }
  .cart-foot .total-price {
    /* float: right; */
    position: absolute; 
    top: 50%;
    right: 200px;
  }
</style>

<template>
  <div class="container">
    <head-bar></head-bar>
    <ul>
      <li v-for="item in goodsList" v-bind:key="item.id">
        <div class="list-group-item">
          <div class="block status">
            <span class="role" :class="{checked: item.checked}" @click="editCart('check', item)"></span>
          </div>
          <div class="block picture">
            <img class="" :src="item.picture" alt="">
          </div>
          <div class="block name">{{item.name}}</div>
          <div class="block price-one">{{item.price}}</div>
          <div class="block number">
            <span class="number-handle" @click="editCart('add', item)">+</span>
            <span class="number-text">{{item.number}}</span>
            <span class="number-handle" @click="editCart('minute', item)">-</span>
          </div>
          <div class="block price-all">{{(item.number * item.price) | currency}}</div>
          <div class="block func"><span @click="delCartConfirm(item)">删除</span></div>
        </div>
      </li>
      <div class="cart-foot">
        <span class="role" :class="{'checked': checkAllFlag}" @click="toggleCheckAll"></span>
        <span>全选</span>
        <div class="total-price">合计:{{totalPrice | currency}}</div>
      </div>
    </ul>
    <modal :mdShow="mdShowConfirm" @close="closeModal">
      <p slot="message">确认删除该条目吗</p>
      <template v-slot:btnGroup>
        <button @click="delCart">确认</button>
        <button @click="closeModal">取消</button>
      </template>
    </modal>
    <foot-bar></foot-bar>
  </div>
</template>
<script>
import Modal from '../components/Modal'
import HeadBar from '../components/HeadBar'
import FootBar from '../components/FootBar'

export default {
  name: 'cart',
  components: {
    Modal,
    HeadBar,
    FootBar
  },
  data() {
    return {
      goodsList: [],
      mdShowConfirm: false,
      oldItem: null
    }
  },
  computed: {
    checkAllFlag() {
      return this.goodsList.every(item => {
        return item.checked
      })
    },
    totalPrice() {
      let totalPrice = 0
      this.goodsList.forEach(item => {
        if (item.checked) {
          totalPrice += (item.price * item.number)
        }
      })
      return totalPrice
    }
  },
  methods: {
    init() {
      this.axios.get("/mock/goods.json").then(response => {
        this.goodsList = response.data.data
      })
    },
    editCart(type, item) {
      switch (type) {
        case 'add':
          item.number ++
          break
        case 'minute':
          item.number --
          break
        case 'check':
          item.checked = !item.checked
      }
    },
    delCartConfirm(item) {
      this.oldItem = item
      this.mdShowConfirm = true
    },
    delCart() {
      let delItem = this.oldItem
      this.goodsList.forEach((item, index) => {
        if (delItem.id == item.id) {
          this.goodsList.splice(index, 1)
        }
        this.closeModal()
      })
    },
    closeModal() {
      this.mdShowConfirm = false
    },
    toggleCheckAll() {
      let flag = !this.checkAllFlag
      this.goodsList.forEach(item => {
        item.checked = flag
      })
      this.checkAllFlag = flag
    }
  },
  created() {
    this.init()
  },
  filters: {
    currency(value) {
      if (!value) return 0
      return '￥'+value.toFixed(2);
    }
  }
}
</script>


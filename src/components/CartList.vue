<template>
  <div class="cartlist">
    <div class="topbar">
      <h2>Item List</h2>
      <p @click="deleteAll()"><span class="mdi mdi-delete"></span></p>
    </div>

    <div v-for="item in cartList" :key="item._id" class="itemsOnList">
      <p class="name">{{item.name}}</p>
      <div class="count"><p class="button" @click="minusCount(item._id)"><span class="mdi mdi-minus"></span></p><p>X{{item.count}}</p><p class="button" @click="plusCount(item._id)"><span class="mdi mdi-plus"></span></p></div>
      <p class="price">₹{{item.count * item.price}}</p>
    </div>

    <div class="total">
      <p class="text">Total</p>
      <p class="price">₹{{totalPrice}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CartList',
  computed: mapState(['cartList', 'totalPrice']),
  methods: {
    ...mapActions(['deleteAll', 'plusCount', 'minusCount'])
  }
}
</script>

<style lang="scss" scoped>
.cartlist{
  max-width: 400px;
  width: 90vw;
  margin: 0 auto;
}
.topbar{
  display: flex;
  padding: 10px;
  background: #333333;
  color: white;
  p{
    margin-left: auto;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
      color: #f35353;
    }
  }
}

.itemsOnList{
  padding: 10px;
  display: flex;
  .name{
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .count{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .button{
      background: #555;
      color: white;
      height: 30px;
      width: 30px;
      margin: 0 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      cursor: pointer;
      transition: background 0.3s ease-in-out;
      .mdi{
        font-size: 1rem;
      }
      &:hover{
        background: #333333;
      }
    }
  }
  .price{
    flex: 1;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: right;
  }
}

.total{
  background: #333333;
  color: white;
  display: flex;
  padding: 10px;
  .text{
    flex: 3;
  }
  .price{
    font-weight: bold;
  }
}

.itemsOnList:nth-child(odd){
  background-color: #aaa;
}

.mdi{
  font-size: 1.7rem;
}

@media screen and (min-width: 1100px) {
  .cartlist{
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 3;
  }
}
</style>

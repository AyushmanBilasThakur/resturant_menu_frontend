<template>
  <div id="parent" @click="addToCart(item._id)">
    <div class="details"  style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;" unselectable="on" onselectstart="return false;" onmousedown="return false;">
      <h2>{{item.name}}</h2>
      <p>{{item.description}}</p>
      <p class = "price">₹{{item.price}}</p>
    </div>
    <div class="add_to_cart">
      <p> ADD TO CART</p>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'item'
  ],
  methods: {
    // ...mapActions(
    //   {
    //     addToCart: this.$store.addToCartList
    //   }
    // )
    addToCart: function (id) {
      this.$store.dispatch('addToCartList', id)
    }
  }
}
</script>

<style lang="scss" scoped>
#parent{
  display: flex;
  max-width: 600px;
  width: 90%;
  margin: 20px auto;
  background-color: #223;
  transition: all 0.3s ease-in-out;
  color: white;
  cursor: pointer;
  h2{
    margin-bottom: 10px;
  }
  p{
    color: #aaa;
  }
  .price{
    color: greenyellow;
    margin-top: 0.3em;
    font-size: 1.5rem;
  }
  &:hover{
    background: #0f0f18;
    .details{
      width: 75%;
    }
    .add_to_cart{
      width: 25%;
      transform:scaleX(1);
      p{
        opacity: 1;
      }
    }
  }
  .details{
    width: 100%;
    margin: 20px;
    transition: width 0.3s ease-in-out;
  }
  .add_to_cart{
    padding: 20px 10px;
    width: 0%;
    background-color: #227722;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: right;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
    p{
      color: white;
      opacity: 0;
    }
  }
}

@media screen and (max-width: 1466px) and (min-width: 1100px){
  #parent{
    margin-left: 10%;
  }
}

@media screen and (max-width: 1190px) and (min-width: 1100px){
  #parent{
    margin-left: 10px;
  }
}

@media screen and (max-width: 500px){
  #parent{
    flex-direction: column;
    .add_to_cart{
      width: 100%;
      transform: scaleX(1);
      p{
        opacity: 1;
      }
    }
    .details{
      margin: 12px;
    }
    &:hover{
      .details{
      width: 100%;
      }
      .add_to_cart{
        width: 100%;
      }
    }
  }
}

</style>

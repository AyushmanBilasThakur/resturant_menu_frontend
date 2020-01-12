<template>
  <div class="main">
    <Header></Header>
    <div class="container">
      <CartList />
      <RestaurantMenu />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './Header'
import Footer from './Footer'
import RestaurantMenu from './RestaurantMenu'
import CartList from './CartList'

export default {
  name: 'MainComponent',
  components: {
    Header,
    Footer,
    RestaurantMenu,
    CartList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main{
  min-height: 100vh;
  position: relative;
  padding-bottom: 80px;
}
</style>

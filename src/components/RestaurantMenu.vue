<template>
  <div>
    <ItemCard v-for="item in menu" :key="item.name" :item="item">
    </ItemCard>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ItemCard from './ItemCard'
export default {
  name: 'RestaurantMenu',
  components: {
    ItemCard
  },
  mounted () {
    this.$store.dispatch('loadMenu')
  },
  computed: mapState(['menu'])
}
</script>

<style lang="scss" scoped>

</style>

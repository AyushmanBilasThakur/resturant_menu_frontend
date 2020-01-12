<template>
  <div id="app">
    <MainComponent/>
  </div>
</template>

<script>
import '@mdi/font/css/materialdesignicons.min.css'
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'app',
  components: {
    MainComponent
  }
}
</script>

<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.container{
  max-width: 1250px;
  width: 90vw;
  margin: 10px auto;
}

@media screen and (max-width: 1466px) and (min-width: 1100px){
  .container{
    margin-left: 40px;
  }
}
</style>

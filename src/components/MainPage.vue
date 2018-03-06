<template>
  <div class="main">
      <nav-header></nav-header>
      <Carousel></Carousel>
      <main-content></main-content>
      <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/Header'
import Carousel from '@/components/Carousel'
import MainContent from '@/components/MainContent'
import NavFooter from '@/components/Footer'

export default {
  name: 'MainPage',
  components: {
    NavHeader,
    Carousel,
    MainContent,
    NavFooter
  }, 
  data () {
    return {

    }
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>

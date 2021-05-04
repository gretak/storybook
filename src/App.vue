<template>
 <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Hero 
      size="ptlg"
      title="Everything is future"
      subtitle="Invest today. Change tomorrow." 
      urlbase="https://prd-cdn.aberdeenstandard.net/-/media/aam-web/images/hero-images/"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Hero from './components/Hero.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Hero
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

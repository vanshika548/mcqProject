<style lang="less">
  @import "./App.less";
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <button @click="changeRoute('mcq')">MCQ</button>
      <button @click="changeRouteTwo('restaurant')">Restaurant</button>
      <!-- <router-link to="/result">Result</router-link> | -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    errorResponse : {}
  }
  },

  methods : {
    changeRoute(route){
      this.$router.push(`/${route}`)
    },
    changeRouteTwo(route){
      this.$router.push(`/${route}`)
    }
  }

}
</script>





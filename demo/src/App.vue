<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{name}}
    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
  name: 'app',
  data:function(){
    return {
      name:"jack"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <citypicker>
    </citypicker>
  </div>
</template>

<script>
import citypicker from './cityPicker'

export default {
  name: 'App',
  components: {
    citypicker
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

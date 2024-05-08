<template>
  <div id="editor-root"></div>
</template>

<script>
import {mountEditor} from './components/EmailEditor'

export default {
  name: 'App',
  components: {
    
  },
  mounted() {
    mountEditor('editor-root')
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

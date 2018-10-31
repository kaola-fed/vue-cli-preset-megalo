<template>
  <div class="app">
    <HelloWorld msg="Hello World"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld'

export default {
  mpType: 'page',
  components: {
    HelloWorld
  }
}
</script>

<style>
.app {
  color: blue;
}
</style>

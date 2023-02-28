<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import RenderImg from './components/RenderImg'
import RenderJsx from './components/RenderJsx'
</script>

<template>
  <div>
    <RenderImg />
    <RenderJsx />
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

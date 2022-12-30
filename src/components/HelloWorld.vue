<template>
  <h1>{{ msg }}</h1>
  <l-text color="red" />
</template>

<script setup lang="ts">
import { LText } from '~/index'

defineProps<{ msg: string }>()
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

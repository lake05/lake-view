<script setup lang="ts">
import { Schema } from '../types'

type Props = {
  schema: Schema
  rootSchema: Schema
  value: unknown
  onChange: (v: unknown) => void
}
const props = defineProps<Props>()

// TODO: 做代理
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  props.onChange(target.value)
}
</script>

<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

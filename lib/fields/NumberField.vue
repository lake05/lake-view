<script setup lang="ts">
import { Schema } from 'lib/types'

type Props = {
  schema: Schema
  value: unknown
  onChange: (v: unknown) => void
}
const props = defineProps<Props>()

// TODO: 做代理
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const num = Number(target.value)
  if (Number.isNaN(num)) {
    props.onChange(undefined)
  } else {
    props.onChange(num)
  }
}
</script>

<template>
  <input
    class="border border-gray-500 rounded"
    type="number"
    :value="value"
    @input="handleChange"
  />
</template>

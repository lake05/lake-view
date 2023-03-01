<script setup lang="ts">
import { Schema } from 'lib/types'

type Props = {
  schema: Schema
  value: unknown
  onChange: (v: unknown) => void
}
const props = defineProps<Props>()

// TODO: 做代理
const handleChange = (e: unknown) => {
  props.onChange((e as InputEvent).target.value)
}
</script>

<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

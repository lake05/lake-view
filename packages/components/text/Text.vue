<template>
  <component :is="tag" :style="styleProps" @click="handleClick">
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import useComponentCommon from '~/hooks/useComponentCommon'
import { textProps, textStylePropNames } from './props'

defineOptions({
  name: 'LText',
})

const props = defineProps(textProps)

const { styleProps, handleClick } = useComponentCommon(
  props,
  textStylePropNames,
)
</script>

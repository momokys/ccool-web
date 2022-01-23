<template>
  <svg
    :class="svgClass"
    v-bind="$attrs"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>

import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  }
})

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.name) {
    return `cl-icon-${props.name}`
  }
  return 'svg-icon'
})
</script>

<script lang="ts">
export default {
  name: 'ClSvg'
}
</script>

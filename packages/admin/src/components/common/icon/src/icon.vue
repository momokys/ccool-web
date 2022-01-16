<template>
  <el-icon
    v-if="icon !== undefined"
    :size="size"
    :color="color"
  >
    <component :is="resolveIcon(icon)" />
  </el-icon>
</template>

<script lang="ts" setup>
import { PropType, resolveDynamicComponent, VNodeTypes } from 'vue'

defineProps({
  icon: {
    type: String as PropType<string>,
    default: undefined
  },
  size: {
    type: Number as PropType<number>,
    default: 18
  },
  color: {
    type: String as PropType<string>,
    default: ''
  },
  resolveIcon: {
    type: Function as PropType<(icon?: string) => VNodeTypes>,
    default: (icon?: string) => resolveDynamicComponent(icon)
  }
})
</script>

<script lang="ts">
export default {
  name: 'ClIcon'
}
</script>

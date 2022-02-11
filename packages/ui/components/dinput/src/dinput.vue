<template>
  <div>
    <div
      v-for="(item, index) in modelValue"
      :key="index"
    >
      <el-input v-model="item[left.key]" />
      <el-input v-model="item[right.key]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

defineProps({
  modelValue: {
    type: Array as PropType<any>,
    default: () => ([])
  },
  left: {
    type: Object as PropType<{ key: string }>,
    default: () => ({ key: 'lable' })
  },
  right: {
    type: Object as PropType<{ key: string }>,
    default: () => ({ key: 'lable' })
  }
})
</script>

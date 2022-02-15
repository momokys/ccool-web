<template>
  <el-checkbox-group
    :model-value="modelValue"
    :size="size"
    @change="handleChange"
  >
    <el-checkbox
      v-for="item in options"
      :key="item.value"
      :label="item.value"
    >
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

defineProps({
  modelValue: {
    type: Array as PropType<any[]>,
    default: () => ([])
  },
  options: {
    type: Array as PropType<{ label: string, value: any }[]>,
    default: () => ([])
  },
  size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: 'small'
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

function handleChange (value: any[]) {
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<script lang="ts">
export default {
  name: 'ClCheckboxGroup'
}
</script>

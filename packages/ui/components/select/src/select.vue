<template>
  <el-select
    :model-value="modelValue"
    :style="{ width: full ? '100%' : undefined }"
    :clearable="clearable"
    v-bind="$attrs"
    @change="handleChange"
  >
    <el-option
      v-for="option in options"
      :key="option.value"
      v-bind="option"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { selectProps } from './select-type'

defineProps(selectProps)

const emit = defineEmits([
  'update:modelValue',
  'change',
  'remove-tag',
  'clear',
  'visible-change',
  'focus',
  'blur'
])

function handleChange (value: any[] | any) {
  emit('change', value)
  emit('update:modelValue', value)
}

</script>

<script lang="ts">
export default {
  name: 'ClSelect'
}
</script>

<template>
  <el-radio-group
    :model-value="modelValue"
    :size="size"
    @change="handleChange"
  >
    <el-radio
      v-for="item in options"
      :key="item.value"
      :label="item.value"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

defineProps({
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: ''
  },
  options: {
    type: Array as PropType<{ label: string, value: any }[]>,
    default: () => ([])
  },
  size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: () => 'default'
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

function handleChange (value: any) {
  emit('update:modelValue', value)
  emit('change', value)
}

</script>

<script lang="ts">
export default {
  name: 'ClRadioGroup'
}
</script>

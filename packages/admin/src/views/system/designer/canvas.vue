<template>
  <cl-drag
    :name="'form-canvas'"
    :draggable="false"
    @drop="handleDrop"
    class="w-full h-full"
    style="background-color: #fff;"
  >
    <cl-form
      v-model="data"
      :form-items="FormItems"
    />
  </cl-drag>
</template>

<script lang="ts" setup>
import { ref, computed, PropType, watch } from 'vue'
import { ClDrag, FormItem } from '@ccool/ui'

const props = defineProps({
  modelValue: {
    type: Array as PropType<FormItem[]>,
    default: () => ([])
  }
})

const emit = defineEmits(['update:modelValue'])

const data = ref<any>({})
const formItems = ref<FormItem[]>(props.modelValue)

const FormItems = computed(() => {
  return formItems.value
})

watch(
  () => props.modelValue,
  () => {
    formItems.value = props.modelValue
  },
  { deep: true }
)

watch(
  formItems.value,
  () => {
    emit('update:modelValue', formItems.value)
  },
  { deep: true }
)

function handleDrop (com: any) {
  formItems.value.push({
    com: com,
    field: 'field1',
    label: '属性1'
  })
}

</script>

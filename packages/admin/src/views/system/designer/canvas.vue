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
import { ref, computed } from 'vue'
import { ClDrag, FormItem } from '@ccool/ui'

const data = ref<any>({})
const formItems = ref<FormItem[]>([])

const FormItems = computed(() => {
  return formItems.value
})

function handleDrop (com: any) {
  formItems.value.push({
    com: com,
    field: 'field1',
    label: '属性1'
  })
}

</script>

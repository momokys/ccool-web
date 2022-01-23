<template>
  <cl-form
    :model="formData"
    :form-items="formItems"
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { FormItem, ClComs } from '@ccool/ui'

const formData = ref<any>({})
const formItems: FormItem[] = [
  {
    com: ClComs.INPUT,
    index: 'username',
    label: '用户名',
    attrs: {
      type: 'textarea'
    },
    on: {
      change: ({ fctx }: any) => {
        console.log(fctx.model)
      }
    }
  }
]
</script>

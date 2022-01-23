<template>
  <div>
    <cl-form
      :model="formData"
      :form-items="formItems"
    />
    <cl-button-group :btn-items="btnItems" />
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { ClComs, FormItem, BtnItem } from '@ccool/ui'

const formData = ref<any>({})
const formItems: FormItem[] = [
  {
    com: ClComs.INPUT,
    index: 'username',
    label: '用户名',
    on: {
      change: ({ fctx }: any) => {
        console.log(fctx.model)
      }
    }
  }
]
const btnItems: BtnItem[] = [
  {
    text: '提交',
    loadable: true,
    handle: ({ done }) => {
      console.log('提交')
      setTimeout(() => {
        done()
      }, 3000)
    }
  },
  {
    text: '提交',
    handle: () => {
      console.log('提交')
    }
  }
]
</script>

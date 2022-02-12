<template>
  <div>
    <cl-layer-input
      v-model="content"
      type="code-editor"
      text="change"
      title="代码编辑"
      :code-editor-props="{
        maxLines: 1000,
        minLines: 1000
      }"
    />
    <cl-form
      v-model="formData"
      :form-items="formItems"
      :label-width="'100px'"
      :label-position="'right'"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FormItem, ClLayerInput } from '@ccool/ui'
import items from '@/forms/test'

const formData = ref<any>({})
const formItems: FormItem[] = items

const content = ref<string>('')
</script>

<script lang="ts">
export default {
  name: 'SystemTest'
}
</script>

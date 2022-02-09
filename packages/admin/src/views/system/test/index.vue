<template>
  <div>
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
import { FormItem } from '@ccool/ui'
import items from '@/forms/test'

const formData = ref<any>({})
const formItems: FormItem[] = items

</script>

<script lang="ts">
export default {
  name: 'SystemTest'
}
</script>

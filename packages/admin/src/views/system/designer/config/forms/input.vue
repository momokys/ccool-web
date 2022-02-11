<template>
  <div>
    <cl-form
      v-model="ModelValue"
      :form-items="basicFormItems"
      :cloumn="1"
    />
    <cl-form
      v-model="ModelValue.attrs"
      :form-items="attrsFormItems"
      :cloumn="1"
    />
  </div>
</template>

<script lang="ts" setup>
import { ClComs, FormItem } from '@ccool/ui'
import { PropType, computed } from 'vue'

const props = defineProps({
  modelValue: {
    // type: Object as PropType<{ attrs: Record<string, any> }>,
    type: Object as PropType<any>,
    required: true
  }
})

const ModelValue = computed(() => props.modelValue)

const basicFormItems: FormItem[] = [
  {
    com: ClComs.DIVIDER,
    attrs: {
      text: '基本配置'
    }
  },
  {
    com: ClComs.INPUT,
    field: 'field',
    label: '字段ID',
    attrs: {
      clearable: true
    }
  },
  {
    com: ClComs.INPUT,
    field: 'label',
    label: '字段名',
    attrs: {
      clearable: true
    }
  }
]

const attrsFormItems: FormItem[] = [
  {
    com: ClComs.DIVIDER,
    attrs: {
      text: '组件参数'
    }
  },
  {
    com: ClComs.SELECT,
    field: 'type',
    label: '类型',
    value: 'text',
    attrs: {
      options: [
        { label: '单行文本框', value: 'text' },
        { label: '多行文本框', value: 'textarea' },
        { label: '密码框', value: 'password' }
      ]
    }
  }
]
</script>

import { isString, kebabCase } from 'lodash'
import { FormItem } from '@ccool/ui'
import { codeFormatter } from './code-formatter'

export function generateCode (config: Record<string, any> & { formItems: FormItem[] }) {
  // 生成模版
  let props = ''
  const keyNum = Object.keys(config).length
  Object.entries(config).forEach(([key, value], index) => {
    const tab = '      '
    if (key === 'formItems') {
      props += `${tab}:form-items="formItems"`
    } else if (isString(value)) {
      props += `${tab}:${kebabCase(key)}="'${value}'"`
    } else {
      props += `${tab}:${kebabCase(key)}="${value}"`
    }
    if (index !== keyNum - 1) {
      props += '\n'
    }
  })
  const template = `<template>
  <div>
  <!-- ## form -->
    <cl-form
      v-model="ModelValue"
${props}
    />
  </div>
</template>`

  // 生成脚本
  let formItemScript = '[' +
    config.formItems.map(item => {
      return '{' +
        Object.entries(item).map(([key, value]) => {
          if (key === 'attrs') {
            return 'attrs: {' +
              Object
                .entries(value)
                .map(([key, value]) => {
                  if (key !== 'options' && isString(value)) {
                    return `${key}: '${value}'`
                  } else {
                    return `${key}: ${value}`
                  }
                }).join(',') +
            '}'
          } else if (key === 'on') {
            return 'on: {' +
              Object
                .entries(value)
                .map(([key, value]) => {
                  return `${key}: ${value}`
                }).join(',') +
            '}'
          } else if (key === 'disabled' || key === 'hidden') {
            return `${key}: ${value}`
          } else if (isString(value)) {
            return `${key}: '${value}'`
          } else {
            return `${key}: ${value}`
          }
        }).join(',') +
      '}'
    }).join(',') +
  ']'

  formItemScript = codeFormatter(formItemScript, 'js')

  const script = `<script lang="ts" setup>
import { ref, computed, PropType } from 'vue'
import { FormItem } from '@ccool/ui'

// ## defineProps
const props = defineProps({
  modelValue: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  }
})

// ## modelValue
const ModelValue = computed(() => props.modelValue)

// ## formItems
const formItems = ref<FormItem[]>(${formItemScript})
</script>`
  return template + '\n\n' + script
}

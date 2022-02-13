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
      v-bind="{ ...config, formItems: FormItems}"
    />
  </cl-drag>
</template>

<script lang="tsx" setup>
import { ref, computed, PropType, resolveDynamicComponent, Component, VNode } from 'vue'
import { ClDrag, FormItem, layer } from '@ccool/ui'
import _ from 'lodash'

const props = defineProps({
  config: {
    type: Object as PropType<Record<string, any> & { formItems: FormItem[] }>,
    default: () => ({ formItems: [] })
  }
})

const global = window as any

const emit = defineEmits(['select', 'insert'])

const data = ref<any>({})

const FormItems = computed(() => normalize(props.config.formItems))

function handleDrop (com: any) {
  emit('insert', com)
}

function handleSelect (index: number) {
  return () => {
    emit('select', index)
  }
}

function resolveCom (com: string | Component | VNode | undefined) {
  if (com === undefined) {
    return <></>
  } else if (_.isString(com)) {
    return resolveDynamicComponent(com)
  } else {
    return com
  }
}

function normalize (formItems: FormItem[]) {
  return formItems.map((item, index) => {
    // 将代码串转化为函数
    const events = Object
      .entries(item.on || {})
      .reduce((result, [key, code]) => {
        const fn = new Function('', `return ${code}`)
        result[key] = fn()
        return result
      }, {} as Record<string, any>)

    // 格式化 attrs
    const attrs = { ...item.attrs }
    if (item.attrs && item.attrs.options) {
      const fn = new Function('', `return ${item.attrs.options}`)
      attrs.options = fn()
    }

    return {
      ...item,
      com: (_props: any, ctx: any) => {
        const com = resolveCom(item.com)
        return (
          <cl-drag
            style={{ display: props.config.layout === 'inline' ? 'inline-block' : 'block' }}
            onClick={ handleSelect(index) }
          >
            <el-form-item
              prop={ item.field }
              label={ item.label }
            >
              <com
                { ..._props }
                v-model={ data.value[item.field || ''] }
              />
            </el-form-item>
          </cl-drag>
        )
      },
      field: undefined,
      label: undefined,
      attrs: attrs,
      on: events
    }
  })
}

function init () {
  global.layer = layer
}

init()
</script>

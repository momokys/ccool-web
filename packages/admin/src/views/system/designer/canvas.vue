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
    <el-empty
      v-if="FormItems.length === 0"
      description="从左侧选择组件添加"
      class="mt-16"
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

const emit = defineEmits(['select', 'insert'])

const global = window as any

const selectIdx = ref<number>(-1)

const data = ref<any>({})

const FormItems = computed(() => normalize(props.config.formItems))

function handleDrop (com: any) {
  emit('insert', com)
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

function handleSelect (index: number) {
  return () => {
    selectIdx.value = index
    emit('select', index)
  }
}

function handleMove (index: number) {
  return (data: any) => {
    console.log(data)
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
            group={ 'cl-form-desiner' }
            data={ index }
            onClick={ handleSelect(index) }
            onDrop={ handleMove(index) }
            class={{ 'cl-drag': true, selected: selectIdx.value === index }}
            style={{ display: props.config.layout === 'inline' ? 'inline-block' : 'block' }}
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

<style lang="less">
.cl-drag {
  padding: 10px;
  border: 1px dashed transparent;
  transition: border .3s;
  &.selected {
    border: 1px dashed #60a5fa;
  }
  .el-form-item {
    margin-bottom: 0 !important;
  }
}
</style>

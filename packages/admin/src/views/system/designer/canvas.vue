<template>
  <cl-drag
    :name="'form-canvas'"
    :draggable="false"
    @drop="handleDrop"
    class="w-full h-full"
    style="background-color: #fff;"
  >
    <cl-form
      v-if="FormItems.length > 0"
      v-model="data"
      v-bind="{ ...config, formItems: FormItems, height: '100%'}"
    />
    <el-empty
      v-else
      description="从左侧选择组件添加"
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
  },
  selectIndex: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['select', 'insert', 'move', 'remove', 'copy'])

const global = window as any

const data = ref<any>({})

const FormItems = computed(() => normalize(props.config.formItems))

function resolveCom (com: string | Component | VNode | undefined) {
  if (com === undefined) {
    return <></>
  } else if (_.isString(com)) {
    return resolveDynamicComponent(com)
  } else {
    return com
  }
}

function handleDrop (com: any, dest?: number) {
  emit('insert', com, dest)
}

function handleSelect (index: number) {
  return () => {
    emit('select', index)
  }
}

function handleMove (dest: number) {
  return (src: any) => {
    if (_.isString(src)) {
      handleDrop(src, dest)
    } else {
      emit('move', src, dest)
    }
  }
}

function generateFun (code: string) {
  const fn = new Function('', `return ${code}`)
  return fn()
}

function normalize (formItems: FormItem[]) {
  return formItems.map((item, index) => {
    // 将代码串转化为函数
    const events = Object
      .entries(item.on || {})
      .reduce((result, [key, code]) => {
        const fn = generateFun(code.toString())
        result[key] = fn
        return result
      }, {} as Record<string, any>)
    const disabled = generateFun((item.disabled || '').toString())
    const hidden = generateFun((item.hidden || '').toString())

    // 格式化 attrs
    const attrs = { ...item.attrs }
    if (item.attrs && item.attrs.options) {
      attrs.options = generateFun(item.attrs.options)
    }

    return {
      ...item,
      com: (_props: any, ctx: any) => {
        const com = resolveCom(item.com)
        const slots = {
          default: () => (
            <el-form-item
              prop={ item.field }
              label={ item.label }
            >
              <com
                { ..._props }
                v-model={ data.value[item.field || ''] }
              />
            </el-form-item>
          ),
          helper: () => (
            <div class="drag-toolbar">
              <cl-icon
                icon={ 'el-icon-document-copy' }
                size={ 14 }
                color={ '#fff' }
                onClick={
                  (ev: MouseEvent) => {
                    ev.stopPropagation()
                    emit('copy', index)
                  }
                }
              />
              <cl-icon
                icon={ 'el-icon-delete' }
                size={ 14 }
                color={ '#fff' }
                onClick={
                  (ev: MouseEvent) => {
                    ev.stopPropagation()
                    emit('remove', index)
                  }
                }
              />
            </div>
          )
        }
        return (
          <cl-drag
            tag={ 'div' }
            group={ 'cl-form-desiner' }
            data={ index }
            onClick={ handleSelect(index) }
            onDrop={ handleMove(index) }
            class={{ 'drag-com': true, selected: props.selectIndex === index }}
            style={{ display: props.config.layout === 'inline' ? 'inline-block' : 'block' }}
            v-slots={ slots }
          />
        )
      },
      field: undefined,
      label: undefined,
      attrs: attrs,
      disabled: disabled,
      hidden: hidden,
      on: events
    }
  })
}

function init () {
  global.layer = layer
  global._ = _
}

init()
</script>

<style lang="less">
.drag-com {
  border: 2px solid transparent;
  transition: border .3s;
  .cl-drag__helper {
    display: none;
  }
  &.selected {
    border: 2px solid #60a5fa;
    .cl-drag__helper {
      height: 22px;
      display: flex;
      align-items: center;
      background-color: #60a5fa;
      cursor: pointer;
      .drag-toolbar {
        padding: 0 4px;
        font-size: 0;
      }
    }
  }
}
</style>

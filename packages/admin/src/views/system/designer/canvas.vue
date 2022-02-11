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

<script lang="tsx" setup>
import { ref, computed, PropType, resolveDynamicComponent, Component, VNode } from 'vue'
import { ClDrag, FormItem } from '@ccool/ui'
import { isString } from 'lodash'

const props = defineProps({
  config: {
    type: Array as PropType<FormItem[]>,
    default: () => ([])
  }
})

const emit = defineEmits(['select', 'insert'])

const data = ref<any>({})

const FormItems = computed(() => {
  return props.config.map((item, index) => {
    return {
      ...item,
      field: undefined,
      label: undefined,
      com: (props: any, ctx: any) => {
        const com = resolveCom(item.com)
        return (
          <cl-drag onClick={ handleSelect(index) }>
            <el-form-item
              prop={ item.field }
              label={ item.label }
            >
              <com
                { ...props }
                v-model={ data.value[item.field || ''] }
              />
            </el-form-item>
          </cl-drag>
        )
      }
    }
  })
})

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
  } else if (isString(com)) {
    return resolveDynamicComponent(com)
  } else {
    return com
  }
}

</script>

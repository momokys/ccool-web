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
import { ref, computed, PropType, watch, resolveDynamicComponent, Component, VNode, nextTick } from 'vue'
import { ClDrag, FormItem } from '@ccool/ui'
import { isString } from 'lodash'

const props = defineProps({
  modelValue: {
    type: Array as PropType<FormItem[]>,
    default: () => ([])
  }
})

const emit = defineEmits(['update:modelValue', 'select'])

const data = ref<any>({})
const formItems = ref<FormItem[]>(props.modelValue)

const FormItems = computed(() => {
  return formItems.value.map((item, index) => {
    return {
      com: (props: any) => {
        console.log(props)
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

watch(
  () => props.modelValue,
  () => {
    formItems.value = props.modelValue
  },
  { deep: true }
)

watch(
  formItems.value,
  () => {
    emit('update:modelValue', formItems.value)
  },
  { deep: true }
)

function handleDrop (com: any) {
  formItems.value.push({
    com: com,
    field: 'field1',
    label: '属性1'
  })
  nextTick(() => {
    handleSelect(formItems.value.length - 1)()
  })
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

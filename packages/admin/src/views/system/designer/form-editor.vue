<template>
  <div class="h-full">
    <cl-form
      v-model="ModelValue"
      :form-items="formItems"
      :cloumn="1"
      :label-width="'90px'"
      :label-position="'left'"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, ref } from 'vue'
import { ClComs, FormItem } from '@ccool/ui'

const props = defineProps({
  modelValue: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  }
})

const ModelValue = computed(() => props.modelValue)

const formItems = ref<FormItem[]>([
  {
    com: ClComs.DIVIDER,
    attrs: {
      text: '基本属性'
    }
  },
  {
    com: ClComs.SELECT,
    field: 'layout',
    label: '布局',
    value: 'grid',
    attrs: {
      options: [
        { label: '栅格布局', value: 'grid' },
        { label: '行内布局', value: 'inline' }
      ]
    }
  },
  {
    com: ClComs.SELECT,
    field: 'cloumn',
    label: '栅格列数',
    value: 2,
    attrs: {
      options: [
        { label: '1列', value: 1 },
        { label: '2列', value: 2 },
        { label: '3列', value: 3 },
        { label: '4列', value: 4 }
      ]
    }
  },
  {
    com: ClComs.SELECT,
    field: 'size',
    label: '组件大小：',
    value: 'small',
    attrs: {
      options: [
        { label: '小', value: 'small' },
        { label: '中', value: 'default' },
        { label: '大', value: 'large' }
      ]
    }
  },
  {
    com: ClComs.INPUT,
    field: 'labelWidth',
    label: '标签宽度：',
    value: '80px'
  },
  {
    com: ClComs.SELECT,
    field: 'labelPosition',
    label: '标签对齐：',
    value: 'left',
    attrs: {
      options: [
        { label: '左对齐', value: 'left' },
        { label: '右对齐', value: 'right' },
        { label: '上对齐', value: 'top' }
      ]
    }
  }
])
</script>

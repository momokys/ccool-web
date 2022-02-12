<template>
  <div class="h-full">
    <el-scrollbar>
      <cl-form
        v-model="ModelValue"
        :form-items="basicFormItems"
        :cloumn="1"
        :label-width="'90px'"
      />
      <cl-form
        v-model="ModelValue.attrs"
        :form-items="attrsFormItems"
        :cloumn="1"
        :label-width="'90px'"
      />
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ClComs, FormItem } from '@ccool/ui'
import { PropType, computed } from 'vue'

const props = defineProps({
  modelValue: {
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
    label: '字段ID：',
    attrs: {
      clearable: true
    }
  },
  {
    com: ClComs.INPUT,
    field: 'label',
    label: '字段名：',
    value: false,
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
    com: ClComs.DINPUT,
    field: 'options',
    label: '选项'
  }
]
</script>

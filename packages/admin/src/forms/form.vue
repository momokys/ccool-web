<template>
  <div>
    <!-- ## form -->
    <cl-form
      v-model="ModelValue"
      :form-items="formItems"
      :layout="'grid'"
      :cloumn="2"
      :size="'small'"
      :label-width="'60px'"
      :label-position="'left'"
    />
  </div>
</template>

<script lang="ts" setup>
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
const formItems = ref<FormItem[]>([{
  com: 'ElInput',
  field: 'userName',
  label: '用户名',
  attrs: {
    type: 'text',
    clearable: true,
    placeholder: '请输入6-12个字母或数字'
  },
  on: {
    change: ({
      model,
      fctx,
      ev
    }) => {
      // todo...
      layer.success('Hello world')
    }
  }
}, {
  com: 'ElInput',
  field: 'password',
  label: '密码',
  attrs: {
    type: 'password',
    clearable: true,
    placeholder: '请输入至少8个字母、数字'
  },
  on: {
    change: ({
      model,
      fctx,
      ev
    }) => {
      // todo...
    }
  }
}, {
  com: 'ClRadioGroup',
  field: 'sex',
  label: '性别',
  attrs: {
    options: [{
      label: '男',
      value: '0'
    }, {
      label: '女',
      value: '1'
    }]
  },
  on: {
    change: ({
      model,
      fctx,
      ev
    }) => {
      // todo...
    }
  }
}, {
  com: 'ClSelect',
  field: 'role',
  label: '角色',
  attrs: {
    options: [{
      label: '管理员',
      value: 'admin'
    }, {
      label: '客户',
      value: 'customer'
    }]
  },
  on: {
    change: ({
      model,
      fctx,
      ev
    }) => {
      // todo...
    }
  }
}]
)
</script>

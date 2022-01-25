<template>
  <div>
    <div class="flex mb-10">
      <div class="w-1/4 mr-5">
        <cl-form
          :model="meta"
          :form-items="mFi"
        />
      </div>
      <el-button
        type="primary"
        @click="handleClick"
      >
        新增属性
      </el-button>
    </div>
    <div class="w-1/2">
      <cl-form
        :model="formData"
        :form-items="formItems"
        :label-width="100"
        :label-position="'left'"
        :height="'500px'"
      />
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import {
  ClComs,
  FormItem
} from '@ccool/ui'

const meta = reactive<Record<string, string>>({
  label: '属性',
  prop: 'prop'
})
const mFi: FormItem[] = [
  {
    com: ClComs.INPUT,
    index: 'label',
    label: '标签'
  },
  {
    com: ClComs.INPUT,
    index: 'prop',
    label: '属性名'
  }
]

const formData = reactive<any>({})
const formItems = reactive<FormItem[]>([
  {
    com: ClComs.INPUT,
    index: 'username',
    label: '用户名',
    on: {
      change: ({ fctx }: any) => {
        console.log(fctx.model)
      }
    }
  },
  {
    com: ClComs.INPUT,
    index: 'password',
    label: '密码',
    attrs: {
      type: 'password'
    },
    on: {
      change: ({ fctx }: any) => {
        console.log(fctx.model)
      }
    }
  }
])

function handleClick () {
  if (meta.label.length < 0 || meta.prop.length < 0) return
  formItems.push({
    com: ClComs.INPUT,
    label: meta.label,
    index: meta.prop
  })
}
</script>

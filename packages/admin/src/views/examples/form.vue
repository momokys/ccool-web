<template>
  <div>
    <div class="w-1/2 flex mb-10">
      <div class="w-2/3 mr-5">
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
    <div class="w-full flex">
      <div class="w-1/2">
        <cl-form
          :model="formData"
          :form-items="formItems"
          :btns="btns"
          :label-width="100"
          :label-position="'left'"
          :max-height="'500px'"
        />
      </div>
      <div
        class="w-1/2"
        style="max-height: 600px;"
      >
        <vue-json-view
          :src="formData"
          :theme="'apathy:inverted'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
import {
  ClComs,
  layer,
  FormItem,
  BtnItem
} from '@ccool/ui'
import VueJsonView from '@matpool/vue-json-view'
import { components } from '@/constant/components'
import defaultFormItems from '@/forms/example'
const defaultMeta = {
  label: '属性',
  index: 'prop',
  com: ClComs.INPUT
}
const meta = reactive(defaultMeta)
const mFi: FormItem[] = [
  {
    com: ClComs.INPUT,
    index: 'label',
    label: '标签',
    span: 8
  },
  {
    com: ClComs.INPUT,
    index: 'index',
    label: '属性名',
    span: 8
  },
  {
    com: ClComs.SELECT,
    index: 'com',
    label: '组件',
    span: 8,
    attrs: {
      full: true,
      options: components,
      onClear: () => {
        console.log('ewfewf')
      },
      style: {
        width: '200px'
      }
    }
  }
]

const formData = ref<any>({})

const formItems = ref<FormItem[]>([...defaultFormItems])

const btns: BtnItem[] = [
  {
    text: '提交',
    loadable: true,
    attrs: {
      type: 'primary'
    },
    handle ({ done }) {
      setTimeout(() => {
        done()
        console.log(formData)
        layer.success('数据提交成功')
      }, 3000)
    }
  },
  {
    text: '重置',
    handle () {
      formItems.value = [...defaultFormItems]
      formData.value = {}
    }
  }
]

function handleClick () {
  if (meta.label.length < 0 || meta.index.length < 0) return
  if (meta.com === ClComs.SELECT || meta.com === ClComs.CHECKBOX_GROUP || meta.com === ClComs.RADIO_GROUP) {
    formItems.value.push({
      ...meta,
      value: meta.com === ClComs.CHECKBOX_GROUP ? [] : '',
      attrs: {
        options: [
          { label: '选项1', value: 'option1' },
          { label: '选项2', value: 'option2' }
        ]
      }
    })
  } else {
    formItems.value.push({ ...meta })
  }
}
</script>

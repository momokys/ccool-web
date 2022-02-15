<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex items-center h-12 p-4 border">
      <el-button
        type="success"
        size="small"
        plain
        style="margin-left: auto;"
        @click="previewJson"
      >
        JSON 预览
      </el-button>
      <el-button
        type="success"
        size="small"
        plain
        class="ml-2"
        @click="exportCode"
      >
        导出代码
      </el-button>
      <el-button
        type="danger"
        size="small"
        plain
        class="ml-2"
        @click="clear"
      >
        清空
      </el-button>
    </div>
    <div
      class="flex"
      style="height: calc(100% - 1rem);"
    >
      <div
        class="flex flex-wrap border-l-1 border-r-1 border-b-1"
        style="width: 250px;"
      >
        <com-select />
      </div>
      <div class="flex-1 p-4 border-b-1 bg-light-300">
        <form-canvas
          :config="config"
          @select="handleSelect"
          @insert="handleInsert"
        />
      </div>
      <div class="w-64 p-2 border-l-1 border-r-1 border-b-1">
        <el-tabs
          v-model="activeName"
          class="h-full"
        >
          <el-tab-pane
            label="表单配置"
            name="form"
          >
            <form-editor v-model="config" />
          </el-tab-pane>
          <el-tab-pane
            label="组件配置"
            name="com"
          >
            <com-editor
              ref="comEditorRef"
              v-if="index !== -1"
              v-model="config.formItems[index]"
              :config="comEditorConfig"
            />
            <el-empty
              v-if="config.formItems.length === 0"
              :image-size="100"
              description="未选择组件"
            />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { FormItem, layer } from '@ccool/ui'
import VueJsonView from '@matpool/vue-json-view'
import ComSelect from './com-select.vue'
import FormCanvas from './canvas.vue'
import ComEditor from './com-editor.vue'
import FormEditor from './form-editor.vue'
import comEditorConfigMap from './config/forms'
import { ComEditorConfig } from './config/types'
import { generateCode } from './utils/code-generator'
import axios from 'axios'

const activeName = ref<string>('form')

const config = ref<Record<string, any> & { formItems: FormItem[] }>({
  formItems: []
})

const index = ref<number>(-1)

const comEditorConfig = ref<ComEditorConfig>()

const comEditorRef = ref<InstanceType<typeof ComEditor>>()

const code = ref<string>('')

function handleSelect (i: number) {
  comEditorConfigMap.get(config.value.formItems[i].com)().then((res: any) => {
    comEditorConfig.value = res.default
    index.value = i
  })
}

function handleInsert (com: string) {
  if (!comEditorConfigMap.has(com)) {
    layer.error(`没有找到 ${com} 的编辑配置`)
    return
  }
  comEditorConfigMap
    .get(com)()
    .then((res: any) => {
      config.value.formItems.push({
        com,
        field: 'field',
        label: '字段名',
        attrs: {},
        on: {}
      })
      comEditorConfig.value = res.default
      index.value = config.value.formItems.length - 1
      comEditorRef.value?.refresh()
      activeName.value = 'com'
    })
}

function previewJson () {
  layer.open({
    title: '表单配置 JSON 预览',
    shade: true,
    height: '500px',
    content: (
      <VueJsonView
        src={ config.value }
        theme={ 'apathy:inverted' }
      />
    )
  })
}

function exportCode () {
  code.value = generateCode(config.value)
  layer.open({
    shade: true,
    height: '500px',
    title: '导出代码',
    content: () => (
      <cl-code-editor
        v-model={ code.value }
        mode={ 'html' }
        readonly={ true }
        maxLines={ 1000 }
        minLines={ 1000 }
      />
    ),
    btns: [
      {
        text: '取消',
        handle () {
          layer.close()
        }
      },
      {
        text: '保存',
        loadable: true,
        attrs: {
          type: 'primary'
        },
        handle ({ done }) {
          axios.post('/cl-form', {
            code: code.value,
            fileName: 'form'
          }).then(res => {
            console.log(res)
            if (res.data.code !== 20000) {
              layer.error(res.data.msg)
            } else {
              layer.success('代码文件保存成功')
            }
          }).catch(err => {
            layer.error('代码文件保存错误')
            console.error(err)
          }).finally(() => {
            done()
            layer.close()
          })
        }
      }
    ]
  })
}

function clear () {
  index.value = -1
  config.value.formItems = []
}

</script>

<script lang="tsx">
export default {
  name: 'FormDesigner'
}
</script>

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
        type="danger"
        size="small"
        plain
        class="ml-2"
        @click="clear"
      >
        清空
      </el-button>
    </div>
    <div class="flex flex-1">
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
        <component
          v-if="index !== -1"
          v-model="config[index]"
          :is="InputCfgForm"
        />
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import ComSelect from './com-select.vue'
import FormCanvas from './canvas.vue'
import { FormItem, layer } from '@ccool/ui'
import VueJsonView from '@matpool/vue-json-view'
import InputCfgForm from './config/forms/input.vue'

const config = ref<FormItem[]>([])

const index = ref<number>(-1)

function previewJson () {
  layer.open({
    title: '表单配置 JSON 预览',
    shade: true,
    content: (
      <VueJsonView
        src={ config.value }
        theme={ 'apathy:inverted' }
      />
    )
  })
}

function handleSelect (i: number) {
  index.value = i
}

function handleInsert (com: string) {
  config.value.push({
    com,
    field: 'field',
    label: '字段名',
    attrs: {}
  })
  index.value = config.value.length - 1
}

function clear () {
  index.value = -1
  config.value = []
}

</script>

<script lang="tsx">
export default {
  name: 'FormDesigner'
}
</script>

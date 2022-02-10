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
        <form-canvas v-model="config" />
      </div>
      <div class="w-64 border-l-1 border-r-1 border-b-1" />
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import ComSelect from './com-select.vue'
import FormCanvas from './canvas.vue'
import { FormItem, layer } from '@ccool/ui'
import VueJsonView from '@matpool/vue-json-view'

const config = ref<FormItem[]>([])

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

function clear () {
  config.value = []
}

</script>

<script lang="tsx">
export default {
  name: 'FormDesigner'
}
</script>

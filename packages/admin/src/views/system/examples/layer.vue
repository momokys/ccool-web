<template>
  <div>
    <el-button
      type="primary"
      @click="handleClick(false)"
    >
      无遮罩
    </el-button>
    <el-button
      type="primary"
      @click="handleClick(true)"
    >
      有遮罩
    </el-button>
    <el-button
      type="primary"
      @click="asyncOpen"
    >
      异步加载组件
    </el-button>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import {
  ClCodeEditor,
  layer
} from '@ccool/ui'

const content = ref<any>('')

function handleClick (shade: boolean) {
  layer.open({
    shade,
    height: '500px',
    title: '代码编辑器  ',
    content: () => (
      <ClCodeEditor
        v-model={ content.value }
        maxLines={ 1000 }
        minLines={ 1000 }
      />
    ),
    btns: [
      {
        text: '取消',
        handle: () => {
          layer.close()
        }
      },
      {
        text: '运行',
        attrs: {
          type: 'primary'
        },
        handle: () => {
          const fn = new Function(content.value)
          const result = fn()
          layer.success(`运行结果：${result}`)
          layer.close()
        }
      }
    ]
  })
}

function asyncOpen () {
  layer.open({
    width: '60%',
    height: '600px',
    content: () => import('./form.vue')
  })
}

</script>

<script lang="tsx">
export default {
  name: 'ExampleLayer'
}
</script>

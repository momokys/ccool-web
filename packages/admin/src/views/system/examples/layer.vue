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
  ClComs,
  FormItem,
  layer
} from '@ccool/ui'

const formData = ref<any>({})
const formItems: FormItem[] = [
  {
    com: ClComs.INPUT,
    field: 'username',
    label: '用户名',
    on: {
      change: ({ fctx }: any) => {
        console.log(fctx.model)
      }
    }
  },
  {
    com: ClComs.INPUT,
    field: 'password',
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
]

function handleClick (shade: boolean) {
  layer.open({
    shade,
    content: () => (
      <cl-form
        v-model={formData.value}
        form-items={formItems}
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
        text: '确定',
        loadable: true,
        attrs: {
          type: 'primary'
        },
        handle: ({ done }) => {
          setTimeout(() => {
            done()
            layer.close()
            console.log(formData.value)
          }, 3000)
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

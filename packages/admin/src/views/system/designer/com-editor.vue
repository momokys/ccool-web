<template>
  <div
    v-if="refreshFlg"
    class="h-full"
  >
    <el-scrollbar>
      <el-divider>基础配置</el-divider>
      <cl-form
        v-model="ModelValue"
        :form-items="basicFormItems"
        :cloumn="1"
        :label-width="'90px'"
      />
      <el-divider>组件参数</el-divider>
      <cl-form
        v-model="ModelValue.attrs"
        :form-items="config.attrs"
        :cloumn="1"
        :label-width="'90px'"
      />
      <el-divider>组件事件</el-divider>
      <cl-form
        v-model="ModelValue.on"
        :form-items="eventFormItems"
        :cloumn="1"
        :label-width="'90px'"
      />
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, ref, nextTick } from 'vue'
import { ClComs, FormItem } from '@ccool/ui'
import { ExposedToComputed } from '@ccool/utils'

const props = defineProps({
  modelValue: {
    type: Object as PropType<any>,
    required: true
  },
  config: {
    type: Object as PropType<{ comType: string, attrs: FormItem[], events: string[] }>,
    default: () => ({})
  }
})

const refreshFlg = ref<boolean>(true)

const ModelValue = computed(() => {
  return props.modelValue
})

const basicFormItems: FormItem[] = [
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

const eventFormItems = computed(() => props.config.events.map(ev => ({
  com: ClComs.LAYER_INPUT,
  field: ev,
  label: `${ev}：`,
  value: `({ model, fctx, ev }) => {
  // todo...
}`,
  attrs: {
    text: '编写代码',
    type: 'code-editor',
    title: '代码编辑',
    codeEditorProps: {
      maxLines: 1000,
      minLines: 1000
    }
  }
})))

const exposed = {
  refresh: () => {
    refreshFlg.value = !refreshFlg.value
    nextTick(() => {
      refreshFlg.value = !refreshFlg.value
    })
  }
}

defineExpose(exposed)

</script>

<script lang="ts">
export default {
  name: 'ComEditor',
  // eslint-disable-next-line no-undef
  computed: {} as ExposedToComputed<typeof exposed>
}
</script>

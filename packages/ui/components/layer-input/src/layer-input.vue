<template>
  <div class="inline-block">
    <el-button
      :type="buttonType"
      :icon="'Edit'"
      @click="handleClick"
    >
      {{ text }}
    </el-button>
    <div style="display: none;">
      <el-input
        v-model="native"
      />
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { PropType, ref, watch } from 'vue'
import { layer } from '../../layer'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: '标题'
  },
  type: {
    type: String as PropType<'code-editor'>,
    default: 'code-editor'
  },
  buttonType: {
    type: String as PropType<'' | 'default' | 'text' | 'primary' | 'success' | 'warning' | 'info' | 'danger'>,
    default: 'default'
  },
  codeEditorProps: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const native = ref<string>(props.modelValue)

watch(
  () => props.modelValue,
  () => {
    native.value = props.modelValue
  }
)

function handleClick () {
  switch (props.type) {
    case 'code-editor':
      layer.open({
        shade: true,
        height: '500px',
        title: props.title,
        content: () => (
          <cl-code-editor
            v-model={ native.value }
            { ...props.codeEditorProps }
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
            text: '保存',
            attrs: {
              type: 'primary'
            },
            handle: () => {
              emit('update:modelValue', native.value)
              emit('change', native.value)
              layer.close()
            }
          }
        ]
      })
      break
    default:
      throw new Error('argument "type" is error')
  }
}

</script>

<script lang="tsx">
export default {
  name: 'ClLayerInput'
}
</script>

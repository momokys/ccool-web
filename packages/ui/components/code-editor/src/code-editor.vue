<template>
  <div
    ref="aceRef"
    class="ace-editor"
  />
</template>

<script lang="ts" setup>
import { onMounted, PropType, ref } from 'vue'
import ace from 'brace'
import 'brace/theme/monokai'
import 'brace/mode/javascript'
import 'brace/snippets/javascript'
import 'brace/mode/json'
import 'brace/snippets/json'
import 'brace/mode/html'
import 'brace/snippets/html'
import 'brace/mode/css'
import 'brace/snippets/css'
import 'brace/mode/less'
import 'brace/snippets/less'
import 'brace/mode/scss'
import 'brace/snippets/scss'
import 'brace/ext/language_tools'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  theme: {
    type: String,
    default: 'monokai'
  },
  mode: {
    type: String as PropType<'javascript' | 'json' | 'html' | 'css'>,
    default: 'javascript'
  },
  readonly: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: undefined
  },
  width: {
    type: String,
    default: undefined
  },
  maxLines: {
    type: Number,
    default: undefined
  },
  minLines: {
    type: Number,
    default: undefined
  }
})

const emit = defineEmits(['update:modelValue'])

const aceRef = ref<HTMLDivElement>()
let editor: ace.Editor

onMounted(() => {
  editor = ace.edit(aceRef.value as HTMLElement)
  editor.$blockScrolling = Infinity
  editor.getSession().setMode(`ace/mode/${props.mode}`)
  editor.setTheme(`ace/theme/${props.theme}`)
  editor.setOptions({
    maxLines: props.maxLines, // 最大行数，超过会自动出现滚动条
    minLines: props.minLines, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
    fontSize: 12, // 编辑器内字体大小
    tabSize: 2, // 制表符设置为2个空格大小
    readOnly: props.readonly,
    highlightActiveLine: true,
    enableBasicAutocompletion: true,
    autoScrollEditorIntoView: false,
    enableSnippets: true, // 设置代码片段提示
    enableLiveAutocompletion: true // 设置自动提示
  })
  editor.setValue(props.modelValue)
  editor.getSession().on('change', ev => {
    emit('update:modelValue', editor.getValue())
  })
})

</script>

<script lang="ts">
export default {
  name: 'ClCodeEditor'
}
</script>

<style lang="less" scoped>
.ace-editor {
  height: v-bind(height);
  width: v-bind(width);
}
</style>

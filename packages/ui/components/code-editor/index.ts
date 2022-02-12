import CodeEditor from './src/code-editor.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/types/common'

CodeEditor.install = (app: App, options: ClOptionsType) => {
  app.component('ClCodeEditor', CodeEditor)
}

const _CodeEditor = CodeEditor as SFCWithInstall<typeof CodeEditor>

export default _CodeEditor

export const ClCodeEditor = _CodeEditor

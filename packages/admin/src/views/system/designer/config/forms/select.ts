import { ClComs } from '@ccool/ui'
import { ComEditorConfig } from '../types'

export default {
  comType: 'form',
  attrs: [
    {
      com: ClComs.LAYER_INPUT,
      field: 'options',
      label: '选项',
      value: `[
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' }
]`,
      attrs: {
        text: '编写代码',
        type: 'code-editor',
        title: '代码编辑',
        inputProps: {
          maxLines: 1000,
          minLines: 1000
        }
      }
    },
    {
      com: ClComs.INPUT,
      field: 'placeholder',
      label: '提示：'
    }
  ],
  events: ['change']
} as ComEditorConfig

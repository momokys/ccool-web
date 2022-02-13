import { ClComs } from '@ccool/ui'
import { ComEditorConfig } from '../types'

export default {
  comType: 'form',
  attrs: [
    {
      com: ClComs.SELECT,
      field: 'type',
      label: '类型：',
      value: 'text',
      attrs: {
        options: [
          { label: '单行文本框', value: 'text' },
          { label: '多行文本框', value: 'textarea' },
          { label: '密码框', value: 'password' }
        ]
      }
    },
    {
      com: ClComs.SWITCH,
      field: 'clearable',
      label: '清空按钮：'
    },
    {
      com: ClComs.INPUT,
      field: 'placeholder',
      label: '提示：'
    }
  ],
  events: ['change']
} as ComEditorConfig

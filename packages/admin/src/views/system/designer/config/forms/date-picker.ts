import { ClComs } from '@ccool/ui'
import { ComEditorConfig } from '../types'

export default {
  comType: 'form',
  attrs: [
    {
      com: ClComs.INPUT,
      field: 'valueFormat',
      label: '日期格式：',
      value: 'YYYY-MM-DD',
      attrs: {
        clearable: true
      }
    },
    {
      com: ClComs.SWITCH,
      field: 'editable',
      label: '文本可输：'
    },
    {
      com: ClComs.INPUT,
      field: 'placeholder',
      label: '提示：'
    }
  ],
  events: ['change']
} as ComEditorConfig

import { ClComs } from '@ccool/ui'

export default [
  {
    type: 'form',
    name: '表单组件',
    list: [
      { name: ClComs.INPUT, text: '输入框', icon: 'el-icon-setting' },
      { name: ClComs.SELECT, text: '下拉选择框', icon: 'el-icon-setting' },
      { name: ClComs.RADIO_GROUP, text: '单选按钮组', icon: 'el-icon-setting' },
      { name: ClComs.CHECKBOX_GROUP, text: '多选按钮组', icon: 'el-icon-setting' },
      { name: ClComs.DATE_PICKER, text: '日期选择器', icon: 'el-icon-setting' }
    ]
  },
  {
    type: 'basic',
    name: '辅助组件',
    list: [
      { name: ClComs.BUTTON, text: '按钮', icon: 'cl-icon-micro' }
    ]
  }
]

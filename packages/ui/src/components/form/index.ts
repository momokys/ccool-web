import Form from './src/form.vue'
import FormItem from './src/item.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/src/types/common'

Form.install = (app: App, options: ClOptionsType) => {
  app.component('ClForm', Form)
  app.component('ClFormItem', FormItem)
}

const _Form = Form as SFCWithInstall<typeof Form>

export default _Form

export const ClForm = _Form

export type { FormProps, FormItem, FormContext } from './src/form'

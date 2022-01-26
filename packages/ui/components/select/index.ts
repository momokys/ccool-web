import Select from './src/select.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/types/common'

Select.install = (app: App, options: ClOptionsType) => {
  app.component('ClSelect', Select)
}

const _Select = Select as SFCWithInstall<typeof Select>

export default _Select

export const ClSelect = _Select

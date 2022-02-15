import RadioGroup from './src/radio-group.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/src/types/common'

RadioGroup.install = (app: App, options: ClOptionsType) => {
  app.component('ClRadioGroup', RadioGroup)
}

const _RadioGroup = RadioGroup as SFCWithInstall<typeof RadioGroup>

export default _RadioGroup

export const ClRadioGroup = _RadioGroup

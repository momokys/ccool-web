import CheckboxGroup from './src/checkbox-group.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/types/common'

CheckboxGroup.install = (app: App, options: ClOptionsType) => {
  app.component('ClCheckboxGroup', CheckboxGroup)
}

const _CheckboxGroup = CheckboxGroup as SFCWithInstall<typeof CheckboxGroup>

export default _CheckboxGroup

export const ClCheckboxGroup = _CheckboxGroup

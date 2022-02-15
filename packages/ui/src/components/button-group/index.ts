import ButtonGroup from './src/button-group.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/src/types/common'

ButtonGroup.install = (app: App, options: ClOptionsType) => {
  app.component('ClButtonGroup', ButtonGroup)
}

const _ButtonGroup = ButtonGroup as SFCWithInstall<typeof ButtonGroup>

export default _ButtonGroup

export const ClButtonGroup = _ButtonGroup

export * from './src/button-group'

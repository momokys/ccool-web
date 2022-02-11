import Divider from './src/divider.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/types/common'

Divider.install = (app: App, options: ClOptionsType) => {
  app.component('ClDivider', Divider)
}

const _Divider = Divider as SFCWithInstall<typeof Divider>

export default _Divider

export const ClDivider = _Divider

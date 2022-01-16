import Icon from './src/icon.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'

Icon.install = (app: App) => {
  app.component('ClIcon', Icon)
}

const _Icon = Icon as SFCWithInstall<typeof Icon>

export default _Icon

export const ClIcon = _Icon

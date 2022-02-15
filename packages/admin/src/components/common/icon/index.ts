import Icon from './src/icon.vue'
import Svg from './src/svg.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from '@ccool/ui/src/types/common'

Icon.install = (app: App, options: ClOptionsType) => {
  app.component('ClSvg', Svg)
  app.component('ClIcon', Icon)
}

const _Icon = Icon as SFCWithInstall<typeof Icon>

export default _Icon

export const ClIcon = _Icon

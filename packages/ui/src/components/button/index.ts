import Button from './src/button.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/src/types/common'

Button.install = (app: App, options: ClOptionsType) => {
  app.component('ClButton', Button)
}

const _Button = Button as SFCWithInstall<typeof Button>

export default _Button

export const ClDButton = _Button

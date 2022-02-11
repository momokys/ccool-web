import Dinput from './src/dinput.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/types/common'

Dinput.install = (app: App, options: ClOptionsType) => {
  app.component('ClDinput', Dinput)
}

const _Dinput = Dinput as SFCWithInstall<typeof Dinput>

export default _Dinput

export const ClDinput = _Dinput

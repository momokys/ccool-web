import Drag from './src/drag'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/src/types/common'

Drag.install = (app: App, options: ClOptionsType) => {
  app.component('ClDrag', Drag)
}

const _Drag = Drag as SFCWithInstall<typeof Drag>

export default _Drag

export const ClDrag = _Drag

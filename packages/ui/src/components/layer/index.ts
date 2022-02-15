import Layer from './src/layer.vue'
import { layerInstall } from './src/layer'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/src/types/common'

Layer.install = (app: App, options: ClOptionsType) => {
  app.component('ClLayer', Layer)
  layerInstall(app)
}

const _Layer = Layer as SFCWithInstall<typeof Layer>

export default _Layer

export const ClLayer = _Layer

export { layer } from './src/layer'

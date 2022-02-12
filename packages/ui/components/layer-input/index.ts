import LayerInput from './src/layer-input.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/types/common'

LayerInput.install = (app: App, options: ClOptionsType) => {
  app.component('ClLayerInput', LayerInput)
}

const _LayerInput = LayerInput as SFCWithInstall<typeof LayerInput>

export default _LayerInput

export const ClLayerInput = _LayerInput

import View from './src/view.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'

View.install = (app: App) => {
  app.component('ClView', View)
}

const _View = View as SFCWithInstall<typeof View>

export default _View

export const ClView = _View

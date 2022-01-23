import { App, Plugin } from 'vue'
import ElementPlus from 'element-plus'
import * as AllIcons from '@element-plus/icons-vue'
import { componentsInstall } from './components'
import { ClOptionsType } from './types/common'
import { clops } from './options'

const clui: Plugin = {
  install (
    app: App,
    options: ClOptionsType = clops
  ) {
    // 安装 ElementPlus
    app.use(ElementPlus)
    Object.entries(AllIcons).forEach(([iconName, icon]) => {
      app.component(iconName, icon)
    })

    // 安装自定义组件
    componentsInstall(app, options)
  }
}

export default clui

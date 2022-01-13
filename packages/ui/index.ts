import { App, Plugin } from 'vue'
import ElementPlus from 'element-plus'
import * as AllIcons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

const mui: Plugin = {
  install (app: App) {
    app.use(ElementPlus)
    Object.entries(AllIcons).forEach(([iconName, icon]) => {
      app.component(iconName, icon)
    })
  }
}

export default mui

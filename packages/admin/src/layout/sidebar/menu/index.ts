import Menu from './src/menu.vue'
import Item from './src/item.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'

Menu.install = (app: App) => {
  app.component('SideMenu', Menu)
  app.component('SideMenuItem', Item)
}

const _Menu = Menu as SFCWithInstall<typeof Menu>
const _Item = Item as SFCWithInstall<typeof Item>

export default _Menu

export const SideMenu = _Menu

export const SideMenuItem = _Item
export * from './src/type'

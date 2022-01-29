import { defineStore } from 'pinia'
import userApi from '@/api/user'
import { listToTrees } from '@ccool/utils'

export type MenuItemType = {
  path: string,
  src?: string,
  menuCode?: string,
  menuName: string,
  menuType: 'D' | 'M' | 'A',
  icon?: string,
  children: MenuItemType[]
}

export const useMenu = defineStore({
  id: 'menus',
  state: () => ({
    curDirect: {} as MenuItemType,
    menuTrees: [] as MenuItemType[]
  }),
  actions: {
    async qryMenus () {
      const resp = await userApi.qryCurMenu()
      const trees = listToTrees(resp.data, {
        root: 0,
        id: 'menuId',
        parentId: 'parentId',
        children: 'children'
      })
      this.menuTrees = trees
      this.curDirect = this.menuTrees[0]
      return this.menuTrees
    }
  }
})

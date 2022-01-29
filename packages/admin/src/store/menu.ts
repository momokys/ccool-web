import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import router from '@/router'
import Layout from '@/layout/index.vue'
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
      const dynamicRoutes = formatRoutes(trees)
      dynamicRoutes.forEach(route => {
        router.addRoute(route)
      })
    }
  }
})

const views = import.meta.glob('/src/views/**/*.{vue, tsx}')

function formatRoutes (menuTrees: MenuItemType[]) {
  const rouAndAct = resolveRoutes(menuTrees)
  rouAndAct.routes.forEach(route => {
    route!.meta!.actions = rouAndAct.actions
  })
  return rouAndAct.routes
}

function resolveRoutes (menuTrees: MenuItemType[]) {
  if (menuTrees === undefined || menuTrees.length <= 0) {
    return { routes: [], actions: [] } as {
      routes: RouteRecordRaw[],
      actions: MenuItemType[]
    }
  }
  return menuTrees.reduce((result, menuTree) => {
    if (menuTree.menuType === 'A') {
      result.actions.push(menuTree)
      return result
    } else {
      const route: any = {
        path: menuTree.path,
        name: menuTree.menuCode,
        meta: {
          title: menuTree.menuName,
          icon: menuTree.icon,
          actions: []
        }
      }

      const rouAndAct = resolveRoutes(menuTree.children)

      if (rouAndAct.routes.length <= 0) {
        route.component = views[menuTree.src || '/src/views/home/index.vue']
      } else {
        route.redirect = rouAndAct.routes[0].path
      }

      if (menuTree.menuType === 'M') {
        result.routes.push(route)
        result.routes = result.routes.concat(rouAndAct.routes)
      } else if (menuTree.menuType === 'D') {
        route.component = Layout
        route.children = rouAndAct.routes
        result.routes.push(route)
      }

      return result
    }
  }, { routes: [], actions: [] } as {
    routes: RouteRecordRaw[],
    actions: MenuItemType[]
  })
}

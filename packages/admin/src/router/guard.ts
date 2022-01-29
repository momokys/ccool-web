import { NavigationGuardNext, RouteLocationNormalized, NavigationFailure, Router, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import nprogress from 'nprogress'
import { useUser, useMenu, MenuItemType } from '@/store'
import routeConfig from '@/config/route'

export function globalBeforeGuard (router: Router) {
  return async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    nprogress.start()
    const user = useUser()
    const menu = useMenu()
    if (!user.hasLogin() && !routeConfig.pernitList.includes(to.name as string)) {
      // 未登录，并且不是白名单
      next({ name: routeConfig.loginName })
    } else if (user.hasLogin() && !user.hasGetInfo) {
      await user.qryCurUser()
      const dynamicRoutes = formatRoutes(menu.menuTrees)
      console.log(dynamicRoutes)
      dynamicRoutes.forEach(route => {
        router.addRoute(route)
      })
      next({
        path: to.path
      })
    } else if (user.hasLogin() && routeConfig.loginName === to.name) {
      next({ name: routeConfig.homeName })
    } else {
      next()
    }
  }
}

export function globalAfterEach (router: Router) {
  return async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    failure?: NavigationFailure | void
  ) => {
    nprogress.done()
  }
}

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

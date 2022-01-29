import { NavigationGuardNext, RouteLocationNormalized, NavigationFailure, Router } from 'vue-router'
import nprogress from 'nprogress'
import { useUser, useMenu } from '@/store'
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
    } else if (user.hasLogin() && routeConfig.loginName === to.name) {
      next({ name: routeConfig.homeName })
    } else {
      user.qryCurUser()
      await menu.qryMenus()
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

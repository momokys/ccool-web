import { NavigationGuardNext, RouteLocationNormalized, NavigationFailure, Router } from 'vue-router'
import nprogress from 'nprogress'
import { useUser } from '@/store'
import routeConfig from '@/config/route'

export function globalBeforeGuard (router: Router) {
  return async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    nprogress.start()
    const user = useUser()
    if (!user.hasLogin() && !routeConfig.pernitList.includes(to.name as string)) {
      // 未登录，并且不是白名单
      next({ name: routeConfig.loginName })
    } else if (user.hasLogin() && routeConfig.loginName === to.name) {
      next({ name: routeConfig.homeName })
    } else {
      user.qryCurUser()
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

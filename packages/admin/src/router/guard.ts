import { NavigationGuardNext, RouteLocationNormalized, NavigationFailure, Router } from 'vue-router'
import nprogress from 'nprogress'

export function globalBeforeGuard (router: Router) {
  return async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    nprogress.start()
    next()
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

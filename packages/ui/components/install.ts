import { IntstallFn } from 'ui/types/common'

export const componentsInstall: IntstallFn = (app, options) => {
  const components = import.meta.globEager('./*/index.ts')
  Object.entries(components).forEach(([key, item]) => {
    item.default.install(app, options)
  })
}

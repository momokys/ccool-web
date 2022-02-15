import { IntstallFn } from 'ui/src/types/common'

export const componentsInstall: IntstallFn = (app, options) => {
  const components = import.meta.globEager('./*/index.ts')
  Object.entries(components).forEach(([key, item]) => {
    if (item.default && item.default.install) {
      item.default.install(app, options)
    }
  })
}

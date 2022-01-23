import { Plugin, App } from 'vue'

const commonComponents: Plugin = (app: App) => {
  const components = import.meta.globEager('./*/index.ts')
  Object.entries(components).forEach(([key, item]) => {
    if (item.default && item.default.install) {
      item.default.install(app)
    }
  })
}

export default commonComponents

export * from './view'
export * from './icon'

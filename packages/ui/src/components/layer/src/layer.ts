import { App, ComponentInternalInstance, VNode, Component, AsyncComponentLoader, createVNode, render, nextTick } from 'vue'
import { ElMessage } from 'element-plus'
import { bus } from './bus'
import Layer from './layer.vue'
import { LayerProps } from './layer-type'

let mounted: boolean
let vm: VNode
let app: App
let container: HTMLDivElement
let instance: ComponentInternalInstance
let hidden: boolean = true

type LayerOptions = Partial<LayerProps> & {
  shade?: boolean,
  content: string | Component | AsyncComponentLoader
}

let curops: LayerOptions

export const layer = {
  init () {
    if (!mounted) {
      if (app === undefined) {
        throw new Error('Layer not installed!!!')
      }

      container = document.createElement('div')
      container.setAttribute('id', 'cl-layer-container')

      vm = createVNode(Layer, {}, undefined, 1 << 3)
      vm.appContext = app._context
      render(vm, container)
      instance = vm.component as ComponentInternalInstance

      document.body.appendChild(container)

      container.addEventListener('click', ev => {
        if (ev.target === container) {
          layer.close()
        }
      })

      bus.on('CL_LAYER_CLOSE', () => {
        layer.close()
      })

      mounted = true
    }
  },
  open (options: LayerOptions) {
    if (!mounted) {
      throw new Error('please init layer')
    }

    if (!hidden) return

    curops = options

    Object.assign(instance.props, { btns: [], ...options })
    if (instance && instance.exposed) {
      instance.exposed.visible.value = true
    }

    nextTick(() => {
      if (options.shade) {
        toggleShade()
      }
      hidden = false
    })
  },
  close () {
    if (!mounted || hidden) return
    if (instance && instance.exposed) {
      instance.exposed.visible.value = false
      nextTick(() => {
        if (curops && curops.shade) {
          toggleShade()
        }
        hidden = true
      })
    }
  },
  success (msg: string) {
    ElMessage.success(msg)
  },
  error (msg: string) {
    ElMessage.error(msg)
  }
}

function toggleShade () {
  if (!container.classList.contains('mask')) {
    container.style.width = '100vw'
    container.style.height = '100vh'
    container.classList.toggle('mask')
  } else {
    container.classList.toggle('mask')
    const fn = () => {
      container.style.width = '0'
      container.style.height = '0'
      container.removeEventListener('transitionend', fn)
    }
    container.addEventListener('transitionend', fn)
  }
}

export function layerInstall (a: App) {
  app = a
  layer.init()
}

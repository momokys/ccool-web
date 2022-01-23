import { App, VNodeTypes } from 'vue'

export type ResolveIconFn = (icon?: string) => VNodeTypes

export type ClOptionsType = {
  resolveIcon?: ResolveIconFn
}

export type IntstallFn = (app: App, options: ClOptionsType) => void

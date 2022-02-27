import { createVNode as rawCreateVNode, resolveDynamicComponent } from 'vue'

export type ComTree = {
  type: string,
  style?: Partial<CSSStyleDeclaration>,
  classList?: string[],
  attrs?: Record<string, any>,
  on?: Record<string, (...ev: any) => void>
  slots?: Record<string, ComTree> | ComTree | ComTree[],
  model?: string
}

export function createVNode (comTree: ComTree, model?: Record<string, any>) {
  return (props: any) => {
    const vnodeType = resolveDynamicComponent(comTree.type)
    return rawCreateVNode(vnodeType, {
      ...comTree.attrs,
      ...comTree.on
    })
  }
}

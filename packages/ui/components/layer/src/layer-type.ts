import { Component, PropType, ExtractPropTypes, VNode } from 'vue'
import { BtnItem } from '../../button-group'

export const layerProps = {
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: [String, Object] as PropType<string | VNode | Component>,
    default: '标题'
  },
  content: {
    type: [String, Object] as PropType<string | VNode | Component>,
    default: '内容'
  },
  btns: {
    type: Array as PropType<BtnItem[]>,
    default: () => ([])
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '50%'
  },
  height: {
    type: [String, Number] as PropType<string | number>
  }
}

export type LayerProps = ExtractPropTypes<typeof layerProps>

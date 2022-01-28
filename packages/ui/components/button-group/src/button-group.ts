import { PropType } from 'vue'
import { ButtonProps } from 'element-plus'

export type BtnItem = {
  text: string,
  loadable?: boolean,
  attrs?: Partial<ButtonProps>,
  handle?: (props: { done: () => void }) => void
}

export const buttonGroupProps = {
  btnItems: {
    type: Array as PropType<BtnItem[]>,
    default: () => ([])
  },
  position: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center'
  },
  size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: 'default'
  }
}

import { PropType } from 'vue'
import { ElButton } from 'element-plus'
import { ComponentPropsType } from '@ccool/utils'

export type BtnItem = {
  text: string,
  loadable?: boolean,
  attrs?: ComponentPropsType<typeof ElButton>,
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

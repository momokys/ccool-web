import { PropType } from 'vue'

export const selectProps = {
  modelValue: {
    type: [String, Number, Boolean, Object]
  },
  options: {
    type: Array as PropType<{ value: any, label: string | number, disabled: boolean}[]>,
    default: () => ([])
  },
  clearable: {
    type: Boolean,
    default: true
  },
  full: {
    type: Boolean,
    default: false
  }
}

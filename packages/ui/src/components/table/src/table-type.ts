import { ExtractPropTypes, PropType, VNode } from 'vue'
import elTableColumnProps from 'element-plus/es/components/table/src/table-column/defaults'

export type TableColumn = {
  key: string,
  field?: string,
  title?: string,
  slots?: Record<string, (...props: any) => VNode>
} & Partial<Omit<Omit<ExtractPropTypes<typeof elTableColumnProps>, 'prop'>, 'label'>>

export const tableProps = {
  modelValue: {
    type: Array as PropType<any[]>,
    default: () => ([])
  },
  columns: {
    type: Array as PropType<TableColumn[]>,
    default: () => ([])
  },
  height: {
    type: [String, Number]
  },
  maxHeight: {
    type: [String, Number]
  }
}

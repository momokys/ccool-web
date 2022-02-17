import Table from './src/table.vue'
import type { App } from 'vue'
import { SFCWithInstall } from 'element-plus/es/utils/types'
import { ClOptionsType } from 'ui/src/types/common'

Table.install = (app: App, options: ClOptionsType) => {
  app.component('ClTable', Table)
}

const _Table = Table as SFCWithInstall<typeof Table>

export default _Table

export const ClTable = _Table

export type { TableColumn } from './src/table-type'

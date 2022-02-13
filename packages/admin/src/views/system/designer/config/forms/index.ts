import { ClComs } from '@ccool/ui'

const map = new Map()

map.set(ClComs.INPUT, () => import('./input'))
map.set(ClComs.SELECT, () => import('./select'))
map.set(ClComs.RADIO_GROUP, () => import('./radio'))
map.set(ClComs.CHECKBOX_GROUP, () => import('./checkbox'))

export default map

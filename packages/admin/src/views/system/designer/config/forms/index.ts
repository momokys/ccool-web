import { ClComs } from '@ccool/ui'

const map = new Map()

map.set(ClComs.INPUT, () => import('./input.vue'))
map.set(ClComs.SELECT, () => import('./select.vue'))

export default map

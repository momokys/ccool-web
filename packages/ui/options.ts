import { resolveDynamicComponent } from 'vue'
import { ClOptionsType } from './types/common'

export const clops: ClOptionsType = {
  resolveIcon: icon => resolveDynamicComponent(icon)
}

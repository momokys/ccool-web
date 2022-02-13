import { FormItem } from '@ccool/ui'

export type ComEditorConfig = {
  comType: 'form' | 'basic',
  attrs: FormItem[],
  events: string[]
}

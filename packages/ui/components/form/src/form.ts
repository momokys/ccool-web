import { PropType, Ref, VNode, Component, ExtractPropTypes } from 'vue'
import { ElForm } from 'element-plus'
import { BtnItem } from 'ui/components/button-group'

export type FormContext = {
  model: any,
  extra: any,
  props: any,
  validate: () => Promise<boolean>,
  validateField: () => void
}

export type Base = {
  com: string | VNode | Component,
  attrs?: Record<string, any>,
  on?: Record<string, (props: { fctx: FormContext, ev: any }) => void>,
  disabled?: (fctx: FormContext) => boolean
}

export type FormItem = {
  label?: string | VNode,
  span?: number,
  index?: string,
  value?: any,
  rule?: Record<string, any>,
  rules?: Record<string, any>[],
  hidden?: (model: any) => boolean
} & Base

export const formProps = {
  model: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  },
  extra: {
    type: Object as PropType<any>
  },
  formItems: {
    type: Array as PropType<FormItem[]>,
    default: () => ([])
  },
  gutter: {
    type: Number,
    default: 20
  },
  labelWidth: {
    type: [String, Number] as PropType<string | number>
  },
  labelPosition: {
    type: String as PropType<'left' | 'right' | 'top'>
  },
  height: {
    type: String
  },
  maxHeight: {
    type: String
  },
  btns: {
    type: Array as PropType<BtnItem[]>,
    default: () => ([])
  }
}

export type FormProps = ExtractPropTypes<typeof formProps>

export const clFormKey = Symbol('clFormKey')

export function useFormContext (
  props: any,
  formRef: Ref<InstanceType<typeof ElForm>>
) {
  return {
    model: props.model,
    extra: props.extra,
    props: props,
    formRef: formRef,
    validate: () => {
      return formRef!.value!.validate() as Promise<boolean>
    },
    validateField: () => {

    }
  }
}

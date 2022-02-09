import { PropType, Ref, VNode, Component, ExtractPropTypes } from 'vue'
import { ElForm } from 'element-plus'
import { BtnItem } from 'ui/components/button-group'

export type FormContext = {
  model: any,
  extra: any,
  props: any,
  formRef: Ref<InstanceType<typeof ElForm>>,
  validate: () => Promise<boolean>,
  validateField: (props: string | string[]) => void,
  resetFields: () => void,
  scrollToFields: (prop: string) => void,
  clearVlidate: (props: string | string[]) => void
}

export type DataType = 'string' | 'number' | 'boolean' | 'method' | 'regexp' | 'integer' | 'float' | 'array' | 'object' | 'enum' | 'date' | 'url' | 'hex' | 'email' | 'pattern' | 'any'

export type Rule = {
  type?: DataType,
  required?: boolean,
  pattern?: RegExp | string,
  min?: number,
  max?: number,
  len?: number,
  enum?: Array<string | number | boolean | null | undefined>,
  whitespace?: boolean,
  fields?: Record<string, Rule | Rule[]>,
  defaultField?: Rule;
  transform?: (value: any) => any,
  message?: string | ((a?: string) => string),
  asyncValidator?: (props: { fctx: FormContext, value: any }) => void,
  validator?: (props: { fctx: FormContext, value: any }) => void,
  trigger: 'blur' | 'change'
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
  field?: string,
  value?: any,
  rule?: Rule,
  rules?: Rule[],
  hidden?: (model: any) => boolean
} & Base

export const formProps = {
  modelValue: {
    type: Object as PropType<Record<string, any>>,
    required: true
  },
  extra: {
    type: Object as PropType<any>
  },
  formItems: {
    type: Array as PropType<FormItem[]>,
    default: () => ([])
  },
  layout: {
    type: String as PropType<'inline' | 'grid'>,
    default: 'grid'
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
  cloumn: {
    type: Number,
    default: 2,
    validator (value: number) {
      const set = new Set([1, 2, 3, 4])
      return set.has(value)
    }
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
): FormContext {
  return {
    model: props.modelValue,
    extra: props.extra,
    props: props,
    formRef: formRef,
    validate () {
      return formRef!.value!.validate() as Promise<boolean>
    },
    validateField (props: string | string[]) {
      formRef.value.validateField(props, () => {})
    },
    resetFields () {
      formRef.value.resetFields()
    },
    scrollToFields (prop: string) {
      formRef.value.scrollToField(prop)
    },
    clearVlidate (props: string | string[]) {
      formRef.value.clearValidate(props)
    }
  }
}

<template>
  <template v-if="formItem.index !== undefined">
    <el-form-item
      :label="formItem.label"
      :prop="formItem.index"
      :rules="Rules"
    >
      <component
        :is="resolveCom(formItem.com)"
        :disabled="Disabled"
        v-model="Model[formItem.index]"
        v-bind="formItem.attrs"
        v-on="Events"
      />
    </el-form-item>
  </template>
  <template v-else>
    <component
      :is="resolveCom(formItem.com)"
      :disabled="Disabled"
      v-bind="formItem.attrs"
      v-on="Events"
    />
  </template>
</template>

<script lang="tsx" setup>
import { PropType, VNode, inject, computed, resolveDynamicComponent } from 'vue'
import type { Component } from 'vue'
import _ from 'lodash'
import { FormItem, FormContext, clFormKey } from './form'

const props = defineProps({
  model: {
    type: Object as PropType<any>,
    required: true
  },
  formItem: {
    type: Object as PropType<FormItem>,
    default: () => ({})
  }
})

const fctx = inject<FormContext>(clFormKey)

const Model = computed(() => props.model)

const Rules = computed(() => {
  const formItem = props.formItem
  const _rules: Record<string, any>[] = []

  if (formItem.rules) {
    _rules.push(...formItem.rules)
  } else if (formItem.rule) {
    _rules.push(formItem.rule)
  }

  return _rules.map(_rule => {
    if (_rule.validator) {
      return {
        ..._rule,
        validator: (value: any, callback: any) => {
          try {
            _rule.validator({ value, fctx })
            callback()
          } catch (error) {
            callback(error)
          }
        }
      }
    } else {
      return _rule
    }
  })
})

const Disabled = computed(() => {
  const disabled = props.formItem.disabled
  if (fctx?.props.readonly) {
    return true
  } else if (disabled === undefined) {
    return false
  } else {
    return disabled(fctx?.model)
  }
})

const Events = computed(() => {
  const _events = props.formItem.on || {}
  return Object.entries(_events).reduce((result, [name, handle]) => {
    result[name] = (ev: any) => {
      handle({ fctx: fctx as FormContext, ev })
    }
    return result
  }, {} as Record<string, any>)
})

function resolveCom (com: string | Component | VNode | undefined) {
  if (com === undefined) {
    return <></>
  } else if (_.isString(com)) {
    return resolveDynamicComponent(com)
  } else {
    return com
  }
}

function initValue () {
  if (props.formItem.index && props.formItem.value) {
    Model.value[props.formItem.index] = props.formItem.value
  }
}

initValue()
</script>

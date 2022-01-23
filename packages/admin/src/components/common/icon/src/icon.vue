<template>
  <template v-if="icon.length > 0">
    <template v-if="prefix === 'cl'">
      <i
        class="el-icon"
        :style="style"
        v-bind="$attrs"
      >
        <cl-svg :name="name" />
      </i>
    </template>
    <template v-else>
      <el-icon
        :size="size"
        :color="color"
      >
        <component :is="resolveIcon(name)" />
      </el-icon>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { computed, resolveDynamicComponent } from 'vue'
import _ from 'lodash'
import ClSvg from './svg.vue'

import type { CSSProperties } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: [Number, String],
    default: 18
  },
  color: {
    type: String,
    default: undefined
  }
})

const reg1 = /^(\w+?-icon)-(.+$)/
const reg2 = /-(\w)/g

const prefix = computed(() => props.icon.trim().replace(reg1, '$1'))
const name = computed(() => {
  let _name = props.icon.replace(reg1, '$2')
  if (prefix.value === 'el' && prefix.value.length > 0) {
    _name = _name.trim().replace(reg2, function (all: string, letter: string) {
      return letter.toUpperCase()
    })
  }
  return _name
})
const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) {
    return {}
  }
  let size = props.size
  if (_.isNumber(size) || (_.isString(size) && !size.endsWith('px'))) {
    size = `${size}px`
  }
  return {
    ...(props.size ? { 'font-size': size } : {}),
    ...(props.color ? { color: props.color } : {})
  } as CSSProperties
})

const resolveIcon = (name?: string) => resolveDynamicComponent(name)

</script>

<script lang="ts">
export default {
  name: 'ClIcon'
}
</script>

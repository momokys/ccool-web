<template>
  <el-button
    v-bind="$attrs"
    @click="handleClick"
  >
    {{ text }}
  </el-button>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '按钮'
  }
})

const emit = defineEmits(['click'])

function handleClick () {
  emit('click')
}
</script>

<script lang="ts">
export default {
  name: 'ClButton'
}
</script>

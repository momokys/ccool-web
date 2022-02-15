<template>
  <el-divider v-bind="$attrs">
    {{ text }}
  </el-divider>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '文本'
  }
})
</script>

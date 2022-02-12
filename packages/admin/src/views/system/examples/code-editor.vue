<template>
  <cl-code-editor
    v-model="content"
    height="100%"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const content = ref<string>(`function function_name(argument) {
  // body...
}`)
</script>

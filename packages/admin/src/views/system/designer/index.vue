<template>
  <div class="flex flex-col w-full h-full">
    <div class="h-12 border" />
    <div class="flex flex-1">
      <div
        class="flex flex-wrap border-l-1 border-r-1 border-b-1"
        style="width: 250px;"
      >
        <com-select />
      </div>
      <div class="flex-1 p-4 border-b-1 bg-light-300">
        <form-canvas />
      </div>
      <div class="w-64 border-l-1 border-r-1 border-b-1" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ComSelect from './com-select.vue'
import FormCanvas from './canvas.vue'
</script>

<script lang="ts">
export default {
  name: 'FormDesigner'
}
</script>

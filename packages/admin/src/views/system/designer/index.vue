<template>
  <div class="flex flex-col w-full h-full">
    <div class="h-12 border" />
    <div class="flex flex-1">
      <div class="flex flex-wrap w-64 border-l-1 border-r-1 border-b-1">
        <div
          ref="srcRef"
          draggable="true"
          class="w-16 h-16 flex justify-center items-center bg-blue-300"
        >
          <cl-icon
            icon="cl-icon-micro"
            style="color: #fff;"
          />
        </div>
      </div>
      <div class="flex-1 p-4 border-b-1 bg-light-300">
        <div
          ref="destRef"
          class="w-full h-full"
          style="background-color: #fff;"
        />
      </div>
      <div class="w-64 border-l-1 border-r-1 border-b-1" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const srcRef = ref<HTMLDivElement>()
const destRef = ref<HTMLDivElement>()

onMounted(() => {
  srcRef.value?.addEventListener('dragstart', ev => {
    console.log(ev)
  })
})

</script>

<script lang="ts">
export default {
  name: 'FormDesigner'
}
</script>

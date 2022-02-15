<template>
  <div
    class="flex"
    :class="{
      'justify-center': position === 'center',
      'flex-row': position === 'left',
      'flex-row-reverse': position === 'right'
    }"
  >
    <div class="inline-block">
      <el-button
        v-for="(item, index) in btnItems"
        :key="index"
        :size="size"
        :loading="loadingMap[index] || false"
        :disabled="!loadingMap[index] && loading"
        v-bind="item.attrs"
        @click="handleClick(index, item)"
      >
        {{ item.text }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { buttonGroupProps, BtnItem } from './button-group'

const props = defineProps(buttonGroupProps)

const loadingMap = ref<Record<number, boolean>>({})

const loading = ref<boolean>(false)

watch(
  () => props.btnItems,
  () => {
    loadingMap.value = {}
  }
)

function handleClick (index: number, item: BtnItem) {
  if (loading.value) return
  if (item.handle) {
    if (item.loadable) {
      loadingMap.value[index] = true
      loading.value = true
    }
    item.handle({
      done: () => {
        if (item.loadable) {
          loadingMap.value[index] = false
          loading.value = false
        }
      }
    })
  }
}

</script>

<script lang="ts">
export default {
  name: 'ClButtonGroup'
}
</script>

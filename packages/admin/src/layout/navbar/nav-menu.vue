<template>
  <div class="h-full flex ml-5">
    <span
      v-for="direct in DirectList"
      :key="direct.path"
      :class="{
        'text-gray-500': direct.path !== ActiveDirect.path,
        'border-transparent': direct.path !== ActiveDirect.path,
        'text-blue-400': direct.path === ActiveDirect.path,
        'border-blue-400': direct.path === ActiveDirect.path
      }"
      class="h-full flex items-center mr-5 border-b-2 cursor-pointer duration-300 hover:text-blue-400"
      @click="handleClick(direct)"
    >
      <cl-icon :icon="direct.icon" />
      <span class="ml-1">{{ direct.menuName }}</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useMenu, MenuItemType } from '@/store'

const menu = useMenu()

const DirectList = computed(() => {
  return menu.menuTrees
})

const ActiveDirect = computed(() => {
  return menu.curDirect
})

function handleClick (direct: MenuItemType) {
  menu.curDirect = direct
}
</script>

<script lang="ts">
export default {
  name: 'NavMenu'
}
</script>

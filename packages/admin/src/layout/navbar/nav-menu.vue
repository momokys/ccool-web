<template>
  <div class="h-full flex ml-5">
    <span
      v-for="item in navList"
      :key="item.path"
      :class="{
        'text-gray-500': item.path !== active,
        'border-transparent': item.path !== active,
        'text-blue-400': item.path === active,
        'border-blue-400': item.path === active
      }"
      class="h-full flex items-center mr-5 border-b-2 cursor-pointer duration-300 hover:text-blue-400"
      @click="handleClick(item.path)"
    >
      <cl-icon :icon="item.icon" />
      <span class="ml-1">{{ item.title }}</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ClIcon } from '@ccool/ui'

const active = ref('/system')

const navList = reactive([
  { title: '系统管理', icon: 'Setting', path: '/system' },
  { title: '系统监控', icon: 'Setting', path: '/monitor' }
])

function handleClick (path: string) {
  active.value = path
}
</script>

<script lang="ts">
export default {
  name: 'NavMenu'
}
</script>

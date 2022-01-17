<template>
  <div class="h-12 w-full p-0 flex items-center shadow-sm">
    <div
      class="w-12 flex justify-center items-center cursor-pointer"
      @click="setting.toggleSidebar"
    >
      <el-icon :size="20">
        <fold v-if="Sidebar.opened" />
        <expand v-else />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSetting } from '@/store'

const setting = useSetting()
const Sidebar = computed(() => setting.sidebar)
</script>

<script lang="ts">
export default {
  name: 'NavBar'
}
</script>

<style lang="less" scoped>
.navbar {

}
</style>

<template>
  <div class="h-screen">
    <el-container class="h-screen">
      <el-aside
        class="aside"
        :style="{ width: sidebar.opened ? sidebar.maxWidth : sidebar.minWidth }"
      >
        Aside
      </el-aside>
      <el-container>
        <el-header class="h-12 flex items-center shadow">
          <div
            class="flex items-center cursor-pointer"
            @click="setting.toggleSidebar"
          >
            <el-icon :size="20">
              <fold v-if="sidebar.opened" />
              <expand v-else />
            </el-icon>
          </div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSetting } from '@/store'

const setting = useSetting()

const sidebar = computed(() => setting.sidebar)

</script>

<script lang="ts">
export default {
  name: 'Layout'
}
</script>

<style lang="less" scoped>
.aside {
  height: 100vh;
  overflow-y: auto;
  position: relative;
  background: #304156;
  transition: width 0.3s;
}
</style>

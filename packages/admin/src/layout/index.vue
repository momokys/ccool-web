<template>
  <div class="h-screen">
    <el-container class="h-screen">
      <el-aside
        class="aside"
        :style="{ width: Sidebar.opened ? Sidebar.maxWidth : Sidebar.minWidth }"
      >
        <el-scrollbar>
          <cl-menu
            :menus="Menus"
            :collapse="!Sidebar.opened"
          />
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header class="h-12 p-0 flex items-center shadow">
          <div
            class="w-12 flex justify-center items-center cursor-pointer"
            @click="setting.toggleSidebar"
          >
            <el-icon :size="20">
              <fold v-if="Sidebar.opened" />
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
import { useSetting, useMenus } from '@/store'
import { ClMenu } from '@/components/common/menu'

const setting = useSetting()
const Sidebar = computed(() => setting.sidebar)

const menus = useMenus()
const Menus = computed(() => menus.menus)
</script>

<script lang="ts">
export default {
  name: 'Layout'
}
</script>

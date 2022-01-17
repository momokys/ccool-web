<template>
  <div class="h-screen">
    <el-container class="h-screen">
      <el-aside
        class="aside"
        :style="{ width: Sidebar.opened ? Sidebar.maxWidth : Sidebar.minWidth }"
      >
        <el-scrollbar>
          <cl-menu
            :router="true"
            :menus="Menus"
            :default-active="route.path"
            :default-openeds="openedList"
            :collapse="!Sidebar.opened"
          />
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header class="h-20 p-0">
          <navbar />
          <tags />
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition
              name="fade-transform"
              mode="out-in"
              appear
            >
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSetting, useMenus } from '@/store'
import { ClMenu } from '@/components/common/menu'
import Navbar from './navbar/index.vue'
import Tags from './tags/index.vue'

const route = useRoute()
const openedList = computed(() => route.matched.map(item => item.path))

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

<template>
  <el-scrollbar>
    <side-menu
      :router="true"
      :menus="Menus"
      :default-active="route.path"
      :default-openeds="openedList"
      :collapse="!Sidebar.opened"
    />
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSetting, useMenus } from '@/store'
import { SideMenu } from './menu'

const route = useRoute()
const openedList = computed(() => route.matched.map(item => item.path))

const setting = useSetting()
const Sidebar = computed(() => setting.sidebar)

const menus = useMenus()
const Menus = computed(() => menus.menus)
</script>

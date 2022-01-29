<template>
  <el-scrollbar>
    <side-menu
      :router="true"
      :menus="menuTrees"
      :default-active="route.path"
      :default-openeds="openedList"
      :collapse="!Sidebar.opened"
    />
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSetting, useMenu } from '@/store'
import { SideMenu } from './menu'

const route = useRoute()
const openedList = computed(() => route.matched.map(item => item.path))

const setting = useSetting()
const Sidebar = computed(() => setting.sidebar)

const menu = useMenu()
const menuTrees = computed(() => menu.curDirect.children)
</script>

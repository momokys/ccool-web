<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useSetting } from './store'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const setting = useSetting()

watch(
  () => setting.title,
  () => {
    document.title = setting.title
  },
  { immediate: true }
)

</script>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
}
</style>

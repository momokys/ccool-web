<template>
  <div>
    <el-form :inline="true">
      <cl-drag
        class="drag"
      >
        <el-form-item label="用户名">
          <el-input type="text" />
        </el-form-item>
        <template #toolbar>
          <cl-icon
            :icon="'el-icon-delete'"
            :size="16"
            :color="'#fff'"
            @click="handleClick"
          />
        </template>
      </cl-drag>
    </el-form>
  </div>
</template>

<script lang="tsx" setup>
function handleClick () {
  console.log('defkefj')
}
</script>

<script lang="tsx">
export default {
  name: 'SystemTest'
}
</script>

<style lang="less">
.drag {
  display: inline-block;
  outline: 2px solid #60a5fa;
  .cl-drag__toolbar {
    height: 22px;
    display: flex;
    align-items: center;
    background-color: #60a5fa;
    cursor: pointer;
  }
}
</style>

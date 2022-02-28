<template>
  <div>
    <el-form :inline="true">
      <el-row>
        <el-col :span="12">
          <cl-drag
            class="drag"
          >
            <el-form-item label="用户名">
              <el-input type="text" />
            </el-form-item>
            <template #helper>
              <div class="drag-toolbar">
                <cl-icon
                  :icon="'el-icon-document-copy'"
                  :size="14"
                  :color="'#fff'"
                  @click="handleClick"
                />
                <cl-icon
                  :icon="'el-icon-delete'"
                  :size="14"
                  :color="'#fff'"
                  @click="handleClick"
                />
              </div>
            </template>
          </cl-drag>
        </el-col>
      </el-row>
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
  .cl-drag__helper {
    height: 22px;
    display: flex;
    align-items: center;
    background-color: #60a5fa;
    cursor: pointer;
    .drag-toolbar {
      padding: 0 4px;
      font-size: 0;
    }
  }
}
</style>

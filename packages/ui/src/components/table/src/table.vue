<template>
  <div class="cl-table">
    <div class="cl-table__header" />
    <div class="cl-table__body">
      <el-table
        :data="modelValue"
        :border="true"
        :height="height"
        :max-height="maxHeight"
      >
        <el-table-column
          v-for="col in columns"
          v-bind="col"
          :prop="col.field"
          :label="col.title"
          :column-key="col.key"
          :key="col.key"
        >
          <template
            v-for="(render, slotName) in col.slots"
            :key="slotName"
            #[slotName]="scope"
          >
            <component :is="render(scope)" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="cl-table__footer" />
  </div>
</template>

<script lang="ts" setup>
import { tableProps } from './table-type'

defineProps(tableProps)

</script>

<script lang="ts">
export default {
  name: 'ClTable'
}
</script>

<style lang="less" scoped>

</style>

<template>
  <div
    class="h-full"
    style="padding: 0 12px;"
  >
    <el-scrollbar>
      <div
        v-for="coms in ComSet"
        :key="coms.type"
        class="mt-4"
      >
        <h1
          class="mb-2 font-bold"
          style="font-size: 14px;"
        >
          {{ coms.name }}
        </h1>
        <div class="flex flex-wrap">
          <cl-drag
            v-for="com in coms.list"
            :key="com.name"
            :data="com.name"
            :target="'form-canvas'"
            :group="'cl-form-desiner'"
            class="flex flex-col justify-center items-center cursor-pointer hover:bg-blue-300 hover:text-light-50"
            style="width: 33.333%; height: 70px; "
          >
            <cl-icon :icon="com.icon" />
            <span
              class="mt-2"
              style="font-size: 12px;"
            >{{ com.text }}</span>
          </cl-drag>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import ComSet from './config/com-list'
import { ClDrag } from '@ccool/ui'
</script>

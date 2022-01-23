<template>
  <span
    class="tag"
    :class="classObj"
    @click="emit('click')"
  >
    <span
      class="refresh-btn"
      @click.stop="emit('refresh')"
    >
      <cl-icon
        icon="el-icon-refresh"
        :size="14"
      />
    </span>
    <span class="tag-title">{{ view.title }}</span>
    <span
      class="cancel-btn"
      @click.stop="emit('cancel')"
    >
      <cl-icon
        icon="el-icon-close"
        :size="14"
      />
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { VisitedViewType } from '@/store'

const props = defineProps({
  view: {
    type: Object as PropType<VisitedViewType>,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  cancelable: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['click', 'refresh', 'cancel'])

const classObj = computed(() => ({
  active: props.isActive,
  cancelable: props.cancelable
}))
</script>

<style lang="less" scoped>
.tag {
  display: inline-block;
  height: 26px;
  padding: 4px 8px;
  margin-top: 4px;
  margin-left: 10px;
  border: 1px solid #d8dce5;
  color: #495060;
  font-size: 0;
  vertical-align: middle;
  cursor: pointer;

  span {
    display: inline-block;
    height: 16px;
    line-height: 16px;
    text-align: center;
    vertical-align: middle;
  }

  .tag-title {
    margin: 0 3px;
    font-size: 14px;
  }

  .refresh-btn,
  .cancel-btn {
    width: 16px;
    padding: 1px;
    border-radius: 8px;
    color: #b4bccc;
    display: none;
    transition: color 0.3s, background-color 0.3s;
    &:hover {
      color: #60a5fa;
      // background-color: #b4bccc;
    }
  }

  .refresh-btn {
    display: none;
  }

  &.active {
    background-color: #60a5fa;
    border-color: #60a5fa;
    color: #fff;

    .refresh-btn,
    .cancel-btn {
      color: #fff;
      &:hover {
        color: #60a5fa;
        background-color: #EFF6FF;
      }
    }

    .refresh-btn {
      display: inline-block;
    }
  }

  &.cancelable {
    .cancel-btn {
      display: inline-block;
    }
  }
}
</style>

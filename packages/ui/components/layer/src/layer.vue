<template>
  <transition name="layer">
    <div
      v-if="nativeVisible"
      class="cl-layer"
      :style="{ width, height }"
    >
      <div class="cl-layer__header">
        <span class="tite">{{ title }}</span>
        <div class="toolbar">
          <span @click="handleClose">
            <el-icon>
              <close />
            </el-icon>
          </span>
        </div>
      </div>
      <div class="cl-layer__content">
        <template v-if="typeof content !== 'string'">
          <component :is="Content" />
        </template>
        <template v-else>
          {{ content }}
        </template>
      </div>
      <div class="cl-layer__footer">
        <cl-button-group :btn-items="btns" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, computed, defineAsyncComponent, AsyncComponentLoader } from 'vue'
import _ from 'lodash'
import { bus } from './bus'
import { ClButtonGroup } from '../../button-group'
import { layerProps } from './layer-type'

const props = defineProps(layerProps)

const Content = computed(() => {
  if (_.isFunction(props.content)) {
    const content = props.content
    // 异步加载
    const com = (content as AsyncComponentLoader)()
    if (_.isObject(com) && _.isFunction(com.then) && _.isFunction(com.catch)) {
      return defineAsyncComponent(() => com)
    } else {
      return com
    }
  } else {
    return props.content
  }
})
const nativeVisible = ref<boolean>(false)

function handleClose () {
  nativeVisible.value = false
  bus.emit('CL_LAYER_CLOSE')
}

defineExpose({
  visible: nativeVisible
})

</script>

<script lang="ts">
export default {
  name: 'ClLayer'
}
</script>

<style lang="less" scoped>
.cl-layer {
  position: relative;
  display: inline-block;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2001;
  top: 0;
  left: 50vw;
  transform: translateX(-50%);
  min-width: 480px;
  min-height: 320px;
  margin-top: 15vh;
  background-color: #fff;
  box-shadow: 1px 1px 50px rgb(0 0 0 / 30%);
  transition: opacity .3s, margin-top .3s;

  &.hidden {
    top: 0;
    z-index: -2001;
    margin-top: 0;
    opacity: 0;
    bottom: calc(100vh + 15vh);
    transition: opacity .4s, top .4s, margin .4s;
  }

  &__header {
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 20px;
    border-bottom: 1px solid #fafafa;

    .title {
      display: inline-block;
    }
    .toolbar {
      display: inline-block;
      margin-left: auto;

      span {
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // width: 32px;
        // height: 32px;
        margin-left: 8px;
        cursor: pointer;
        transition: color .3s;
        &:hover {
          color: #60a5fa;
        }
      }
    }
  }

  &__content {
    position: relative;
    flex: 1;
    height: calc(100% - 96px);
    padding: 16px;
  }
  &__footer {
    position: relative;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px;
  }
}

.layer-leave-active,
.layer-enter-active {
  margin-top: 0;
  opacity: 0;
  transition: opacity .3s, margin-top .3s;
}

.layer-enter {
  margin-top: 15vh;
  opacity: 1;
}

</style>

<template>
  <div class="cl-form">
    <div class="cl-form__header" />
    <div
      class="cl-form__body"
      :style="{ height: Height }"
    >
      <el-scrollbar>
        <el-form
          ref="formRef"
          :model="model"
          :label-width="labelWidth"
          :label-position="labelPosition"
          style="padding-right: 20px;"
        >
          <el-row :gutter="gutter">
            <el-col
              v-for="item in FormItems"
              :key="item"
              :span="item.span || (24 / cloumn)"
            >
              <cl-form-item
                :model="model"
                :form-item="item"
              />
            </el-col>
          </el-row>
        </el-form>
      </el-scrollbar>
    </div>
    <div
      v-if="btns.length > 0"
      class="cl-form__footer"
    >
      <cl-button-group :btn-items="btns" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, provide, Ref } from 'vue'
import { ElForm } from 'element-plus'
import { ClButtonGroup } from '../../button-group'
import ClFormItem from './item.vue'
import { formProps, useFormContext, clFormKey } from './form'

const props = defineProps(formProps)

const formRef = ref<InstanceType<typeof ElForm>>()

const fctx = useFormContext(props, formRef as Ref<InstanceType<typeof ElForm>>)

provide(clFormKey, fctx)

const FormItems = computed(() => {
  return props.formItems.filter(item => {
    if (item.hidden) return !item.hidden(props.model)
    else return true
  })
})

const Height = computed(() => {
  return props.height
})

const MaxHeight = computed(() => {
  return props.maxHeight
})

</script>

<script lang="ts">
export default {
  name: 'ClForm'
}
</script>

<style lang="less">
.cl-form {
  &__body {
    overflow: hidden;
    .el-scrollbar {
      .el-scrollbar__wrap {
        max-height: v-bind(MaxHeight); // 最大高度
      }
    }
    .el-scrollbar>.el-scrollbar__bar.is-horizontal {
      display: none !important;
    }
  }
  &__footer {
    padding-top: 20px;
  }
}
</style>

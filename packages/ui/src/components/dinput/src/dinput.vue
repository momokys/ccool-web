<template>
  <div class="flex">
    <div>
      <div
        v-for="(item, index) in list"
        :key="index"
        class="flex items-center mb-2"
      >
        <div class="flex">
          <el-input v-model="item[left.key]" />
          <div style="width: 1rem;" />
          <el-input v-model="item[right.key]" />
        </div>
        <el-button
          v-if="hasData()"
          icon="SemiSelect"
          size="small"
          type="danger"
          plain
          circle
          class="ml-1"
          @click="del(index)"
        />
      </div>
    </div>
    <el-button
      v-if="hasData()"
      type="text"
      class="ml-1"
      @click="add"
    >
      添加
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { isEmpty } from 'lodash'
import { PropType, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Array as PropType<any[]>,
    default: () => ([{}])
  },
  left: {
    type: Object as PropType<{ key: string }>,
    default: () => ({ key: 'label' })
  },
  right: {
    type: Object as PropType<{ key: string }>,
    default: () => ({ key: 'value' })
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const list = ref(props.modelValue)

watch(
  () => props.modelValue,
  () => {
    if (props.modelValue.length <= 0) {
      list.value = [{}]
    } else {
      list.value = props.modelValue
    }
  },
  { deep: true }
)

watch(
  () => list.value,
  () => {
    let result
    if (!hasData()) {
      result = []
    } else {
      result = list.value
    }
    emit('update:modelValue', result)
    emit('change', result)
  },
  { deep: true }
)

function del (index: number) {
  if (index === 0) {
    list.value[0] = {}
  } else {
    list.value.splice(index, 1)
  }
}

function add () {
  if (isEmpty(list.value[list.value.length - 1])) return
  list.value.push({})
}

function hasData () {
  return !(list.value.length === 1 && isEmpty(list.value[0]))
}

</script>

<script lang="ts">
export default {
  name: 'ClDinput'
}
</script>

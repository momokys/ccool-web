<template>
  <transition
    name="fade-transform"
    mode="out-in"
    appear
  >
    <keep-alive>
      <component :is="com" />
    </keep-alive>
    <!-- <component :is="com" /> -->
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType, onBeforeUpdate } from 'vue'
export default defineComponent({
  name: 'MView',
  props: {
    com: {
      type: Object as PropType<any>,
      required: true
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to)
  },
  setup (props) {
    onBeforeUpdate(() => {
      console.log(props.com)
    })
  }
})
</script>

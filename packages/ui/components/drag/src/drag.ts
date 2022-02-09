import { defineComponent, h, PropType } from 'vue'

export default defineComponent({
  name: 'ClDrag',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    name: {
      type: String,
      default: undefined
    },
    data: {
      type: [String, Number, Object] as PropType<any>,
      default: ''
    },
    draggable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['drag', 'drop'],
  setup (props, ctx) {
    const attrs = {
      ...ctx.attrs,
      draggable: props.draggable,
      onDragstart: (ev: any) => {
        ev.dataTransfer.setData('data', props.data)
        ctx.emit('drag')
      },
      onDragleave: (ev: any) => {

      },
      onDragend: (ev: any) => {

      },
      onDrag: (ev: any) => {

      },
      onDragover: (ev: any) => {
        ev.preventDefault()
      },
      onDrop: (ev: any) => {
        ctx.emit('drop', ev.dataTransfer.getData('data'))
      }
    }
    return () => h(
      props.tag,
      attrs,
      ctx.slots
    )
  }
})

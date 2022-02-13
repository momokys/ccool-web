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
    target: {
      type: String,
      default: ''
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
        ev.dataTransfer.setData('msg', JSON.stringify({ data: props.data, target: props.target }))
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
        const msg = JSON.parse(ev.dataTransfer.getData('msg'))
        if (msg.target === props.name) {
          ctx.emit('drop', msg.data)
        }
      }
    }
    return () => h(
      props.tag,
      attrs,
      ctx.slots
    )
  }
})

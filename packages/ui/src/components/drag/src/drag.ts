import { defineComponent, PropType, h } from 'vue'

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
      default: undefined
    },
    group: {
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
    const events: any = {
      onDragstart: (ev: any) => {
        ev.stopPropagation()
        ev.dataTransfer.effectAllowed = 'move'
        ev.dataTransfer.setData('msg', JSON.stringify({
          data: props.data,
          target: props.target,
          group: props.group
        }))
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
        ev.stopPropagation()
        const msg = JSON.parse(ev.dataTransfer.getData('msg'))
        if (
          (msg.target !== undefined && msg.target === props.name) ||
          (msg.group !== undefined && msg.group === props.group)
        ) {
          ctx.emit('drop', msg.data)
        }
      }
    }
    const classList = 'cl-drag ' + (ctx.attrs?.class || '')
    return () => h(
      props.tag,
      {
        ...events,
        ...ctx.attrs,
        class: classList,
        draggable: props.draggable,
        'data-cl-drag-group': props.group
      },
      [
        ctx.slots.default?.(),
        h(
          'div',
          {
            class: 'cl-drag__toolbar'
          },
          ctx.slots.toolbar?.()
        )
      ]
    )
    // return () => (
    //   <div { ...attrs.value }>
    //     { ctx.slots.default ? ctx.slots.default() : <></> }
    //   </div>
    // )
  }
})

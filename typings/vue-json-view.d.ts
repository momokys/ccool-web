declare module '@matpool/vue-json-view' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{
    src: any,
    name?: string | false,
    theme?: string,
    collapsed?: boolean | number,
    sortKeys?: boolean
  }, {}, any>
  export default component
}

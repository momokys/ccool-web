import { createApp } from 'vue'
import clui from '@ccool/ui'
import store from '@/store'
import router from '@/router'
import App from './App.vue'
import commoon from './components/common'
import '@/style/index.less'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(clui)
  .use(commoon)

app.mount('#app')

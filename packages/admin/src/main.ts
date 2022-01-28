import { createApp } from 'vue'
import store from '@/store'
import router from '@/router'
import clui from '@ccool/ui'
import App from './App.vue'
import commoon from './components/common'
import '@ccool/ui/style/index.less'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '@/style/index.less'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(clui)
  .use(commoon)

app.mount('#app')

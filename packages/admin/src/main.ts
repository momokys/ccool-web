import { createApp } from 'vue'
import mui from '@ccool/ui'
import store from '@/store'
import router from '@/router'
import App from './App.vue'
import '@/style/index.less'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(mui)

app.mount('#app')

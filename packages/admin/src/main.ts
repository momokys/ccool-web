import { createApp } from 'vue'
import mui from '@ccool/ui'
import store from '@/store'
import App from './App.vue'
import '@/style/index.less'

const app = createApp(App)

app.use(store)
  .use(mui)

app.mount('#app')

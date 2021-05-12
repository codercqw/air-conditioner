import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import registerVant from '@/utils/vant'
const app = createApp(App)
registerVant(app)
app
  .use(store)
  .use(router)
  .mount('#app')

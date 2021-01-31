import { createApp } from 'vue'
import {router} from './router'
import {store} from './store/store.js'
import App from './App.vue'
import './index.css'
import './transitions.css'


const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

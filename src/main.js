import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import 'animate.css'
import './assets/css/main.css'

createApp(App).use(store).mount('#app')

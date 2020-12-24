import './assets/css/reset.css'

import { createApp } from 'vue'
import { createModal } from '@act/slime-modal'

import { InitResolve } from './types'

import App from './App.vue'

import store from './store'


const app = createApp(App)

app.use(store).use(createModal('modal')).mount('#app')

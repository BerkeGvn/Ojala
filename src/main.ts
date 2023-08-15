import './assets/style/main.scss'
import BaseButton from './components/ui/BaseButton.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('BaseButton', BaseButton)

app.use(createPinia())
app.use(router)

app.mount('#app')

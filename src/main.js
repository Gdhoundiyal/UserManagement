import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vClickOutsideUmd from 'click-outside-vue3'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vClickOutsideUmd)


app.mount('#app')

import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fab,fas)


createApp(App)
.use(Notifications)
.use(store)
.component('FontAwesomeIcon', FontAwesomeIcon)
.use(router)
.mount('#app')


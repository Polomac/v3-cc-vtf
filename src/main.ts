import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { loadFonts } from './plugins/webfontloader'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(VueAxios, axios)
  .use(PerfectScrollbar)
  .mount('#app')

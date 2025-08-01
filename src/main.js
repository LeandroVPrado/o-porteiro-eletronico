// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ** Global CSS/SCSS **
// (reset, mixins, variáveis que geram CSS etc)
import '@/assets/scss/_globals.scss'
import '@/assets/scss/_base.scss'
import '@/assets/scss/fontawesome.scss';



// AOS Animations
import AOS from 'aos'
import 'aos/dist/aos.css'

// Service Worker
import './registerServiceWorker'

const app = createApp(App)

app
  .use(router)
  .mount('#app')

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
})

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// AOS Animations
import AOS from 'aos'
import 'aos/dist/aos.css'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'

// Service Worker
import './registerServiceWorker'



const app = createApp(App)

app.use(router)
app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
})
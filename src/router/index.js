import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produtos',
    name: 'Products',
    component: () => import('@/views/ProductsView.vue')
  },
  {
    path: '/servicos',
    name: 'Services',
    component: () => import('@/views/ServicesView.vue')
  },
  {
    path: '/contato',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/sobre',
    name: 'About',
    component: () => import('@/views/AboutView.vue')
  },
  {
  path: '/obrigado',
  name: 'Obrigado',
  component: () => import('@/views/ThanksView.vue')
}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleMoviePage from '../views/SingleMoviePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/view',
      name: 'single-movie',
      component: SingleMoviePage
    },
  ]
})

export default router

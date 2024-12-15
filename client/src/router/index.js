import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/index'
import AuthView from '@/views/AuthView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    }
  ],
})

router.beforeEach(async (to, from) => {
  const isAuth = store.getters['user/isAuth']
  if (!isAuth && to.name !== 'auth') {
    return {name: 'auth'}
  } 
  if (isAuth && to.name === 'auth') {
    return {name: 'home'}
  }
})

export default router

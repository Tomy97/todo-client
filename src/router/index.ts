import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/Main.vue'),
      children: [
        {
          path: '',
          name: 'todo',
          component: () => import('../todo/views/Home.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../auth/views/LoginViews.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../auth/views/RegisterViews.vue')
        }
      ]
    }
  ]
})

export default router

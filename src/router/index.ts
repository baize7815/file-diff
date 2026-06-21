import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/',
      component: () => import('../components/LayOut.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'home/demo',
          name: 'Demo',
          component: () => import('../views/DemoPage.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/login'
    }
  ]
})

export default router

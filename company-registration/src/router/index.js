import { createRouter, createWebHistory } from 'vue-router'
import Company from '../views/Company.vue'
import hello from '../views/hello.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/companys',
      name: 'Company',
      component: Company
    },

  ]
})

export default router

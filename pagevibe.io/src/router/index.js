// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/feedback',
        name: 'Feedback',
        component: () => import(/* webpackChunkName: "feedback" */ '@/views/Feedback.vue'),
      },
      {
        path: '/personas',
        name: 'Personas',
        component: () => import(/* webpackChunkName: "personas" */ '@/views/Personas.vue'),
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import(/* webpackChunkName: "info" */ '@/views/Info.vue'),
      },
      {
        path: '/cookiepolicy',
        name: 'CookiePolicy',
        component: () => import(/* webpackChunkName: "cookiepolicy" */ '@/views/CookiePolicy.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

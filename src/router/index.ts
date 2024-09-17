import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/meetManage',
      name: 'meetManage',
      component: () => import('../views/MeetManage.vue')
    },
    {
      path: '/bookingManagement',
      name: 'bookingManagement',
      component: () => import('../views/BookingManagement.vue')
    },
    {
      path: '/userManage',
      name: 'userManage',
      component: () => import('../views/UserManage.vue')
    },
    {
      path: '/statisticsView',
      name: 'statisticsView',
      component: () => import('../views/StatisticsView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/meetManage',
      name: 'NOTFOUND'
    }
  ]
})

export default router

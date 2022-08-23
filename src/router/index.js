import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/pages/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/business',
    name: 'business',
    component: () => import(/* webpackChunkName: "contactArea" */ '../components/pages/BusinessPage.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import(/* webpackChunkName: "contactArea" */ '../components/pages/WorkPage.vue')
  },
  {
    path: '/company',
    name: 'company',
    component: () => import(/* webpackChunkName: "contactArea" */ '../components/pages/CompanyPage.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contactArea" */ '../components/pages/contactPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

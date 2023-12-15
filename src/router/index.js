import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PurchaseCredit from '../views/PurchaseCredit.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/purchase',
    name: 'PurchaseCredit',
    component: PurchaseCredit
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

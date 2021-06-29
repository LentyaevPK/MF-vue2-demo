import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/card1',
    name: 'Card1',
    component: () => import('card1/Card1').catch(() => router.replace('/404'))
  },
  {
    path: '/card2',
    name: 'Card2',
    component: () => {
      return import('card2/Card2')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

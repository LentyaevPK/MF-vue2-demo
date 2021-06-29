import Vue from 'vue'
import VueRouter from 'vue-router'
import Card2 from '../views/Card2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Card2',
    component: Card2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

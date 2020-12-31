import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import PageDetails from '@/views/PageDetails'
import UserDetails from '@/views/UserDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page/:page_id',
    name: 'page-details',
    component: PageDetails
  },
  {
    path: '/user/:user_id',
    name: 'user-details',
    component: UserDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

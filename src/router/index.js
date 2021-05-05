import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')

  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Archives',
    name: 'Archives',
    component: () => import(/* webpackChunkName: "archives" */ '../views/Archives.vue')

  },
  {
    path: '/ContactMe',
    name: 'ContactMe',
    component: () => import(/* webpackChunkName: "contactme" */ '../views/ContactMe.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

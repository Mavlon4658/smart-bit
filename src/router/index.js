import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home..vue'
import AboutUs from '../views/AboutUs.vue'
import Faq from '../views/FAQ.vue'
import Bonus from '../views/Bonus.vue'
import AuthLayout from '../auth/Layout.vue'
import Register from '../auth/Register.vue'
import LogIn from '../auth/LogIn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
  },
  {
    path: '/bonus',
    name: 'Bonus',
    component: Bonus,
  },
  {
    path: '/auth',
    name: 'AuthLayout',
    component: AuthLayout,
    children: [
      {path: '', name: 'Auth', redirect: {name: 'LogIn'}},
      {path: 'login', name: 'LogIn', component: LogIn},
      {path: 'register', name: 'Register', component: Register},
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home..vue'
import AboutUs from '../views/AboutUs.vue'
import Faq from '../views/FAQ.vue'
import Bonus from '../views/Bonus.vue'
import AuthLayout from '../auth/Layout.vue'
import Register from '../auth/Register.vue'
import LogIn from '../auth/LogIn.vue'
import AccountLayout from '../views/account/Layout.vue'
import Account from '../views/account/Account.vue'
import History from '../views/account/History.vue'
import AccountBonus from '../views/account/Bonus.vue'
import Transaction from '../views/account/Transaction.vue'
import Withdrawal from '../views/account/Withdrawal.vue'
import Deposit from '../views/account/Deposit.vue'
import Trade from '../views/account/Trade.vue'
import RobotLayout from '../views/account/robot/Layout.vue'
import Robot from '../views/account/robot/Robot.vue'
import RobotKey from '../views/account/robot/Key.vue'

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
      { path: '', name: 'Auth', redirect: { name: 'LogIn' } },
      { path: 'login', name: 'LogIn', component: LogIn },
      { path: 'register', name: 'Register', component: Register },
    ]
  },
  {
    path: '/account',
    name: 'AccountLayout',
    component: AccountLayout,
    children: [
      { path: '', name: 'Account', component: Account },
      { path: 'history', name: 'History', component: History },
      { path: 'bonus', name: 'AccountBonus', component: AccountBonus },
      { path: 'transaction', name: 'Transaction', component: Transaction },
      { path: 'withdrawal', name: 'Withdrawal', component: Withdrawal },
      { path: 'deposit', name: 'Deposit', component: Deposit },
      { path: 'trade', name: 'Trade', component: Trade },
      { path: 'robot', name: 'RobotLayout', component: RobotLayout, children: [
        { path: '', name: "Robot", component: Robot},
        { path: 'key', name: 'RobotKey', component: RobotKey },
      ]},
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

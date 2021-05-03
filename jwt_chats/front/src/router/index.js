import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import User from '../views/User.vue'


const routes = [
  {
    path: '/',
    component: Home
  },
  {
     path: '/register',
     component: Register
   },
   {
    path: '/login',
    component: Login
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

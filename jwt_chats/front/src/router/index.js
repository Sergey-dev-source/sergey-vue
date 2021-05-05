import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import User from '../views/User.vue'
import Us from "../views/Us.vue"


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
  },
  {
    path: '/us/:id',
    name: 'us',
    component: Us
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

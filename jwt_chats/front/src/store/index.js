import { createStore } from 'vuex'
import register from "./modules/register"
import login from "./modules/login"
import getUser from './modules/getUser'
import search from './modules/search'
import getUs from './modules/getUs'

export default createStore({
  modules: {
    register,
    login,
    getUser,
    search,
    getUs
  }
})

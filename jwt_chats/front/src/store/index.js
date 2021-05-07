import { createStore } from 'vuex'
import register from "./modules/register"
import login from "./modules/login"
import getUser from './modules/getUser'
import search from './modules/search'
import getUs from './modules/getUs'
import Contact from './modules/Contact'
import Message from './modules/Message'
import sendMessage from './modules/sendMessage'

export default createStore({
  modules: {
    register,
    login,
    getUser,
    search,
    getUs,
    Contact,
    Message,
    sendMessage
  }
})

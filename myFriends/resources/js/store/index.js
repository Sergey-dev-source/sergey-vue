import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import login from './modules/login'
import user from './modules/user'
import message from './modules/message'
import search from './modules/search'
export default new Vuex.Store({
    modules: {
        login,
        user,
        message,
        search
    }
})
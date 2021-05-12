import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import login from './modules/login'
import user from './modules/user'
import contact from './modules/contact'
import message from './modules/message'
export default new Vuex.Store({
    modules: {
        login,
        user,
        contact,
        message
    }
})
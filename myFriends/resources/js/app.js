require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './route/routes'
import store from './store'

Vue.use(VueRouter)
const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    store
});

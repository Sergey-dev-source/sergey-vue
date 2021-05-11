
import Home from './page/Home'
import Login from './page/Login'

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/login',
            component: Login,
        }
    ]
}
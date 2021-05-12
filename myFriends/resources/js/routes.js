
import Home from './page/Home'
import Login from './page/Login'
import User from './page/User'
import Chat from './page/Chat'

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
        },
        {
            path: '/user',
            component: User,
        },
        {
            path: '/chat',
            component: Chat,
        }
    ]
}
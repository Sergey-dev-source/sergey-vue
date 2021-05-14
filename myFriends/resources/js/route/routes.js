
import Home from '../page/Home'
import Login from '../page/Login'
import User from '../page/User'
import Chat from '../page/Chat'
import SearchUser from '../page/SearchUser'
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
            props: (route) => ({keyword: route.query.keyword})
        },
        {
            path: '/users/:id',
            name: 'Users',
            component: SearchUser
        }
    ]
}

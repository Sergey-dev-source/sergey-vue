import axios from 'axios'
export default {
    actions: {
        async getUs(ctx){
            let user = '';
            let us = localStorage.getItem('token');
            
            if (us != undefined){ 
                user = us;
            }else{
               user = sessionStorage.getItem('token'); 
            }

            axios.get('http://127.0.0.1:8000/api/user?token='+ user)
                .then((response)=>{
                    ctx.commit('users',response.data)
                })
        }
    },
    mutations: {
        users(state,user){
            state.user_info = user;
        }
    },
    state: {
        user_info: []
    },
    getters: {
        getUsers(state){
            return state.user_info
        }
    }
}
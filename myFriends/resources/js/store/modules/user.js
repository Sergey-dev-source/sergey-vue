import axios from "axios";

export default {
    actions: {
        async getActionUser(ctx){
            let token = localStorage.getItem('token');
            axios.get('api/user?token='+token)
                .then( ( response ) =>{
                    ctx.commit('editUser',response.data)
                } )
        }
    },
    mutations: {
        editUser(state,data){
            let id = data.user.id;
            localStorage.setItem('ui',id);
            state.user = data.user;
        }
    },
    state: {
        user: []
    },
    getters: {
        getUsers(state){
            return state.user;
        }
    }
}
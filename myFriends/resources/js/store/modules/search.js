import axios from "axios"

export default {
    actions: {
        async searchAction(ctx,formData){
            axios.post('/api/search',formData)
            .then((response) =>{
                ctx.commit('editSearch',response.data);
            })
        },
        async searchUserAction(ctx,id){
            axios.get('/api/us/'+id)
            .then((response) =>{
                ctx.commit('editus',response.data);
            })
        },
    },
    mutations: {
        editSearch(state,data){
            state.searchUsers = data
        },
        editus(state,data){
            state.user = data
        }
    },
    state: {
        searchUsers: [],
        user: []
    },
    getters: {
        getSearchUsers(state){
            return state.searchUsers
        },
        getSearchUser(state){
            return state.user
        }
    }
}
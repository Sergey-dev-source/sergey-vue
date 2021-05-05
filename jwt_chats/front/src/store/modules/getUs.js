import axios from "axios"

export default {
    actions: {
        async getUsers(ctx,id){
            axios.get('http://127.0.0.1:8000/api/us/'+id)
            .then(( response )=>{
                ctx.commit('get',response.data)
            })
        }
    },
    mutations: {
        get(state,data){
            state.us = data
        }
    },
    state: {
        us: []
    },
    getters: {
        getus(state){
            return state.us
        }
    }
}
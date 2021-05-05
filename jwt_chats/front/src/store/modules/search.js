import axios from "axios"

// import axios from 'axios'
export default {
    actions: {
        async search(ctx,sear){
            axios.post('http://127.0.0.1:8000/api/search',
            sear)
            .then((response)=>{
                ctx.commit('updute',response.data)
            })
        }
    },
    mutations: {
        updute(state,data){
            state.user = data;
        }
    },
    state: {
        user: []
    },
    getters: {
        getSearch(state){
            return state.user;
        }
    }
}
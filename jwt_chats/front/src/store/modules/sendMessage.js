import axios from "axios"

export default {
    actions: {
        async sendActionMessage(ctx,formData){
            axios.post('http://127.0.0.1:8000/api/send',formData)
            .then( (response) => {
                ctx.commit('edit',response.data)
            })
        }
    },
    mutations: {
        edit(state,data){
            state.message = data
        }
    },
    state: {
        message: []
    },
    getters: {
        getsMess(state){
            return state.message;
        }
    },    
}
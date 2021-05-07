import axios from "axios"

export default {
    actions: {
        async getActionCont(ctx,id){
            axios.get('http://127.0.0.1:8000/api/contact/'+id)
                .then(( response ) => {
                    ctx.commit('uduteContact',response.data)
                })
        }
    },
    mutations: {
        uduteContact(state,data){
            state.contact = data
        }
    },
    state: {
        contact: []
    },
    getters: {
        getContact(state){
            return state.contact
        }
    }
}
import axios from "axios"

export default {
    actions: {
        async getActContact(ctx){
            let id = localStorage.getItem('ui');
            axios.get('api/contact/'+id)
            .then( (response) =>{
                ctx.commit('editAcount',response.data);
            })
        }
    },
    mutations: {
        editAcount(state,data){
            state.cont = data
        }
    },
    state: {
        cont: []
    },
    getters: {
        getContact(state){
            return state.cont
        }
    }
}
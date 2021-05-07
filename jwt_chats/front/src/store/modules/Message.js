import axios from "axios"

export default {
    actions: {
        async getActionMessage(ctx,dataForm){
            axios.get('http://127.0.0.1:8000/api/message/'+dataForm.from+'/'+dataForm.to)
                .then( ( response ) => {
                    ctx.commit('updateMessage',response.data)
                })
        }
    },
    mutations: {
        updateMessage(state,data){
            state.message = data
        }
    },
    state: {
        message: []
    },
    getters: {
        getMessage(state){
            return state.message;
        }
    }
}
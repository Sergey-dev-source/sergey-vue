import axios from "axios"

export default {
    actions: {
        async getActionMessage(ctx,formData){
            axios.get('api/message/'+ formData.from+'/'+formData.to)
            .then( (response) => {
                ctx.commit('editMes',response.data) 
            })
        }
    },
    mutations:{
        editMes(state,data){
            state.message = data
        }
    },
    state:{
        message: []
    },
    getters:{
        getMessage(state){
            return state.message
        }
    }
}
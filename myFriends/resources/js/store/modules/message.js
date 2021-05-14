import axios from "axios"

export default {
    actions: {
        async getActionMessage(ctx,formData){
            axios.get('/api/message/'+ formData.from+'/'+formData.to)
            .then( (response) => {
                ctx.commit('editMes',response.data) 
            })
        },
        async sendActionMessage(ctx,formData){
            axios.post('/api/message/save',formData)
            .then( (response) => {
                ctx.commit('editSendMes',response.data) 
            })
        },
        async authActionMessage(ctx){
            let userId = localStorage.getItem('ui');
            Echo.private(`messages.${userId}`)
            .listen(`NewMessage`, (e) => {
                ctx.commit('editSendMes',e.message);
                
            })
        }
    },
    mutations:{
        editMes(state,data){
            state.message = data
        },
        editSendMes(state,data){
            state.message.push(data)
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
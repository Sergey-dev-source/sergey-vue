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
        },
        async countMessage(ctx,id){
            axios.get('/api/counts/'+id)
            .then( (response) =>{
                ctx.commit('editeditCounts',response.data);
            })
        }
    },
    mutations:{
        editMes(state,data){
            state.message = data
        },
        editSendMes(state,data){
            state.message.push(data)
        },
        editeditCounts(state,data){
            state.counts = data;
        }
    },
    state:{
        message: [],
        counts: []
    },
    getters:{
        getMessage(state){
            return state.message
        },
        getCountMessage(state){
            return state.counts
        }
    }
}

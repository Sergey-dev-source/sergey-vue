import axios from "axios"

export default {
    actions: {
        async getActContact(ctx){
            let id = localStorage.getItem('ui');
            axios.get('api/contact/'+id)
            .then( (response) =>{
                ctx.commit('editAcount',response.data);
            })
        },
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
        },
        aaa(ctx, a,b){
            let c = {
                cont: a,
                bool: b
            }
            ctx.commit('editcount',c)
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
        },
        editAcount(state,data){
            state.cont = data
        },
        editcount(store,s ){
            
            store.cont = store.cont.map((a)=>{
                
                if (a.id = s.cont.id){
                    return a
                }

                if (reset){
                    a.unread = 0;
                }else{
                    a.unread+= 1;
                }
            })
        }
    },
    state:{
        message: [],
        counts: [],
        cont: []
    },
    getters:{
        getMessage(state){
            return state.message
        },
        getCountMessage(state){
            return state.counts
        },
        getContact(state){
            return state.cont
        }
    }
}

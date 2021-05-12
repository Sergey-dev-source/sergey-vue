import axios from "axios"

export default {
    actions: {
        async log(ctx,data){
            axios.post('api/login',data)
                .then( (response) =>{
                    ctx.commit('editToken',response.data)
                } )
        }
    },
    mutations: {
        editToken(state,data){
            if(data.err){
                state.err = data
            }else{
                localStorage.setItem('token',data.token);
                window.location = '/user';
            }
        }
    },
    state: {
        err: ''
    },
    getters: {
        getErr(state){
            return state.err
        }
    }
}
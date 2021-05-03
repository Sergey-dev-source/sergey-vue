import axios from 'axios'
export default {
    actions: {
        async login(ctx,formData){

            let r = formData.remember;
            axios.post('http://127.0.0.1:8000/api/login',
            {
              email: formData.email,
              password: formData.password
            }
            )
            .then((response) => {
              if(response.data.err){
                ctx.commit('errorlog',response.data)
              }else if(r){
                ctx.commit('storagelog',response.data)
              }else{
                ctx.commit('sessionlog',response.data)
              }
              
            })
            
          }
    },
    mutations: {
        errorlog(state,message){
            state.errorLogin =  message;
          
        },
    
        storagelog(state,locale){
          localStorage.setItem('token',locale.token)
            window.location = '#/user'
        },
        sessionlog(state,locale){
          sessionStorage.setItem('token',locale.token)
            window.location = '#/user'
        }
    },
    state: {
        errorLogin: []
    },
    getters: {
        getErorLogin(state){
            return state.errorLogin;
          }
    }
}
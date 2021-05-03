import axios from 'axios'
export default {
    actions: {
        async register(ctx,formData){
            axios.post('http://127.0.0.1:8000/api/register',
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
            )
            .then((response) => {
              ctx.commit('errorregister',response.data)
            })
            
          }
    },
    mutations: {
        errorregister(state,message){
            if (message.message_errors){
              state.errorregister =  message.message_errors;
            }else {
              localStorage.setItem('token',message.token)
              window.location = '#/user'
            }
          }
    },
    state: {
        errorregister: [],
    },
    getters: {
        getEroorRegister(state){
            return state.errorregister;
          }
    }
}
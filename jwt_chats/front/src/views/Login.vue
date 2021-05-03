<template>
   <div>
    <Menu />
     <div class="container">
        <div class="register">
            <h1>login</h1>
            <div class="form">
                <form @submit.prevent="logi">
                   
                    <div class="form-group">
                        <input type="text" name="email" placeholder="Email" v-model="email" >
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password" v-model="password">
                    </div>
                    <div class="form-remember">
                        <input type="checkbox" v-model="remember" id="remembe" >
                        <label for="remembe">Remember my</label>
                    </div>

                    <ul class="errors" v-if="getErorLogin != '' ">
                        <li v-for="(error,index) in getErorLogin" :key="index">
                            <div>
                                {{ error }}
                            </div>
                        </li>
                    </ul>

                    <div class="form-group">
                        <button> Login </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import { mapActions} from 'vuex'
import { mapGetters } from 'vuex'
import Menu from '../components/Menu.vue'
export default {
  components: { Menu },
    data(){
        return {
            email: '',
            password: '',
            remember: false
        }
        
    },
    computed: mapGetters(['getErorLogin']),
    methods: {
        ...mapActions(['login']),
        
        logi(){
            this.login({
                'email':this.email,
                'password':this.password,
                'remember': this.remember
            });
        }
    }
}
</script>

<style>
    .container{
        width: 70%;
        padding: 20px;
        margin: 70px auto;
    }

    .register {
        width: 50%;
        margin: auto;
        padding: 25px;
        background-color: beige;    
        box-shadow: 16px 10px 17px #887b3b75;
    }

    .register h1{
        text-transform: capitalize;
        font-size: 33px;
        font-weight: bold;
        color: burlywood;
        
    }


    .form{
        width: 80%;
        margin: 20px auto;
        border: 1px solid;
        padding: 10px 0;
        box-shadow: 1px 1px 5px red;
    }

    .form-group{
        width: 100%;
        margin: 20px 0;
    }

    .form-group input{
        width: 85%;
        padding: 10px 20px;
        border: none;
        outline: none;
        border-radius: 70px;
    }
    .form-group button{
        border: none;
        padding: 10px 35px;
        background-color: bisque;
        font-size: 33px;
        outline: none;
        cursor: pointer;
        border-radius: 70px;    
    }

    .errors{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .errors li{
        margin: 10px 0;
        padding: 10px;
        background-color: brown;
        color: white;
    }
    .form-remember{
        text-align: left;
        padding: 20px 30px;
    }

    .form-remember input, .form-remember label {
        cursor: pointer;
    }
</style>
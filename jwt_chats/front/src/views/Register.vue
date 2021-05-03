<template>
    <div>
        <Menu />
        <div class="container">
        <div class="register">
            <h1>register</h1>
            <div class="form">
                <form @submit.prevent="regist">
                    <div class="form-group">
                        <input type="text"  name="name" placeholder="Name" v-model="name">
                    </div>
                    <div class="form-group">
                        <input type="text" name="phone" placeholder="Phone" v-model="phone">
                    </div>
                    <div class="form-group">
                        <input type="file" @change="selectImage" ref="file">
                    </div>
                    <div class="form-group">
                        <input type="text" name="email" placeholder="Email" v-model="email" >
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password" v-model="password">
                    </div>

                    <ul class="errors" v-if="getEroorRegister != '' ">
                        <li v-for="(error,index) in getEroorRegister" :key="index">
                            <div v-for="(erro,index) in error" :key="index">
                                {{ erro }}
                            </div>
                        </li>
                    </ul>

                    <div class="form-group">
                        <button> Register </button>
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
            name: '',
            phone: '',
            avatar: '',
            email: '',
            password: '',
        }
        
    },
    computed: mapGetters(['getEroorRegister']),
    methods: {
        ...mapActions(['register']),
        selectImage(){
            this.avatar = this.$refs.file.files[0];
        },
        regist(){
            let formData = new FormData();
            formData.append('name',this.name)
            formData.append('phone',this.phone)
            formData.append('avatar',this.avatar)
            formData.append('email',this.email)
            formData.append('password',this.password)

            this.register(formData);
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
</style>
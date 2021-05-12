<template>
    <div class="container bg-dark mb-5">
        <div class="row ">
            <div class="col-sm-6 mt-3">
               <ul class="list-inline">
                     <li class="list-inline-item">
                        <router-link class="social-icon text-white text-xs-center" to="/user">Home</router-link>
                    </li>
                    <li class="list-inline-item">
                        <router-link class="social-icon text-white text-xs-center" to="/chat">Chat</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-sm-4 mt-2">
                <input type="text" class="form-control">
            </div>
            <div class="col-sm-2 mt-2"> 
                <button class="btn btn-secondary" type="button" @click="logout">Logout</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout(){
            localStorage.removeItem('token');
            localStorage.removeItem('ui');
            window.location = '/'
        }
    },
    mounted() {
        let us = localStorage.getItem('token');
        if (! us){
            window.location = '/login'
        }
    },
}
</script>
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
                <input type="text" v-model="searchValue" class="form-control" @keyup="search">
            </div>
            <div class="col-sm-2 mt-2">
                <button class="btn btn-secondary" type="button" @click="logout">Logout</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
      return {
          searchValue: ''
      }
    },
    methods: {
        logout(){
            localStorage.removeItem('token');
            localStorage.removeItem('ui');
            window.location = '/'
        },
        search(){
            console.log(this.searchValue)
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

<template>
    <div class="container bg-dark mb-5">
        <div class="row ">
            <div class="col-sm-6 mt-3">
               <ul class="list-inline">
                     <li class="list-inline-item">
                        <router-link class="social-icon text-white text-xs-center" to="/user">  
                            <i class="fas fa-home"></i>
                        </router-link>
                    </li>
                    <li class="list-inline-item">
                        <router-link class="social-icon text-white text-xs-center" to="/chat">
                            <i class="far fa-envelope"></i>
                            <span v-if="getCountMessage > 0">{{ getCountMessage }}</span>
                        </router-link>
                        
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
        <div class="search" v-if="getSearchUsers != '' ">
            <div class="search_block" v-for="user in getSearchUsers" :key="user.id" >
                <div class="img">
                    <img :src="user.avatar" alt="">
                </div>
                <div class="name">
                    {{ user.name }}
                </div>
                <button @click="sel(user.id)" type="button" class="btn btn-success">View</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    data(){
      return {
          usId: localStorage.getItem('ui'),
          searchValue: '',
      }
    },
    computed: mapGetters(['getSearchUsers','getCountMessage']),
    methods: {
        ...mapActions(['searchAction','searchUserAction','countMessage']),
        logout(){
            localStorage.removeItem('token');
            localStorage.removeItem('ui');
            window.location = '/'
        },
        search(){
            let formData = {
                from: this.usId,
                sear: this.searchValue
            }

            this.searchAction(formData);
        },
        sel(id){
            this.searchUserAction(id);
            this.$router.push('/users/'+id)
            let l = this.getSearchUsers.length
            this.getSearchUsers.splice(0,l)
        },
    },
    mounted() {

        let id = localStorage.getItem('ui');
        this.countMessage(id);
        let us = localStorage.getItem('token');
        if (! us){
            window.location = '/login'
        }
    },
    
}
</script>

<style scoped>
    .search{
        position: absolute;
        width: 25%;
        top: 60px;
        left: 39%;
        background-color: rgb(238, 186, 186);
        z-index: 9;
        color: #273327;
    }
    .search_block{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    .img{
        width: 20%;
        height: auto;
    }

    .img img{
        width: 100%;
        height: 100%;
        border-radius: 40px;
    }
    .btn {
            height: 39px;
    }

    .list-inline li a i {
        font-size: 30px;
    }

    .list-inline li a{
        display: flex;

    }
    .list-inline li a span{
        display: block;
        text-decoration: none;
        border: 1px solid;
        padding: 2px;
        width: 23px;
        font-size: 11px;
        border-radius: 50%;
        height: 22px;
        margin: -7px 6px;
    }
</style>

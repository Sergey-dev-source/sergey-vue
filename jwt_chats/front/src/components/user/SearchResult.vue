<template>

    <div v-if="getSearch ">
        <div  v-for="search in getSearch" :key="search.id">
            <router-link class="res" :to="{ name: 'us',params: { id: search.id } }" @click="view(search.id)" >
                <div class="img">
                    <img :src="search.avatar" alt="">
                </div>
                <div class="text">
                    <span>{{ search.name }}</span>
                    <span>{{ search.email }}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
    
    computed:mapGetters(['getSearch']),
    methods: {
        ...mapActions(['getUser']),
   
        view(id){
            this.getUser(id)
            let i =0;
            for (let index = 0; index < this.getSearch.length; index++) {
              i++
                
            } this.getSearch.splice(0, i)

            this.$emit('ok','oks');
        }
    }
}
</script>

<style scoped>
    .res{
        margin-bottom: 20px;
        padding: 10px;
        display: flex;
    }

    .img img{
        width: 85px;
        height: 85px;
        border-radius: 50%;
    }
    .text{
        padding: 5px;
        margin-left: 20px;
        text-align: left;
        line-height: 2;
    }
</style>
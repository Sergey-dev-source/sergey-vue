<template>
    <div v-if="getSearch">
        <div  v-for="search in getSearch" :key="search.id">
            <router-link class="res" :to="'/us/'+search.id ">
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
import {mapGetters} from "vuex"
export default {
    computed:mapGetters(['getSearch']),
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
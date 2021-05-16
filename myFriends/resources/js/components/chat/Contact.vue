<template>
    <div class="contact">
        <div  class="cont_block" v-for="c in cont" :key="c.id" @click="selContact(c.id,c.name)" :class="{'active': c.id == name.toid }">
            <div class="image">
                <img :src="c.avatar" alt="">
            </div>
            <div class="inf">
                <span>{{ c.name }}</span>
                <span>{{ c.email }}</span>
            </div>        
        </div>
    </div>
    
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props: {
        cont: {
            default: ''
        },
        name: {
            default: ''
        },
    },
    methods: {
        ...mapActions(['getActionMessage']),
        selContact(id,name){
            let fromId = localStorage.getItem('ui');
            let formData = {
                from: fromId,
                to: id
            }
            this.getActionMessage(formData);
            let info = {
                toid: id,
                nam: name

            }
            this.$emit('n',info);
        }
    }
}
</script>

<style scoped>
    .contact{
        width: 100%;
        height: 700px;
        overflow: hidden;
        overflow-y: auto;
        cursor: pointer;
    }
    .cont_block{
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        background: cadetblue;
        display: flex;
        align-items: center;
    }
    .image{
        width: 15%;
        border-radius: 50%;
        margin-right: 10px;
    }

    .image img{
            width: 100%;
        height: auto;
    border-radius: 50%;
    }
    .inf span {
        display: block;
    }

    .active{
        background-color: green;
    }
</style>
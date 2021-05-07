<template>
    <div class="cont">
        <ul>
            <li style="cursor:pointer" v-for="cont in contact" :key="cont.id" :class="{'selected': cont.id == usId}">
                <div class="block" @click="selId(cont.id,cont.name)">
                    <div class="img">
                        <img :src="cont.avatar" alt="">
                    </div>
                    <div class="inf">
                        <span>
                            {{ cont.name }}
                        </span>
                        <span>
                            {{ cont.email }}
                        </span>
                    </div>
                </div>
            </li>        
        </ul>
    </div>    
</template>

<script>
export default {
    props: {
        contact: {
            type: Object
        },
        usId: {
            default: ''
        }
    },
    methods: {
        selId(id,name){
            let data = {
                id: id,
                nam: name
            }
            this.$emit('i',data)
        }
    }
}
</script>

<style>
    .block{
        padding: 10px;
        display: flex;
    }
    .img{
        width: 20%;
        height: 60px;   
        margin-right: 15px;
    }
    .img img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .inf{
        padding: 10px;
    }

    .inf span {
        display: block;
    }

    .selected{
        background-color: grey;
        color: honeydew;
    }
</style>
<template>
    <div class="mes">
        <div v-if="name" class="nam">
            <h1>{{ name }}</h1>
        </div>
        <div v-else class="nam">
            <h1>Please enter contact </h1>
        </div>
        <ul ref="feed">

            <li  v-for="messag in messages" :key="messag.id" :class="{ 'from': messag.from == id } " class="m">
                <div >
                    {{ messag.message }}
                </div> 
            </li>
        </ul>
        <div class="send" v-if="usId">
            <input type="text" v-model="mes" >
            <button type="button" @click="send">Send</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            id:localStorage.getItem('i'),
            mes: '',
            messages: []
        }
    },
    props: {
        message: {
            type: Object
        },
        name:{
            default: ''
        },
        usId: {
            default: ''
        }
    },
    computed: mapGetters(['getsMess']),
    methods: {
        ...mapActions(['sendActionMessage']),
        scrollToBottom() {
            setTimeout(() => {
                this.$refs.feed.scrollTop = this.$refs.feed.scrollHeight - this.$refs.feed.clientHeight;
            }, 50)
        },
        send(){
            let dataform = {
                from: Number(this.id),
                to: this.usId,
                messa: this.mes
            }
            this.sendActionMessage(dataform)
            
            console.log(this.getsMess)
        }
    },
    watch: {
        message(){
            this.scrollToBottom();    this.messages = this.message;
        }
        
    },
    // mounted(){
    //     this.messages.push(this.getsMess);
    // }
}
</script>

<style>
    .m{
        max-width: 45%;
        padding: 15px;
        background-color: darkgray;
        color: white;
        border-radius: 22px;
        margin: 40px 7px;
    }
    .from{
        margin-left: 50%;
        background: blueviolet; 
    }
    .name{
        padding: 2px;
        background-color: darkcyan;
        color: aliceblue;
        text-align: center;
    }
    .mes ul{
        height: 490px;
        overflow: auto;
    }
    .nam{
        background-color: brown;
        color: antiquewhite;
        text-align: center;
        padding: 13px;
        font-size: 12px;
        text-transform: capitalize;
    }
    .send{
        width: 100%;
        position: absolute;
        left: 10px;
        bottom: 25px;
    }
    .send input{
        padding-left: 20px;
        width: 85%;
        height: 40px;
        border: none;
        outline: none;
        border-radius: 25px 0 0 25px;
    }
    .send button{
        padding: 10px 0;
        width: 11%;
        border: none;
        background: black;
        color: aliceblue;
        font-size: medium;
        cursor: pointer;
        border-radius: 0 25px 25px 0;
    }
</style>
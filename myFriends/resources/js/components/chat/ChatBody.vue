<template>
    <div class="chat">
        <div class="chat_name">
        
            <h1 v-if="name != '' ">{{ name.nam }}</h1>
            <h1 v-else>please enter contact</h1>
        </div>
        <div class="chat_body" ref="feed">
            <div v-if="message != '' ">
                <div class="chat_block"  v-for="messag in message" :key="messag.id" :class="{'from': messag.to == name.toid}">
                    <span>{{ messag.message }}</span>           
                </div>
            </div>
            <div class="err" v-else>
                <span v-if=" name != '' "> not message</span>
                
            </div>
          
        </div>
        <div class="chat_form d-flex"  v-if=" name != '' ">
            <input type="text" v-model="messageText" class="form-control" placeholder="messages..">
            <button class="btn btn-success" @click="send">Send</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props:{
        name: {
            default: ''
        },
        message: {
            default: []
        }
    },
    data() {
        return {
            messageText: '',
            id: localStorage.getItem('ui')
        }
    },
    methods: {
        ...mapActions(['sendActionMessage']),
        send(){
            let formData = {
                from: Number(this.id),
                to: this.name.toid,
                message: this.messageText
            }
            this.sendActionMessage(formData);
            this.messageText = '';
        },
        scrollToBottom() {
            setTimeout(() => {
                this.$refs.feed.scrollTop = this.$refs.feed.scrollHeight - this.$refs.feed.clientHeight;
            }, 50)
        },
    },
    watch: {
        message(){
            this.scrollToBottom();
        }
        
    },
}
</script>

<style scoped>
    .chat{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        height: 100%;
    }

    .chat_name{
        width: 100%;
        margin: 0;
        background-color: black;
        color: aliceblue;
        text-align: center;
        padding: 10px;
    }
    .chat_name h1{
        font-size: 17px;
        padding: 10px 0 0px;
    }

    .chat_body{
        width: 100%;
        height: 580px;
        overflow: hidden;
        overflow-y: auto;
    }
    .chat_block{
        width: 50%;
        border-radius: 15px;
        background-color: aquamarine;
        padding: 10px;
        color: brown;
        font-size: 18px;
        margin: 40px 0;
    }
    .from{
        margin-left: 50%;
        background-color: aqua;
        color: slategray;
    }

    .err{
        margin-top: 45px;
        text-align: center;
        font-size: 25px;
        text-transform: capitalize;
    }
</style>
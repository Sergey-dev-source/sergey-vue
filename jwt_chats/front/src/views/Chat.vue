<template>
    <div>
        <Head />
        <div class="chat">
            <div class="contact">
                <Contact :usId="usId" :contact="getContact" @i="sel" />
            </div>
            <div class="message">
            <Message :name="usName" :usId="usId" :message="getMessage"  />
                
            </div>
        </div>
    </div>    
</template>

<script>
import Head from '../components/Head'
import Contact from '../components/chat/Contact'
import { mapGetters,mapActions } from 'vuex'
import Message from '../components/chat/Message'
export default {
    data() {
        return {
            usId: '',
            usName: ''
        }
    },
    components: {
        Head,
        Contact,
        Message
    },
    methods: {
        ...mapActions(['getActionCont','getUs','getActionMessage']),
        sel(name){
            this.usId = name.id;
            this.usName = name.nam
             let datafrom = {
                 from: Number(localStorage.getItem('i')),
                 to: name.id
             }
             this.getActionMessage(datafrom);
        }
    },
    computed: mapGetters(['getContact','getUsers','getMessage']),
    created(){
        
        let id = localStorage.getItem('i');
        
        this.getActionCont(id);
       
    }
}
</script>

<style scoped>
    .chat{
        width: 70%;
        margin: 20px auto;
        background: #f1f1f1;
        display: flex;
        height: 600px;
        overflow: hidden;
    }
    .contact{
        padding: 10px;
        width: 30%;
        height: 100%;
        overflow: auto;
    }
    .message{
        width: 70%;
        padding: 10px;
        border-left: 2px solid #030694;
        height: 100%;
        position: relative;
    }
</style>
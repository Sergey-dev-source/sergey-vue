<template>
    <div class="contact">
    <pre>
        
    </pre>
        <div  class="cont_block" v-for="c in sortedContacts" :key="c.id" @click="selContact(c.id,c.name,c)" :class="{'active': c.id == name.toid }">
            <div class="image">
                <img :src="c.avatar" alt="">
            </div>
            <div class="inf">
                <span>{{ c.name }}</span>
                <span>{{ c.email }}</span>
                <span class="read" v-if="c.unread">{{ c.unread }}</span>
            </div>        
        </div>
    </div>
    
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props: {
        cont: {
            type:Array,
            default: ''
        },
        name: {
            default: ''
        },
    },
    data() {
        return {
            selected: this.cont.length ? this.cont[0] : null
        }
    },
    methods: {
        ...mapActions(['getActionMessage']),
        selContact(id,name,contactt){
            
            this.selected  = id;
            let fromId = localStorage.getItem('ui');
            let formData = {
                from: fromId,
                to: id
            }
            this.getActionMessage(formData);
            let info = {
                toid: id,
                nam: name,
                cont: contactt
            }
            this.$emit('n',info);
        },
        
    },
    computed: {
    sortedContacts() {
      return _.sortBy(this.cont,[(contact)=>{

        if (contact.id == this.selected){
            
          return Infinity;
        }
        return contact.unread;
      }]).reverse();
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
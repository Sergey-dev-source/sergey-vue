<template>
    <div>
        <leyaut />
        <div class="container mt-5 p-4" style="background: #f2f3f2;">
            <div class="row">
                <div class="col-sm-4">
                    <Contact @n="selName" :name='usName' :cont="getContact" />
                </div>
                <div class="col-sm-8">
                    <ChatBody :name='usName' :message="getMessage" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Contact from '../components/chat/Contact'
import Leyaut from '../components/user/Leyaut.vue'
import ChatBody from '../components/chat/ChatBody'
import { mapGetters,mapActions } from 'vuex'

export default {
    data() {
        return {
            usName: ''        
        }
    },
    components: { 
        Leyaut,
        Contact,
        ChatBody
    },
    computed: mapGetters(['getContact','getMessage']),
    methods: {
        ...mapActions(['getActContact','authActionMessage']),
        selName(nam){
            this.usName = nam
        }
    },
  mounted() {
      this.getActContact();
      this.authActionMessage();
      if( this.$root.m ){
          this.usName = this.$root.m
      }
  },
    
}
</script>
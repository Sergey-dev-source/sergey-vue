<template>
    <div class="us">
        <Head />
        <div class="content">
          <div class="row">
           <div class="image">
              <AvatarFriend :getUsers="getus" />
           </div>
           <div class="info">
              <infoFriend :userinfo="getus" />
           </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import Head from '../components/Head.vue'
import infoFriend from '../components/user/infoFriend.vue'
import AvatarFriend from "../components/user/AvatarFriend.vue"
export default {
    data(){
       
         return {
            id: this.$route.params.id
        }
    },
    components:{Head,infoFriend,AvatarFriend},
    computed: mapGetters(['getus']),
    
    methods: mapActions(['getUser']),
    mounted(){
        this.getUser(this.$route.params.id)
         console.log(this.getus)
    }
}
</script>

<style scoped>
    .content{
    margin-top: 50px;
  }
  .row{
    width: 100%;
    max-width: 1170px;
    margin: auto;
    display: flex;
  }

  .image{
        width: 25%;
    margin-right: 15px;
  }
  .info{
    width: 70%;
    padding: 4px;
  }
</style>
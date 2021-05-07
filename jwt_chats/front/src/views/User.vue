<template>
    <div class="user">
        <Head />
        <div class="content">
          <div class="row">
           <div class="image">
              <Avataruser :getUsers="getUsers" />
           </div>
           <div class="info">
              <Infouser :userinfo="getUsers" />
           </div>
          </div>
        </div>
    </div>
</template>

<script>
import Head from "../components/Head"
import Avataruser from "../components/user/Avataruser.vue"
import { mapActions,mapGetters } from 'vuex'
import Infouser from '../components/user/Infouser.vue'

export default {
  components: { Head,Avataruser, Infouser },
  computed: mapGetters(['getUsers']),
  methods: {
    ...mapActions(['getUs'])
  },
  created() {
    this.getUs();
  },
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
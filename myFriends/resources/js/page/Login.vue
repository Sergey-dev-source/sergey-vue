<template>
    <div class="container">
       <Heade />
       <div class="row" >
            <div class="mt-4 p-5 ml-auto mr-auto w-50 bg-secondary">
                <div class="form-group">
                    <input type="text" v-model="email" name="email" class="form-control" >
                </div>
                <div class="form-group">
                    <input type="text" v-model="password" class="form-control" >
                </div>

                    <div v-if="getErr.err != null " class="alert alert-warning" role="alert">
                        {{ getErr.err }}
                    </div>
                <button type="button" @click="logged" class="btn btn-primary">Login</button>
            </div>
       </div>
    </div>
</template>

<script>
import Heade from '../components/Heade.vue'
import { mapActions,mapGetters } from 'vuex'
export default {
  components: { Heade },
  data(){
      return {
          email: '',
          password: ''
      }
  },
  computed: mapGetters(['getErr']),
    methods: {
        ...mapActions(['log','countMessage']),
        logged(){
           let data = {
               email:this.email,
               password: this.password
           }
           this.log(data);
           
        }
    }
}
</script>
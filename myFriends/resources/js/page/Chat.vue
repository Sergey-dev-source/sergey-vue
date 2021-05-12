<template>
    <div>
        <leyaut />
        <div class="container mt-5 p-4" style="background: #f2f3f2;">
            <div class="row">
                <div class="col-sm-4">
                    <Contact :cont="getContact" />
                </div>
                <div class="col-sm-8">
                    {{ getMessage }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Contact from '../components/chat/Contact'
import Leyaut from '../components/user/Leyaut.vue'
import { mapGetters,mapActions } from 'vuex'

export default {
  components: { 
      Leyaut,
      Contact
    },
  computed: mapGetters(['getContact','getMessage']),
  methods: mapActions(['getActContact']),
  mounted() {
      this.getActContact();
  },
    
}
</script>
<template>
    <div class="us">
        <Head />
        <div>
            {{ getus}}
        </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import Head from '../components/Head.vue'
export default {
    data(){
       
         return {
            id: this.$route.params.id
        }
    },
    components:{Head},
    computed: mapGetters(['getus']),
    methods: mapActions(['getUsers']),
    created(){
        this.getUsers(this.id)

    }
}
</script>
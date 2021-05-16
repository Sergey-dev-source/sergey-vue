<template>
    <div>
        <leyaut />
       <div class="container mt-5 p-4" style="background: #f2f3f2;">
            <div class="row">
                <div class="col-sm-3">
                    <div class="text-center">
                        <img :src="getSearchUser.avatar" class="img-thumbnail" alt="Cinque Terre" width="200" height="180">
                    </div>
                </div>
                <div class="col-sm-9">
                    <div>
                        <div>
                            {{ getSearchUser.name }}
                        </div>
                        <div class="mb-5">
                            {{ getSearchUser.email }}
                        </div>
                        <button @click="write(getSearchUser.id,getSearchUser.name)" class="btn btn-success mt-g"> write message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import Leyaut from '../components/user/Leyaut'
export default {
    components: { Leyaut },
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods:{
        ...mapActions(['searchUserAction','getActionMessage']),
        write(id,name){
            let fromId = localStorage.getItem('ui');
            let formData = {
                from: fromId,
                to: id
            }
            this.getActionMessage(formData);
            let info = {
                toid: id,
                nam: name
            }

            this.$root.m = info 
            // this.$root.$emit
            this.$router.push('/chat')
        }
         
    },
    mounted() {
        this.searchUserAction(this.id);
    },
    computed: mapGetters(['getSearchUser']),
    
}
</script>


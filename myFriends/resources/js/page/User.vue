<template>
    <div>
        <leyaut />
        <div class="container mt-5 p-4" style="background: #f2f3f2;">
            <div class="row">
                <div class="col-sm-3">
                   <avatar-user :avata="getUsers.avatar" />
                </div>
                <div class="col-sm-9">
                    <info-user :info="getUsers" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import Leyaut from '../components/user/Leyaut'
import AvatarUser from '../components/user/AvatarUser.vue'
import InfoUser from '../components/user/InfoUser.vue'
export default {
  components: { Leyaut },
    methods: {
        ...mapActions(['getActionUser'])
    },
    mounted() {
        this.getActionUser();
    },
    computed: mapGetters(['getUsers']),
    components: {
        Leyaut,
        AvatarUser, InfoUser,
    }
}
</script>
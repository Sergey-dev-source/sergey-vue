<template>
    <div class="info">
            <user-menu />
        
        <div class="info_block" v-for="users in userinfo" :key="users.id">
            <span>
                {{ users.name }}
            </span>
            <span>
                {{ users.email }}
            </span>
            <div>
                write message
            </div>
        </div>
    </div>
</template>

<script>
import UserMenu from "./UserMenu.vue"
export default {
    props: {
        userinfo: {
            default: Object
        }
    },
    components: {UserMenu}
}
</script>
<style scoped>
    .info_block{
        margin-top: 15px;
        padding: 20px;
    }

    .info_block span{
        margin-right: 23px;
        color: brown;
        font-size: 14px;
    }
    .info_block div{
        margin: 30px 0;
        text-transform: capitalize;
        color: #098765;
    }
</style>
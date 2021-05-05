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
</style>
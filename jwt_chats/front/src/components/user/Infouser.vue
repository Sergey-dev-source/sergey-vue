<template>
    <div class="info">
        <div>
            <user-menu />
        </div>
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
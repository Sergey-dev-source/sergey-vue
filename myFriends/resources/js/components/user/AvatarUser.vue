<template>
    <div class="text-center">
        <img :src="avata" class="img-thumbnail" alt="Cinque Terre" width="200" height="180">
    </div>
</template>

<script>
export default {
    props: { 
        avata: {
            default: ''
        }
    }
}
</script>
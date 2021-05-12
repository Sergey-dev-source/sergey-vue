<template>
    <div>
        <div>
            {{ info.name }}
        </div>
        <div>
            {{ info.email }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: {
            default: ''
        }
    }
}
</script>
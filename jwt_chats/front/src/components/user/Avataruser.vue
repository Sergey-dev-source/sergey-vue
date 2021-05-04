<template>
    <div class="img">
       <img v-for="(a,index)  in getUsers" :key="index" :src="a.avatar" alt="ok">
    </div>
</template>

<script>
export default {
  props: {
      getUsers: {
          default: Object
      }
  }
}
</script>

<style scoped>
    .img{
        width: 80%;
        height: 250px;
        padding: 10px;
        margin: 0 auto;
    }

    .img img{
        width: 100%;
        height: 100%;   
    }
</style>
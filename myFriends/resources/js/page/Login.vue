<template>
    <div class="container">
       <Heade />
       <div class="row" >
            <div class="mt-4 p-5 ml-auto mr-auto w-50 bg-secondary">
                <div class="form-group">
                    <input type="text" name="email" class="form-control" >
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" >
                </div>
                <button type="button" class="btn btn-primary">Login</button>
            </div>
       </div>
    </div>
</template>

<script>
import Heade from '../components/Heade.vue'
export default {
  components: { Heade },
    
}
</script>
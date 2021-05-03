<template>
    <div class="user">
        <Head />
        <div class="content">
          <div class="row">
            {{ getUsers }}
          </div>
        </div>
    </div>
</template>

<script>
import Head from "../components/Head"
import { mapActions,mapGetters } from 'vuex'
export default {
  components: { Head },
  computed: mapGetters(['getUsers']),
  methods: {
    ...mapActions(['getUs'])
  },
  mounted() {
    this.getUs();
  },
}
</script>
<style scoped>

</style>
<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <img alt="User logo" src="../assets/user.png" class="img-fluid" width="200">
      </div>
      <div class="col-12" v-if="currentUser">
        <h2>This is a page of {{currentUser.first_name}} {{currentUser.last_name}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'UserDetails',
    computed: {
      ...mapGetters({
        currentUser: 'currentUser'
      })
    },
    mounted() {
      this.$store.dispatch('loadUser', this.$route.params.user_id)
    }
  }
</script>

<style scoped>

</style>

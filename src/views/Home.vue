<template>
  <div class="container mt-4">
    <div class="row mt-4">
      <div class="col-12 text-center mt-4">
        <img alt="Vue logo" src="../assets/logo.png" height="100">
      </div>
      <div class="col-12 text-center">
        <h1>Full-Stack Challenge</h1>
      </div>
      <div class="col-12 mt-4">
        <PageList :pages="pages"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import PageList from '@/components/PageList'

export default {
  name: 'Home',
  components: {
    PageList
  },
  computed: {
    ...mapGetters({
      pages: 'pages'
    })
  },
  mounted() {
    this.$store.dispatch('loadPages')
  }
}
</script>

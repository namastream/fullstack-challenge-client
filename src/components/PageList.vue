<template>
  <ul class="list-group">
    <!-- TODO: display the links to pages from the 'pages' array -->
    <li class="list-group-item"><router-link :to="{name: 'page-details', params: {page_id: 1}}">Page 1</router-link></li>
    <li class="list-group-item"><router-link :to="{name: 'page-details', params: {page_id: 10}}">Page 2</router-link></li>
    <li class="list-group-item"><router-link :to="{name: 'page-details', params: {page_id: 100}}">Page 3</router-link></li>
    <li class="list-group-item"><router-link :to="{name: 'page-details', params: {page_id: 1000}}">Page 4</router-link></li>
  </ul>
</template>

<script>
  export default {
    name: 'PageList',
    props: {
      pages: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

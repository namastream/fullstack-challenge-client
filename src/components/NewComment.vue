<template>
  <div class="new-comment text-left">
    <div class="form-group mt-2 comment rounded p-2">
      <label for="comment">Add comment</label>
      <input type="text" class="form-control" id="comment" placeholder="Your component with mentions support comes here...">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewComment',
  }
</script>

<style lang="scss" scoped>

  .comment {
    background-color: azure;
  }

</style>

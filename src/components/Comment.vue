<template>
  <div class="comment text-left">
    <div class="border rounded overflow-hidden">
      <div class="comment-header d-flex flex-row justify-content-between align-items-center p-2">
      <span class="small font-weight-bold">
        {{ comment.owner.first_name }} {{ comment.owner.last_name }}
      </span>
      <span class="small">
        {{ comment.posted }}
      </span>
      </div>
      <hr class="m-0"/>
      <div class="comment-body rounded p-2" v-html="comment.content">
      </div>
    </div>
    <div class="small mt-1 ml-1">
      <a href @click.prevent="showReply">Reply</a>
    </div>
    <div class="ml-4" v-if="comment.replies">
      <Comment
        v-for="reply in comment.replies"
        :key="reply.id"
        :comment="reply"
        class="mt-2"
        @showReply="showReply"
      />
      <div class="form-group mt-2 reply rounded p-2" v-show="showReplyInput">
        <label for="reply">Add your reply</label>
        <input type="text" ref="replyInput" class="form-control" id="reply" placeholder="Your component with mentions support comes here...">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Comment',
    props: {
      comment: {
        type: Object
      }
    },
    data() {
      return {
        showReplyInput: false
      }
    },
    methods: {
      showReply() {
        this.$emit('showReply')
        this.showReplyInput = true
        this.$nextTick(() => {
          const el = this.$refs.replyInput
          if (el) {
            el.scrollIntoView({behavior: "smooth", block: "end"})
            el.focus()
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

  .comment-header {
    background-color: #eeeeee;
  }

  .comment-body {
  }

  .reply {
    background-color: azure;
  }

</style>

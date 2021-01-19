<template>
  <div>
    <nuxt-link
      to="/posts"
      class="px-4 py-2 mx-2 text-xl font-medium text-center text-white transition duration-500 ease-in-out bg-gray-900 rounded cursor-pointer hover:text-gray-600"
      >Back</nuxt-link
    >
    <post-detail
      :title="currentPost.title"
      :content="currentPost.content"
      :image="currentPost.image"
      :createdAt="currentPost.createdAt"
      :updatedAt="currentPost.updatedAt"
    />
  </div>
</template>

<script>
import PostDetail from "~/components/PostDetail.vue";
export default {
  components: { PostDetail },
  mounted() {
    this.$store.dispatch("posts/fetchOnePost", this.$route.params.id);
  },
  computed: {
    currentPost() {
      return this.$store.getters["posts/onePost"];
    }
  }
};
</script>

<style></style>
